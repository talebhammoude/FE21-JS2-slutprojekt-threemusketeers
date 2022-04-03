// Your web app's Firebase configuration
import { initializeApp } from "firebase/app";
import { ref, update, get, child, getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyAPKpit5d04AWFT78SRxmw69uKq1QvSMJE",
  authDomain: "slutprojekt-388c9.firebaseapp.com",
  projectId: "slutprojekt-388c9",
  storageBucket: "slutprojekt-388c9.appspot.com",
  messagingSenderId: "730459260473",
  appId: "1:730459260473:web:8e236691a79061c4946fe8"
};


   export {firebaseConfig};



  

  const dbApp =initializeApp(firebaseConfig)

  export const db = getDatabase(dbApp);
