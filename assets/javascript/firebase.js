// Initialize Firebase
var config = {
  apiKey: "AIzaSyCreVhYp6XPrgxSbsTVuLPQxiCyjVARxtQ",
  authDomain: "voice-d4c8b.firebaseapp.com",
  databaseURL: "https://voice-d4c8b.firebaseio.com",
  storageBucket: "",
};
firebase.initializeApp(config);

var dataRef = firebase.database();

clickCounter = 0;

$("#submitButtonOrWhatever").on('click', function() {
    dataRef.ref().on('value', function(snapshot) {
        dataRef.ref('userObject'+clickCounter).set({
          words: words,
          scores: scores
        });
      };
  clickCounter += 1;
  $("submitButtonOrWhatever").val();
  return false
});


// If any errors are experienced, log them to console.
}, function (errorObject) {

   console.log("The read failed: " + errorObject.code);

});
