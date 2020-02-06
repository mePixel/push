self.addEventListener('push', () =>{
    self.registration.sendNotification('message' ,{});
});