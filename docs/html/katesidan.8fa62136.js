!(function () {
  var e =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof self
        ? self
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : {},
    t = {},
    n = {},
    o = e.parcelRequire9600;
  null == o &&
    (((o = function (e) {
      if (e in t) return t[e].exports;
      if (e in n) {
        var o = n[e];
        delete n[e];
        var r = { id: e, exports: {} };
        return (t[e] = r), o.call(r.exports, r, r.exports), r.exports;
      }
      var l = new Error("Cannot find module '" + e + "'");
      throw ((l.code = "MODULE_NOT_FOUND"), l);
    }).register = function (e, t) {
      n[e] = t;
    }),
    (e.parcelRequire9600 = o));
  var r = o("6Urw1"),
    l = o("4lh7F"),
    a = ((l = o("4lh7F")), o("6Nu6u")),
    u = (function () {
      function e() {}
      return (
        (e.prototype.loginPages = function () {
          document
            .getElementById("create")
            .addEventListener("click", function (e) {
              e.preventDefault(),
                (document.getElementById("form-title").innerText =
                  "Create account"),
                (document.querySelector("#bio-container").style.display =
                  "block"),
                (document.getElementById("loginBtn").style.display = "none"),
                (document.querySelector("#create-user").style.display =
                  "block"),
                (document.getElementById("create").innerHTML =
                  'Already a user? <a id="login-page" href="">Login</a>'),
                document
                  .getElementById("login-page")
                  .addEventListener("click", function (e) {
                    e.preventDefault(),
                      e.stopPropagation(),
                      (document.getElementById("form-title").innerText =
                        "Log in"),
                      (document.querySelector("#bio-container").style.display =
                        "none"),
                      (document.querySelector("#loginBtn").style.display =
                        "revert"),
                      (document.querySelector("#create-user").style.display =
                        "none"),
                      (document.getElementById("create").innerHTML =
                        'Not a user yet? <a id="login-page" href="">Create account</a>');
                  });
            });
        }),
        (e.prototype.fillInputBox = function () {
          document.getElementById("title-error").innerText =
            "[Don't forget to fill out every box]";
        }),
        (e.prototype.userExist = function () {
          document.getElementById("title-error").innerText =
            "[This username is taken]";
        }),
        (e.prototype.wrongPassword = function () {
          document.getElementById("title-error").innerText =
            "[Wrong password, try again]";
        }),
        e
      );
    })();
  r.initializeApp(l.firebaseConfig);
  var i = a.ref(l.db, "/userlist/"),
    c = new u(),
    s = (function () {
      function e(e, t) {
        (this.username = e), (this.password = t);
      }
      return (
        (e.prototype.logIn = function () {
          var e = this;
          document
            .getElementById("loginBtn")
            .addEventListener("click", function (t) {
              t.preventDefault();
              var n = a.ref(a.getDatabase());
              (e.username = document.querySelector("#username")),
                (e.password = document.querySelector("#password")),
                (e.bio = document.querySelector("#bio")),
                a
                  .get(a.child(n, "userlist/".concat(e.username.value)))
                  .then(function (t) {
                    "" == e.username.value || "" == e.password.value
                      ? c.fillInputBox()
                      : e.password.value != t.val().password
                      ? c.wrongPassword()
                      : e.password.value == t.val().password &&
                        (localStorage.setItem("loginName", e.username.value),
                        (location.href = "./html/katesidan.html"));
                  });
            });
        }),
        (e.prototype.createNewUser = function () {
          var e = this;
          document
            .getElementById("createBtn")
            .addEventListener("click", function (t) {
              t.preventDefault,
                (e.username = document.querySelector("#username")),
                (e.password = document.querySelector("#password"));
              var n = document.querySelector("#bio"),
                o = e.username.value.toLowerCase();
              if ("" === o || "" === e.password.value || "" === n.value)
                c.fillInputBox();
              else {
                var r = {
                  username: document.querySelector("#username").value,
                  password: document.querySelector("#password").value,
                  bion: document.querySelector("#bio").value,
                };
                a.get(a.child(i, "/".concat(o))).then(function (t) {
                  if (t.exists()) c.userExist();
                  else {
                    if ("" != o && "" != e.password.value && "" != n.value) {
                      var l = {};
                      (l[o] = r), a.update(i, l);
                    }
                    location.href = "./html/katesidan.html";
                  }
                });
              }
            });
        }),
        (e.prototype.deleteUserAccount = function () {
          a.remove(
            a.ref(l.db, "userlist/" + localStorage.getItem("loginName"))
          ).then(function () {
            setTimeout((location.href = "../index.html"), 1000);
          });
        }),
        e
      );
    })(),
    d = document.querySelector(".delAccountBtn"),
    m = new s();
  d.addEventListener("click", function (e) {
    e.preventDefault(), m.deleteUserAccount();
  });
})();
//# sourceMappingURL=katesidan.8fa62136.js.map
