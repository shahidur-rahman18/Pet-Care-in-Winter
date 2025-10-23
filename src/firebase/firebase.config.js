// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOcUdwdUxq0NfHRGmRyl8fz5c44R6LgI8",
  authDomain: "pet-care-ebae2.firebaseapp.com",
  projectId: "pet-care-ebae2",
  storageBucket: "pet-care-ebae2.firebasestorage.app",
  messagingSenderId: "318437002361",
  appId: "1:318437002361:web:3a82e8f0a48197380498a8"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);