import { SignUpSignIn } from "../modules/signUpLogin";

const deleteAccountBtn = document.querySelector(".delAccountBtn") as HTMLButtonElement;


const users = new SignUpSignIn();


deleteAccountBtn.addEventListener("click", (e)=> {
    e.preventDefault();
    users.deleteUserAccount();
})