// Your web app's Firebase configuration
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";



 export const firebaseConfig = {
  apiKey: "AIzaSyAPKpit5d04AWFT78SRxmw69uKq1QvSMJE",
  authDomain: "slutprojekt-388c9.firebaseapp.com",
  databaseURL: "https://slutprojekt-388c9-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "slutprojekt-388c9",
  storageBucket: "slutprojekt-388c9.appspot.com",
  messagingSenderId: "730459260473",
  appId: "1:730459260473:web:8e236691a79061c4946fe8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);


  

 
