//File enabling new users to register/anonymousSignUp

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

function signup() {

  var email = document.getElementById("createEmail").value;
  var password = document.getElementById("createPassword").value;
  var classYear = document.getElementById("createClassYear").value;
  var name = document.getElementById("createFirstName").value + " " +
              document.getElementById("createLastName").value;


  if (email != "" && password != "" && email.includes("@bowdoin.edu")) {
    firebase.firestore().collection("users").doc(email).set ( {
      name: name,
      email: email.toLowerCase(),
      classYear: classYear,
      password: password
    })
    .then(function() {
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      window.location = "chat.html";
      });
    })
    .catch (function(error) {
      console.error("Error writing document: ", error);
    });

  }
}
