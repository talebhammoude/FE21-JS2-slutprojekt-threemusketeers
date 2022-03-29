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




const postOne = new Post("Talang", "Hii i feel good", new Date());

console.log(postOne);
let postArray: Post[] = [];

postArray.push(postOne);



async function writeToDb() {

  try {
    const docRef = await addDoc(collection(db, "post"), {
      user: "Ada",
      text: "Lovelace",
      time: 1815
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}


//writeToDb();