// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp1gw0Uxf1Nc6xTHM4ZsYaIM0067_qkA0",
  authDomain: "unichamba-redux.firebaseapp.com",
  projectId: "unichamba-redux",
  storageBucket: "unichamba-redux.firebasestorage.app",
  messagingSenderId: "387147751790",
  appId: "1:387147751790:web:d74c50e0bfc44c7970e17f"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

// Authentication 
export const firebaseAuth = getAuth( firebaseApp );

// DB
export const firebaseDB = getFirestore( firebaseApp); 
