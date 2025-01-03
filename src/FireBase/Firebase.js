// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcZ73yV-C8xQZVOG1zO6PEjLTrVxwPCVs",
  authDomain: "demo2-9a6fd.firebaseapp.com",
  projectId: "demo2-9a6fd",
  storageBucket: "demo2-9a6fd.firebasestorage.app",
  messagingSenderId: "285029825824",
  appId: "1:285029825824:web:3833b60094698a6000eb45",
  measurementId: "G-5Y2CJ8BLNK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
// database 
export const db = getFirestore(app);

const analytics = getAnalytics(app);
