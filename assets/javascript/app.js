
$(document).ready(function () {
// $(document).ready (function() {
//GLOBAL VARIABLES
var questionsArray = ["Which came first?", "What was the egg thinking?", "How many eggs do you eat for breakfast?", "What did the chicken name his egg?", "Why did the chicken cross the road?", "Knock Knock, who's there?"];
var answersArray = [ ["chicken", "egg", "egbert", "whole foods"],
["he wasn't", "about the chicken that gave him up for adoption", "about his friend, egbert", "2% milk"],
["I'm vegan", "12", "oranic or regular?", "Trader Joe says he doesn't believe in eggs."],
["egbert!", "eggbert", "cheese", "ed"],
["to buy a gallon of 2% milk", "to get to your house", "to have an affair", "to use the bathroom"],
["egbert", "ed", "gerald", "the chicken!"] ];

var time = 10;
var timer;
var clearTime;
var score = 0;
var questionsLeft = 0;
// var incorrect = 0;
// var questionsLeft = -1;

$("#ques").append("<div><button>START</button></div>");

$("#start").on("click", quiz, check);

function quiz() {
    questionsLeft++;
    $("#clock").text(time);
    clearInterval(clearTime);
    if (questionsLeft < questionsArray.length) {
        qna(questionsArray[questionsLeft], answersArray[questionsLeft]);
    }
}
function check() {
    clearTime();
    if (event.target.id == answersArray[0]) {
        score++;
    } 
}

function clock() {
    clearInterval(timer);
    clock = setInterval(10000);
    $("#clock").text(time);

    if (time === 0) {
        clearTime();
    }
}

function clearTime() {
    clearInterval(clock);
    time = 10;
    $("#clock").text(time);
}
function qna() {
    $("#quiz").text(question);
    for (var n = 1; n < answer.length; n++) {
        ("#quiz").append("<div><button id=" + (index)  + answer[n] + "</button></div>");

    };
};

function reset() {
    clearInterval(time);
    clearInterval(timer);
    $("#clock").text("");
    $("#quiz").text(score + incorrect);
};





})
