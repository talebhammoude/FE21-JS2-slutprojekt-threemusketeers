var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire9600;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequire9600=o);var r=o("2sKvt"),i=o("707ge"),a=o("hgQql"),c=o("5tHFl");i=o("707ge"),a=o("hgQql"),c=o("5tHFl");const l=i.initializeApp(c.firebaseConfig),s=a.getFirestore(l),d=a.collection(s,"post"),u=a.query(d,a.where("category","==",2),a.orderBy("time"));const p=i.initializeApp(c.firebaseConfig),f=a.getFirestore(p),g=document.querySelector(".user-class").innerHTML,y=document.querySelector(".post-text"),h=document.querySelector(".post-btn");!async function(){(await a.getDocs(u)).forEach((e=>{document.querySelector(".post-list").innerHTML+=`\n    <div class="the-post">\n       <h2>\n           ${e.data().user}\n       </h2>\n       <p class="theText">${e.data().text}</p>\n    </div>\n   `}))}(),h.addEventListener("click",(e=>{e.preventDefault(),async function(){const e=new r.Post(g,y.value,2,new Date);try{const t=await a.addDoc(a.collection(f,"post"),{user:e.username,text:e.text,category:e.category,time:e.time});console.log("Document written with ID: ",t.id)}catch(e){console.error("Error adding document: ",e)}}(),y.value=""}));
//# sourceMappingURL=postpage-musik.8d42200e.js.map
