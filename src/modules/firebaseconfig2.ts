import { initializeApp } from "firebase/app";
import { ref, update, get, child, getDatabase } from "firebase/database";



 export const firebaseConfig2 = {
  apiKey: "AIzaSyBQ2ZDxlvYaZq0PVWa_tl7vf_faqLprtAs",
  authDomain: "leaderboard-361d1.firebaseapp.com",
  databaseURL: "https://leaderboard-361d1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "leaderboard-361d1",
  storageBucket: "leaderboard-361d1.appspot.com",
  messagingSenderId: "941981470099",
  appId: "1:941981470099:web:e52e638bafa719e9892c66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig2);
export const db = getDatabase(app);
