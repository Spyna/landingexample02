function pushNotificationSupported() {
  return "serviceWorker" in navigator && "PushManager" in window;
}

const randomIamges = [
  "https://via.placeholder.com/1024/f66b97",
  "https://via.placeholder.com/1024/006b97",
  "https://via.placeholder.com/1024/f60097",
  "https://via.placeholder.com/1024/f66b00",
  "https://via.placeholder.com/1024/f66baa",
  "https://via.placeholder.com/1024/f61197",
  "https://via.placeholder.com/1024/6611bb",
];

const TAG = "new-product";

let serviceWorker;

async function sendNotification() {
  // granted, default, denied
  const img = randomIamges[Math.round(Math.random() * randomIamges.length)];
  const text = "HEY! Take a look at this brand new shit!";
  const title = "New Product Available";
  const options = {
    body: text,
    icon: "/favicon.ico",
    vibrate: [200, 100, 200],
    tag: TAG,
    image: img,
    badge: "/favicon.ico",
    actions: [{ action: "Detail", title: "View", icon: "/favicon.ico" }],
  };
  await serviceWorker.showNotification(title, options);
}

function enableNotifications(registeredServiceWorker) {
  serviceWorker = registeredServiceWorker;
  const debugDiv = document.createElement("div");
  debugDiv.id = "push-notification-debug";
  debugDiv.innerHTML = "send me a notification";
  debugDiv.addEventListener("click", sendNotification);
  document.body.appendChild(debugDiv);

  registeredServiceWorker.addEventListener('message', event => {
    console.log(event.data.msg, event.data.url);
  });


}




function enablePushNotification() {
  navigator.serviceWorker.register("/sw.js");
  Notification.requestPermission(function(result) {
    if (result === "granted") {
      navigator.serviceWorker.ready.then(function(serviceWorker) {
        enableNotifications(serviceWorker);
      });
    }
  });
}

export { pushNotificationSupported, enablePushNotification };
