
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA442H4DS-CVN1ld87urs7b_QmoXwlipvU",
    authDomain: "games-login-90a8f.firebaseapp.com",
    projectId: "games-login-90a8f",
    storageBucket: "games-login-90a8f.appspot.com",
    messagingSenderId: "293432532621",
    appId: "1:293432532621:web:fff70366f79e08272b8cc4"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth()

  var firstname = document.getElementById("firstname")
  var lastname = document.getElementById("lastname")
  var email = document.getElementById("email")
  var password = document.getElementById("password")

  window.signup = function(e){
    e.preventDefault();
    var obj = {
        firstname:firstname.value,
        lastname:lastname.value,
        email:email.value,
        password:password.value,
    }
    createUserWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function(success){
        alert("Signup Successfully")
    })
    .catch(function(err)
    {
        alert("error" +err)
    })
    console.log(obj)
  }
