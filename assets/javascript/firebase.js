// Initialize Firebase
var config = {
  apiKey: "AIzaSyCreVhYp6XPrgxSbsTVuLPQxiCyjVARxtQ",
  authDomain: "voice-d4c8b.firebaseapp.com",
  databaseURL: "https://voice-d4c8b.firebaseio.com",
  storageBucket: "",
};
firebase.initializeApp(config);

var dataRef = firebase.database();

firebase.auth().signInAnonymously().catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
})

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;

    $("#submitButtonOrWhatever").on('click', function() {

        dataRef.ref().on('value', function(snapshot) {
            dataRef.ref('users/userObject/'+clickCounter).set({
              words: words,
              scores: scores
              uid: uid
              
            });
          };

    $("submitButtonOrWhatever").val();
    return false
    });
  }
});
