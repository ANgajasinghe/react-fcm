import firebase from "firebase/app";
import "firebase/messaging";

var firebaseConfig = {
  apiKey: "AIzaSyAsQxOSgSP-jCdsbQBlj_xfMHk6Buzvf2o",
  authDomain: "testmessage-9f021.firebaseapp.com",
  projectId: "testmessage-9f021",
  storageBucket: "testmessage-9f021.appspot.com",
  messagingSenderId: "993513045248",
  appId: "1:993513045248:web:1f4f883cf057ce49f807e5",
  measurementId: "G-GMP887WYRS"
};


firebase.initializeApp(firebaseConfig);


console.log('Called From firebase init');



  firebase.messaging().onMessage(() => {
    alert('Notification received!');
  });


  let messaging = firebase.messaging();

  // messaging.onMessage(function (payload) {
  //   try { 
  //     console.log('Message received. ', payload);
  
  //     const noteTitle = payload.notification.title;
  //     const noteOptions = {
  //       body: payload.notification.body,
  //       icon: "typewriter.jpg",
  //     };
  
  //     console.log("title ", noteTitle, " ", payload.notification.body);

  //     new Notification(noteTitle, noteOptions).onclick = function (event) {
          
  //       if(payload && payload.notification &&  payload.notification.click_action &&  payload.notification.click_action.length > 0)
  //       {
  //         window.open(payload.notification.click_action, '_blank');
  //       }
  //       this.close();
  //     };
  //   }
  //   catch (err) {
  //     console.log('Caught error: ', err);
  //   }
  // });

  export { messaging };