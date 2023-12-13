// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYiphtuQBTEoTsW9SGW2cpMTr6ENcAY6w",
  authDomain: "sih2023-c6860.firebaseapp.com",
  projectId: "sih2023-c6860",
  storageBucket: "sih2023-c6860.appspot.com",
  messagingSenderId: "321733721064",
  appId: "1:321733721064:web:3e49506482e294c118425d",
  measurementId: "G-8RCDWJZ7D3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export { app, analytics };
