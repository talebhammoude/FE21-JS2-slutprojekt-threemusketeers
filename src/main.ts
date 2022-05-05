import { SignUpSignIn } from "./modules/signUpLogIn";
import { DisplaySignLog } from "./modules/domSignLog";

const users = new SignUpSignIn();
const show = new DisplaySignLog();

users.logIn();
users.createNewUser();
show.loginPages();


