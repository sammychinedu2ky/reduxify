const staticCache = 'static-v1.1';
const dynamicCache = 'dynamic-v1.1';
const staticAssets = [
  '/',
  './index.html',
  './js/index.js',
  './js/redux.min.js',
  './css/style.css',
  './pages/offline.html'
]

self.addEventListener('install', async event => {
  try {
    let cache = await caches.open(staticCache);
    await cache.addAll(staticAssets)
  }
  catch (err) {
    console.error("An error occured", err)
  }
})

self.addEventListener('activate', async event => {
  const keys = await caches.keys();
  const uselessKeys = keys.filter(key => key !== staticCache);
  uselessKeys.map(key => caches.delete(key))
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
      .then(fetchResponse => caches.open(dynamicCache)
        .then(cache => {
          cache.put(event.request.url, fetchResponse.clone())
          return fetchResponse
        }
        )
      ).catch(() => caches.match('./pages/offline.html'))
  )
})



/*
self.addEventListener('fetch', event => {
  event.respondWith(async function () {
    try {
      const cachedResponse = await caches.match(event.request);
      if (cachedResponse) return cachedResponse;
      return fetch(event.request);
    }
    catch (error) {
      caches.match('./pages/offline.html')
    }
  }())
})
*/