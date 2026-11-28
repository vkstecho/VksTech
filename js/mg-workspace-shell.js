(function (MG) {
'use strict';
const id = name => document.getElementById(name);
const node = (tag, label, css) => {
  const element = document.createElement(tag);
  if (label != null) element.textContent = label;
  if (css) element.className = css;
  return element;
};
const button = (label, onClick, css = 'mw-button') => {
  const element = node('button', label, css);
  element.type = 'button';
  element.addEventListener('click', onClick);
  return element;
};
const clock = new Intl.DateTimeFormat('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' });
const day = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit' });
const money = amount => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 }).format((amount || 0) / 100);
const time = at => at ? clock.format(at) + ' IST' : '—';
const strings = { Home:'होम', Explore:'सीखें', 'My Sessions':'मेरे सत्र', Chats:'चैट', Profile:'प्रोफ़ाइल',
  Dashboard:'डैशबोर्ड', Bookings:'बुकिंग', Payments:'भुगतान', Manage:'प्रबंधन', Notifications:'सूचनाएँ', 'Fast Booking':'त्वरित बुकिंग' };
const label = key => document.documentElement.lang.startsWith('hi') ? strings[key] || key : key;
const state = { owner: null, stops: [], bookings: [], inbox: {}, events: {}, paid: {}, reads: {}, oldReads: {}, payment: null, tab: '' };
let start = 0, reloadTimer, closePanel, previousFocus, noticeLimit = 100;
const bridge = () => window.MentorFB;

function message(error) {
  if (navigator.onLine === false) return 'You’re offline. Reconnect and try again.';
  return ({
    'permission-denied': 'This area requires the booking owner or an authorized Mentor.',
    unauthenticated: 'Your sign-in expired. Verify your phone to continue.',
    unavailable: 'The service is temporarily unavailable. Try again.',
    'deadline-exceeded': 'The request timed out. Try again.',
    'resource-exhausted': error?.message || 'Too many requests. Wait a moment and try again.',
    'invalid-argument': error?.message || 'Check the filters and try again.',
    'failed-precondition': error?.message || 'This action is unavailable for the current booking.'
  })[String(error?.code || '').split('/').pop()] || 'We couldn’t load this data. Try again.';
}
function errorPanel(host, error, retry) {
  const div = node('div', null, 'mw-empty mw-error');
  div.setAttribute('role', 'alert');
  div.append(node('strong', message(error)));
  if (error?.details?.requestId) div.append(node('small', 'Support reference ' + error.details.requestId));
  if (retry) div.append(button('Try again', retry));
  host.replaceChildren(div);
}
const skeleton = () => {
  const element = node('div', 'Loading…', 'mw-loading');
  element.setAttribute('role', 'status');
  return element;
};
function call(name, data = {}) {
  if (!state.owner) throw Object.assign(new Error(), { code: 'unauthenticated' });
  return bridge().callSecure(name, { ...data, asAdmin: state.owner.admin }, state.owner.uid);
}
function watch(path, options, next, onError) { return bridge().watchWorkspace(path, options, next, onError); }
function matches(owner) { return state.owner === owner && bridge()?.auth.currentUser?.uid === owner?.uid; }
function reset() {
  ++start;
  clearTimeout(reloadTimer);
  state.stops.splice(0).forEach(stop => stop());
  MG.closeWorkspacePanel?.();
  Object.assign(state, { owner: null, bookings: [], inbox: {}, events: {}, paid: {}, reads: {}, oldReads: {}, payment: null, failed: null,
    chatError:null, streamError:null, paymentError:null, pendingFromQueue:null, range:null });
}

