// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRZa_BObtvY0Tg-GrwEPCJjIvvqWYdcyM",
  authDomain: "greydive-trujillo.firebaseapp.com",
  databaseURL: "https://greydive-trujillo-default-rtdb.firebaseio.com",
  projectId: "greydive-trujillo",
  storageBucket: "greydive-trujillo.appspot.com",
  messagingSenderId: "916282368015",
  appId: "1:916282368015:web:8f12bd4321f11c2cb0437a",
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase;
