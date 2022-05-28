// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPzbOvxXtzISdhpF3fSely5kZN11HZ7Zk",
  authDomain: "navigationex-f3f57.firebaseapp.com",
  projectId: "navigationex-f3f57",
  storageBucket: "navigationex-f3f57.appspot.com",
  messagingSenderId: "165953279086",
  appId: "1:165953279086:web:724e6b0580bdb8d2d3427f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);