const currentPanel = () => id('mentorWorkspaceDialog');
function openPanel(kind, title, subtitle = '') {
  const dialog = currentPanel();
  if (!dialog) return null;
  const sessions = id('mentorSessionsDialog');
  if (sessions?.open) sessions.close();
  if (!dialog.open) previousFocus = document.activeElement;
  closePanel?.();
  closePanel = null;
  state.tab = kind;
  id('mentorWorkspaceTitle').textContent = title;
  id('mentorWorkspaceSubtitle').textContent = subtitle;
  const body = id('mentorWorkspaceBody');
  body.className = 'mw-panel-body' + (kind === 'chat' ? ' mw-chat-body' : '');
  body.replaceChildren();
  if (!dialog.open) dialog.showModal();
  document.body.classList.add('mw-modal-open');
  id('mentorWorkspaceClose')?.focus();
  return body;
}
MG.closeWorkspacePanel = () => { if (currentPanel()?.open) currentPanel().close(); };
const onClose = cleanup => { closePanel = cleanup; };

function eventRows() {
  const paid = Object.entries(state.paid).map(([key, item]) => ({ ...item, key, at: item.finalizedAt, type:'paid_booking' }));
  return [...paid, ...Object.entries(state.events).map(([key, item]) => ({ ...item, key }))]
    .sort((a, b) => b.at - a.at);
}
const isUnread = item => !state.reads?.items?.[item.key] && !state.oldReads?.[item.key] && item.at > (state.reads?.through || 0);
const unreadChats = () => Object.values(state.inbox).reduce((total, item) => total + (item.unread || 0), 0);
const pending = () => state.pendingFromQueue ?? state.bookings.filter(row => row.status === 'pending' && row.paymentFinalizedAt && row.paymentStatus === 'paid').length;
const titles = { paid_booking:'New paid booking', payment_verified:'Payment verified', appointment_confirmed:'Appointment confirmed',
  meeting_link_updated:'Meeting link available', rescheduling_requested:'Rescheduling requested', rescheduling_accepted:'Replacement accepted',
  rescheduling_declined:'Replacement declined', booking_cancelled:'Booking cancelled', refunded:'Payment refunded',
  refund_review:'Refund requires review', session_completed:'Session completed' };

function notifications(body = id('mentorWorkspaceBody')) {
  if (state.tab !== 'notifications' || !currentPanel()?.open) return;
  body.replaceChildren();
  const items = eventRows();
  if (state.streamError) {
    errorPanel(body, state.streamError, () => MG.startWorkspace(true));
    return;
  }
  if (!state.eventReady) { body.append(skeleton()); return; }
  const mark = async (payload) => {
    try { await call('markWorkspaceNotifications', payload); }
    catch (error) { body.querySelector('[data-notification-error]').textContent = message(error); }
  };
  const status = node('p', '', 'mw-error');
  status.dataset.notificationError = 'true';
  status.setAttribute('role', 'alert');
  body.append(status);
  if (items.some(isUnread)) body.append(button('Mark all read', () => mark({ all: true })));
  if (!items.length) body.append(node('p', 'You’re all caught up. Booking updates will appear here.', 'mw-empty'));
  for (const item of items.slice(0, noticeLimit)) {
    const row = node('article', null, 'mw-line' + (isUnread(item) ? ' mw-unread' : ''));
    const details = node('div');
    details.append(node('strong', titles[item.type] || 'Booking update'), node('p', [item.studentName, item.topic, time(item.at)].filter(Boolean).join(' · ')));
    row.append(details);
    if (isUnread(item)) row.append(button('Mark read', () => mark({ id: item.key })));
    if (item.bookingId) row.append(button('Open booking', async () => { await mark({ id: item.key }); MG.openSessionBooking(item.bookingId); }));
    else if (['refund_review','refunded'].includes(item.type)) row.append(button('Open Payments', async () => { await mark({ id: item.key }); MG.openPaymentLedger({ status: item.type === 'refunded' ? 'refunded' : 'refund_review' }); }));
    body.append(row);
  }
  if (items.length > noticeLimit) body.append(button('Show older notifications', () => { noticeLimit += 100; notifications(body); }));
}
MG.openWorkspaceNotifications = () => {
  noticeLimit = 100;
  const body = openPanel('notifications', label('Notifications'), 'Booking, payment and session updates');
  if (body) notifications(body);
};

