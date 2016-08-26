// Initialize Firebase
var config = {
  apiKey: "AIzaSyCreVhYp6XPrgxSbsTVuLPQxiCyjVARxtQ",
  authDomain: "voice-d4c8b.firebaseapp.com",
  databaseURL: "https://voice-d4c8b.firebaseio.com",
  storageBucket: "voice-d4c8b.appspot.com",
};
firebase.initializeApp(config);

var dataRef = firebase.database();







// dataRef.ref().on('value', function(snapshot) {
//
//   var a = snapshot.numChildren();
//   dataRef.ref('users/');
// });
//
// var query = firebase.database().ref("users").orderByKey();
// query.once("value")
//   .then(function(snapshot) {
//     snapshot.forEach(function(childSnapshot) {
//       var key = childSnapshot.key;
//       var childData = childSnapshot.val();
//       usersAvg.push(childData.avg);
//       console.log(childData.avg);
//   });
// });//iterates over database an pushes the average of every user to array usersAvg
