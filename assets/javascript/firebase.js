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
    console.log(uid)

    $(".text_process_button").on('click', function() {

        dataRef.ref().on('value', function(snapshot) {
            dataRef.ref('users/'+uid).set({
              avg: avg,
              textString: textString,
            });
          });

    $(".text_process_button").val();
    return false
    });
  }
});
dataRef.ref().on('value', function(snapshot) {
  var a = snapshot.numChildren();
  dataRef.ref('users/')

})
