 // Initialize Firebase
 var config = {
   apiKey: "AIzaSyC6omfRwWGIasRJnWtTtKkHIi2tGpSmjSw",
   authDomain: "sentiment-analysis-60e30.firebaseapp.com",
   databaseURL: "https://sentiment-analysis-60e30.firebaseio.com",
   storageBucket: "sentiment-analysis-60e30.appspot.com",
 };
firebase.initializeApp(config);
//reference database
var dataRef = firebase.database();
var allScores = [];//stored values from words

dataRef.ref('/General_Scores').push({
    allScores: allScores,
    
  });


