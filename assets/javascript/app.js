// $(document).ready (function() {
//GLOBAL VARIABLES
var questionsArray = [{
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



        
     

