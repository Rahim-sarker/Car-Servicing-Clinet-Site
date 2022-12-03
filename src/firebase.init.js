// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdbG5u4GCUbrGMl-Ioo4FkQGyhmSavZ1E",
  authDomain: "genius-car-servicing-project.firebaseapp.com",
  projectId: "genius-car-servicing-project",
  storageBucket: "genius-car-servicing-project.appspot.com",
  messagingSenderId: "1052579354028",
  appId: "1:1052579354028:web:519537ed5d518092899609",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
