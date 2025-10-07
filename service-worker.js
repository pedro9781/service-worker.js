const CACHE_NAME = "appvendas-cache-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./manifest.json",
  "imagem 192x192.jpg",
  "imagem 512x512.jpg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
