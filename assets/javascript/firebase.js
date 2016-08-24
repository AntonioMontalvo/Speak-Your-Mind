// Initialize Firebase
  var config = {
    apiKey: "AIzaSyC6omfRwWGIasRJnWtTtKkHIi2tGpSmjSw",
    authDomain: "sentiment-analysis-60e30.firebaseapp.com",
    databaseURL: "https://sentiment-analysis-60e30.firebaseio.com",
    storageBucket: "sentiment-analysis-60e30.appspot.com",
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
              barWidth: barwidth,
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
  dataRef.ref('users/');
  console.log("average is: " + barwidth);

});
// for (var i = 0; i < allScores.length; i++){
//     avg += allScores[i]/allScores.length;
// }
// console.log ('The mean is: ' + avg);

