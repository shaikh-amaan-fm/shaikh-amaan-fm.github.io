self.addEventListener('fetch', function(event) {
    console.log('Handling fetch event for', event.request.url);
  
    event.respondWith(
      caches.match(event.request).then(function(response) {
        if (response) {
          console.log('Found response in cache:', response);
  
          return response;
        }
        console.log('No response found in cache. About to fetch from network...');
  
        return fetch(event.request).then(function(response) {
          console.log('Response from network is:', response);
  
          return response;
        }).catch(function(error) {
          console.error('Fetching failed:', error);
  
          throw error;
        });
      })
    );
  });

  self.addEventListener("sync",async ev=>{
      console.log("Syncing in Background");
      console.log(ev);
      let res = true;
      if(res) {
          console.log("New Notification found:",res);
      }
      try {
          return await fetch(ev.request);
      }
      catch(e) {
          console.log("Error in request",e);
      }
  });

  