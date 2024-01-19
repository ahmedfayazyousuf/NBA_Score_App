// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app"
import {getStorage} from "firebase/storage"
import "firebase/compat/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBk0H5cVehvpUACCt33buLfRIDRtFIlK1o",
  authDomain: "nba-registration.firebaseapp.com",
  projectId: "nba-registration",
  storageBucket: "nba-registration.appspot.com",
  messagingSenderId: "1062017671050",
  appId: "1:1062017671050:web:12dae018088523c5543273",
  measurementId: "G-TVPXE6JCNX"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default firebase; 
export const storage = getStorage(app);