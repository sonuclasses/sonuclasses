self.addEventListener('install', (e) => {
  console.log('[Service Worker] App Installed');
});

self.addEventListener('fetch', (e) => {
  // यह कोड मोबाइल को बताता है कि यह एक असली ऐप है
});
