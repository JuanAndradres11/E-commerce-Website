// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWRo9RUeCvl6j6CtbW9Yd295winsaRBVo",
  authDomain: "ecommercswithreactandfir-32722.firebaseapp.com",
  databaseURL: "https://ecommercswithreactandfir-32722-default-rtdb.firebaseio.com",
  projectId: "ecommercswithreactandfir-32722",
  storageBucket: "ecommercswithreactandfir-32722.firebasestorage.app",
  messagingSenderId: "483623781535",
  appId: "1:483623781535:web:d1f055ff0f175364954eaa",
  measurementId: "G-JMKEZW2RGR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);