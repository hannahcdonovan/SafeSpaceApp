// Signs up user to Firebase console and has them confirm identity width
// email verification.

function signup() {

  var email = "";
    if (document.getElementById("createEmail").value.includes("@bowdoin.edu")) {
      email = document.getElementById("createEmail").value
    };

  var password = document.getElementById("createPassword").value;

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    if (email === "") {
      window.alert("In order to register, you must enter your bowdoin email");
    }

  });
  email-password.html

  firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
    .then(function() {
      // The link was successfully sent. Inform the user.
      // Save the email locally so you don't need to ask the user for it again
      // if they open the link on the same device.
      window.localStorage.setItem("createEmail", email);
    })
    .catch(function(error) {
    // Some error occurred, you can inspect the code: error.code
  });
}

//Enables anonymous sign up
function anonymousSignUp() {

  firebase.auth().signInAnonymously().catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}

//Anonymous user information
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    // ...
  }
});
