importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-messaging.js');

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
        navigator.serviceWorker.register('./firebase-messaging-sw.js')
        .then((registration)=>{console.log('Firebase Registered:', registration.scope)})
        .catch((err)=>{console.log('Firebase-SW Error:', err)});
    });
}

firebase.initializeApp({
    messagingSenderId: "707252856332",
})

const initMessaging = firebase.messaging();