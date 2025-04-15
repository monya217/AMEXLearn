// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBtZLNld7rsnRH_83ECnJX8spSdId7Wmrc",
  authDomain: "amexlearn-dfbd7.firebaseapp.com",
  projectId: "amexlearn-dfbd7",
  storageBucket: "amexlearn-dfbd7.appspot.com",
  messagingSenderId: "761325956199",
  appId: "1:761325956199:web:3d092e139a26b06e5338c2",
  measurementId: "G-NQZK4XN97H"
};

// Log the config to ensure variables are read correctly
console.log('Firebase config:', firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Check if the app is initialized correctly
if (!app) {
  throw new Error("Firebase app initialization failed");
}

const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
