firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var user = firebase.auth().currentUser;

    window.location = "chat.html";

  }
});

function login() {

  var userEmail = document.getElementById("email_field").value;
  var userPassword = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    if (!userEmail.includes("@bowdoin.edu")) {
      window.alert("Error: "+ error);
    }
  });
}

function testRouteToSignup() {
  window.location = "/signup.html";
}

function logout() {
  firebase.auth().signOut();
  window.location = "index.html"
}
