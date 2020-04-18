var startButton = document.querySelector(".button")
var counterDown = document.querySelector(".counter")
var h1 = document.querySelector("h1")
var h2 = document.querySelector("h2")
var questionBox = document.querySelector(".QA")

var secondsLeft = 100;

//start button clicks and timer starts and h1 and h2 and button disapper, now i need the questions to pop up.
startButton.addEventListener("click", function() {

    h1.textContent=""
    h2.textContent=""
    startButton.textContent=""
    
    var timerInterval = setInterval(function() {
    secondsLeft--;
    counterDown.textContent = secondsLeft

    if(secondsLeft === 0) {
        counterDown.textContent = ("sorry time over")
        clearInterval(timerInterval);
        }
}, 10);

});

    
   
  



//questions in an array
var questions = 
        [{ 
        question: "which on is not a html tag",
        answers : [ "h1", "h2", "p","car"],},
        correctAnswer = "car"
        ]
        [{ 
        question: "which university are you taking this coding",
        answers : [ "ucf", "uf", "usf","um"],},
        correctAnswer = "ucf"
        ]
        [{ 
        question: "How many instructors and TA do we have",
        answers : [ "10", "0", "3","100"],},
        correctAnswer = "3"
        ]
        [{ 
        question: "we learned so far, which is not true",
        answers : [ "html", "css", "JS","how to drive"],},
        correctAnswer = "how to drive"
        ]