function changeCounts() {
  const bell = id('mentorSessionBell');
  if (bell) bell.classList.toggle('hidden', !state.owner);
  const count = id('mentorSessionUnread');
  if (count) count.textContent = String(eventRows().filter(isUnread).length);
  const marker = id('mentorSecureBookingsBadge');
  if (marker && state.owner?.admin) marker.textContent = ' · ' + pending() + ' paid pending';
  const chatCount = id('mwChatBadge');
  if (chatCount) { chatCount.textContent = unreadChats() || ''; chatCount.hidden = !unreadChats(); }
  notifications();
  MG.refreshWorkspaceChatInbox?.();
}

function fast() {
  MG.backToCatalog?.();
  const card = id('fastBookingCard');
  if (card?.classList.contains('hidden')) id('m3FastBookToggleBtn')?.click();
  card?.scrollIntoView({ block: 'start', behavior: 'smooth' });
}
const scroll = name => {
  MG.backToCatalog?.();
  id(name)?.scrollIntoView({ block:'start', behavior:'smooth' });
};

function navigation() {
  const host = id('mentorWorkspaceNav');
  if (!host) return;
  const admin = state.owner?.admin || MG.state.isMentor;
  const items = admin
    ? [['Dashboard','grip',() => scroll('mentorDashboard')],['Bookings','calendar-check',() => MG.openSessionBooking()],
      ['Chats','comments',() => MG.openWorkspaceChats()],['Payments','receipt',() => MG.openPaymentLedger()],['Manage','sliders',manage]]
    : [['Home','house',() => scroll('mentorDashboard')],['Explore','compass',() => scroll('categoryPicker')],
      ['My Sessions','calendar-check',() => MG.openSessionBooking()],['Chats','comments',() => MG.openWorkspaceChats()],['Profile','user',manage]];
  host.replaceChildren(...items.map(([text, icon, action]) => {
    const element = button(null, action, 'mw-nav-item');
    element.setAttribute('aria-label', label(text));
    const graphic = node('i', null, 'fas fa-' + icon);
    graphic.setAttribute('aria-hidden', 'true');
    element.append(graphic, node('span', label(text)));
    if (text === 'Chats') { const badge = node('b', '', 'mw-nav-count'); badge.id = 'mwChatBadge'; element.append(badge); }
    return element;
  }));
  changeCounts();
}

function manage() {
  const admin = state.owner?.admin;
  const body = openPanel('manage', admin ? 'Manage workspace' : 'Profile & settings', 'Account and application preferences');
  if (!body) return;
  const connect = (text, target) => button(text, () => { MG.closeWorkspacePanel(); id(target)?.click(); });
  const actions = [connect('Profile', 'profileAvatarBtn'), connect('Language', 'mentorLangBtn'),
    connect('Light / dark theme', 'themeToggle'), connect('Sign out', 'siteLogoutBtn')];
  if (admin) actions.unshift(connect('Rates & Availability', 'pricingAdminBtn'), button('View a student', () => MG.openStudentWorkspacePreview()));
  else actions.unshift(button('Payments & receipts', () => MG.openPaymentLedger()), button('Learning and subscriptions', () => {
    MG.closeWorkspacePanel();
    scroll('categoryPicker');
  }));
  body.append(node('div', null, 'mw-actions'));
  body.firstChild.append(...actions);
}

const startOf = row => row.appointment?.startsAt || row.session?.startsAt || 0;
const endOf = row => row.appointment?.endsAt || row.session?.endsAt || 0;
const isPaid = row => row.paymentStatus === 'paid' && !!row.paymentFinalizedAt && row.status !== 'rejected' &&
  row.appointment?.status !== 'needs_reschedule';
