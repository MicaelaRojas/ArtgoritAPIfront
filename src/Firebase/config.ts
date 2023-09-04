// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtJ5p7P2DRW0B2cO0iSaf4wB3oH4V9uCw",
  authDomain: "artgorit-mr.firebaseapp.com",
  projectId: "artgorit-mr",
  storageBucket: "artgorit-mr.appspot.com",
  messagingSenderId: "1064046566476",
  appId: "1:1064046566476:web:69e78567649d73e895e8e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
export {auth}