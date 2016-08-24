//////////////SENTIMENT API FROM twinword///////////////
///////////////////////////////////////////////////////
var allScores = [];//stored values from words
$('#searchParameters').hide();
$('#searchInput').hide();
 $(".text_process_button").click(function(){//This is the Get Sentiment Scores button

    $('#searchInput').val(final_span.textContent); //get text from textArea
    var textString = $("#searchInput").val().trim(); //store text

    console.log(textString);

        $.ajax({//the ajax method performs an asynchronos HTTP request
            url: 'https://twinword-sentiment-analysis.p.mashape.com/analyze/?text=',
            //a request for information from a database using the URL
            type: 'GET', // The HTTP Method
            data: {text: textString},
            datatype: 'json',
            success: function (result) {//when the results are back

            console.log(result);
            console.log(result.type);
            console.log(result.score);
            //we access Sentiment Analysis Results and write the type and score
            $("#sentimentScorePanel").html(result.type+"= "+result.score);

            $("#sentimentScore").html(result.score);
            //The Math.abs() function returns the absolute value of a number
            var barWidth= Math.abs(result.score*100)+"%";
            console.log(parseInt(barWidth));
            
            $('#bar').width(barWidth);//apply barWidth to our progress bar
            console.log((Math.abs(result.score*100)));
            //assign colors to progress bar according to results type
            if(result.type==="negative"){
              $('#bar').addClass("progress-bar-danger");
            }
            else if(result.type==="positive"){
              $('#bar').addClass("progress-bar-success");
            }
            else {
               $('#bar').addClass("progress-bar-warning");

            };




var fireset = [];

for(var i=0; i < result.keywords.length; i++) {
  var newWord = result.keywords[i].word
  var capital = newWord.charAt(0).toUpperCase() + newWord.slice(1)
  fireset.push(capital)
  $("#word").append("<tr><td>"+capital+"</td>" + "<td>"+(parseFloat(result.keywords[i].score.toFixed(4)))+"</td></tr>")
  allScores.push(parseFloat(result.keywords[i].score.toFixed(4)));
}


    // Save the new price in Firebase
    database.ref().push({
      allScores: allScores
    });


          //these arrays will contain the data for the bar graph
          var arrayWords = []; //contains the words
          var arrayScore = []; //contains the score
          var arrayColor = []; //array for if red or green
          var arrayBlack = []; //however many black color sit needs
 
        //for loop to add data into the arrays
        for (var i=0; i < result.keywords.length; i++){
          arrayWords.push(result.keywords[i].word);
          arrayScore.push(result.keywords[i].score);
          arrayColor.push(getColor(result.keywords[i].score));
          arrayBlack.push('black');
        }

//////////////CHART///////////////

        //this function determines whether the bar for whatever word will be green or red on graph
        function getColor(number){
          if (number > 0){
            return 'rgba(75, 192, 192, 0.2)'; //green
          }
          else {
            return 'rgba(255, 99, 132, 0.2)' //red
          }
        }
        //start of chart info
        var ctx = document.getElementById("myChart");
        var myChart = new Chart(ctx, {
          type: 'horizontalBar',
          data: {
            //words here
            labels: arrayWords, 

            datasets: [{
              label: 'Positive Sentiment',
              //scores below
              display: false,
              data: arrayScore, //add JSON num results here  
              backgroundColor: arrayColor,
              borderColor: arrayBlack,
              borderWidth: 2
              },

              {
                //this is for the Negative part of the legend
                label: 'Negative Sentiment',
                data: 0,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'black',
                borderWidth: 2
              }]   
          },
    
          options: {
            scales: {
              yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'WORD'
                },
                ticks: {
                    beginAtZero:true
                }
              }],
              xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'SENTIMENT SCORE'
                },
                ticks: {
                    beginAtZero:true
                }
              }]
            }
          }
        });     
            },
            error: function (err) {
                alert(err);
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader("X-Mashape-Authorization", "UZcvZdpyc2mshN5Bh0clQLUDQ5PFp1IMTstjsn24rmcVxEWTqG"); // Enter here your Mashape key
            }
        });

    });

