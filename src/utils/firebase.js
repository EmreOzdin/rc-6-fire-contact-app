// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEjOEovXKhFsk_-ADbOji9jbJ-G7pGSJ0",
  authDomain: "fire-contact-base-project.firebaseapp.com",
  databaseURL: "https://fireapp-508af-default-rtdb.firebaseio.com/",
  projectId: "fireapp-508af",
  storageBucket: "gs://fireapp-508af.appspot.com",
  messagingSenderId: "366662003509",
  appId: "1:366662003509:web:926e1a4a2eab9d82d95ff4",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;

