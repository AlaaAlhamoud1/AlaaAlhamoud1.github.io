'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "479de8d75d9f709d9a05a4ff8b803736",
"assets/AssetManifest.bin.json": "c5ab2f3eeceef455babc86b626fc957c",
"assets/AssetManifest.json": "89d33111b83fac9f85ef615caf89ca09",
"assets/assets/fonts/InriaSerif-Bold.otf": "c62eef409c63e487e3bda30eb63d2127",
"assets/assets/fonts/Italiana-Regular.ttf": "74c1702cc1b7bbbf357bf22d416710a5",
"assets/assets/fonts/montserrat/Montserrat-ExtraLight.ttf": "a7fe50578d9aa3966c925cb9722db03a",
"assets/assets/fonts/spartan/LeagueSpartan-ExtraLight.ttf": "61843bae8d85e850a2b9e39fdf29dc7f",
"assets/assets/images/facebook.png": "9994f1dc7286d7f88b2af294f1927b6e",
"assets/assets/images/instagram.png": "6d4e8f2e7b946483b6374ed9603bdd63",
"assets/assets/images/laptop.png": "ad9f9abf623aaffa22420ef848c77d20",
"assets/assets/images/linked_in.png": "28feebffb9050bafab007a3c42387fc8",
"assets/assets/images/logo.png": "a5b96b09f8941e6e7f1c76e5a5947162",
"assets/assets/images/lusso.png": "eba96045d212dec446e23b8e2692b8f0",
"assets/assets/images/lusso1.jpg": "5d43455901c690b1b937fe5070416047",
"assets/assets/images/lusso10.jpg": "c659e3e7edaccc043bb60cf0d8e88dd0",
"assets/assets/images/lusso2.jpg": "4a7ab4dd75e664442316a98b9e64a268",
"assets/assets/images/lusso3.jpg": "c9baf3156fe64cb2df879e00864aa4cd",
"assets/assets/images/lusso4.jpg": "51d515be503f869c2b9f956daaa2474e",
"assets/assets/images/lusso5.jpg": "362f33c4687855ebfadf569bf69eea43",
"assets/assets/images/lusso6.jpg": "c5f689ef4c9f855f60b2d36b5970d461",
"assets/assets/images/lusso7.jpg": "cb61c3b1c4f382adbfb46c149b3aad9c",
"assets/assets/images/lusso8.jpg": "f92148ee13df0c77331abc549697c408",
"assets/assets/images/lusso9.jpg": "373e0b9fd66955004d3cb7bdec0b1536",
"assets/assets/images/moon.png": "080b61c60c85630424f060a439ae2bda",
"assets/assets/images/profile3.png": "1a6793f6f0597ff5520c74b3cb21bf17",
"assets/assets/images/reserva.png": "ccb9d4825828eebba932b02f374a2a7b",
"assets/assets/images/reserva1.jpg": "753753f38feeac4f56d9cb8accc5e680",
"assets/assets/images/reserva10.jpg": "a29544ec38242260a037497f374ff224",
"assets/assets/images/reserva11.jpg": "6dd5815df5f3d34c2d990d17431bb2af",
"assets/assets/images/reserva2.jpg": "698eaf3312f26e0c40698bdf440d01c9",
"assets/assets/images/reserva3.jpg": "581252ff510e0b69520862ec07a750fe",
"assets/assets/images/reserva4.jpg": "4256c1154173c67a3c1428423c66589e",
"assets/assets/images/reserva5.jpg": "698e05d3f4c74b83fbb28f7afb7f5952",
"assets/assets/images/reserva6.jpg": "1c83e16f8e144e01617f08c4cddb5995",
"assets/assets/images/reserva7.jpg": "7fa419b5a80d553b294c18db22414fae",
"assets/assets/images/reserva8.jpg": "9f89403faf4f442944700ca3faeff0b8",
"assets/assets/images/reserva9.jpg": "a2e124116ccbf9cc3751508fc26e8b0e",
"assets/assets/images/rotate_image.png": "1d2067467fd387598ad5ae92ca1065c1",
"assets/assets/images/spinner.riv": "63f3984b67c8b632505de465c5b322d8",
"assets/assets/images/sun.png": "6d3db4b2ce0faf06b21258ab9f543d1c",
"assets/assets/images/telegram.png": "55e61a117af397bfafa660d24d8e3514",
"assets/assets/images/travelIti.png": "db20113ba771edcf23e73175635586ee",
"assets/assets/lottie/bubbles.json": "70af1f6ea240ec5ac930ab7d6f574a45",
"assets/assets/lottie/loader.json": "b174a7b1ba52c5879f8e033ed9995681",
"assets/FontManifest.json": "d3b59a7d96ace42eb05b25dcb4538682",
"assets/fonts/MaterialIcons-Regular.otf": "b8925272306bb5fe36675d0a9a8b4426",
"assets/NOTICES": "6fbb588b664973d2700d12ff4e14f176",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/toast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/toast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d139a3c8d7e57948647320a6e01e4826",
"/": "d139a3c8d7e57948647320a6e01e4826",
"main.dart.js": "64b053dfd70c245eebe5580051b82e9f",
"manifest.json": "41c5e407ddd6ec535b7273812b2ec522",
"version.json": "291173c5ed5164ff02f6454996cc9592"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
