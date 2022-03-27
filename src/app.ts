
import {Post} from "./modules/post";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPKpit5d04AWFT78SRxmw69uKq1QvSMJE",
  authDomain: "slutprojekt-388c9.firebaseapp.com",
  projectId: "slutprojekt-388c9",
  storageBucket: "slutprojekt-388c9.appspot.com",
  messagingSenderId: "730459260473",
  appId: "1:730459260473:web:8e236691a79061c4946fe8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



const postOne = new Post("Talang", "Hii i feel good", 13);

postOne.console();