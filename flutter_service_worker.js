'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "da857e9cfbfcf261343b32df500757aa",
"assets/AssetManifest.bin.json": "b5ed6cd14cab9bbcd47eeeffd6c73e6b",
"assets/AssetManifest.json": "f71f27e07f417acf7631f0208a579849",
"assets/assets/fonts/InriaSerif-Bold.otf": "c62eef409c63e487e3bda30eb63d2127",
"assets/assets/fonts/Italiana-Regular.ttf": "74c1702cc1b7bbbf357bf22d416710a5",
"assets/assets/fonts/Mallanna-Regular.ttf": "d645f4f5a747316b8c4244e85084255a",
"assets/assets/fonts/montserrat/Montserrat-ExtraLight.ttf": "a7fe50578d9aa3966c925cb9722db03a",
"assets/assets/fonts/spartan/LeagueSpartan-ExtraLight.ttf": "61843bae8d85e850a2b9e39fdf29dc7f",
"assets/assets/images/about_me.png": "9d1e2b139bbd8aa15af5b6e4206fb59b",
"assets/assets/images/al-meera.png": "9f41604d5870904d020a36aa085ed7a4",
"assets/assets/images/al-meera1.png": "90a44e98b909677328f31e769254bf7f",
"assets/assets/images/al-meera10.png": "3a51a5da0a595906a07edf8702e55995",
"assets/assets/images/al-meera11.png": "84c6a0e98065b4d41c115b4d4ea35132",
"assets/assets/images/al-meera12.png": "d2ec191c736c9fbdb9ebae42d48e3923",
"assets/assets/images/al-meera2.png": "3ce8db74991195dad3bea7c3f1da3b3e",
"assets/assets/images/al-meera3.png": "f0ae4836d122e218514164d069d1341b",
"assets/assets/images/al-meera4.png": "895ea01603b7957669f29abdba5de7fd",
"assets/assets/images/al-meera5.png": "0cf1eba71853004bae6c27140cfc72a6",
"assets/assets/images/al-meera6.png": "18e6a4f6437894033344b390513c3d3c",
"assets/assets/images/al-meera7.png": "8a43f49a08528564199685cb3823b51d",
"assets/assets/images/al-meera8.png": "9f54f44742a047d8a05dea700b1e27bf",
"assets/assets/images/al-meera9.png": "85c14aafafc3113e62910dc4c4e4630a",
"assets/assets/images/anime_photo.png": "c0ef0791399ff610cb487719300b2cfb",
"assets/assets/images/cms.png": "3afe29b107a2302857407da770c0e316",
"assets/assets/images/cms1.png": "c10a76d0346b75c9d5a0279383ba4b77",
"assets/assets/images/cms10.png": "648f1dcbbb4a02843802f1e197253493",
"assets/assets/images/cms11.png": "957025f7ae908205a372e4ef36e473a9",
"assets/assets/images/cms2.png": "1b0b9f0209ee6169c275a1a67b0a7509",
"assets/assets/images/cms3.png": "6411a3e521f0cc915627fa561799805d",
"assets/assets/images/cms4.png": "58ac81847584a965babffa03dcffefa6",
"assets/assets/images/cms5.png": "9b35771bfcd84969be59c41e5571855e",
"assets/assets/images/cms6.png": "d5ad4dba4a420bb79324a0f3c5798264",
"assets/assets/images/cms7.png": "62546a7903471ba2a45156d72269979e",
"assets/assets/images/cms8.png": "0a72bd43da0c4929f2f8f7fccfe008e8",
"assets/assets/images/cms9.png": "808b7121924b323e84e9c9efc0e39f83",
"assets/assets/images/cms_t1.png": "a6ffbe3cff1300df69618dcd2a085ca8",
"assets/assets/images/cms_t10.png": "d0bc4d52f28403ad3f11bd542c4dc055",
"assets/assets/images/cms_t11.png": "5f51df3c51edc52c5d22fb0fb42aca4f",
"assets/assets/images/cms_t12.png": "609f7ff444e234a5389dc02132d66980",
"assets/assets/images/cms_t2.png": "789530daa5a24319f6345314a21c1976",
"assets/assets/images/cms_t3.png": "3ae3689627d28739eee2dabfdcd832c0",
"assets/assets/images/cms_t4.png": "b23a1f4e701949aa694f08c470bd1663",
"assets/assets/images/cms_t5.png": "4857293b12cbfa707f2ec89362315dc4",
"assets/assets/images/cms_t6.png": "97359e96ff0d3b779f5b01b70a5d5fdb",
"assets/assets/images/cms_t7.png": "3d01aee5e22d66b29246bb436f08943a",
"assets/assets/images/cms_t8.png": "2b2d554947c049e978155000b5cd5d87",
"assets/assets/images/cms_t9.png": "1ee163660a96664b65e4760374b3a62c",
"assets/assets/images/computer.png": "03711545520394e2a56d5ce738799f01",
"assets/assets/images/flutter.png": "23ded1e93189e77c12bda66ca4274d08",
"assets/assets/images/java.png": "9fc77d2572d5c93537bb4d3fae85f5b6",
"assets/assets/images/laptop.png": "ad9f9abf623aaffa22420ef848c77d20",
"assets/assets/images/laravel.png": "428f8b8f66684297612a2b41149b21a7",
"assets/assets/images/light_logo.png": "0d5153a8c6da8880d2bd572f43afcaab",
"assets/assets/images/logo%2520without%2520bg.png": "d591699d186d19a64cbac54b54b53354",
"assets/assets/images/lusso.png": "4cbd8faf9a30011a1323fd95399b71ee",
"assets/assets/images/lusso1.png": "bf9611492002ed529736daddcbaed5e7",
"assets/assets/images/lusso10.png": "c672f51c4617759011c5f4acbf0a4bb7",
"assets/assets/images/lusso11.png": "27bd2e3ae72337256da36b41d1fc86d5",
"assets/assets/images/lusso2.png": "35023849c4633f7b6c9ba5ae7201b723",
"assets/assets/images/lusso3.png": "5d2d3de4f725e8296fb24b30cfac8908",
"assets/assets/images/lusso4.png": "59ab864c22fea4fd596fbf38e7e03adb",
"assets/assets/images/lusso5.png": "210b2780eb9ce8b043290f1192231b21",
"assets/assets/images/lusso6.png": "83a33d6fab574b66b04f49d37d064771",
"assets/assets/images/lusso7.png": "0d9e749a931be1630a987ad7bd8cc311",
"assets/assets/images/lusso8.png": "c874f0fb02baf2839f478bed9ef74f47",
"assets/assets/images/lusso9.png": "b361ce603294dc4dd0a5b336cc42c7f7",
"assets/assets/images/mmd.png": "3a5f49266951975076a75a3c45070755",
"assets/assets/images/mmd1.png": "4370290d25c8cf29daa466332c16642c",
"assets/assets/images/mmd2.png": "16286f7c998d02afa99d98ea0dd72942",
"assets/assets/images/mmd3.png": "aee9a26bd481f315b385c7c1bafa8031",
"assets/assets/images/mmd4.png": "17931aa78f82f0662811845b185f02f6",
"assets/assets/images/mmd5.png": "3b69e6c10e0e6d0275eea053c47bf2c7",
"assets/assets/images/mmd6.png": "5c282663c9a34c7379e2aec6ba73d3d0",
"assets/assets/images/moon.png": "080b61c60c85630424f060a439ae2bda",
"assets/assets/images/profile3.png": "1a6793f6f0597ff5520c74b3cb21bf17",
"assets/assets/images/pyhton.png": "2798a372766dfe7587de0ac16dffcfcc",
"assets/assets/images/reserva.png": "f56a57135d25e903046c83ff733bcb25",
"assets/assets/images/reserva1.png": "6812470225a75b9754e89ba712fc66e1",
"assets/assets/images/reserva10.png": "445c3e06129034dce22f93f366f81b64",
"assets/assets/images/reserva11.png": "1e2941724b02b285dd9f0acbc0c909c1",
"assets/assets/images/reserva2.png": "bccabbdeb6add5843eb909409bbaacbb",
"assets/assets/images/reserva3.png": "e58e3f949317746ff159de9a577c292e",
"assets/assets/images/reserva4.png": "3f1c76d794435280c6ed27072d769cf6",
"assets/assets/images/reserva5.png": "71e48b0ec954f435419676299fdedd1f",
"assets/assets/images/reserva6.png": "04595e9fa9e3fc41b5fd6c58804d6867",
"assets/assets/images/reserva7.png": "6102f2139c7d0155af56f5882419d17a",
"assets/assets/images/reserva8.png": "3f8a7b4a36653bf253bcb4629c236034",
"assets/assets/images/reserva9.png": "bd4aabb6bce1fda09f28c5573186e82b",
"assets/assets/images/rotate_image.png": "1d2067467fd387598ad5ae92ca1065c1",
"assets/assets/images/sun.png": "6d3db4b2ce0faf06b21258ab9f543d1c",
"assets/assets/images/tenders.png": "8235901c98585019c8ee4f18db0020b1",
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
"assets/NOTICES": "6f116ec9b82a5d93ee7d9b8c9f032e14",
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
"flutter_bootstrap.js": "f506865b20f16d5e65b6f898300a1268",
"icons/Icon-192.png": "6a94d637a14cec4832b06b61fc6d494f",
"icons/Icon-512.png": "a951c8cf488b0e41843223211f2e43ed",
"icons/Icon-maskable-192.png": "6a94d637a14cec4832b06b61fc6d494f",
"icons/Icon-maskable-512.png": "a951c8cf488b0e41843223211f2e43ed",
"index.html": "22bf15ac39ffac658927a955e8be3962",
"/": "22bf15ac39ffac658927a955e8be3962",
"main.dart.js": "03e39d374f6f0aea0bc298fb35421654",
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
