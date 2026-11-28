(function (MG, ui) {
'use strict';
const { node, button, state, day, time, call, watch, bridge, message, openPanel, onClose, interval } = ui;
const historySize = 35;
let inboxHost;

function inbox() {
  if (!inboxHost?.isConnected || state.tab !== 'chats') return;
  if (state.chatError) {
    ui.errorPanel(inboxHost, state.chatError, () => MG.startWorkspace(true));
    return;
  }
  const rows = state.bookings.filter(row => row.paymentStatus === 'paid' && row.paymentFinalizedAt && ['pending','approved'].includes(row.status));
  rows.sort((a,b) => (state.inbox[b.id]?.at || b.createdAt || 0) - (state.inbox[a.id]?.at || a.createdAt || 0));
  if (!rows.length) {
    inboxHost.replaceChildren(node('p', state.dashboardReady ? 'Booking chat is available after payment verification.' : 'Loading conversations…', 'mw-empty'));
    return;
  }
  inboxHost.replaceChildren(...rows.map(row => {
    const item = state.inbox[row.id];
    const entry = button(null, () => MG.openBookingChat(row), 'mw-line mw-chat-entry');
    const name = state.owner.admin ? row.studentName || 'Student' : 'Mentor';
    const detail = node('div');
    detail.append(node('strong', name + ' · ' + row.topic), node('p', item?.last?.body || 'Start the conversation'),
      node('small', interval(row) + ' · ' + (row.session?.status === 'completed' ? 'Completed' : row.status === 'approved' ? 'Confirmed' : 'Awaiting approval')));
    entry.append(detail);
    if (item?.last) entry.append(node('small', time(item.at)));
    if (item?.unread) entry.append(node('b', String(item.unread), 'mw-chip'));
    return entry;
  }));
}
MG.refreshWorkspaceChatInbox = inbox;
MG.openWorkspaceChats = () => {
  const host = openPanel('chats', 'Chats', 'Verified bookings');
  if (!host) return;
  inboxHost = node('div');
  host.append(inboxHost);
  inbox();
};

MG.openBookingChat = async function(row) {
  if (!state.owner || MG.state.viewingAs) return;
  const owner = state.owner;
  const partner = owner.admin ? row.studentName || 'Student' : 'Mentor';
  const host = openPanel('chat', partner, [row.topic, interval(row)].filter(Boolean).join(' · '));
  if (!host) return;
  const params = { bookingId: row.id, ...(owner.admin ? { uid: row.uid } : {}) };
  const path = 'mentor_v3/bookingMessages/' + row.id;
  const role = owner.admin ? 'mentor' : 'student';
  let closed = false, initial = true, metadata = {}, lastMark = '', history = {}, live = {}, latestPrevious = '';
  const pending = new Map(), stops = [];
  const handleVisibility = () => markVisible();
  onClose(() => {
    closed = true;
    stops.forEach(stop => stop());
    document.removeEventListener('visibilitychange', handleVisibility);
  });
  host.append(ui.skeleton());
  try { await call('openBookingChat', params); }
  catch (error) { if (!closed) ui.errorPanel(host, error, () => MG.openBookingChat(row)); return; }
  if (closed || !ui.matches(owner)) return;
  host.replaceChildren();
  const bar = node('div', null, 'mw-chat-tools');
  const connection = node('span', 'Connecting…', 'mw-muted');
  connection.setAttribute('role', 'status');
  const loadOlder = button('Load older messages', more);
  const newest = button('New messages ↓', goLatest, 'mw-button mw-primary');
  newest.hidden = true;
  bar.append(button('All chats', MG.openWorkspaceChats), loadOlder, connection, newest);
  const list = node('div', null, 'mw-chat-list');
  list.setAttribute('role','log');
  list.setAttribute('aria-label', 'Booking messages');
  const form = node('form', null, 'mw-compose');
  const input = node('textarea');
  input.maxLength = 1000;
  input.rows = 2;
  input.placeholder = 'Write a message…';
  input.setAttribute('aria-label', 'Message about this booking');
  const send = node('button', 'Send', 'mw-button mw-primary');
  send.type = 'submit';
  form.append(input, send);
  host.append(bar, list, form);
  list.addEventListener('scroll', markVisible, { passive:true });
  document.addEventListener('visibilitychange', handleVisibility);
  form.addEventListener('submit', event => {
    event.preventDefault();
    const body = input.value.trim();
    if (!body) return;
    const clientId = crypto.randomUUID();
    input.value = '';
    submit(clientId, body);
  });
  input.addEventListener('keydown', event => {
    if (event.key === 'Enter' && !event.shiftKey && !event.isComposing && matchMedia('(pointer: fine)').matches) {
      event.preventDefault(); form.requestSubmit();
    }
  });
  const separated = new Intl.DateTimeFormat('en-IN', { timeZone:'Asia/Kolkata', dateStyle:'medium' });
  function chronology() { return Object.values({ ...history, ...live }).sort((a,b) => a.id.localeCompare(b.id)); }
  function atBottom() { return list.scrollHeight - list.scrollTop - list.clientHeight < 48; }
  function goLatest() { list.scrollTop = list.scrollHeight; newest.hidden = true; markVisible(); }
  function markVisible() {
    if (closed || document.hidden || !atBottom()) return;
    const last = chronology().findLast(item => item.sender !== role);
    if (!last || last.id === lastMark || last.ordinal <= (metadata.seen?.[role] || 0)) return;
    lastMark = last.id;
    void call('markBookingChatRead', { ...params, through:last.id }).catch(() => { if (lastMark === last.id) lastMark = ''; });
  }
  function render() {
    if (closed) return;
    const stick = initial || atBottom();
    const offset = list.scrollTop;
    const rows = chronology();
    let divider;
    const elements = [];
    for (const row of rows) {
      const key = day.format(row.at);
      if (key !== divider) { divider = key; elements.push(node('div', separated.format(row.at), 'mw-date-divider')); }
      const own = row.sender === role;
      const bubble = node('article', null, 'mw-bubble' + (own ? ' mw-outgoing' : ''));
      bubble.dataset.messageId = row.id;
      bubble.append(node('p', row.body), node('small', time(row.at) + (own ? ((metadata.seen?.[role === 'mentor' ? 'student' : 'mentor'] || 0) >= row.ordinal ? ' · Read' : ' · Sent') : '')));
      const copy = button('Copy', async () => {
        try { await navigator.clipboard.writeText(row.body); copy.textContent = 'Copied'; }
        catch { copy.textContent = 'Copy unavailable'; }
      }, 'mw-copy');
      bubble.append(copy);
      elements.push(bubble);
    }
    if (!rows.length && !pending.size) elements.push(node('p', 'Start the conversation about this booking.', 'mw-empty'));
    for (const [clientId, item] of pending) {
      if (item.id && live[item.id]) { pending.delete(clientId); continue; }
      const bubble = node('article', null, 'mw-bubble mw-outgoing');
      bubble.append(node('p', item.body), node('small', item.failed ? 'Could not send' : 'Sending…'));
      if (item.failed) bubble.append(button('Retry', () => submit(clientId, item.body), 'mw-copy'));
      elements.push(bubble);
    }
    list.replaceChildren(...elements);
    const latest = rows.at(-1)?.id;
    if (stick) goLatest(); else {
      list.scrollTop = offset;
      if (latest && latest !== latestPrevious) newest.hidden = false;
    }
    initial = false;
    latestPrevious = latest;
  }
  async function more() {
    const first = chronology()[0]?.id;
    if (!first) return;
    const top = list.scrollTop;
    const height = list.scrollHeight;
    loadOlder.disabled = true;
    try {
      const records = await bridge().readWorkspace(path + '/timeline', { limit:historySize, before:first }) || {};
      if (closed) return;
      history = { ...records, ...history };
      if (Object.keys(records).length < historySize) loadOlder.hidden = true;
      render();
      list.scrollTop = top + list.scrollHeight - height;
    } catch (error) { connection.textContent = message(error); }
    finally { loadOlder.disabled = false; }
  }
  async function submit(clientId, body) {
    pending.set(clientId, { body });
    render();
    goLatest();
    try {
      const result = await call('sendBookingMessage', { ...params, clientId, body });
      if (closed) return;
      if (live[result.id]) pending.delete(clientId);
      else pending.set(clientId, { body, id: result.id });
    } catch { if (!closed) pending.set(clientId, { body, failed:true }); }
    render();
  }
  function failed(error) { if (!closed) connection.textContent = message(error); }
  stops.push(watch(path + '/timeline', { limit:historySize }, next => {
    if (closed) return;
    const values = next || {};
    Object.entries(live).forEach(([key, value]) => { if (!values[key]) history[key] = value; });
    live = values;
    if (!Object.keys(history).length) loadOlder.hidden = Object.keys(values).length < historySize;
    render();
  }, failed));
  stops.push(watch(path + '/state', {}, next => { if (!closed) { metadata = next || {}; render(); } }, failed));
  stops.push(watch('.info/connected', {}, online => { if (!closed) connection.textContent = online ? 'Connected' : 'Reconnecting…'; }, failed));
};
})(window.MG, window.MG.workspaceUi);
