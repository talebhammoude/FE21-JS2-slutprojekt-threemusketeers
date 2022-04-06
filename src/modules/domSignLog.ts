export class DisplaySignLog {

  public loginPages(): void {

    //create user
    document.getElementById("create").addEventListener("click", (e) => {
      e.preventDefault();

      const formTitle: HTMLElement = document.getElementById("form-title");
      formTitle.innerText = "Create account";

      const bioCon: HTMLElement = document.querySelector("#bio-container");
      bioCon.style.display = "block";

      const loginBtn: HTMLElement = document.getElementById("loginBtn");
      loginBtn.style.display = "none";

      const createBtn: HTMLElement = document.querySelector("#create-user");
      createBtn.style.display = "block";

      const alreadyUser: HTMLElement = document.getElementById("create");
      alreadyUser.innerHTML = 'Already a user? <a id="login-page" href="">Login</a>';
    

      //back to login
      document.getElementById("login-page").addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        const formTitle: HTMLElement = document.getElementById("form-title");
        formTitle.innerText = "Log in";

        const bioCon: HTMLElement = document.querySelector("#bio-container");
        bioCon.style.display = "none";

        const loginBtn: HTMLElement = document.querySelector("#loginBtn");
        loginBtn.style.display = "revert";

        const createBtn: HTMLElement = document.querySelector("#create-user");
        createBtn.style.display = "none";

        const alreadyUser: HTMLElement = document.getElementById("create");
        alreadyUser.innerHTML = 'Not a user yet? <a id="login-page" href="">Create account</a>';

      });
    });
  }
  //felmedelande
  public fillInputBox(): void {
    const inputBoxError: HTMLElement = document.getElementById("title-error");
    inputBoxError.innerText = "[Don't forget to fill out every box]";
  }
  public userExist(): void {
    const userExists: HTMLElement = document.getElementById("title-error");
    userExists.innerText = "[This username is taken]";
  }
  public wrongPassword(): void {
    const wrongPassword: HTMLElement = document.getElementById("title-error");
    wrongPassword.innerText = "[Wrong password, try again]";
  }
}