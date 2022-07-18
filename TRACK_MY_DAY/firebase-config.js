import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


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
export const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);

export const db = getFirestore();

// Google Login
export const provider = new GoogleAuthProvider(app);
