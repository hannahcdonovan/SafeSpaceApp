// Initialize Firebase
var config = {
  apiKey: "AIzaSyAobGR24AZrMsbxRGDkMYI-obSBfWqdfLs",
  authDomain: "safespaceapp-19165.firebaseapp.com",
  databaseURL: "https://safespaceapp-19165.firebaseio.com",
  projectId: "safespaceapp-19165",
  storageBucket: "",
  messagingSenderId: "617722055142"
};
var app = firebase.initializeApp(config);

function logout() {
  firebase.auth().signOut();
  window.location = "/index.html";
}
