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

firebase.auth().signInAnonymously().catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
})


dataRef.ref().on('value', function(snapshot) {
  
  var a = snapshot.numChildren();
  dataRef.ref('users/');
});

var query = firebase.database().ref("users").orderByKey();
query.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      // key will be "ada" the first time and "alan" the second time
      var key = childSnapshot.key;
      // childData will be the actual contents of the child
      console.log('this is the key' + key);
      var childData = childSnapshot.avg.val();
      console.log('this is childata' + childData);
  });
});


//     for (var i = 0; i < .length; i++){
//     avg += allScores[i]/allScores.length;
// }
// console.log ('The mean is: ' + avg);

