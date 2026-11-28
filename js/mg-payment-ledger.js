(function (MG, ui) {
'use strict';
const { node, button, state, time, money, day, call, openPanel, errorPanel, message, skeleton, id } = ui;
const statuses = { paid:'Payment verified', verification_pending:'Verification pending', unpaid:'Unpaid', failed:'Payment failed',
  abandoned:'Abandoned', refunded:'Refunded', refund_review:'Refund requires review',
  manual_pending:'Manual claim pending', manual_approved:'Manual claim approved', manual_rejected:'Manual claim rejected' };
const source = { razorpay:'Verified Razorpay', razorpay_attempt:'Razorpay attempt', booking:'Booking', manual:'Historical manual claim', refund:'Refund review' };
const CSV_KEYS = ['source','status','studentName','phone','topic','track','hours','amountPaise','at','bookingCreatedAt',
  'appointmentStart','appointmentEnd','bookingId','paymentId','orderId'];
const csvCell = value => {
  const text = String(value ?? '');
  return '"' + (/^[\s]*[=+\-@\t\r]/.test(text) ? "'" : '') + text.replaceAll('"', '""') + '"';
};
MG.paymentLedgerCsv = rows => [CSV_KEYS.join(','), ...rows.map(row => CSV_KEYS.map(key => csvCell(row[key])).join(','))].join('\r\n');
function download(rows) {
  const url = URL.createObjectURL(new Blob(['\ufeff', MG.paymentLedgerCsv(rows)], { type:'text/csv;charset=utf-8' }));
  const link = node('a');
  link.href = url;
  link.download = 'mentor-payments.csv';
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
const field = (name, control) => {
  const wrapper = node('label', null, 'mw-field');
  wrapper.append(node('span', name), control);
  return wrapper;
};
function input(type, value) {
  const item = node('input');
  item.type = type;
  if (value) item.value = value;
  return item;
}
const refs = row => {
  const details = node('details', null, 'mw-references');
  details.append(node('summary', 'References'));
  for (const [title, key] of [['Booking','bookingId'],['Payment','paymentId'],['Order','orderId']]) {
    if (!row[key]) continue;
    const line = node('div');
    line.append(node('code', title + ' · ' + row[key]), button('Copy', async event => {
      try { await navigator.clipboard.writeText(row[key]); event.currentTarget.textContent = 'Copied'; } catch {}
    }));
    details.append(line);
  }
  return details;
};
MG.renderWorkspaceReferences = refs;
function record(row, refresh, allowActions) {
  const card = node('article', null, 'mw-ledger-row');
  const left = node('div');
  left.append(node('h3', row.topic || (row.source === 'refund' ? 'Refund case' : (row.productType === 'subscription' ? 'Subscription' : 'Payment'))),
    node('p', [row.studentName, row.phone && '+91 ' + row.phone, row.track && (MG.TRACKS?.[row.track]?.name || row.track),
      row.hours && MG.formatBookingDuration(row.hours)].filter(Boolean).join(' · ')),
    node('p', (row.source === 'booking' ? 'Booking created · ' : row.source === 'razorpay' ? 'Captured · ' : 'Recorded · ') + time(row.at)));
  if (row.source !== 'booking' && row.bookingCreatedAt) left.append(node('p', 'Booking created · ' + time(row.bookingCreatedAt)));
  if (row.appointmentStart) left.append(node('p', 'Appointment · ' + MG.formatAppointment(row.appointmentStart, row.appointmentEnd)));
  if (row.refundedAt) left.append(node('p', 'Refund registered · ' + time(row.refundedAt)));
  const amount = node('div', null, 'mw-ledger-amount');
  amount.append(node('strong', money(row.amountPaise)), node('span', statuses[row.status] || row.status, 'mw-status'), node('small', source[row.source]));
  card.append(left, amount);
  if (row.bookingId || row.paymentId || row.orderId) card.append(refs(row));
  const actions = node('div', null, 'mw-actions');
  const status = node('p', '', 'mw-error');
  status.setAttribute('role','status');
  const perform = (title, action) => actions.append(button(title, async event => {
    const control = event.currentTarget;
    control.disabled = true;
    try { await action(); }
    catch (error) { status.textContent = message(error); }
    finally { control.disabled = false; }
  }));
  if (row.source === 'razorpay') perform('View receipt', () => {
    status.className = 'mw-receipt';
    status.textContent = 'Razorpay receipt · ' + money(row.amountPaise) + ' · ' + time(row.at) + ' · ' + row.paymentId;
  });
  if (allowActions && row.bookingId) perform('Open booking', () => MG.openSessionBooking(row.bookingId));
  if (allowActions && state.owner?.admin && row.bookingId && row.uid && row.status === 'verification_pending') {
    perform('Reconcile capture', async () => { if (await MG.reconcileAdminBooking(row.uid, row.bookingId)) await refresh(); });
  }
  if (allowActions && state.owner?.admin && row.status === 'refund_review' && row.id) perform('Resolve review', async () => {
    const choice = window.prompt('Reviewed refund outcome\n1 · No access change\n2 · Entitlement reconciled\n3 · Refund not applicable');
    const resolution = { '1':'no_access_change', '2':'entitlement_reconciled', '3':'refund_not_applicable' }[choice];
    if (!resolution) return;
    await call('resolveRefundReview', { refundId:row.id, resolution, note:'Reviewed in Mentor workspace' });
    await refresh();
  });
  if (allowActions && state.owner?.admin && row.status === 'manual_pending' && row.manualId) {
    perform('Approve manual claim', async () => {
      if (!window.confirm('Approve this historical claim after checking external payment evidence?')) return;
      await call('approveLegacyPayment', { mobile:row.phone, paymentId:row.manualId }); await refresh();
    });
    perform('Reject manual claim', async () => {
      if (!window.confirm('Reject this historical payment claim?')) return;
      await call('rejectLegacyPayment', { mobile:row.phone, paymentId:row.manualId }); await refresh();
    });
  }
  if (actions.children.length) card.append(actions, status);
  return card;
}

async function subscription(host) {
  const area = node('details', null, 'mw-subscriptions');
  area.append(node('summary', 'Subscriptions'));
  const body = node('div');
  area.append(body);
  host.append(area);
  area.addEventListener('toggle', async () => {
    if (!area.open) return;
    body.replaceChildren(skeleton());
    try {
      const [current, plans] = await Promise.all([call('getMySubscription'),call('listAvailableSubscriptionPlans')]);
      const sub = current?.subscription || current;
      body.replaceChildren(node('p', sub?.expiresAt ? 'Current access until ' + time(sub.expiresAt) : 'No active subscription.'));
      if (sub?.expiresAt && !sub.cancelAtPeriodEnd) body.append(button('Cancel renewal', async () => {
        try {
          if (!window.confirm('Cancel future renewal while keeping the current access period?')) return;
          await call('cancelMySubscriptionRenewal'); body.append(node('p', 'Renewal cancelled.'));
        } catch (error) { body.append(node('p', message(error), 'mw-error')); }
      }));
      for (const plan of (Array.isArray(plans) ? plans : Object.values(plans?.plans || plans || {}))) {
        if (!plan?.id) continue;
        body.append(button(plan.name + ' · ' + money(plan.amountPaise), () => {
          MG.closeWorkspacePanel();
          MG.launchSecureSubscriptionCheckout(plan.id, plan.amountPaise / 100);
        }));
      }
    } catch (error) { errorPanel(body, error); }
  });
}

MG.openPaymentLedger = function(options = {}) {
  if (MG.state.viewingAs) {
    return MG.openStudentWorkspacePreview(MG.state.viewingAs);
  }
  const admin = Boolean(state.owner?.admin);
  const panel = openPanel('ledger', 'Payments', admin ? 'Verified transactions, booking attempts and historical claims' : 'Your transactions and receipts');
  if (!panel) return;
  const form = node('form', null, 'mw-filters');
  const search = input('search', options.search);
  search.placeholder = 'Name, mobile or reference';
  const from = input('date', options.from ?? (admin && options.status !== 'refund_review' ? day.format(Date.now() - 29 * 86400000) : ''));
  const to = input('date', options.to ?? (admin && options.status !== 'refund_review' ? day.format(Date.now()) : ''));
  const status = node('select');
  for (const [value, text] of [['','All payment states'],...Object.entries(statuses)]) {
    const item = node('option', text); item.value = value; status.append(item);
  }
  status.value = options.status || '';
  const submit = node('button', 'Apply filters', 'mw-button mw-primary');
  submit.type = 'submit';
  const exportStatus = node('p', '', 'mw-error');
  const exportButton = button('Export filtered CSV', async () => {
    exportButton.disabled = true;
    exportStatus.textContent = '';
    try { download((await call('getPaymentLedger', { ...filter, export:true })).records); }
    catch (error) { exportStatus.textContent = message(error); }
    finally { exportButton.disabled = false; }
  });
  form.append(field('Search',search),field('From (IST)',from),field('Through (IST)',to),field('Status',status),submit,exportButton);
  const host = node('div');
  panel.append(form, exportStatus);
  if (!admin) subscription(panel);
  panel.append(host);
  let page = 0, request = 0, filter = data();
  function data() { return { search:search.value, from:from.value, to:to.value, status:status.value }; }
  async function load() {
    const sequence = ++request;
    host.replaceChildren(skeleton());
    try {
      const result = await call('getPaymentLedger', { ...filter, page });
      if (sequence !== request || !host.isConnected) return;
      host.replaceChildren();
      if (admin) {
        const grid = node('div', null, 'mw-metrics mw-ledger-metrics');
        for (const [label, value] of [['Verified payments',money(result.summary.verifiedPaise)],['Awaiting approval',result.summary.awaitingApproval],
          ['Verification pending',result.summary.verifying],['Failed / unpaid',result.summary.unpaid],
          ['Refund review',result.summary.refundReview],['Refunded',result.summary.refunded]]) {
          const item = node('div', null, 'mw-metric'); item.append(node('span',label),node('strong',value)); grid.append(item);
        }
        host.append(grid);
      }
      if (!result.records.length) host.append(node('p', 'No payments match these filters.', 'mw-empty'));
      else host.append(...result.records.map(row => record(row, load, true)));
      const paging = node('div', null, 'mw-actions mw-paging');
      const back = button('Previous', () => { page--; load(); });
      const next = button('Next', () => { page++; load(); });
      back.disabled = page === 0;
      next.disabled = (page + 1) * result.size >= result.total;
      paging.append(back,node('span', result.total ? 'Page ' + (page + 1) + ' · ' + result.total + (result.total === 1 ? ' record' : ' records') : '0 records'),next);
      host.append(paging);
    } catch (error) { if (sequence === request && host.isConnected) errorPanel(host, error, load); }
  }
  form.addEventListener('submit', event => { event.preventDefault(); page = 0; filter = data(); load(); });
  return load();
};

MG.openStudentWorkspacePreview = function(mobile = '') {
  if (!state.owner?.admin) return;
  const panel = openPanel('preview', 'View as Student', 'Read-only view. You remain signed in as the Mentor.');
  if (!panel) return;
  const form = node('form', null, 'mw-filters');
  const phone = input('tel', mobile);
  phone.required = true;
  phone.autocomplete = 'off';
  phone.setAttribute('list','mwStudentDirectory');
  const suggestions = node('datalist');
  suggestions.id = 'mwStudentDirectory';
  for (const [number,name] of new Map(state.bookings.filter(row => row.mobile).map(row => [row.mobile,row.studentName]))) {
    const entry = node('option');
    entry.value = number;
    entry.label = name || 'Student';
    suggestions.append(entry);
  }
  const submit = node('button','Find student','mw-button mw-primary'); submit.type = 'submit';
  const exit = button('Exit Student View', () => { MG.state.viewingAs = null; MG.closeWorkspacePanel(); });
  form.append(field('Student mobile',phone),suggestions,submit,exit);
  const host = node('div');
  panel.append(form,host);
  ui.onClose(() => {
    MG.state.viewingAs = null;
    if (id('studentSelect')) id('studentSelect').value = '';
  });
  let serial = 0;
  async function load() {
    const sequence = ++serial;
    host.replaceChildren(skeleton());
    try {
      const student = await call('getStudentWorkspacePreview', { mobile:phone.value });
      const ledger = await call('getPaymentLedger', { mobile:student.phone });
      if (!host.isConnected || sequence !== serial) return;
      MG.state.viewingAs = student.phone;
      host.replaceChildren();
      const banner = node('div', null,'mw-preview-banner');
      banner.append(node('strong','View as Student · Read only'),node('p', (student.profile.name || student.profile.fullName || 'Student') + ' · +91 ' + student.phone));
      host.append(banner);
      const profile = node('div',null,'mw-card');
      profile.append(node('h3','Student profile'),node('p',[student.profile.email, student.profile.city, student.profile.company, student.profile.designation].filter(Boolean).join(' · ') || 'No additional profile details.'),
        node('p','Learning access · ' + (Object.keys(student.unlocked).filter(key => student.unlocked[key]).map(key => MG.TOPICS?.find(item => item.id === key)?.title || key).join(', ') || 'No unlocked topics.')),
        node('p','Tracked learning paths · ' + Object.keys(student.progress || {}).length),
        node('p',student.subscription ? 'Subscription · ' + student.subscription.status + ' · ' + time(student.subscription.expiresAt) : 'No subscription history.'));
      host.append(profile, node('h3','Booked sessions'));
      if (!student.bookings.length) host.append(node('p','No secure bookings.','mw-empty'));
      else for (const row of student.bookings) host.append(node('p',[row.topic,ui.interval(row),MG.bookingPaymentLabel(row)].filter(Boolean).join(' · '),'mw-line'));
      host.append(node('h3','Payments'));
      if (!ledger.records.length) host.append(node('p','No payment records.','mw-empty'));
      else host.append(...ledger.records.map(row => record(row, load, false)));
      let page = 0;
      if (ledger.total > ledger.size) {
        const more = button('Load older payments', async () => {
          more.disabled = true;
          try {
            const result = await call('getPaymentLedger', { mobile:student.phone, page:page + 1 });
            for (const row of result.records) more.before(record(row, load, false));
            if ((++page + 1) * result.size >= result.total) more.remove();
          } catch (error) { MG.showToast(message(error)); }
          finally { more.disabled = false; }
        });
        host.append(more);
      }
    } catch (error) { if (host.isConnected && sequence === serial) errorPanel(host,error,load); }
  }
  form.addEventListener('submit', event => { event.preventDefault(); load(); });
  if (mobile) load();
  else host.append(node('p','Enter the student’s registered mobile number.','mw-empty'));
};
const originalHistory = MG.openHistory;
MG.openHistory = () => window.MentorFB?.watchWorkspace ? MG.openPaymentLedger() : originalHistory();
const originalPreview = MG.switchStudent;
MG.switchStudent = mobile => window.MentorFB?.watchWorkspace && state.owner?.admin
  ? (mobile ? MG.openStudentWorkspacePreview(mobile) : MG.closeWorkspacePanel())
  : originalPreview(mobile);
})(window.MG, window.MG.workspaceUi);
