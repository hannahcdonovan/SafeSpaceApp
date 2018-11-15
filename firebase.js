// Initialize Firebase
var config = {
  apiKey: "AIzaSyAobGR24AZrMsbxRGDkMYI-obSBfWqdfLs",
  authDomain: "safespaceapp-19165.firebaseapp.com",
  databaseURL: "https://safespaceapp-19165.firebaseio.com",
  projectId: "safespaceapp-19165",
  storageBucket: "",
  messagingSenderId: "617722055142"
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    // ...
    console.log(user.email)
  } else {
    console.log("no user present")
  }
});
