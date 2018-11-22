var questionSlides = [
    slide1 = {
        question: "What is 1+1?",
        answers: ["poo", "pee", "cheese", "all of the above"],
        correct: "cheese",
    },
    slide2 = {
        question: "What is 2+1?",
        answers: ["poo", "pee", "cheese", "all of the above"],
        correct: "cheese",
    },
    slide3 = {
        question: "What is 5+1?",
        answers: ["poo", "pee", "cheese", "all of the above"],
        correct: "cheese",
    },
    slide4 = {
        question: "What is 1+40?",
        answers: ["poo", "pee", "cheese", "all of the above"],
        correct: "cheese",
    },
    slide5 = {
        question: "What is 1+52?",
        answers: ["poo", "pee", "cheese", "all of the above"],
        correct: "cheese",
    }
]

var showQuestion;
// var count = 0;

// $("#end").on('click', endQuiz);
// function showQuestion()
 
 $('#start').on('click', showQuestion);
 function showQuestion() {
        for (var n = 0; n < questionSlides.length; n++) {
        $(".quizContainer").text(questionSlides[n])
        }
    }
  if (useranswer === correct) {
  function result() {
    //   count++;
      $(".quizContainer").text(slideforrightanswer)
      setTimeout();
      //next button user click
      
     
    }
}




      
      function startQuiz() {
          showQuestion = setInterval(nextQuestion, 60000);
  
      }
      
      function endQuiz() {
          clearInterval(showImage);
  
      }
  
      showQuestion();




















$(".quiz").each(function(){
    var quiz = $(".quiz");
    var quizCont = $(".quizContainer");
    var questionSlides = {
        slide1 = {
            question: "What is 1+1?",
            answers: ["poo", "pee", "cheese", "all of the above"],
            correct: "cheese",
        },
        slide2 = {
            question: "What is 2+1?",
            answers: ["poo", "pee", "cheese", "all of the above"],
            correct: "cheese",
        },
        slide3 = {
            question: "What is 5+1?",
            answers: ["poo", "pee", "cheese", "all of the above"],
            correct: "cheese",
        },
        slide4 = {
            question: "What is 1+40?",
            answers: ["poo", "pee", "cheese", "all of the above"],
            correct: "cheese",
        },
        slide5 = {
            question: "What is 1+52?",
            answers: ["poo", "pee", "cheese", "all of the above"],
            correct: "cheese",
        }
    }
        

    var nextBtn;
    var currentQuestion = 0;
    var timer;

    function slideTime() {
        clearTimeout(timeOut);
        timeout = setTimeout(function(){
            if (questionSlides[n] < questionSlides.length) {
                //if userpick = correct show correct slide, skip wrong slide
                //else skip correct slide, show wrong slide
                //then 
                move(currentQuestion + 1);

            }
        }, 60000);
    }

    //create button element for slideButtons
    each(slide, function(){
        nextBtn.createElement('<button type="button" class="slideButtons"></button>');
        
        $(".slideButtons").on("click", function() {
            move();
        });
        slideTime();
    });
})
})