var avg = 0;

for (var i = 0; i < allScores.length; i++){
    avg += allScores[i]/allScores.length;
}
console.log ('This is the mean ' + avg);


//////////////Google Cloud Speech API ///////////////
/////////////////////////////////////////////////////

var langs =
[['Afrikaans',       ['af-ZA']],
 ['Bahasa Indonesia',['id-ID']],
 ['Bahasa Melayu',   ['ms-MY']],
 ['Català',          ['ca-ES']],
 ['Čeština',         ['cs-CZ']],
 ['Deutsch',         ['de-DE']],
 ['English',         ['en-AU', 'Australia'],
                     ['en-CA', 'Canada'],
                     ['en-IN', 'India'],
                     ['en-NZ', 'New Zealand'],
                     ['en-ZA', 'South Africa'],
                     ['en-GB', 'United Kingdom'],
                     ['en-US', 'United States']],
 ['Español',         ['es-AR', 'Argentina'],
                     ['es-BO', 'Bolivia'],
                     ['es-CL', 'Chile'],
                     ['es-CO', 'Colombia'],
                     ['es-CR', 'Costa Rica'],
                     ['es-EC', 'Ecuador'],
                     ['es-SV', 'El Salvador'],
                     ['es-ES', 'España'],
                     ['es-US', 'Estados Unidos'],
                     ['es-GT', 'Guatemala'],
                     ['es-HN', 'Honduras'],
                     ['es-MX', 'México'],
                     ['es-NI', 'Nicaragua'],
                     ['es-PA', 'Panamá'],
                     ['es-PY', 'Paraguay'],
                     ['es-PE', 'Perú'],
                     ['es-PR', 'Puerto Rico'],
                     ['es-DO', 'República Dominicana'],
                     ['es-UY', 'Uruguay'],
                     ['es-VE', 'Venezuela']],
 ['Euskara',         ['eu-ES']],
 ['Français',        ['fr-FR']],
 ['Galego',          ['gl-ES']],
 ['Hrvatski',        ['hr_HR']],
 ['IsiZulu',         ['zu-ZA']],
 ['Íslenska',        ['is-IS']],
 ['Italiano',        ['it-IT', 'Italia'],
                     ['it-CH', 'Svizzera']],
 ['Magyar',          ['hu-HU']],
 ['Nederlands',      ['nl-NL']],
 ['Norsk bokmål',    ['nb-NO']],
 ['Polski',          ['pl-PL']],
 ['Português',       ['pt-BR', 'Brasil'],
                     ['pt-PT', 'Portugal']],
 ['Română',          ['ro-RO']],
 ['Slovenčina',      ['sk-SK']],
 ['Suomi',           ['fi-FI']],
 ['Svenska',         ['sv-SE']],
 ['Türkçe',          ['tr-TR']],
 ['български',       ['bg-BG']],
 ['Pусский',         ['ru-RU']],
 ['Српски',          ['sr-RS']],
 ['한국어',            ['ko-KR']],
 ['中文',             ['cmn-Hans-CN', '普通话 (中国大陆)'],
                     ['cmn-Hans-HK', '普通话 (香港)'],
                     ['cmn-Hant-TW', '中文 (台灣)'],
                     ['yue-Hant-HK', '粵語 (香港)']],
 ['日本語',           ['ja-JP']],
 ['Lingua latīna',   ['la']]];

for (var i = 0; i < langs.length; i++) {
  select_language.options[i] = new Option(langs[i][0], i);
}

select_language.selectedIndex = 6;
updateCountry();
select_dialect.selectedIndex = 6;

showInfo('info_start');
function updateCountry() {
  for (var i = select_dialect.options.length - 1; i >= 0; i--) {
    select_dialect.remove(i);
  }
  var list = langs[select_language.selectedIndex];
  for (var i = 1; i < list.length; i++) {
    select_dialect.options.add(new Option(list[i][1], list[i][0]));
  }
  select_dialect.style.visibility = list[1].length == 1 ? 'hidden' : 'visible';
}
var create_email = false;
var final_transcript = '';
var recognizing = false;
var ignore_onend;
var start_timestamp;

