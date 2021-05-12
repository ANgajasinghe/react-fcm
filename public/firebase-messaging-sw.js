
  importScripts('https://www.gstatic.com/firebasejs/8.4.3/firebase-app.js');
  importScripts('https://www.gstatic.com/firebasejs/8.4.3/firebase-messaging.js');

  firebase.initializeApp({
    apiKey: "AIzaSyAsQxOSgSP-jCdsbQBlj_xfMHk6Buzvf2o",
    authDomain: "testmessage-9f021.firebaseapp.com",
    projectId: "testmessage-9f021",
    storageBucket: "testmessage-9f021.appspot.com",
    messagingSenderId: "993513045248",
    appId: "1:993513045248:web:1f4f883cf057ce49f807e5",
    measurementId: "G-GMP887WYRS"
  });
  

const messaging = firebase.messaging();



function onBackgroundMessage() {
  const messaging = firebase.messaging();
  messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
      body: 'Background Message body.',
      icon: '/firebase-logo.png'
    };
  
    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });
}

