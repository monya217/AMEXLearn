// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAMNJDGUSfcgD6MfbFF_1mNR3q83evUbrM",
  authDomain: "amexlearn-f477b.firebaseapp.com",
  projectId: "amexlearn-f477b",
  storageBucket: "amexlearn-f477b.appspot.com",
  messagingSenderId: "545469997332",
  appId: "1:545469997332:web:411575e6e57c5ebd216201",
  measurementId: "G-KLQM4Q26ZK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, auth, firestore, storage};