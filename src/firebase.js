import firebase from "firebase"

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBcFDnIMikXZM18WIRyvRmfnM1k43_WePY",
    authDomain: "pwa-expense-tracker-24f7b.firebaseapp.com",
    projectId: "pwa-expense-tracker-24f7b",
    storageBucket: "pwa-expense-tracker-24f7b.appspot.com",
    messagingSenderId: "707252856332",
    appId: "1:707252856332:web:ff4df62f628d8985433029"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;