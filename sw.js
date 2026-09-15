/**
 * Service Worker — Controle de Entregas v4.0.0
 * Strategy: Cache-first for assets, Network-first for navigation
 * Versioned cache for safe updates
 */
const CACHE_NAME = 'entregas-v4.0.2';
const ASSETS = [
    './index.html',
    './manifest.webmanifest',
    './icon-192.png',
    './icon-512.png',
];

/* Install — cache essential assets */
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS).catch(() => {
                /* If any asset fails (e.g., local file mode), skip gracefully */
                console.warn('SW: Some assets could not be cached');
            });
        })
    );
    self.skipWaiting();
});

/* Activate — clean old caches */
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
            );
        })
    );
    self.clients.claim();
});

/* Fetch — cache-first for known assets, network-first for navigation */
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

    /* Skip non-GET and external requests */
    if (event.request.method !== 'GET') return;
    if (url.origin !== self.location.origin) return;

    event.respondWith(
        caches.match(event.request).then((cached) => {
            if (cached) {
                /* Return cached, but also update cache in background */
                fetch(event.request).then((response) => {
                    if (response && response.status === 200) {
                        caches.open(CACHE_NAME).then((cache) => {
                            cache.put(event.request, response);
                        });
                    }
                }).catch(() => {});
                return cached;
            }
            /* Not cached — try network, then cache result */
            return fetch(event.request).then((response) => {
                if (response && response.status === 200) {
                    const clone = response.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, clone);
                    });
                }
                return response;
            }).catch(() => {
                /* Offline fallback for navigation */
                if (event.request.mode === 'navigate') {
                    return caches.match('./index.html');
                }
                return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
            });
        })
    );
});
