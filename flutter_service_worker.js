'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6244900724e6a0a9c54acec54e5c3e55",
"assets/AssetManifest.bin.json": "f4689f3ea17de08919ce32afffe5633d",
"assets/AssetManifest.json": "24d450e08b1112559e80b0dd5ea095df",
"assets/assets/fonts/InriaSerif-Bold.otf": "c62eef409c63e487e3bda30eb63d2127",
"assets/assets/fonts/Italiana-Regular.ttf": "74c1702cc1b7bbbf357bf22d416710a5",
"assets/assets/fonts/Mallanna-Regular.ttf": "d645f4f5a747316b8c4244e85084255a",
"assets/assets/fonts/montserrat/Montserrat-ExtraLight.ttf": "a7fe50578d9aa3966c925cb9722db03a",
"assets/assets/fonts/spartan/LeagueSpartan-ExtraLight.ttf": "61843bae8d85e850a2b9e39fdf29dc7f",
"assets/assets/images/about_me.png": "9d1e2b139bbd8aa15af5b6e4206fb59b",
"assets/assets/images/anime_photo.png": "c0ef0791399ff610cb487719300b2cfb",
"assets/assets/images/background.jpg": "fb8dbc33a4bd731d01123c2419eb1729",
"assets/assets/images/computer.png": "03711545520394e2a56d5ce738799f01",
"assets/assets/images/facebook.png": "9994f1dc7286d7f88b2af294f1927b6e",
"assets/assets/images/flutter.png": "23ded1e93189e77c12bda66ca4274d08",
"assets/assets/images/instagram.png": "6d4e8f2e7b946483b6374ed9603bdd63",
"assets/assets/images/java.png": "9fc77d2572d5c93537bb4d3fae85f5b6",
"assets/assets/images/laptop.png": "ad9f9abf623aaffa22420ef848c77d20",
"assets/assets/images/laravel.png": "428f8b8f66684297612a2b41149b21a7",
"assets/assets/images/linked_in.png": "28feebffb9050bafab007a3c42387fc8",
"assets/assets/images/logo%2520without%2520bg.png": "d591699d186d19a64cbac54b54b53354",
"assets/assets/images/logo.png": "f3967ae0cea7509b755f22a42e54e8e2",
"assets/assets/images/lusso.png": "eba96045d212dec446e23b8e2692b8f0",
"assets/assets/images/lusso1.jpg": "82ef4c9d83c60bcc275a930a5815d0b5",
"assets/assets/images/lusso10.jpg": "3248ffb5235cb19241e77c44b4cfb7c6",
"assets/assets/images/lusso11.jpg": "223c92ea09b1baacca61941493c9ec41",
"assets/assets/images/lusso2.jpg": "d94abbe3e63db074b6f83c9aac702f7b",
"assets/assets/images/lusso3.jpg": "069c83da30fcca5437981c1bb2bfad87",
"assets/assets/images/lusso4.jpg": "9ffcb1b1460cc80f3401300fbb9610f8",
"assets/assets/images/lusso5.jpg": "d95179d32d410a76a0347309c05e9635",
"assets/assets/images/lusso6.jpg": "44e0141ecd90325d188afeea47000935",
"assets/assets/images/lusso7.jpg": "ce3aac9cd361a1adea52c4c547062fce",
"assets/assets/images/lusso8.jpg": "c948cdb1e9ea4f4ff35af969ff420f0a",
"assets/assets/images/lusso9.jpg": "d940989c830e8c0cbe7a32c1f07374d4",
"assets/assets/images/moon.png": "080b61c60c85630424f060a439ae2bda",
"assets/assets/images/profile3.png": "1a6793f6f0597ff5520c74b3cb21bf17",
"assets/assets/images/pyhton.png": "2798a372766dfe7587de0ac16dffcfcc",
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
"assets/assets/images/tenders.png": "5479e9357eee5777fb7a281c6b8f51c8",
"assets/assets/images/tenders1.jpg": "04c7b8a2908107f9dc55d9c3f8f0342a",
"assets/assets/images/tenders10.jpg": "9d8f7d7e4825c3a9723f8cb0d5c11ce4",
"assets/assets/images/tenders11.jpg": "476a4b21f5fd278eea02ce2c48ef3f37",
"assets/assets/images/tenders12.jpg": "ac452a95541da601374b13330eb19d3d",
"assets/assets/images/tenders2.jpg": "72904a159a3f5fb3117a1fc5a51b903a",
"assets/assets/images/tenders3.jpg": "92d74d691ed31088a651fe68b6abc18c",
"assets/assets/images/tenders4.jpg": "a79b30bd99f543c0b7c67d95856a0ad0",
"assets/assets/images/tenders5.jpg": "aa52ac1905701013170ef71066d67d11",
"assets/assets/images/tenders6.jpg": "8e5f55a55ca569e45239dfc27734cc83",
"assets/assets/images/tenders7.jpg": "9796f4308adaa7f941d7d7a5a4bde3bd",
"assets/assets/images/tenders8.jpg": "6397bb346d6043f39b27bbfd0b65ebfb",
"assets/assets/images/tenders9.jpg": "fb20e4059fb4e0d9005fc6409d4d6de1",
"assets/assets/images/travelIti.png": "db20113ba771edcf23e73175635586ee",
"assets/assets/lottie/1.riv": "7cf3c9edec0f2529c6734ca5e755a936",
"assets/assets/lottie/2.riv": "037e1998793afc3fd6809898f822c82c",
"assets/assets/lottie/bubbles.json": "70af1f6ea240ec5ac930ab7d6f574a45",
"assets/assets/lottie/loader.json": "b174a7b1ba52c5879f8e033ed9995681",
"assets/assets/lottie/untitled.riv": "7cf3c9edec0f2529c6734ca5e755a936",
"assets/FontManifest.json": "c6538f0dd86741e82bd50f4098b84d04",
"assets/fonts/MaterialIcons-Regular.otf": "45e5167b688ec98a5d8e0f2781a70efc",
"assets/NOTICES": "9b8a4af309e51b96cc7f8643a517586d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/toast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/toast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "fc785e8bbfcd965d18c02772f7fbe5af",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "caaa4506412b55f49f8664a10d70df74",
"google069a5d89a7a4df87.html": "65dc5b5887021c9477b75ab90af087c5",
"icons/Icon-192.png": "6a94d637a14cec4832b06b61fc6d494f",
"icons/Icon-512.png": "a951c8cf488b0e41843223211f2e43ed",
"icons/Icon-maskable-192.png": "6a94d637a14cec4832b06b61fc6d494f",
"icons/Icon-maskable-512.png": "a951c8cf488b0e41843223211f2e43ed",
"index.html": "22bf15ac39ffac658927a955e8be3962",
"/": "22bf15ac39ffac658927a955e8be3962",
"main.dart.js": "ad123de58b9e5258291cf3b6003e1a69",
"manifest.json": "e7e49d90d613ed2f3564d27d8cbe397c",
"version.json": "291173c5ed5164ff02f6454996cc9592"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
