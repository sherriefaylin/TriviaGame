// Start to fire off loop



//Loop: 

                       //correct 
                // >                >
    //Question 
    //  & A's                               next question
                                    
                // >                >
                      //incorrect

//when no more Q's, 
//show score & reset function



//start button

var game = {

    //  score = 0,
    currentQuestion: 0,

 questionsArray: {
    qu1: "In a class of p students, the average (arithmetic mean) of the test scores is 70. In another class of n students, the average of the scores for the same test is 92. When the scores of the two classes are combined, the average of the test scores is 86. What is the value of p/n?",
    qu2: "The share of library materials that is in nonprint formats [1] is increasing steadily; in 2010, at least 18.5 million e-books were available for circulation. At point [1], the writer is considering adding the following information. —e-books, audio and video materials, and online journals— Should the writer make this addition here?",
    qu3: "The agency reports that by rigorously enforcing state regulations, industrial pollution has been successfully reduced to acceptable levels.",
    qu4: "At Groton High, Valentine’s Day is taken very seriously. Students in each class must send a valentine to all the other classmates. In a particular class, there are 72 valentines in total. How many students are in the class?",
    qu5: "A lightbulb manufacturer selects 500 incandescent bulbs from its factory at random and finds that their average lamp life has a 95% confidence interval of 1,000 to 2,000 hours. Which of the following conclusions is the most appropriate based on the confidence interval?"
},

 answersArray: {
    qu1: ["a1", "a2", "a3", "a4"],
    qu2: ["a1", "a2", "a3", "a4"],
    qu3: ["a1", "a2", "a3", "a4"],
    qu4: ["a1", "a2", "a3", "a4"],
    qu5: ["a1", "a2", "a3", "a4"],
},

 correctAnswers: {
    qu1: "correctAns",
    qu2: "correctAns",
    qu3: "correctAns",
    qu4: "correctAns",
    qu5: "correctAns",
},
}


// function start() {

    
    function showYaySlide() {
        score++;
        questionsLeft--;   
        $(".quizContainer").text("Yay!");    
    }

    function showPooSlide() {
        score--;
        questionsLeft--; 
        $(".quizContainer").text("Oh no!"); 
    }

    function showTimeSlide() {
        questionsLeft--; 
        $(".quizContainer").text("Time's up..."); 
        
    }

    function nextBtn() {
        $("#nextBtn").on("click", questionsArray[n+1])
    }

    function showEndSlide() {
        $(".quizContainer").text(score);
    }

    function reset() {
        $("#restartBtn").on("click", start)
    }

    function start() {
        game.currentQuestion = 0
    game.nextQuestion();
    }

    function nextQuestion() {
        // timer = 60000;
        // $("#timer").text(timer);

        var showQuestion = Object.values(game.questionsArray)[game.currentQuestion];
        $(".question").text(showQuestion);

        var showAnswers = Object.values(game.answersArray)[game.currentQuestion];
        $(".answers").text(showAnswers);

        //for each option make a button
        $(".answers").each(showAnswers, function () {
            $('.answers').append('<button class="optionBtns"></button>')
          })

        };


        currentCorrect = Object.values(game.correctAnswers)[game.currentQuestion];
//on clicked answer's text becomes userAns

        userAns = $()

        function (event)  {
            var userAns = $(event.userAns);
            if ($(userAns).text() === currentCorrect) {
                showYaySlide();
                nextBtn();
            } else {
                showPooSlide();
                nextBtn();
            }
        }
            
            // for (var n = 0; n < questionsArray; n++) {
                // $(".questions").text(questionsArray[n]);
                
                
                // for (var n = 0; n < answersArray; n++) {
                    //     $(".answers").text(answersArray[n]);
                    //     var answers = Object.values(answersArray);
                    
        // }
        
        // if (time = 0) {
        //     showTimeSlide();
        //     nextBtn();
        // }
        
    //     }
        

        

    // }

    // if (questionsLeft = 0) {
    //     showEndSlide();
    //     reset();
    // }


