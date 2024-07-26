// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
  apiKey: "AIzaSyAkR1K2KBlI3fSLXYsMHfMzhKjWBVo0N08",
  authDomain: "tripadvisor-eb691.firebaseapp.com",
  projectId: "tripadvisor-eb691",
  storageBucket: "tripadvisor-eb691.appspot.com",
  messagingSenderId: "1088119691814",
  appId: "1:1088119691814:web:60b60f1193ef5d66c524e7",
  measurementId: "G-EHJR84W6V0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
// const analytics = getAnalytics(app);