$(window).ready(function () {
    // Questions array
    var questions = ["How many licks does it officialy take to get to the center of a Tootsie Pop?", "What percent of American adults belive chocolate milk comes from brown cows?",
        "What is Bob Dylan's real name?", "The Center for Disease Control's (CDC) website has a section dedicated to?", "What does McDonald's refer to their frequent users as?",
        "What kills more people yearly than shark attacks?", "Under the Code of Hammurabi (Babylonian code of law in ancient Mesopotamia) bartenders that watered down beer were..."];
    // Answers array
    var answers = [
        ["1", "364", "420", "Just bite it", "A lot!"],
        ["3", "2%", "Where does strawberry milk come from then?", "7%", "It doesn't?", "I don't drink milk", "14%"],
        ["2", "Dylan Bob", "Robert Zimmerman", "Jokerman"],
        ["1", "Zombie Prepardness", "Sex Addiction"],
        ["4", "Guests", "Customers", "Fans", "Heavy Users"],
        ["4", "Vending machines", "Selfies", "Coconuts", "All of the above"],
        ["1", "Punished by execution", "Fined", "When was beer even invented?", "Mesopowhaaat?", "Doesn't matter, I'll take 4!"]
    ];
    // Seconds to be used for timer
    var seconds = 30;
    // Var binding timer to   val to prevent speeding up caused by multiple instances
    var timer,
        timer2;
    // Keep track of times played so it won't exceed number of questions
    var timesPlayed = -1;
    // Keeps track of right and wrong answers
    var right = 0;
    var wrong = 0;

    // Displays Start Game! button
    $("#answersInsert").append("<div class='row'><button type='button' id='startGame' class='btn btn-outline-primary btn-lg'>Start Game!</button></div>");
    // When button is clicked startGame function is fired off
    $("#startGame").on("click", startGame);

    // Adds 1 to timesPlayed, empties previous buttons, renders new questions and answers,
    // runs checkAnswer function when any button is clicked, invokes run function.
    // If all questions have been displayed else statement invokes gameOver function.
    function startGame() {
        console.log("timesPlayed: " + timesPlayed);
        console.log("qlength: " + questions.length);
        $("#timer").text("Time left: " + seconds);
        clearInterval(timer2);
        timesPlayed++;
        if (timesPlayed < questions.length) {
            $("#answersInsert").empty();
            renderQA(questions[timesPlayed], answers[timesPlayed]);
            run();
        } if (timesPlayed === questions.length) {
            gameOver();
        }
    }

    // checkAnswer checks if the id of the button which has been dynamically inputted with the index in which it was entered is the same as the same as the 0 index of that answer array
    // which is the correct answer. If it matches right++ if not then wrong++. Then invokes clearTimer and startGame functions.
    $(document).on("click", ".movieBtn", checkAnswer);
    function checkAnswer() {
        console.log("event.target.id: " + event.target.id);
            console.log("answers[timesPlayed][0]: " + answers[timesPlayed][0]);
            clearTimer();
        if (event.target.id == answers[timesPlayed][0]) {
            right++;
            shortTimer(true);
        } else {
            wrong++;
            shortTimer(false);
        }
    }

    // run clearInterval then setInterval to prevent multiple instances and sets the timerFun as the reoccuring function every second.
    function run() {
        clearInterval(timer);
        timer = setInterval(timerFunc, 1000);
    };

    // timerFunc -- seconds and displays the new total on the screen everytime its called. If the seconds are zero then it adds a wrong, empties the buttons invokes cleaerTimer then startGame.
    function timerFunc() {
        seconds--;
        $("#timer").text("Time left: " + seconds);
        if (seconds === 0) {
            wrong++;
            clearTimer();
            shortTimer(false);
        };
    };

    // clearTimer uses clearInterval on timer then resets seconds to 30 and updates the html.
    function clearTimer() {
        clearInterval(timer);
        seconds = 30;
        $("#timer").text("Time left: " + seconds);
    }

    // shortTimer gets called whenever a movieBtn is pressed or timerFunc reaches 0.
    // It resets the text in #timer and calls the startGame function after 3 seconds.
    // Meanwhile it displays a correct or wrong message on the screen.
    function shortTimer(boolean) {
        $("#answersInsert").empty();
        $("#timer").text("Timer");
        timer2 = setInterval(startGame, 3000);
        if (boolean === true) {
            $("#questionInsert").text("Correct!");
        };
        if (boolean === false) {
            $("#questionInsert").text("Better luck next time!");
        };
    };

    // renderQuestions pushes the next question to the html
    // renderAnswers dynamically creates buttons for an array of answers that corresponds to the answer and pushes them to the html.
    function renderQA(question, answer) {
        $("#questionInsert").text(question);
        for (var index = 1; index < answer.length; index++) {
            $("#answersInsert").append("<div class='row'><button type='button' id=" + (index) + " class='movieBtn btn btn-outline-primary btn-lg'>" + answer[index] + "</button></div>");
        console.log(index);
        };
    };

    // gameOver inserts Thanks for playing text to html, displays right and wrong values and clears the buttons.
    function gameOver() {
        clearInterval(timer);
        clearInterval(timer2);
        $("#timer").text("Thanks for playing!");
        $("#questionInsert").text("Correct: " + right + " Wrong: " + wrong);
        $("#answersInsert").empty();
        playAgain ();
    }

    // Creates a playAgain button when it is called from the gameOver function which calls the reset function
    function playAgain() {
        $("#answersInsert").append("<div class='row'><button type='button' id='playAgain' class='btn btn-outline-primary btn-lg'>Play Again?</button></div>");
        $("#playAgain").on("click", reset);
    };

    // reset function resets all relevant variables and calls the startGame function
    function reset() {
            timesPlayed = -1;
            right = 0;
            wrong = 0;
            startGame ();
    };
});


