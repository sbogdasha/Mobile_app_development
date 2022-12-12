// Import the functions you need from the SDKs you need
//import * as firebase from 'firebase'
import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEXVw9iwYeTPC3PIbYa8JNXlZBGDpsvhM",
  authDomain: "beetroot-academy-318813.firebaseapp.com",
  projectId: "beetroot-academy-318813",
  storageBucket: "beetroot-academy-318813.appspot.com",
  messagingSenderId: "153821118274",
  appId: "1:153821118274:web:9c578806d222b3961b52db",
  measurementId: "G-Y9KW7RXZ5W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
