import {Post} from "./modules/post";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";


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


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


const userValue = document.querySelector(".user-class").innerHTML;
const postText = document.querySelector(".post-text") as HTMLDataElement
const postBtn = document.querySelector(".post-btn");




async function writeToDb() {
  const postOne = new Post(userValue, postText.value, new Date());

  try {
    const docRef = await addDoc(collection(db, "post"), {
      user: postOne.username,
      text: postOne.text,
      time: postOne.time
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}






postBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    writeToDb();
    postText.value = "";
    
})