const firebase = require('firebase')
var firebaseConfig = {
    apiKey: "AIzaSyAaJPEBKENnigpHFwVdawcMGDlv4h3SIho",
    authDomain: "learning-bb44e.firebaseapp.com",
    databaseURL: "https://learning-bb44e.firebaseio.com",
    projectId: "learning-bb44e",
    storageBucket: "learning-bb44e.appspot.com",
    messagingSenderId: "899424221864",
    appId: "1:899424221864:web:68b541131da20703c7e09d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

module.exports = {firebase}