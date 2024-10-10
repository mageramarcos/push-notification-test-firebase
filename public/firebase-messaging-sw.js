/* eslint-disable no-undef */
// importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');


importScripts('https://www.gstatic.com/firebasejs/10.14.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.14.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "Inserir aqui",
  authDomain: "Inserir aqui",
  projectId: "Inserir aqui",
  storageBucket: "Inserir aqui",
  messagingSenderId: "Inserir aqui",
  appId: "Inserir aqui",
  measurementId: "Inserir aqui"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log('Received background message', payload);
  // const notificationTitle = payload.notification.title;
  // const notificationOptions = {
  //   body: payload.notification.body,
  //   icon: '/firebase-logo.png'
  // };
  // /* eslint-disable-next-line no-restricted-globals */
  // self.registration.showNotification(notificationTitle, notificationOptions);
});
