// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkAPrz74FnfL7WtebRH7eiodDeTFC6P2M",
  authDomain: "pensieve-474ee.firebaseapp.com",
  projectId: "pensieve-474ee",
  storageBucket: "pensieve-474ee.appspot.com",
  messagingSenderId: "723547386355",
  appId: "1:723547386355:web:46c32faa661b3b747e6286",
  measurementId: "G-PCCS6RBJ4D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);