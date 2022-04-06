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
  public userbio: HTMLInputElement;

  constructor(username?: HTMLInputElement, password?: HTMLInputElement) {
    this.username = username;
    this.password = password;
  }
  //logIn
  public logIn(): void {
    document.getElementById("loginBtn").addEventListener("click", (e) => {
      e.preventDefault();
      const dbRef = ref(getDatabase());
      //tar username från input
      this.username = document.querySelector("#username");
      //tar password från input
      this.password = document.querySelector("#password");
      //kollar upp namnet från input och gör snapshot
      get(child(dbRef, `userlist/${this.username.value}`)).then(
        (snapshot) => {
          //har inte båda inputfälten input så skrivs felmedelande
          if (this.username.value == "" || this.password.value == "") {
            display.fillInputBox();
          //stämmer inte password inputen med användarnamnet på databasen skrivs felmedelande
          } else if (this.password.value != snapshot.val().password) {
            display.wrongPassword();
          //stämmer password inputen med användarnamnet på databasen kommer man vidare
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
      //tar username från input
      this.username = document.querySelector("#username");
      //tar password från input
      this.password = document.querySelector("#password");
      //tar bio innehåll från input
      this.userbio = document.querySelector("#bio");
      //gör så rubriken(användarnamnet) på databasen läggs upp i små bokstäver
      const theUsername: string = this.username.value.toLowerCase();
      //har inte alla inputfälten input så skrivs felmedelande
      if (theUsername === "" || this.password.value === "" || this.userbio.value === "") {
        display.fillInputBox();
      }
      else {
        //infon som senare kommer updateras till databasen
        const newUserInfo = {
          username: (document.querySelector("#username") as HTMLInputElement).value,
          password: (document.querySelector("#password") as HTMLInputElement).value,
          userbio: (document.querySelector("#bio") as HTMLInputElement).value,
        };
        //kollar upp namnet från input och gör snapshot
        get(child(dbRef, `/${theUsername}`)).then((snapshot) => {
        //finns input namnet redan i databasen så skrivs felmedelande ut
          if (snapshot.exists()){
            display.userExist();
        //om namnet inte redan finns och alla fälten har input -
        //- så sparas all input(info om användaren) under rubriken(användarnamnet)-
        //-och databasen uppdateras med den nya informationen
        //sedan kommer man vidare
          } else {
            if (theUsername != "" && this.password.value != "" && this.userbio.value != ""){
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