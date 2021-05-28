import firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJoYCvndGbuqiQEACKcDEKQZNg5zzLFuE",
  authDomain: "fightstop-f658e.firebaseapp.com",
  projectId: "fightstop-f658e",
  storageBucket: "fightstop-f658e.appspot.com",
  messagingSenderId: "1034341126732",
  appId: "1:1034341126732:web:7d42bea7676b9f6bd7dae9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
