(async function () {
  'use strict';
  const config = window.MENTOR_FIREBASE_CONFIG;
  const sessionStatus = document.getElementById('publicSessionsStatus');
  const plansStatus = document.getElementById('publicPlansStatus');
  const table = document.getElementById('publicSessionPrices');
  const plans = document.getElementById('publicPlans');
  const durations = new Map([[15, '15 min'], [30, '30 min'], [60, '1 hr'], [180, '3 hr'], [300, '5 hr']]);
  const money = new Intl.NumberFormat('en-IN', {
    style: 'currency', currency: 'INR', minimumFractionDigits: 2, maximumFractionDigits: 2
  });

  function validAmount(paise) {
    return Number.isSafeInteger(paise) && paise >= 100;
  }

  function formatPrice(paise) {
    return money.format(paise / 100).replace(/\.00$/, '');
  }

  try {
    if (!window.mentorFirebaseConfigIsSafe?.(config)) throw new Error('Catalogue configuration unavailable');
    const region = 'asia-south1';
    const endpoint = 'https://' + region + '-' + config.projectId.trim().toLowerCase() +
      '.cloudfunctions.net/getPublicLearningCatalog';
    const response = await fetch(endpoint, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: {} }), signal: AbortSignal.timeout(10000)
    });
    if (!response.ok) throw new Error('Catalogue request failed');
    const data = (await response.json()).result;
    if (data?.currency !== 'INR' || !data.tracks || !Array.isArray(data.subscriptions)) {
      throw new Error('Catalogue response is invalid');
    }

    const prices = ['career_ai', 'packaging'].map(track =>
      new Map((data.tracks[track] || []).filter(row => validAmount(row.amountPaise))
        .map(row => [row.minutes, row.amountPaise])));
    let hasPrice = false;
    for (const [minutes, label] of durations) {
      const row = table.tBodies[0].insertRow();
      const heading = document.createElement('th');
      heading.scope = 'row';
      heading.textContent = label;
      row.append(heading);
      for (const price of prices) {
        const amount = price.get(minutes);
        const cell = row.insertCell();
        cell.textContent = amount === undefined ? 'Unavailable' : formatPrice(amount);
        hasPrice ||= amount !== undefined;
      }
    }
    sessionStatus.textContent = hasPrice ? '' : 'Online session prices are not available right now. Contact support for details.';
    table.hidden = !hasPrice;

    for (const plan of data.subscriptions) {
      if (typeof plan?.name !== 'string' || plan.currency !== 'INR' || !validAmount(plan.amountPaise) ||
          !Number.isSafeInteger(plan.durationDays) || plan.durationDays < 1) continue;
      const item = document.createElement('li');
      const name = document.createElement('strong');
      name.textContent = plan.name;
      const price = document.createElement('p');
      price.textContent = formatPrice(plan.amountPaise) + ' for ' + plan.durationDays +
        (plan.durationDays === 1 ? ' day' : ' days');
      item.append(name, price);
      plans.append(item);
    }
    plans.hidden = !plans.childElementCount;
    plansStatus.textContent = plans.hidden ? 'There are currently no learning subscriptions available for purchase.' :
      'These plans are available to purchase after signing in.';
  } catch {
    sessionStatus.textContent = 'Live session prices could not be loaded. Check the price in the booking form or contact support before paying.';
    plansStatus.textContent = 'Live subscription prices could not be loaded. Try reloading this page or contact support.';
  }
}());
