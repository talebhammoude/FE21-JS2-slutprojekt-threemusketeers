var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequire9600;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},e.parcelRequire9600=r);var o=r("707ge"),l=r("5tHFl"),s=(l=r("5tHFl"),r("iLhJC"));o.initializeApp(l.firebaseConfig);const a=s.ref(l.db,"/userlist/"),i=new class{loginPages(){document.getElementById("create").addEventListener("click",(e=>{e.preventDefault();document.getElementById("form-title").innerText="Create account";document.querySelector("#bio-container").style.display="block";document.getElementById("loginBtn").style.display="none";document.querySelector("#create-user").style.display="block";document.getElementById("create").innerHTML='Already a user? <a id="login-page" href="">Login</a>',document.getElementById("login-page").addEventListener("click",(e=>{e.preventDefault(),e.stopPropagation();document.getElementById("form-title").innerText="Log in";document.querySelector("#bio-container").style.display="none";document.querySelector("#loginBtn").style.display="revert";document.querySelector("#create-user").style.display="none";document.getElementById("create").innerHTML='Not a user yet? <a id="login-page" href="">Create account</a>'}))}))}fillInputBox(){document.getElementById("title-error").innerText="[Don't forget to fill out every box]"}userExist(){document.getElementById("title-error").innerText="[This username is taken]"}wrongPassword(){document.getElementById("title-error").innerText="[Wrong password, try again]"}};const u=document.querySelector(".delAccountBtn"),d=new class{constructor(e,t){this.username=e,this.password=t}logIn(){document.getElementById("loginBtn").addEventListener("click",(e=>{e.preventDefault();const t=s.ref(s.getDatabase());this.username=document.querySelector("#username"),this.password=document.querySelector("#password"),this.bio=document.querySelector("#bio"),s.get(s.child(t,`userlist/${this.username.value}`)).then((e=>{""==this.username.value||""==this.password.value?i.fillInputBox():this.password.value!=e.val().password?i.wrongPassword():this.password.value==e.val().password&&(localStorage.setItem("loginName",this.username.value),location.href="./html/katesidan.html")}))}))}createNewUser(){document.getElementById("createBtn").addEventListener("click",(e=>{e.preventDefault,this.username=document.querySelector("#username"),this.password=document.querySelector("#password");const t=document.querySelector("#bio"),n=this.username.value.toLowerCase();if(""===n||""===this.password.value||""===t.value)i.fillInputBox();else{const e={username:document.querySelector("#username").value,password:document.querySelector("#password").value,bion:document.querySelector("#bio").value};s.get(s.child(a,`/${n}`)).then((r=>{if(r.exists())i.userExist();else{if(""!=n&&""!=this.password.value&&""!=t.value){const t={};t[n]=e,s.update(a,t)}location.href="./html/katesidan.html"}}))}}))}deleteUserAccount(){s.remove(s.ref(l.db,"userlist/"+localStorage.getItem("loginName"))).then((()=>{setTimeout(location.href="./index.html",1e3)}))}};u.addEventListener("click",(e=>{e.preventDefault(),d.deleteUserAccount()}));
//# sourceMappingURL=katesidan.cb07da83.js.map
