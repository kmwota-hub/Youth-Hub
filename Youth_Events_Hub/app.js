// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmBmsDrlJGIZ-24cl_cadg5hp0AzVBy14",
  authDomain: "youth-hub-1eaa2.firebaseapp.com",
  projectId: "youth-hub-1eaa2",
  storageBucket: "youth-hub-1eaa2.firebasestorage.app",
  messagingSenderId: "1019122044970",
  appId: "1:1019122044970:web:5868e0ce0fa464b5073353"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

function loginGoogle(){
  const provider=new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider);
}
function loginEmail(){
  const email=prompt("Enter email:");
  const pass=prompt("Enter password:");
  auth.signInWithEmailAndPassword(email,pass)
    .catch(()=>auth.createUserWithEmailAndPassword(email,pass));
}