const hasLink = row => Boolean(row.joinEligible || row.session?.status === 'scheduled');
const interval = row => startOf(row) ? MG.formatAppointment(startOf(row), endOf(row)) : 'Appointment to be arranged';

function metric(name, number, text, action) {
  const card = node('article', null, 'mw-metric');
  card.append(node('span', name), node('strong', number), node('small', text));
  if (action) card.append(button('Open', action, 'mw-link-button'));
  return card;
}
function dashboard() {
  const host = id('mentorDashboard');
  if (!host || !state.owner) return;
  const { admin } = state.owner;
  const now = Date.now();
  const profile = MG.state.data?.profile || {};
  const name = String(profile.name || profile.fullName || '');
  const bookings = state.bookings.filter(isPaid);
  const upcoming = bookings.filter(row => startOf(row) > now && !['cancelled','completed'].includes(row.session?.status)).sort((a,b) => startOf(a) - startOf(b));
  const nearest = upcoming.find(row => row.status === 'approved') || upcoming[0];
  const hero = node('div', null, 'mw-hero');
  const text = node('div');
  text.append(node('p', admin ? 'Mentor workspace' : 'Your learning workspace', 'mw-kicker'),
    node('h1', admin ? 'Mentor Dashboard' : name ? 'Welcome, ' + name.split(' ')[0] : 'Welcome to Mentor'),
    node('p', admin ? 'Manage appointments, student conversations and payments.' : 'Your appointments, conversations and learning paths in one place.'));
  const actions = node('div', null, 'mw-actions');
  if (admin) actions.append(button('Review bookings', () => MG.openSessionBooking(), 'mw-button mw-primary'),
    button('Manage availability', () => id('pricingAdminBtn')?.click(), 'mw-button mw-on-hero'));
  else actions.append(button(label('Fast Booking'), fast, 'mw-button mw-primary'), button('Explore learning', () => scroll('categoryPicker'), 'mw-button mw-on-hero'));
  hero.append(text, actions);
  host.replaceChildren(hero);

  if (admin) {
    const range = node('form', null, 'mw-filters mw-dashboard-range');
    const dates = ['from','to'].map((key,index) => {
      const label = node('label', index === 0 ? 'Payment period from (IST)' : 'Through (IST)', 'mw-field');
      const input = node('input');
      input.type = 'date';
      input.required = true;
      input.value = state.range[key];
      label.append(input);
      range.append(label);
      return input;
    });
    const filter = node('button', 'Update totals', 'mw-button');
    filter.type = 'submit';
    range.append(filter);
    range.addEventListener('submit', event => {
      event.preventDefault();
      state.range = { from:dates[0].value, to:dates[1].value };
      loadPaymentMetrics();
    });
    host.append(range);
  }
  if (state.failed) {
    const error = node('div');
    errorPanel(error, state.failed, refreshDashboard);
    host.append(error);
  }
  const grid = node('div', null, 'mw-metrics');
  if (admin) grid.append(metric('Today’s confirmed', bookings.filter(row => row.status === 'approved' &&
    startOf(row) && day.format(startOf(row)) === day.format(now) && row.session?.status !== 'cancelled').length, 'Asia/Kolkata', () => MG.openSessionBooking()),
  metric('Upcoming', upcoming.length, 'Paid appointments', () => MG.openSessionBooking(nearest?.id)),
  metric('Awaiting approval', pending(), 'Verified paid bookings', () => MG.openSessionBooking(upcoming.find(row => row.status === 'pending')?.id)),
  metric('Unread messages', unreadChats(), 'Booking chat', () => MG.openWorkspaceChats()),
  metric('Verified payments', state.payment ? money(state.payment.verifiedPaise) : '—',
    state.paymentError ? message(state.paymentError) : 'Selected dates', () => MG.openPaymentLedger(state.range)),
  metric('Refunds to review', state.payment?.refundReview ?? '—', 'Selected dates', () => MG.openPaymentLedger({ ...state.range, status:'refund_review' })));
  else grid.append(metric('Awaiting confirmation', bookings.filter(row => row.status === 'pending').length, 'Paid bookings', () => MG.openSessionBooking()),
    metric('Unread messages', unreadChats(), 'Booking chat', () => MG.openWorkspaceChats()),
    metric('Payments', 'Receipts', 'View your history', () => MG.openPaymentLedger()));
  if (admin) host.append(grid);

  const next = node('article', null, 'mw-card mw-next');
  next.append(node('p', admin ? 'Next appointment' : 'Your next appointment', 'mw-kicker'));
  if (nearest) {
    const confirmed = nearest.status === 'approved';
    next.append(node('h2', nearest.topic || 'Mentoring session'), node('p', interval(nearest)),
      node('p', confirmed ? (hasLink(nearest) ? 'Appointment confirmed · Meeting link available' : 'Appointment confirmed · Awaiting meeting link') : 'Payment verified · Awaiting Mentor approval', 'mw-status'),
      node('p', [admin ? nearest.studentName : MG.TRACKS?.[nearest.track]?.name, MG.formatBookingDuration?.(nearest.hours), money(nearest.amount * 100)].filter(Boolean).join(' · ')));
    if (nearest.session?.notes || nearest.mentorNotes) next.append(node('p', nearest.session?.notes || nearest.mentorNotes));
    const links = node('div', null, 'mw-actions');
    links.append(button(admin ? 'Open appointment' : 'View session', () => MG.openSessionBooking(nearest.id), 'mw-button mw-primary'),
      button('Open chat', () => MG.openBookingChat(nearest)), button(admin ? 'View student' : 'View receipt',
        () => admin ? MG.openStudentWorkspacePreview(nearest.mobile) : MG.openPaymentLedger({ search: nearest.id })));
    if (!admin && hasLink(nearest)) links.prepend(button('Join session', async () => {
      try { const response = await call('getBookingSessionLink', { bookingId: nearest.id }); window.location.assign(response.url); }
      catch (error) { MG.showToast(message(error)); }
    }, 'mw-button mw-primary'));
    next.append(links);
  } else {
    next.append(node('h2', !state.dashboardReady ? 'Loading appointments…' : 'No upcoming appointment'),
      button(admin ? 'Manage availability' : 'Find an appointment', admin ? () => id('pricingAdminBtn')?.click() : fast));
  }
  host.append(next);
  if (!admin) host.append(grid);
}