if (!('webkitSpeechRecognition' in window)) {
  upgrade();
} else {
  start_button.style.display = 'inline-block';
  var recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.onstart = function() {
    recognizing = true;
    showInfo('info_speak_now');
    start_img.src = 'mic-animate.gif';
  };

  recognition.onerror = function(event) {
    if (event.error == 'no-speech') {
      start_img.src = 'mic.gif';
      showInfo('info_no_speech');
      ignore_onend = true;
    }
    if (event.error == 'audio-capture') {
      start_img.src = 'mic.gif';
      showInfo('info_no_microphone');
      ignore_onend = true;
    }
    if (event.error == 'not-allowed') {
      if (event.timeStamp - start_timestamp < 100) {
        showInfo('info_blocked');
      } else {
        showInfo('info_denied');
      }
      ignore_onend = true;
    }
  };

  recognition.onend = function() {
    recognizing = false;
    if (ignore_onend) {
      return;
    }
    start_img.src = 'mic.gif';
    if (!final_transcript) {
      showInfo('info_start');
      return;
    }
    showInfo('');
    if (window.getSelection) {
      window.getSelection().removeAllRanges();
      var range = document.createRange();
      range.selectNode(document.getElementById('final_span'));
      window.getSelection().addRange(range);
    }
    if (create_email) {
      create_email = false;
      createEmail();
    }
  };

  recognition.onresult = function(event) {
    var interim_transcript = '';
    for (var i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        final_transcript += event.results[i][0].transcript;
      } else {
        interim_transcript += event.results[i][0].transcript;
      }
    }
    final_transcript = capitalize(final_transcript);
    final_span.innerHTML = linebreak(final_transcript);
    interim_span.innerHTML = linebreak(interim_transcript);
    // if (final_transcript || interim_transcript) {
    //   showButtons('inline-block');
    // }
  };
}

function upgrade() {
  start_button.style.visibility = 'hidden';
  showInfo('info_upgrade');
}

var two_line = /\n\n/g;
var one_line = /\n/g;
function linebreak(s) {
  return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
}

var first_char = /\S/;
function capitalize(s) {
  return s.replace(first_char, function(m) { return m.toUpperCase(); });
}

function createEmail() {
  var n = final_transcript.indexOf('\n');
  if (n < 0 || n >= 80) {
    n = 40 + final_transcript.substring(40).indexOf(' ');
  }
  var subject = encodeURI(final_transcript.substring(0, n));
  var body = encodeURI(final_transcript.substring(n + 1));
  window.location.href = 'mailto:?subject=' + subject + '&body=' + body;
}
// function copyButton() {
//   if (recognizing) {
//     recognizing = false;
//     recognition.stop();
//   }
//   copy_button.style.display = 'none';
//   copy_info.style.display = 'inline-block';
//   showInfo('');
// }
// function emailButton() {
//   if (recognizing) {
//     create_email = true;
//     recognizing = false;
//     recognition.stop();
//   } else {
//     createEmail();
//   }
//   email_button.style.display = 'none';
//   email_info.style.display = 'inline-block';
//   showInfo('');
// }

function startButton(event) {
  if (recognizing) {
    recognition.stop();
    return;
  }
  final_transcript = '';
  recognition.lang = select_dialect.value;
  recognition.start();
  ignore_onend = false;
  final_span.innerHTML = '';
  interim_span.innerHTML = '';
  start_img.src = 'mic-slash.gif';
  showInfo('info_allow');
  // showButtons('none');
  start_timestamp = event.timeStamp;
}

function showInfo(s) {
  if (s) {
    for (var child = info.firstChild; child; child = child.nextSibling) {
      if (child.style) {
        child.style.display = child.id == s ? 'inline' : 'none';
      }
    }
    info.style.visibility = 'visible';
  } else {
    info.style.visibility = 'hidden';
  }
}
// var current_style;
// function showButtons(style) {
//   if (style == current_style) {
//     return;
//   }
//   current_style = style;
//   copy_button.style.display = style;
//   email_button.style.display = style;
//   copy_info.style.display = 'none';
//   email_info.style.display = 'none';
// }
