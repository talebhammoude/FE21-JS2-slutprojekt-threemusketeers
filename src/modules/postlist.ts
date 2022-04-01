import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { firebaseConfig } from "./firebaseconfig";


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


async function renderPostList() {

    const querySnapshot = await getDocs(collection(db, "post"));
    querySnapshot.forEach((doc) => {
    console.log(doc.data());

    document.querySelector(".post-list").innerHTML += `
    <div class="the-post">
       <h2>
           ${doc.data().user}
       </h2>
       <p class="theText">${doc.data().text}</p>
    </div>
   `
});
}


export {renderPostList};