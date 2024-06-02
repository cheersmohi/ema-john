import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZAE9UupC9pr5B2vqkuHU8SPDl1KDyJF4",
  authDomain: "ema-john-auth-project.firebaseapp.com",
  projectId: "ema-john-auth-project",
  storageBucket: "ema-john-auth-project.appspot.com",
  messagingSenderId: "671536398238",
  appId: "1:671536398238:web:7e33ece3ecf52a6502208f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