ar questionsArray = [{
    question1: "boom boom boom",
        answers: ["answer1", "answer2", "answer3", "answer4"],
        correctAns: answers[3]
    },
    {question2: "boom boom boom",
        answers: ["answer1", "answer2", "answer3", "answer4"],
        correctAns: answers[1]
    },
    {question3: "boom boom boom",
        answers: ["answer1", "answer2", "answer3", "answer4"],
        correctAns: answers[2]
    },
    {question4: "boom boom boom",
        answers: ["answer1", "answer2", "answer3", "answer4"],
        correctAns: answers[4]
    },
    {question5: "boom boom boom",
        answers: ["answer1", "answer2", "answer3", "answer4"],
        correctAns: answers[3]
    },
];
// console.log(questionsArray.question1.correctAns);
var clock;   

var trivia = {

score: 0,
clockCount: 60,

// time: 60,   

count: function() {
trivia.clockCount--;
$("#clock").text(trivia.clockCount);

},

start: function() {
// watch.time = 60;
// intervalId = setInterval(watch.count, 1000);
clock = setInterval(trivia.clockCount, 60000);

},


reset: function() {
if (time === 0) {
timesUp();
}
}

}


function start() {
$("#start").on("click", function() { 
var score = 0;


})
}

//start button on click sets off first timer & first question
//timer goes off 60 sec

function reset() {

start();

}

function timesUp() {
$("#timesup").text("POO")
$(".lol").attr('src', 'assets/images/pileofpoo.png')

//show time up screen, 
//score stays the same
//next question button
}




function yay() {
//A;SLDKFJ LOL SHOW CELEBRATION EMOJI 
//NEXT QUESTION BUTTON
score++;
$(".lol").attr('src', 'assets/images/celebration.png')

}

function ohno() {
//lol show poop emoji
//next question button
score--;
$(".lol").attr('src', 'assets/images/bamemoji.png')

}
//start function lol also questionsLeft = true

// $("#next").on("click" (displayQuestion) {

//only use next until questionsLeft = false
//uhhhhh somehow make this reusable maybe lol try loop in loop in loop
// var questionsLeft = false

//  while (!questionsLeft) {

// questionsLeft = true; 

for (var n = 0; n < questionsArray; n++ ) {
$("#timer").text(watch);
$("#qna").text(questionsArray[n]);
$("#qna").append(questionsArray[n].answers[0]);
$("#qna").append(questionsArray[n].answers[1]);
$("#qna").append(questionsArray[n].answers[2]);
$("#qna").append(questionsArray[n].answers[3]);

}

if (time === 0) {
timesUp();
}

$(".answers").on("click", function(){
if (userAnswer === correctAns) {
yay();
} else {
ohno();
}
})


// return $("finalScore").text(score);






// reset();


//uhhhhh maybe this can maybe go in the maybe display question function lol maybe probably who knows 
//q[n] start timer 60 sec, show question and multiple choices.


function renderQA(question, answer) {
    $("#questionInsert").text(question);
    for (var index = 1; index < answer.length; index++) {
        $("#answersInsert").append("<div class='row'><button type='button' id=" + (index) + " class='movieBtn btn btn-outline-primary btn-lg'>" + answer[index] + "</button></div>");
    console.log(index);
    };
};

// gameOver inserts Thanks for playing text to html, displays right and wrong values and clears the buttons.
function gameOver() {
    clearInterval(timer);
    clearInterval(timer2);
    $("#timer").text("Thanks for playing!");
    $("#questionInsert").text("Correct: " + right + " Wrong: " + wrong);
    $("#answersInsert").empty();
    playAgain ();
}

// Creates a playAgain button when it is called from the gameOver function which calls the reset function
function playAgain() {
    $("#answersInsert").append("<div class='row'><button type='button' id='playAgain' class='btn btn-outline-primary btn-lg'>Play Again?</button></div>");
    $("#playAgain").on("click", reset);
};

// reset function resets all relevant variables and calls the startGame function
function reset() {
        timesPlayed = -1;
        right = 0;
        wrong = 0;
        startGame ();



