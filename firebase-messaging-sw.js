importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDCzAhpQonWiNDtWmyox5QdPd4xRbpOy30",
  projectId: "sonuclasses-b19db",
  messagingSenderId: "166740602272",
  appId: "1:166740602272:web:af9131ad8c5e4c8fca08c5"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Background Message Received', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'Screenshot_2026-02-20-17-10-57-613_com.google.android.googlequicksearchbox.jpg'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
