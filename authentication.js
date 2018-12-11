var user = firebase.auth();

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    window.location = "/chat.html"
  }
});


function login() {

  var userEmail = document.getElementById("email_field").value;
  var userPassword = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    if (errorCode == 'auth/wrong-password') {
      window.alert("Wrong password.");
    } else {
      window.alert(errorMessage);
    }
    console.log(error);

    if (!userEmail.includes("@bowdoin.edu")) {
      window.alert("Must register with your Bowdoin email");
    }
  })
}

//Enables anonymous login
function anonymousLogin() {

  firebase.auth().signInAnonymously().catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    // ...
  });
}
