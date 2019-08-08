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

function sendNotification() {
  // granted, default, denied
  var img = randomIamges[Math.round(Math.random() * randomIamges.length)];
  var text = "HEY! Take a look at this brand new shit!";
  var notification = new Notification("New Product Available", {
    body: text,
    icon: img,
  });
  notification.onclick = function(event) {
    console.log(event.target);
    window.open(event.target.icon, "_blank");
  };
  setTimeout(notification.close.bind(notification), 8000);
}

function enableNotifications() {
  const debugDiv = document.createElement("div");
  debugDiv.id = "push-notification-debug";
  debugDiv.innerHTML = "send me a notification";
  debugDiv.addEventListener("click", sendNotification);
  document.body.appendChild(debugDiv);
}

function enablePushNotification() {
  return Notification.requestPermission().then(result => {
    console.log(result);
    switch (result) {
      case "granted":
        enableNotifications();
        return true;
      default:
        return false;
    }
  });
}

export { pushNotificationSupported, enablePushNotification };
