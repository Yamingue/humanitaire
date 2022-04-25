// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDm1s2UtqlDKY2QeshyZuxHERzGQTw250w",
    authDomain: "recherche-d484c.firebaseapp.com",
    projectId: "recherche-d484c",
    storageBucket: "recherche-d484c.appspot.com",
    messagingSenderId: "101428087056",
    appId: "1:101428087056:web:e923e018ab31ca58d8fd95",
    measurementId: "G-WCQPEWDLC9"
  };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;