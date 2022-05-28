// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDP-PZQzeoOtDIFvAkCpJ9oBjQxfryXfm4",
  authDomain: "orbital-2022-80e8a.firebaseapp.com",
  projectId: "orbital-2022-80e8a",
  storageBucket: "orbital-2022-80e8a.appspot.com",
  messagingSenderId: "876337794196",
  appId: "1:876337794196:web:76f1e8d5c738598cb5b881"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);