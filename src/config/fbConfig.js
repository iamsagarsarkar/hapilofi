// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import {getStorage} from "@firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgwkzHlbskbOXXLOuOr20S73JseSdpIHM",
  authDomain: "hapilofi.firebaseapp.com",
  projectId: "hapilofi",
  storageBucket: "hapilofi.appspot.com",
  messagingSenderId: "564066908419",
  appId: "1:564066908419:web:fc7fbd05e13864445d9136",
  measurementId: "G-8NR2MWZEND"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const storage = getStorage(app);