'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "2528f937180c61a82ec39580ab0a4766",
"/": "2528f937180c61a82ec39580ab0a4766",
"assets/assets/coin.png": "60995eaf65e3e41cf20733c02ecf6a04",
"assets/assets/money-exchange.png": "8fe02330eecb12419543e7fa903a930d",
"assets/assets/online-payment.png": "82fa7a6c356238da9d917601310a387d",
"assets/assets/YouLogoHere.jpg": "ac251de765cd3efb130c3719148a8f43",
"assets/assets/Delivery-Cristina.jpg": "6b440ea1e060c30f04fc85815ae13001",
"assets/assets/cash-payment.png": "8cb1b34f26a0dd1eff7cc9a8d7423dc9",
"assets/assets/note.png": "9d71681a1adb99ae60d98fdc223534ea",
"assets/assets/driving-license.png": "fb14e5262fb260227d98991fc245420e",
"assets/assets/file.png": "e57dc3fa1ceee720c4a24e414069fcb5",
"assets/assets/debit-card.png": "174c423a8c310439dfbeb5f759378795",
"assets/assets/yooutlogoinapp.png": "738162151e84b8333dcccd878c8f9163",
"assets/assets/forget-password.jpg": "e5585993411dba0439860ddd4a9c3410",
"assets/assets/food-delivery.png": "8ca28be0d37b54c06b25422d098d78be",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/error_without_loop.flr": "35b9b6c9a71063406bdac60d7b3d53e8",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/error.flr": "87d83833748ad4425a01986f2821a75b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"assets/packages/flutter_credit_card/icons/visa.png": "9db6b8c16d9afbb27b29ec0596be128b",
"assets/packages/flutter_credit_card/icons/discover.png": "ea70c496dfa0169f6a3e59412472d6c1",
"assets/packages/flutter_credit_card/icons/mastercard.png": "7e386dc6c169e7164bd6f88bffb733c7",
"assets/packages/flutter_credit_card/icons/amex.png": "dad771da6513cec63005d2ef1271189f",
"assets/packages/flutter_credit_card/font/halter.ttf": "4e081134892cd40793ffe67fdc3bed4e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "256fb4950c3b816d208e7187590ac540",
"assets/AssetManifest.json": "400f595e73beb075bb8b3913a58f9d2c",
"assets/FontManifest.json": "fdb16fa5a241f69713c054de19a9ca3f",
"main.dart.js": "7c5eb016598dfe3854eaee345761e8e9",
"icons/icon-192x192.png": "2da99eb6926a5b7bc809cbf4803ca9e5",
"icons/icon-512x512.png": "3d3fa48b955b218fb42eef1378054e8d",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/index": "1ac8a9e03bd5cf15bd258830e7c774eb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/logs/HEAD": "b5ed363b8d3507360414d86643a2cbfd",
".git/logs/refs/remotes/origin/master": "ac2de46d32a342602b708028202f1509",
".git/logs/refs/heads/master": "b5ed363b8d3507360414d86643a2cbfd",
".git/config": "c371f96cf35ed141fc43fd3d223fc883",
".git/COMMIT_EDITMSG": "377c5382a43f9fc074ef6709665f1299",
".git/objects/dd/43db65edcbfd810943d4270e20d3703447c26d": "b41f2c4cbaf5f3425cc1445d4e1e098e",
".git/objects/21/be7289ed4ef005a55fa648e4157746c21695d2": "2f7f3ff782ff9c0e3aa36859e1e49a95",
".git/objects/42/f337395df4e32bce7ef6b4397709be8108e785": "aad95a058c95495b1032bf81de61c84f",
".git/objects/10/c1188b4e80f1b354698b5dfbcabec84907adf1": "1e3189f0349f54373046ef5bf840655e",
".git/objects/b5/354b51d3326d1dac9f10b2cdde0ae45102da5c": "72b2c084f03710993ae653ff82e379a0",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/b9/c4c2d1c2f9683735498785040d1d86797e87fe": "2e9fb2e65eeeb7c2094c207046bc214d",
".git/objects/23/33b03cb68e57e44767080cc5da8d66df2a3552": "c67f0fa8c08b19afa61554803d2bd3b9",
".git/objects/fe/c2653af7a925aa75aa11e8d49fb267deb96daf": "d81d96453f3dde30d8ceb77224acbdff",
".git/objects/77/834d6f9b6ee7c0f6122fe3799eb718d7de9809": "8290801317bced23a9e4c20e98fc0b84",
".git/objects/77/448c76569708e72411d3613e06bc2ecf2e8273": "1c8d02699bbb1dd3d3efa005bd372da3",
".git/objects/a4/a66a8f6f9e74b4983d59e45c32a7a3a46288d9": "28c327def82bfbfe1abf25d5c70ef871",
".git/objects/ed/63f67ef80cd7e2ebf27fb2204e810ec8a5715a": "10391c6510e626378bbf15bc3b3352c6",
".git/objects/ed/6eab322b1686cf8f0722b0435cf770fbcad9f9": "2a726b0c602cb407420de9605b513134",
".git/objects/ed/1916820f7b23084d7a7e03894d13f83e6156ee": "250e3325bc150fc27e59258a62a71d2f",
".git/objects/92/3edd79943ff00ec12cae045999760bca8cfdc8": "a28c6a31b7145ad3d94b283ede66167b",
".git/objects/97/a4bc76f8dd04d9c0e3c3a18afbedb2c73e54c5": "aeb2bc83cc0be148b377fe51e1eba249",
".git/objects/e6/d700a0fba50b6ae10a16732770c0aa92bb60fa": "f4d172305df7fb3d04878a614af40e60",
".git/objects/ff/f98530aca2303f714ff969243b95d9bfb755d1": "c2f1d1555d2e025e0356b2bbec7f0aaf",
".git/objects/af/3bd7d98e39e1ea85d715219470d1fdcf3865df": "14fc3d072132572049716e33887d72d1",
".git/objects/28/b2a69fbc2ca74bfabd4a70bffd0f6cdbcc1830": "3671e43af6e89beaf6d1e832667fcc89",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/e4/09fec61190b0d241c23b63cd76891d2ce2f0c5": "d60286c04bfadb0e103d396efaf91186",
".git/objects/63/8462b5967226bd83b9c899e9eba8e5f24e5ac6": "fbaa37fb3ac4c901bcf5e3ba47f30469",
".git/objects/63/c66e88ff2c934d0a55dce89570aff90c26b1fa": "85ae25c1b695adbb339ef4b7009b7108",
".git/objects/63/8b0b640747be92d6a09d079290609589832c00": "c445ea3385ab22ae1dd61aaac26647a9",
".git/objects/63/b8689069478c4bc8c90f0afcfec913410a5a36": "0fbb3aa3324e677ae2efa5e9909278dc",
".git/objects/61/0fc80b6e0db67e1e43c3acac4b3608bc6037d5": "ee54c445e8531ed813b595a79996bbb1",
".git/objects/6c/446f4672454678b4a00e4583b1a6447661adae": "10f1322f1055d8896a3535c504d4287d",
".git/objects/d4/22bd94ba65ebed542afe5e51f6a5dc918c4fc1": "ca784a3789386ef739c5d4a7d51ee054",
".git/objects/c7/8b5565fca1ece114626d752c576ff1a52987d2": "42d793b1d6b5aebbe26ebfbcd9a3cbbb",
".git/objects/4e/aeb865e76d59752820ee57196ba9452641babb": "295e4d048fc91dbd490f2105828f587f",
".git/objects/d9/2e84b2a817b97a8d45fb79595d38554df3fe13": "f6c4ac1a579bd4e2a5fa80394d66d32a",
".git/objects/fa/8572e81a7083934865606a34de126cc93a6fb6": "3ec667af6c46a75bbd6757b548e6ca29",
".git/objects/99/491a578e7c641f29e6c2c488349df3f687645c": "112b06b820c00ddb1a783e6f8f7926c7",
".git/objects/08/0760134610ea88748fc4a4c2e9d96cc6ee9fc2": "00887b2e9d14d5f3e9103c0abf437967",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/8a816ab910723cd2c04285c8a383083b9c6da4": "f72856a75d3f8cf4ea025501240e4cc1",
".git/objects/cf/437b08b5aa7021d0911111e1d7e56e7000e44d": "d772b7c8d44bbd597f0420b241a9ee08",
".git/objects/cf/47680e30b3db49090c85fd0d9ef7c155b03d0c": "3e72ae6d13dbe86311acd6b2b2223412",
".git/objects/1b/6afed35c69505af3cb10fcaa4874cf2aeee056": "f64cbc68ec48be57cc64f255c90b553e",
".git/objects/29/197ee834d976cbc63cc0ac99802564b2f1b4c1": "2e3eae374072963ad61b4f34b1fc3c94",
".git/objects/39/ad1263842458aa894d55d36d1550ed0c68986b": "a88117bea4bdb6b289ba08b3e0fd0223",
".git/objects/ce/b7c63f65a7190347da1d676f7cd7d57239e7ec": "0a63801336faf62d3e00bc847988a97e",
".git/objects/1e/c432610524b4748f446869d41429137079ed78": "1a1417b2501d60456531b65ae64d8c4d",
".git/objects/7a/f3ae7754991d1997cf1aa3974a5df14640e344": "a86a74662761247c07242028577a9dff",
".git/objects/bb/6b8375f9fad7813d98d850a3a70c847edab58a": "c07aae4704fa39bd9c996f99cbae913f",
".git/objects/ad/e4138a17993d7d8246f6e2ddd0095ffee65e18": "f34dcde6a11b488739e3420d35fdbb1e",
".git/objects/82/c84b8ce87373c324d476f09ae23b29592e1dbd": "c1a37875d0992a656b78e04e13569fd1",
".git/objects/bc/d696e5ffb6f28374930ae4f9aab91034869ba2": "b879e740aa575bae8bd9eabc77e62991",
".git/objects/ca/ddb563711538f8985f3f80d2c20e8fd4474211": "b2af2077fb76c078055398fb3232d8d7",
".git/objects/7f/0e32e5c5d63cefa69723da08833f5a3d2298d6": "89c82ab6a2747462edb3e417e10c454b",
".git/objects/0b/51ae864e67e73719455784e5b0f3e9e55c0773": "51c3e49ee310412d2d83588bd907a878",
".git/objects/0b/b2bf5e31b8e560bc731cfcaf4b1cf64ba0dbf8": "6ceabbba86d91229ae1a3eb4d81b9b29",
".git/objects/db/53053f1d269e0da4a176a05257b34695fbaae5": "ec40dd2074bb304448c7cc10363404ee",
".git/objects/93/492831141358a9bab0fa2117d300132b623647": "5d55db291f88e9b873f734c1ed22ce24",
".git/objects/93/2df4ae2c3cb34a716e21b478590eecaa2ae295": "e299ba2e68d97d0f661cc8ddccf9787a",
".git/objects/93/57f0b1248e0ace6ac5bd7913bb82ded5936ec2": "2e09ea2656d5dbdd1a2762d4b14ac705",
".git/objects/4b/eed3cec287e42598aea24431ceaff5777af0c7": "66660a44fba028c7b885e68558653fb7",
".git/objects/3c/ef820e237bbf202c20bd5a5cfd16200e581121": "82889d27a14a7cf3eb3553294ad9f612",
".git/objects/c5/620412f6c68e41101df3d24b84f5873a17b10c": "6971ae94a3b6553cc93da25360a56319",
".git/objects/d7/f97da62f5fbb3717ab5d7662d922627f87af36": "144ed87fb60e9da381ae927872b75b40",
".git/objects/47/f16692b7fbb1c3c98730ac6a8086365f8540df": "188ec1c1fe19591a725ecb9d2c01c0e3",
".git/objects/47/0cfb5b1dd04b6955ed2b8f930ad2efef2c7b97": "113c7e716fd752a405cb889725565c7b",
".git/objects/e7/9743c1e62cc6299a7f523285e0e29c4acb9fb4": "d38f36d663ca27f22687a2d7a35f7c89",
".git/objects/74/d99d9f927f0d180d2bd003a142fc413bf9e4d9": "9fa5a3eca468b67540bb3c94385eb0e0",
".git/objects/4c/57a4c8755373a911bfc4296483ed3f137dca6a": "adb5cff767672600c9b821d24845bf97",
".git/objects/2e/41568cfbda4c69194740e9d48eac973b41fec0": "289e037de01d5c52ef23bc83ebe8e1bb",
".git/objects/00/546cc630800271384930ff34d7cfef47c3aa64": "f478045a0ebc42337c297290a2113d57",
".git/objects/36/ff2e38605b1f8b33f897d5bf82872660020364": "17d45d42667665299be5552840b18ccc",
".git/objects/4f/301997e4350350fd8f24ed31d4d5598204135a": "b10db312881c3d29be29e01a37eeb9cf",
".git/objects/b6/187947fae7a137ae42073b6f3de1418290e066": "b928c03d21b575b2060298d02566acd6",
".git/objects/b6/a28389fc3ee5bf98e75a52072d218cf1476063": "f302c75a454a8fd247fcc769eda8426a",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/48/16c9d283ca08a88f9ba0848948c1fb54eb9a3c": "2ba09d96cc2b7267364c3df7789a02d7",
".git/objects/62/6afd3a77c0236a0b188ae3457270d42340503c": "6020fc64ba883b6c6b8312894f23af3c",
".git/objects/e8/d2220a46b01caf0f544e82fb4d30b6eb84d366": "1cfff59c5a36789f60a0b9a76b661e76",
".git/objects/1c/82f2fe977e62d88f2ce84ae818fcff682d387e": "6c75d165b0c8a3d5e1e8b66b0c8b26c9",
".git/objects/eb/b3e386d9beab5e60c9577d9dd7cc77f19d3763": "6369095b4f06477ce1a98c59e4d6b2ae",
".git/objects/49/133379e7f803c60e4360a97bb3b2fcc041475c": "baa6f01df91de3b5ac0ab28b72385653",
".git/objects/ab/36c124174029b9b423c490a8ddeac908767714": "9a828e9d4fac5f9b0e3d0915d101f173",
".git/objects/f6/28653464322e1f7ad884747afbfeb17ec6defa": "bf6c8da0a718b6b1fbdbdbade35984c7",
".git/objects/f6/e58f4e8d971114bcaf195292bbcf9d729151cb": "b374f6fb56fc58b286d574080d142548",
".git/objects/9c/6aa9c02ba13db8d70390981d5aa74a09862b2c": "e3566bf6cc7806f1ac5ac97db4d2b73f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/31/d8b131b58e668453612c5642413cc08f2a3ab6": "16eefe251856a08ac47e8614ff5f12b7",
".git/objects/c2/a728121cc94290e0e8dbde82b1e5125d5465a6": "f2989bf1405fb660305820683b8ee53c",
".git/objects/17/d39f27727c2a852461391eb71209913508f314": "a8494767d229fe34494bb3661c7c219e",
".git/objects/43/08403165326477f8b42dea3f0b2714f027e9ca": "a5b2404374f1a2bd31656c38f198d4ce",
".git/objects/43/46e2d9e671bf7a5a3287a3ddacf5f915a35d4f": "41b3d0d418188d18de1ec7daf79f5299",
".git/objects/2f/0246071e3311d53d804be776af02f2cdd9b2e1": "2a0c6c2e528451a9fb51d3c0463b70cf",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/refs/remotes/origin/master": "caa88c8b0e915831d9b82d4e3564ab42",
".git/refs/heads/master": "caa88c8b0e915831d9b82d4e3564ab42",
"manifest.json": "9a669d8ddca0f02077039b7b3d64aae5",
"favicon.png": "764f665ad5ac5796e326d5fa8de11744",
"version.json": "b5170e0e427eb26adc16f936e00f3757",
"firebase-messaging-sw.js": "8be7e225bc98a13d818a3c5a2259d93c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
