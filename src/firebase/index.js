// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbK3U3gjSn6OdPsvpWWjelK148xogaw7s",
  authDomain: "myfirebase-c87b1.firebaseapp.com",
  projectId: "myfirebase-c87b1",
  storageBucket: "myfirebase-c87b1.appspot.com",
  messagingSenderId: "204534680381",
  appId: "1:204534680381:web:8635c7abdf0833713fd354"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};