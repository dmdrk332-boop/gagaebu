// 우리 가계부 — Service Worker (offline-first PWA)
const CACHE = 'woori-gagebu-v2';
const CORE = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/lz-string/1.5.0/lz-string.min.js'
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(CORE).catch(() => {})));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;

  // 페이지 이동: 네트워크 우선, 실패 시 캐시된 앱 셸
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then((r) => { const cp = r.clone(); caches.open(CACHE).then((c) => c.put(req, cp)); return r; })
        .catch(() => caches.match('./index.html').then((m) => m || caches.match('./')))
    );
    return;
  }

  // 그 외 자원: 캐시 우선, 없으면 네트워크(받으면 캐시)
  e.respondWith(
    caches.match(req).then((m) => m || fetch(req).then((r) => {
      if (r && r.status === 200 && (r.type === 'basic' || r.type === 'cors')) {
        const cp = r.clone();
        caches.open(CACHE).then((c) => c.put(req, cp));
      }
      return r;
    }).catch(() => m))
  );
});
