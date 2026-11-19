const CACHE='lunalife-v3';
const BASE=new URL('./', self.location.href);
const CORE=['index.html','styles.css','app.js','firebase-config.js','manifest.webmanifest','apple-touch-icon.png','icon-192.png','icon-512.png'].map(path=>new URL(path,BASE).toString());
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE))));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('lunalife-')&&key!==CACHE).map(key=>caches.delete(key))))));
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET') return;
  const requestUrl=new URL(event.request.url);
  if(requestUrl.origin!==self.location.origin) return;
  event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(response=>{
    if(response.ok){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy));}
    return response;
  }).catch(()=>caches.match(new URL('index.html',BASE).toString()))));
});
