import firebase from "firebase/app";
import "firebase/analytics"; 
import "firebase/auth";
import "firebase/firestore";
import  "@firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC7qZJFY-a1V3NQT1aHbqYD18cjyd6QqvM",
    authDomain: "dentist-test-app.firebaseapp.com",
    projectId: "dentist-test-app",
    storageBucket: "dentist-test-app.appspot.com",
    messagingSenderId: "483235270636",
    appId: "1:483235270636:web:4e4e4bbea6bbc29ba2fac9",
    measurementId: "G-0XQBRKP5WM"
  };

  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.storage();
  const auth = firebase.auth();
  
  export {app as default, db, auth};