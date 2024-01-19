// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app"
import {getStorage} from "firebase/storage"
import "firebase/compat/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiQvHGIUongVSD4kXgeGihbYYYvJK3n1k",
  authDomain: "nbascoreapp.firebaseapp.com",
  projectId: "nbascoreapp",
  storageBucket: "nbascoreapp.appspot.com",
  messagingSenderId: "741715084074",
  appId: "1:741715084074:web:950a6e98c878fdff3a1453",
  measurementId: "G-QV1EXQQ44J"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default firebase; 
export const storage = getStorage(app);