/* VKSTech Service Worker
 * Strategy:
 *   - HTML:      network-first (so updates propagate); falls back to cache offline
 *   - Icons/manifest: cache-first (rarely change, fast load)
 *   - Supabase/GitHub API: network-only (never cache dynamic data)
 */
const VERSION  = 'vks-v1.0.1';
const SHELL    = ['/', '/index.html', '/manifest.json',
                  '/icon512.png', '/icon512_1.png', '/icon512_2.png',
                  '/icon512_3.png', '/icon512_4.png',
                  '/favicon-192x192.png', '/icon180.png', '/logo.jpeg'];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(VERSION).then((c) =>
      /* Cache each shell asset, but don't fail the install if one is missing */
      Promise.all(SHELL.map((url) => c.add(url).catch(() => null)))
    )
  );
});

self.addEventListener('activate', (e) => {
  /* Delete old caches on activation */
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  const url = new URL(req.url);

  /* Never cache API calls — blog/app-request data must stay live */
  if (url.hostname.includes('supabase.co') ||
      url.hostname.includes('githubusercontent.com') ||
      url.hostname.includes('jsdelivr.net') ||
      url.hostname.includes('googleapis.com') ||
      url.hostname.includes('gstatic.com')) {
    return; /* Let the browser handle it normally */
  }

  /* HTML documents: network-first, fall back to cache when offline */
  if (req.mode === 'navigate' || req.destination === 'document') {
    e.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(VERSION).then((c) => c.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req).then((r) => r || caches.match('/')))
    );
    return;
  }

  /* Static assets (icons, images): cache-first */
  if (req.method === 'GET' && url.origin === location.origin) {
    e.respondWith(
      caches.match(req).then((cached) =>
        cached || fetch(req).then((res) => {
          if (res && res.status === 200) {
            const copy = res.clone();
            caches.open(VERSION).then((c) => c.put(req, copy));
          }
          return res;
        }).catch(() => cached)
      )
    );
  }
});
