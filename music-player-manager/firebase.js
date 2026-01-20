// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXn66KVluCqCf0aKCgh7HXmcaWss76Twg",
  authDomain: "musicplayermanager1.firebaseapp.com",
  projectId: "musicplayermanager1",
  storageBucket: "musicplayermanager1.firebasestorage.app",
  messagingSenderId: "479766125796",
  appId: "1:479766125796:web:e346571d61912e4d3d20f1",
  measurementId: "G-3JCHKVRYWV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);