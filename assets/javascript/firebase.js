// Initialize Firebase
  var config = {
    apiKey: "AIzaSyC6omfRwWGIasRJnWtTtKkHIi2tGpSmjSw",
    authDomain: "sentiment-analysis-60e30.firebaseapp.com",
    databaseURL: "https://sentiment-analysis-60e30.firebaseio.com",
    storageBucket: "sentiment-analysis-60e30.appspot.com",
  };
firebase.initializeApp(config);

var dataRef = firebase.database();



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

// firebase.auth().signInAnonymously().catch(function(error) {
//   var errorCode = error.code;
//   var errorMessage = error.message;
// })


dataRef.ref().on('value', function(snapshot) {
  
  var a = snapshot.numChildren();
  dataRef.ref('users/');
});

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