async function refreshDashboard() {
  const owner = state.owner;
  if (!owner || MG.state.viewingAs) return;
  try {
    const result = await call('getBookingSessionDashboard');
    if (!matches(owner)) return;
    state.bookings = result.bookings || [];
    state.failed = null;
    state.dashboardReady = true;
  } catch (error) {
    if (!matches(owner)) return;
    state.failed = error;
  }
  dashboard();
  MG.refreshWorkspaceChatInbox?.();
}

function watchScope(path, options, apply) {
  const owner = state.owner;
  state.stops.push(watch(path, options, value => {
    if (!matches(owner)) return;
    apply(value || {});
    changeCounts();
    dashboard();
  }, error => {
    if (!matches(owner)) return;
    state.streamError = error;
    changeCounts();
  }));
}

async function loadPaymentMetrics() {
  const owner = state.owner, range = state.range;
  if (!owner?.admin || !range) return;
  try {
    const result = await call('getPaymentLedger', range);
    if (!matches(owner) || state.range !== range) return;
    state.payment = result.summary;
    state.paymentError = null;
  } catch (error) {
    if (!matches(owner) || state.range !== range) return;
    state.payment = null;
    state.paymentError = error;
  }
  dashboard();
}

MG.startWorkspace = async function(force = false) {
  const user = await bridge()?.waitForAuth?.();
  const uid = user?.uid;
  if (!uid || user.isAnonymous || !bridge()?.watchWorkspace) { reset(); return; }
  const admin = Boolean(MG.state.isMentor || (await user.getIdTokenResult()).claims.admin === true);
  if (bridge().auth.currentUser?.uid !== uid) return;
  if (!force && state.owner?.uid === uid && state.owner.admin === admin) { dashboard(); return; }
  reset();
  const version = start;
  Object.assign(state, { owner: { uid, admin }, pendingFromQueue:null, dashboardReady:false, eventReady:false, streamError:null,
    range:{ from:day.format(Date.now() - 29 * 86400000), to:day.format(Date.now()) } });
  document.body.classList.add('mw-workspace');
  navigation();
  dashboard();
  const base = 'mentor_v3/';
  watchScope(base + (admin ? 'workspaceMentorInbox' : 'workspaceChatInbox/' + uid), {}, value => { state.inbox = value; });
  watchScope(base + (admin ? 'workspaceMentorEvents' : 'workspaceEvents/' + uid), {}, value => {
    state.events = value;
    state.eventReady = true;
    clearTimeout(reloadTimer);
    reloadTimer = setTimeout(() => { refreshDashboard(); if (admin) loadPaymentMetrics(); }, 240);
  });
  watchScope(base + 'workspaceNotificationReads/' + uid, {}, value => { state.reads = value; });
  if (admin) {
    watchScope(base + 'adminPaymentNotifications', {}, value => {
      state.paid = value;
      clearTimeout(reloadTimer);
      reloadTimer = setTimeout(() => { refreshDashboard(); loadPaymentMetrics(); }, 240);
    });
    watchScope(base + 'adminPaymentNotificationReads/' + uid, {}, value => { state.oldReads = value; });
    if ((await user.getIdTokenResult()).claims.admin === true && version === start) {
      watchScope(base + 'adminBookingQueue', {}, value => {
        state.pendingFromQueue = Object.values(value).filter(row => row.status === 'pending' && row.paymentStatus === 'paid' && row.paymentFinalizedAt).length;
      });
    }
    void loadPaymentMetrics();
  }
  if (version !== start) return;
  void call('getWorkspaceChatInbox').catch(error => { if (version === start) state.chatError = error; });
  await refreshDashboard();
};

