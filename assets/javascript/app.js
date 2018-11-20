// $(document).ready (function() {
//GLOBAL VARIABLES
var questionsArray = {
                            question1: {
                                answers: ["answer1", "answer2", "answer3", "answer4"],
                                correctAns: answers[3]
                            },
                            question2: {
                                answers: ["answer1", "answer2", "answer3", "answer4"],
                                correctAns: answers[1]
                            },
                            question3: {
                                answers: ["answer1", "answer2", "answer3", "answer4"],
                                correctAns: answers[2]
                            },
                            question4: {
                                answers: ["answer1", "answer2", "answer3", "answer4"],
                                correctAns: answers[4]
                            },
                            question5: {
                                answers: ["answer1", "answer2", "answer3", "answer4"],
                                correctAns: answers[3]
                            },
                        }
                        // console.log(questionsArray.question1.correctAns);
var intervalId;   

var watch = {
    time: 60,   

        
        start: function() {
            watch.time = 60;
            intervalId = setInterval(watch.count, 1000);
        },
        
        count: function() {
            watch.time--;
            $("#timer").text(time);
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



        
     

