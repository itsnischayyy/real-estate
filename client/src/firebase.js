// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-real-estate-b6bab.firebaseapp.com",
  projectId: "mern-real-estate-b6bab",
  storageBucket: "mern-real-estate-b6bab.appspot.com",
  messagingSenderId: "833364263694",
  appId: "1:833364263694:web:ed7cb863017eb3bb724d5f",
  measurementId: "G-KDKZM9M71H"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);