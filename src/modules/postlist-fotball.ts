import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, orderBy, where } from "firebase/firestore";
import { firebaseConfig } from "./firebaseconfig";


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const postsRef = collection(db, "post");
const q = query(postsRef, where("category", "==", 1) ,orderBy("time"));


async function renderPostListFotboll() {

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
    
    document.querySelector(".post-list").innerHTML += `
    <div class="the-post">
       <h2 class="postUserName" value="${doc.data().user}">${doc.data().user}</h2>
       <p class="theText">${doc.data().text}</p>
       
    </div>
   `



   
});




}


export {renderPostListFotboll};