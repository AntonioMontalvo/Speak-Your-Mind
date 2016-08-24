 // Initialize Firebase
 var config = {
   apiKey: "AIzaSyC6omfRwWGIasRJnWtTtKkHIi2tGpSmjSw",
   authDomain: "sentiment-analysis-60e30.firebaseapp.com",
   databaseURL: "https://sentiment-analysis-60e30.firebaseio.com",
   storageBucket: "sentiment-analysis-60e30.appspot.com",
 };
firebase.initializeApp(config);

// Create a variable to reference the database.
var database = firebase.database();


database.ref('SentimentScores').on("value", function(snapshot) {

	console.log('THE SUM OF ALL THING');


// If any errors are experienced, log them to console. 
}, function (errorObject) {
	var avg = 0;

for (var i = 0; i < allScores.length; i++){
    avg += allScores[i]/allScores.length;
}
console.log ('This is the mean ' + avg);
  	console.log("The read failed: " + errorObject.code);

});


