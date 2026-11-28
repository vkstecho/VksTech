/* Public display only. No payment or pricing authority on this site. */
(function () {
  const elements = document.querySelectorAll('[data-rate-career], [data-rate-pack]');
  if (!elements.length) return;
  const fallback = 'View current rate';
  elements.forEach(el => { el.textContent = fallback; });
  fetch('https://mentor-vkstech-default-rtdb.asia-southeast1.firebasedatabase.app/mentor_settings/tracks.json', { mode: 'cors', cache: 'no-store' })
    .then(res => { if (!res.ok) throw Error('Rates unavailable'); return res.json(); })
    .then(data => elements.forEach(el => {
      const track = el.hasAttribute('data-rate-career') ? 'career_ai' : 'packaging';
      const rate = Number(data?.[track]?.hourlyRate);
      if (Number.isFinite(rate) && rate > 0) el.textContent = '₹' + rate.toLocaleString('en-IN') + '/hr';
    })).catch(() => { /* Link to Mentor for current pricing rather than inventing a stale rate. */ });
})();
