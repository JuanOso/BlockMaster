import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFeEYx02cucJRHTxGMUIG877t_xP24BUI",
  authDomain: "sprint3-73a0a.firebaseapp.com",
  projectId: "sprint3-73a0a",
  storageBucket: "sprint3-73a0a.appspot.com",
  messagingSenderId: "604833289643",
  appId: "1:604833289643:web:a07a1c64baec5c2fceaeee"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {
    app, 
    db
}