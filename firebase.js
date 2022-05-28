// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCa7YYt9cAxGmcHOJmOtwBGCbG22CasHwY",
  authDomain: "fir-auth-71759.firebaseapp.com",
  projectId: "fir-auth-71759",
  storageBucket: "fir-auth-71759.appspot.com",
  messagingSenderId: "866663538427",
  appId: "1:866663538427:web:d0eab9473667487fb45a5e"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const auth = firebase.auth();

export { auth }
