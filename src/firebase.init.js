// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJ2fiOsFCdpWrum23qrDM0dYftKDuDE9Q",
  authDomain: "nayem-photography.firebaseapp.com",
  projectId: "nayem-photography",
  storageBucket: "nayem-photography.appspot.com",
  messagingSenderId: "554963521663",
  appId: "1:554963521663:web:76f0389f5066383aafaf4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;