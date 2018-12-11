//File enabling new users to register/anonymousSignUp

var user = firebase.auth();

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
   window.user = user;
   window.location = 'chat.html'; //After successful registration, the
  }
});

function signup() {

  var email = document.getElementById("createEmail").value;
  var password = document.getElementById("createPassword").value;

  if (email != "" && password != "" && email.includes("@bowdoin.edu")) {
    user = firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    //Handle errors here
    var errorCode = error.code;
    var errorMessage = error.message;
  });
  }
}
