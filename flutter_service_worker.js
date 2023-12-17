'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a2e7221b5cffda21ecd8b05724133e50",
".git/config": "30230067c9ed87c10df63669a2418214",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "5c0037e974d88eecf5ca001d0ddf3814",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "72929ae09a0e87eef8d52686ca8e664e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3c7f35be1e407e4b81e5290b8db5cbf7",
".git/logs/refs/heads/main": "be5bf0a35be419538aa7075fc5cebc35",
".git/logs/refs/remotes/origin/main": "a5ec2d9e9f67756a49aa4e8e17724040",
".git/objects/01/da8aee777fe37156bbdf75f820ff8b20ae1ff5": "78cba4317f2f197de33f64e7c0736ff9",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/08/1b4d482602407d82c30bbb15be9913d8e0d643": "ce347193f5a906f14855922b3b88e3bc",
".git/objects/0b/00952f963e43f291ad80cf8e90596a322d8c4d": "9a62c5e434b7042cce7180b5a292b14d",
".git/objects/0e/9690ce5ffaf33c7ab3bacdf0b7b3857c6aa26b": "bb5b5cbc104aca5041a92bd9fd3fa9ac",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/13/99b0cc28ab12263ba10e4113757d78fe3a6a81": "9e3e201fae37af09c0b0be387f7771a9",
".git/objects/21/3f647ea01f85dd5d13da83646cb6104e351270": "edb7ff22ca8546a0a3d2ff5e2dfad9e9",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/33/750b50fac952df3423b02363bf25dbcb52a8f4": "8c676bebfaab9c4776cced26b01424ab",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3a/2b180c8fd24eec876f89ef5b3a47e3488b68af": "b8d26593e898a2fd17534a04a6a13dbe",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/3f/35b29bac84b75f872ef3322b6e3ef85f35652b": "93a02a60b3b7f81e146ca1ea25f67950",
".git/objects/45/2f8ce702ac7f364289d22e6baeff374f1efa40": "1b295f54674b30da05c93b1a0064feaa",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/45fccc2beab00dfbd332c7d1846572081a9bd5": "b5d7c1aea74801b62e6bca7b01cbcd78",
".git/objects/48/4f4d4bb4fd28fc4dbe9ec9d3486df253c5eaa7": "79de052f8750bb234565eccd5560aafc",
".git/objects/52/65eca52020aa0928d9b9dc2467adf7667c9787": "1614df896b08d794c1b8243ded822d65",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/6b/e15508599b5cb6c7ea467280fba32c4e8511bb": "15079a28256ab24f2496d25d6bab161b",
".git/objects/6e/7320497830fa356d5d7bae2b78a3a780a01ec0": "94f8ddcbe5d3cc32bf4605165c252844",
".git/objects/6f/4684e083a018fb2b9b3e3579fa83d88e00357d": "c36a0d2885d9ce067027d762572f1a49",
".git/objects/75/a06fd412032063098ea8a3e639b72688008816": "e1b61057ccea4748e9819d9a3759a608",
".git/objects/79/dde88768ce950be17105f87f1eb2c4a5d21e3b": "941ba987a4437c0a201c75ebae468c9d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/484da661bafcd16d5e4d09f07873c536235f1a": "a04ba86cecd8d461d2c9d11959c5b9e3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/9b/6ddf822425e7601eacfd733c74fca1ce9b3656": "96a3ab06413ef087398c5b4e61eccf4c",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/9f/b8679ec2400f3b9685f48dd354bc25db3fd2d7": "271e36442b573d2a04d73511cba16136",
".git/objects/a1/5201b5f0d16b08f9316d00a92bc827cc1f4800": "12dd6ab600c125ccd4476ee9a1ac489f",
".git/objects/a6/08a57b5f206a58243b99fd6d1c1e95a9387b53": "3fd69a499cc2abe6774e08d46ba591b0",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/ac/e9a3ab4e9359e7c79e92d0f8d0450e7a524ff7": "53eb67f22d754f3a260b01168884b12a",
".git/objects/b2/8b7aa530dc6d7e7dbc8f51ed2ea43ca53757e9": "eff2a501d860e6a084d356d0c6f09a5c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/c7/2f9c86df799651e8feda5acda03a5bb6e5c1f1": "1d9fd7db8260863fcd59e322bd81128e",
".git/objects/c9/52e74c99710146f4144daf6362bd06c4ccbe67": "ff5848dc8f27fe34153acf430b51e4fc",
".git/objects/cb/ea8d9d7bbafacda37031e95fb85f6d4efea3d6": "78fef0846ca33fc32235836d60f34e1c",
".git/objects/cd/cbc30d513d985334f20aa8f4d9abadf53d7a05": "32a4275da5b04012a2d37d619bd5d8ed",
".git/objects/d2/462853bb4879cc73f34ff646726644e23403ae": "1dff502f306deef6310424b360ae49d6",
".git/objects/d2/95fd52d0343565abdbc84abec859772aeafc56": "a046665bf06f113d7ccc40ac085ccfa5",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/9b89ccf11c3f0bf18229e8d1b40f4be57fc542": "ad8f25ed6638d54febed4bd177e82872",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/0411971d1dc622db4c1a4cbecd5565ddb6cd27": "29bfc4e6f1a9ba05c5e9c18a4e26f015",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/da/45bf70c065cf4705b8b9d23287bd469e411810": "2b5101fa9575e17cb134736efafbece1",
".git/objects/db/a031a7961eeb0d6898ed5b3ac8634d9bee6377": "cf2dcb55a1d813032eefcfaa2e0b1a1e",
".git/objects/de/7878551b8668d6a1f69e09316a056e61950569": "0ee9b070da9132408714613bd56c82d4",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/df/8f80bad2cf47096ad999f9eb0e8164f03a7016": "42a50218a254172ba91fe12efdb3fbea",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e1/f95f56e1bdad74a11a5625e7d15d795113dfbf": "565770d4359e8ddd3c5a61d0a075f978",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/ea/fa14396e58232d144dfd2886fe4e2f56f47c0b": "8d292be4a2dc94d139f7a0b17bd98d8d",
".git/objects/eb/11274e32c9d59d992c9ac24125a04bc62666e6": "f5b7cf77249b2d748fa81103ff18831b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
".git/ORIG_HEAD": "afcf5ecaa036c6a92ceccaeb1727c83d",
".git/refs/heads/main": "afcf5ecaa036c6a92ceccaeb1727c83d",
".git/refs/remotes/origin/main": "afcf5ecaa036c6a92ceccaeb1727c83d",
"assets/AssetManifest.bin": "d678b0fe1dee04fd527d13cb180ef823",
"assets/AssetManifest.json": "cc94a962b4fdf06d6d3fc23f2048903f",
"assets/assets/images/facebook.png": "9994f1dc7286d7f88b2af294f1927b6e",
"assets/assets/images/instagram.png": "6d4e8f2e7b946483b6374ed9603bdd63",
"assets/assets/images/linked_in.png": "28feebffb9050bafab007a3c42387fc8",
"assets/assets/images/profile.jpg": "a336bc762be4ce035084112019632e7c",
"assets/assets/images/telegram.png": "55e61a117af397bfafa660d24d8e3514",
"assets/assets/images/travelIti.png": "db20113ba771edcf23e73175635586ee",
"assets/assets/pdfs/1.pdf": "a01ea3da8c379984a49b9d68ffec160c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "b346d09c8b3a925aca68aa716a6263b4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/toast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/toast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "dd8297f1e381ff171ffaf82726055814",
"/": "dd8297f1e381ff171ffaf82726055814",
"main.dart.js": "b1ac4645ba724ff6f2a4efa17fa0ccb9",
"manifest.json": "41c5e407ddd6ec535b7273812b2ec522",
"version.json": "291173c5ed5164ff02f6454996cc9592"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
