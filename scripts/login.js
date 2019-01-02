firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    console.log("logged in user: " + uid);
    window.location = "/chat.html";
  } else {
    console.log("no user");
  }
});


function login() {
  var userEmail = document.getElementById("email_field").value;
  var userPassword = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    if (error != null) {
      window.alert(errorMessage);
    }
  });
}

//Enables anonymous login
function anonymousLogin() {

  firebase.auth().signInAnonymously().catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    if (error != null) {
      window.alert(errorMessage);
    }
  });
}
