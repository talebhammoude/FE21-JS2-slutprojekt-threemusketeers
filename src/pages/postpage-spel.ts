import {Post} from "../modules/post";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, deleteDoc } from "firebase/firestore";
import { firebaseConfig } from "../modules/firebaseconfig";


import { renderPostListSpel } from "../modules/postlist-spel";






let loginUserName = document.querySelector(".user-class") as HTMLInputElement;
let storedLoginName:string = localStorage.getItem("loginName");
loginUserName.value = localStorage.getItem("loginName");
loginUserName.innerHTML = localStorage.getItem("loginName");


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


const userValue = document.querySelector(".user-class").innerHTML;
const postText = document.querySelector(".post-text") as HTMLDataElement
const postBtn = document.querySelector(".post-btn");


renderPostListSpel();


async function writeToDb() {
  const postObj = new Post(userValue, postText.value, 3, new Date());

  try {
    const docRef = await addDoc(collection(db, "post"), {
      user: postObj.username,
      text: postObj.text,
      category: postObj.category,
      time: postObj.time
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


setTimeout(deleteButtonFunction, 1000);


function deleteButtonFunction () {

    document.querySelectorAll(".postUserName").forEach((e)=>{

      if(e.getAttribute("value") == storedLoginName ){
        e.innerHTML += `
        <button class="deleteBtn">X</button>
        `
      }

  })



  async function deleteFromDb (theIdToDelete) {

    await deleteDoc(doc(db, "post", theIdToDelete));

  }



  document.querySelectorAll("button").forEach((e)=>{

    e.addEventListener("click", (event) => {
      event.preventDefault();
      deleteFromDb(event.path[1].id);
      
    })
  
  })


}
