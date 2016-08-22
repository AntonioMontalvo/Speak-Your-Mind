//////////////SENTIMENT API FROM twinword///////////////
///////////////////////////////////////////////////////
 $(".text_process_button").click(function(){//This is the Get Sentiment Scores button
    $('#searchInput').val(final_span.textContent); //get text from textArea
    var textString = $("#searchInput").val().trim(); //store text 
    console.log(textString);

        $.ajax({//the ajax method performs an asynchronos HTTP request using headers
            url: 'https://twinword-sentiment-analysis.p.mashape.com/analyze/?text=',
            //a request for information from a database using the URL
            type: 'GET', // The HTTP Method
            data: {text: textString},
            datatype: 'json',
            success: function (result) {//when the results are back


        // console logs for testing purposes 
        console.log(result);
        console.log(result.type);
        console.log(result.score);
        //we access Sentiment Analysis Results and write the type and score
        $("#sentimentScorePanel").html(result.type+"= "+result.score);

        $("#sentimentScore").html(result.score);
        //The Math.abs() function returns the absolute value of a number because we use this for graphing
        var barWidth= Math.abs(result.score*100)+"%";
        console.log(parseInt(barWidth));
        //
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

        // console logs for testing purposes             

        console.log(result.keywords["0"].word);
        console.log(result.keywords["0"].score);
        console.log(result.keywords["1"].word);
        console.log(result.keywords["1"].score);
        console.log(result.keywords["2"].word);
        console.log(result.keywords["2"].score);
        //from the results object we access the keywords array and display
        $("#word1").html(result.keywords["0"].word+"= "+result.keywords["0"].score);
        $("#word2").html(result.keywords["1"].word+"= "+result.keywords["1"].score);
        $("#word3").html(result.keywords["2"].word+"= "+result.keywords["2"].score);  
        $("#word4").html(result.keywords["3"].word+"= "+result.keywords["3"].score);
        $("#word5").html(result.keywords["4"].word+"= "+result.keywords["4"].score);  
            },
            error: function (err) {
                alert(err);
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader("X-Mashape-Authorization", "UZcvZdpyc2mshN5Bh0clQLUDQ5PFp1IMTstjsn24rmcVxEWTqG"); // Enter here your Mashape key
            }
        });

    });

// Start of Voice Recognition API Code**************************************************************
 // ****************************************************************************************************
 // ****************************************************************************************************
// *********************************************************************************************
//PLEASE DO NOT TOUCH ANYTHING IN THIS SECTION!----Google Speech to Text API - ///////////////
/////////////////////////////////////////////////////


// populates drop-down to select language parameter to send API
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


// populates drop down with the language options array above
for (var i = 0; i < langs.length; i++) {
  select_language.options[i] = new Option(langs[i][0], i);
}

// sets the default language to English based on its index position
select_language.selectedIndex = 6;
updateCountry();
select_dialect.selectedIndex = 6;

// more language dropdown stuff
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

// declares global variables
var create_email = false;
var final_transcript = '';
var recognizing = false;
var ignore_onend;
var start_timestamp;

// if webspeech file exists, then run function to upgrade, otherwise, show error messages

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
    if (final_transcript || interim_transcript) {
      showButtons('inline-block');
    }
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

// this is code we don't need for this implementation, but if we wanted to enable email

function createEmail() {
  var n = final_transcript.indexOf('\n');
  if (n < 0 || n >= 80) {
    n = 40 + final_transcript.substring(40).indexOf(' ');
  }
  var subject = encodeURI(final_transcript.substring(0, n));
  var body = encodeURI(final_transcript.substring(n + 1));
  window.location.href = 'mailto:?subject=' + subject + '&body=' + body;
}

// this is code we don't need for this implementation, but if we wanted to enable email or copy/paste we could use this
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


// when mic button is pressed, starts filling span with spoken text results
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


// more code for the email and copy functions we are not using
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
 // END OF VOICE RECOGNITION API CODE
 // ***************************************************************************************************
 // ****************************************************************************************************
 // ****************************************************************************************************









