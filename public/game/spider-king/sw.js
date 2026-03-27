/* 蛛王传说 - 同目录静态资源缓存，便于 HTTPS 下二次打开与弱网体验 */
const CACHE_NAME = 'spider-king-v1';
const PRECACHE_URLS = ['./index.html', './manifest.webmanifest', './sw.js'];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) =>
            cache.addAll(PRECACHE_URLS).catch(() => {})
        )
    );
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
        )
    );
    self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;
    const url = new URL(event.request.url);
    if (url.origin !== self.location.origin) return;

    event.respondWith(
        fetch(event.request)
            .then((res) => {
                if (res && res.status === 200 && res.type === 'basic') {
                    const copy = res.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        try {
                            cache.put(event.request, copy);
                        } catch (_) {}
                    });
                }
                return res;
            })
            .catch(() => caches.match(event.request))
    );
});
