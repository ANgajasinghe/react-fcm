
import './App.css';
import { useState } from 'react';
import {messaging}  from './firbase-init';

// firebase.initializeApp({
//   apiKey: "AIzaSyAsQxOSgSP-jCdsbQBlj_xfMHk6Buzvf2o",
//   authDomain: "testmessage-9f021.firebaseapp.com",
//   projectId: "testmessage-9f021",
//   storageBucket: "testmessage-9f021.appspot.com",
//   messagingSenderId: "993513045248",
//   appId: "1:993513045248:web:1f4f883cf057ce49f807e5",
//   measurementId: "G-GMP887WYRS"
// });


// function getToken() {
//   const messaging = firebase.messaging();
//   // [START messaging_get_token]
//   // Get registration token. Initially this makes a network call, once retrieved
//   // subsequent calls to getToken will return from cache.
//   messaging.getToken({ vapidKey: 'BDsB0IMAW4QE99IriYSYvwplUNcPkblPzlnhAl-ohZI08KWIUpy-BQtmidMA-YO3FvYIHObcfx76Yc_YPJ9ootk' }).then((currentToken) => {
//     if (currentToken) {
//       // Send the token to your server and update the UI if necessary
//       // ...
//       console.log(currentToken);
//     } else {
//       // Show permission request UI
//       console.log('No registration token available. Request permission to generate one.');
//       // ...
//     }
//   }).catch((err) => {
//     console.log('An error occurred while retrieving token. ', err);
//     // ...
//   });
//   // [END messaging_get_token]
// }


// function getMessagingObject() {
//   // [START messaging_get_messaging_object]
//   return firebase.messaging();
//   // [END messaging_get_messaging_object]
// }


// function requestPermission() {
//   // [START messaging_request_permission]
//   Notification.requestPermission().then((permission) => {
//     if (permission === 'granted') {
//       console.log('Notification permission granted.');
//       // TODO(developer): Retrieve a registration token for use with FCM.
//       // ...
//     } else {
//       console.log('Unable to get permission to notify.');
//     }
//   });
//   // [END messaging_request_permission]
// }



function App() {

 Notification.requestPermission().then((permission)=>{
    if(permission === 'granted'){
      console.log('Notification permission granted.');
        messaging.getToken({ vapidKey: 'BDsB0IMAW4QE99IriYSYvwplUNcPkblPzlnhAl-ohZI08KWIUpy-BQtmidMA-YO3FvYIHObcfx76Yc_YPJ9ootk' })
        .then(token=>{
          setToken(token)
        }).catch(err=>{console.log(err)})
    } else {
      console.log('Unable to get permission to notify.');
    }
  });


  const fcmListener = async () => {
    await messaging.onMessage(async remoteMessage => {
      console.log('remoteMessage: ', remoteMessage);
    });
  };


  fcmListener();


  const [token,setToken] = useState('');
  const [payload,setPayload] = useState('');


  return (
    <div className="App">
      
      <p>{token}</p>
      <p>{payload}</p>



    </div>
  );
}

export default App;
