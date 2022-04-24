// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYT_fZDSmNvyIKQw_aV08zLiWcu6DgVGE",
  authDomain: "recherche-d38d8.firebaseapp.com",
  projectId: "recherche-d38d8",
  storageBucket: "recherche-d38d8.appspot.com",
  messagingSenderId: "833968058377",
  appId: "1:833968058377:web:6cd86d8618c08505b1c8d8",
  measurementId: "G-V3RY2PM16Y"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;