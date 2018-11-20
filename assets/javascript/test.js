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