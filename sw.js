const CACHE_NAME = 'glossaforge-v6';

// Only cache stable data files — never cache HTML
const DATA_ASSETS = [
  '/data/languages.js',
  '/data/families.js',
  '/data/intelligibility.js',
  '/data/countries.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(DATA_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Never intercept HTML — always fetch fresh from network
  const isHtml = url.pathname.endsWith('.html') ||
                 url.pathname === '/' ||
                 url.pathname.endsWith('/');
  if (isHtml) return;

  // Cache-first only for the data files
  const isDataFile = DATA_ASSETS.some((p) => url.pathname === p);
  if (url.origin === self.location.origin && isDataFile) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        if (cached) return cached;
        return fetch(event.request).then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          return response;
        });
      })
    );
  }
  // Everything else (CDN, tiles, fonts) — pass through to network unchanged
});
