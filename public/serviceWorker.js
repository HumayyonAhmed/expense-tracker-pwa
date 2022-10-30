const CACHE_NAME = "v1";
const urlsToCache = ['index.html', '.', 'manifest.json'];

const self = this;

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log("Opened cache");

                return cache.addAll(urlsToCache);
            })
    )
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request)
            .then((response) => {
                if (response) {
                    return response;
                  }
                  return fetch(e.request).then(
                    function(response) {
                      // Check if we received a valid response
                      if(!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                      }
                      
                      var responseToCache = response.clone();
          
                      caches.open(CACHE_NAME)
                        .then(function(cache) {
                          cache.put(e.request, responseToCache);
                        });
          
                      return response;
                    })
                })
            // return fetch(e.request)
            //     .catch(() => caches.match(e.request));
            // })
        //use this if you want to automatically cache whole site
        // fetch(e.request).then(res=>{
        //     //Make Copy of response
        //     const resClone = res.clone();
        //     //Open Cache
        //     caches.open(cacheName).then(cache=>{
        //         cache.put(e.req, resClone);
        //     }).catch(err => caches.match(e.request)).then(res=>res)
        // })
    );
});

self.addEventListener('activate', (e) => {
    const cacheWhiteList = [];
    cacheWhiteList.push(CACHE_NAME);
    e.waitUntil(
        caches.keys()
            .then((cacheNames) => Promise.all(cacheNames.map((cacheName) => {
                if (!cacheWhiteList.includes(cacheName)) {
                    return caches.delete(cacheName);
                }
            })
            )
            )
    )
});