// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmB0u3dyi2q6DRnuTyUu00Z5vzPa6uBSU",
  authDomain: "feedback-58b40.firebaseapp.com",
  projectId: "feedback-58b40",
  storageBucket: "feedback-58b40.appspot.com",
  messagingSenderId: "1027860392309",
  appId: "1:1027860392309:web:f789242d9b2d3f78d34b3c",
  measurementId: "G-F64RX69GS1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {app, auth};