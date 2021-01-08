const CACHE_NAME = "projet_pwa_david_sayag";
const urlsToCache = [
  "projet_pwa_david_sayag.css",
  "projet_pwa_david_sayag.js",
  "changer_theme_couleur.js",
  "projet_pwa_manifest_david_sayag.json",
  "img/icon-72x72.png",
  "img/icon-96x96.png",
  "img/icon-128x128.png",
  "img/icon-144x144.png",
  "img/icon-152x152.png",
  "img/icon-384x384.png",
  "img/icon-512x512.png",
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(function(cache){
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
      })
  );
});