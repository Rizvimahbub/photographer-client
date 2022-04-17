// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEouTualEWSn-EJYpdMiwRYH-ffGLcP7k",
  authDomain: "genius-car-services-c36b0.firebaseapp.com",
  projectId: "genius-car-services-c36b0",
  storageBucket: "genius-car-services-c36b0.appspot.com",
  messagingSenderId: "714877711994",
  appId: "1:714877711994:web:6671d6e9216cfa8ce2adc3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;