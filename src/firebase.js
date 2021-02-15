import firebase from "firebase";
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD59ZdiZw1d7sqmbY3OZSngDgXJo9sYxrU",
    authDomain: "cartmaker-48cc7.firebaseapp.com",
    projectId: "cartmaker-48cc7",
    storageBucket: "cartmaker-48cc7.appspot.com",
    messagingSenderId: "141549675321",
    appId: "1:141549675321:web:26c7b1555bbb851716bee8"
  };
  // Initialize Firebase
var firebaseApp=firebase.initializeApp(firebaseConfig);
var db=firebaseApp.firestore()
export default db;