// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnKZARC1uwlG17obiwGRRCdwUHyJeqoFI",
  authDomain: "genius-car-ea232.firebaseapp.com",
  projectId: "genius-car-ea232",
  storageBucket: "genius-car-ea232.appspot.com",
  messagingSenderId: "781403675847",
  appId: "1:781403675847:web:03728347ca353283f772e2"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
