import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseconfig";
import { db } from "./firebaseconfig";
import { ref, update, get, child, getDatabase } from "firebase/database";
import { DisplaySignLog } from "./domSignLog";

initializeApp(firebaseConfig);
const dbRef = ref(db, "/userlist/");
const display = new DisplaySignLog();

export class SignUpSignIn {
  public username: HTMLInputElement;
  public password: HTMLInputElement;
  public bio: HTMLInputElement;

  constructor(username?: HTMLInputElement, password?: HTMLInputElement) {
    this.username = username;
    this.password = password;
  }
  //logIn
  public logIn(): void {
    document.getElementById("loginBtn").addEventListener("click", (e) => {
      e.preventDefault();

      const dbRef = ref(getDatabase());
      this.username = document.querySelector("#username");
      this.password = document.querySelector("#password");
      this.bio = document.querySelector("#bio");
      
      get(child(dbRef, `userlist/${this.username.value}`)).then(
        (snapshot) => {

          if (this.username.value == "" || this.password.value == "") {
            display.fillInputBox();
          } else if (this.password.value != snapshot.val().password) {
            display.wrongPassword();
          } else if (this.password.value == snapshot.val().password) {
            location.href = "./html/katesidan.html"; 
          }
        }
      );
    });
  }
  //create new user
  public createNewUser(): void {
    document.getElementById("createBtn").addEventListener("click", (e) => {
      e.preventDefault;
      
      this.username = document.querySelector("#username");
      this.password = document.querySelector("#password");
      const bio: HTMLInputElement = document.querySelector("#bio");
      const theUsername: string = this.username.value.toLowerCase();

      if (theUsername === "" || this.password.value === "" || bio.value === "") {
        display.fillInputBox();
      }
      else {
        const newUserInfo = {
          username: (document.querySelector("#username") as HTMLInputElement).value,
          password: (document.querySelector("#password") as HTMLInputElement).value,
          bion: (document.querySelector("#bio") as HTMLInputElement).value,
        };
        get(child(dbRef, `/${theUsername}`)).then((snapshot) => {
          if (snapshot.exists()){
            display.userExist();
          } else {
            if (theUsername != "" && this.password.value != "" && bio.value != ""){
              const newUser = {};
              const Key: string = theUsername;
              newUser[Key] = newUserInfo;
              update(dbRef, newUser);
            }
            location.href = "./html/katesidan.html"; 
          }
        });
      }
    });
  }
}