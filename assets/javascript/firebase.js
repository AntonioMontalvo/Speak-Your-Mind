// Initialize Firebase
  var config = {
    apiKey: "AIzaSyC6omfRwWGIasRJnWtTtKkHIi2tGpSmjSw",
    authDomain: "sentiment-analysis-60e30.firebaseapp.com",
    databaseURL: "https://sentiment-analysis-60e30.firebaseio.com",
    storageBucket: "sentiment-analysis-60e30.appspot.com",
  };
firebase.initializeApp(config);

var dataRef = firebase.database();







// dataRef.ref().on('value', function(snapshot) {
//
//   var a = snapshot.numChildren();
//   dataRef.ref('users/');
// });
//
var query = firebase.database().ref("users").orderByKey();
query.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var key = childSnapshot.key;
      var childData = childSnapshot.val();
      usersAvg.push(childData.avg);
      console.log(childData.avg);
  });
});//iterates over database an pushes the average of every user to array usersAvg