MG.workspaceUi = { id,node,button,clock,time,day,money,state,bridge,call,watch,matches,message,errorPanel,skeleton,openPanel,onClose,
  refreshDashboard,interval,unreadChats };
document.addEventListener('DOMContentLoaded', () => {
  const dialog = currentPanel();
  if (!dialog) return;
  id('mentorWorkspaceClose').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => {
    if (dialog.open) return;
    closePanel?.();
    closePanel = null;
    state.tab = '';
    id('mentorWorkspaceBody').replaceChildren();
    document.body.classList.remove('mw-modal-open');
    if (previousFocus?.isConnected) previousFocus.focus();
  });
  window.addEventListener('mentor-auth-changed', reset);
  window.addEventListener('pagehide', reset);
  window.addEventListener('pageshow', () => { if (!id('app')?.classList.contains('hidden')) void MG.startWorkspace().catch(() => {}); });
  new MutationObserver(navigation).observe(document.documentElement, { attributes:true, attributeFilter:['lang'] });
  const overlays = ['bookingModal','pricingAdminModal','historyModal','mentorSessionsDialog','mentorWorkspaceDialog'].map(id).filter(Boolean);
  const overlayObserver = new MutationObserver(() => {
    document.body.classList.toggle('mw-modal-open', overlays.some(element => element.tagName === 'DIALOG'
      ? element.open : !element.classList.contains('hidden') && element.style.display !== 'none'));
  });
  overlays.forEach(element => overlayObserver.observe(element, { attributes:true, attributeFilter:['class','style','open'] }));
  document.body.classList.add('mw-layout');
  navigation();
});
})(window.MG);
