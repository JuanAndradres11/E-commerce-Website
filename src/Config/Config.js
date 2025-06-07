// For Firebase v8 style
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBWRo9RUeCvl6j6CtbW9Yd295winsaRBVo",
  authDomain: "ecommercswithreactandfir-32722.firebaseapp.com",
  databaseURL: "https://ecommercswithreactandfir-32722-default-rtdb.firebaseio.com",
  projectId: "ecommercswithreactandfir-32722",
  storageBucket: "ecommercswithreactandfir-32722.appspot.com", // ✅ fixed this too
  messagingSenderId: "483623781535",
  appId: "1:483623781535:web:d1f055ff0f175364954eaa",
  measurementId: "G-JMKEZW2RGR"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage };
