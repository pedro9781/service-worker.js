const CACHE_NAME = "appvendas-cache-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./manifest.json",
  "https://cdn-icons-png.flaticon.com/512/891/891419.png",
  "https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
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
