// sw.js
const CACHE_NAME = 'magic-note-2-cache-v1';

const urlsToCache = [
  '/magic-note-2/',
  '/magic-note-2/index.html',
  '/magic-note-2/icon-192.png',
  '/magic-note-2/icon-512.png',
  '/magic-note-2/back.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});