firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementById("user-div").style.display="block";
    document.getElementById("login-div").style.display="none";

    var user = firebase.auth().currentUser;
    if (user != null) {
      var email_id = user.email;
      document.getElementById(user_para).innerHTML = "Welcome User: " + email_id;
    }

  } else {
    // No user is signed in.
    document.getElementById("user-div").style.display="none";
    document.getElementById("login-div").style.display="block";
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
}
