
var questionsArr = [
    {
      title: "Javascript is a(n) _______ language?",
      choices: ["A. Object-Oriented", "B. Object Based", "C. Procedural", "D. None Of The Above"],
      answer: "A. Object-Oriented"
    },
    {
      title: "Which of the following keywords is used to define a variable in Javascript?",
      choices: [
        "A. var",
        "B. let",
        "C. Both A and B",
        "D. None of the above"
      ],
      answer: "C. Both A and B"
    },
    {
      title: "Which of the following methods is used to access HTML elements using Javascript?",
      choices: ["A. getElementById()", "B. getElementByClassName()", "C. Both A and B", "D. None of the above"],
      answer: "C. Both A and B"
    },
    {
      title: "Upon encountering empty statements, what does the Javascript Interpreter do?",
      choices: [
        "A. Throws an error",
        "B. Ignores the statements",
        "C. Gives a warning",
        "D. None of the above"
      ],
      answer: "B. Ignores the statements"
    },
    {
      title: "When an operator’s value is NULL, the typeof returned by the unary operator is:",
      choices: [
        "A. Boolean",
        "B. Undefined",
        "C. Object",
        "D. Integer"
      ],
      answer: "C. Object"
     }
    

];

// var choicesArr = [ "All the below", "For", "While", "do-while loops"

// ]

var startBtn = document.querySelector("#start-button");
var questionsEl = document.querySelector("#questions");
var timerEl = document.querySelector("#time");
var choicesEl = document.querySelector("#choices");
var feedbackEl = document.querySelector("#feedback");
var finalScoreEl = document.querySelector("#final-score");
var initialsEl = document.querySelector("#initials");
var submitBtn = document.querySelector("#submit");
var leaderBoardEl = document.querySelector("#highscores");
var clearScoresBtn = document.querySelector("#clear");
var viewHighScores = document.querySelector("#view-scores")

// var choiceButtonEl = "";
// var currentQuestion = "";
var currentChoicesArr = [];
console.log(currentChoicesArr);

var currentQuestionIndex = 0;
console.log(currentQuestionIndex);
var currentChoicesIndex = 0;
var time = questionsArr.length * 15;
var timerId;
var choicesArrIndex = 0;
var highScores = [];



function startQuiz() {
    var startScreenEl = document.getElementById ("start-screen")
    startScreenEl.setAttribute("class", "hide")

    questionsEl.removeAttribute("class")

    timerId = setInterval(clockTick, 1000);

    timerEl.textContent = time;

    getQuestion();

    
}




function getQuestion() {

    
    var currentQuestion = questionsArr[currentQuestionIndex];

    var titleEl = document.getElementById("question-title");
    titleEl.textContent = currentQuestion.title;

    choicesEl.innerHTML = "";
    // currentChoicesIndex = 0;

    currentChoicesArr = [];

    for(var i = 0; i < currentQuestion.choices.length; i++){
        var choiceButtonEl = document.createElement("button");
        choicesEl.appendChild(choiceButtonEl);

        choiceButtonEl.setAttribute("class", "answer-btn");

        

        var currentChoices = currentQuestion.choices[i];
        choiceButtonEl.textContent = currentChoices;

        choiceButtonEl.value = currentChoices;


        // currentChoicesIndex ++;
        // currentChoicesArr = currentChoicesArr.concat(currentChoices);
        // console.log(currentChoicesArr);

        if (currentQuestionIndex < 4 ) {

            choiceButtonEl.addEventListener("click", nextQuestion)
        }
         else { 
            choiceButtonEl.addEventListener("click", endQuiz)
    
         }   

        }
    
    

}
// localStorage.setItem("cars", JSON.stringify([{make: "honda", model: "accord"}, {make: "toyota", model: "corolla"}]))

// function checkAnswer () {
//     if (this.value !== questionsArr[currentQuestionIndex].answer) {
//         // console.log(choiceButtonEl.textContent);
//         console.log(this.value);
//         console.log(questionsArr[currentQuestionIndex].answer);
//         document.body.style.backgroundColor = "red"

//         time -= 15;
//     }
// }

function nextQuestion() {

    if (this.value !== questionsArr[currentQuestionIndex].answer) {
        // console.log(choiceButtonEl.textContent);
        console.log(this.value);
        console.log(questionsArr[currentQuestionIndex].answer);
        document.body.style.backgroundColor = "red"
        feedbackEl.removeAttribute("class")
        feedbackEl.textContent = "Wrong! Idiot!! 🤬"
        

        time -= 15;
    } else {
        document.body.style.backgroundColor = "green"
        feedbackEl.removeAttribute("class")
        feedbackEl.textContent = "Correct! Genius!! 😃"
    }

    setTimeout(function() {
        document.body.style.backgroundColor = "white"
        feedbackEl.setAttribute("class", "hide")
    }, 2000);
//     feedbackEl.setAttribute("class", "feedback");
//     setTimeout(function() {
//     feedbackEl.setAttribute("class", "feedback hide");
//   }, 1000);
    // check if correct answer
   
    // if correct answer, flash "correct!"
    // else "Wrong", deduct 15 seconds from timer
    // moving to next question
    currentQuestionIndex++;
    console.log(currentQuestionIndex);
    getQuestion();

    // if no more questions, display end screen with score and initials input

}

function clockTick () {
    time--;
    timerEl.textContent = time;

    if (timerEl.textContent <= 0) {
        clearInterval(timerId);
    }
}

function endQuiz () {

    if (this.value !== questionsArr[currentQuestionIndex].answer) {
        // console.log(choiceButtonEl.textContent);
        console.log(this.value);
        console.log(questionsArr[currentQuestionIndex].answer);
        document.body.style.backgroundColor = "red"
        feedbackEl.removeAttribute("class")
        feedbackEl.textContent = "Wrong! Idiot!! 🤬"
        

        time -= 15;
    } else {
        document.body.style.backgroundColor = "green"
        feedbackEl.removeAttribute("class")
        feedbackEl.textContent = "Correct! Genius!! 😃"
    }

    setTimeout(function() {
        document.body.style.backgroundColor = "white"
        feedbackEl.setAttribute("class", "hide")
    }, 2000);

    clearInterval(timerId);

    timerEl.textContent = time;

    if (timerEl.textContent > 0) {
        clearInterval(timerId);
    } else {
        timerEl.textContent = 0;
    }

    questionsEl.setAttribute("class", "hide");

    var endScreenEl = document.getElementById("end-screen");
    
    setTimeout(function() {
        endScreenEl.removeAttribute("class");
    }, 2000);

    finalScoreEl.textContent = timerEl.textContent;
    
}


function saveHighScore () {
    var initials = initialsEl.value.trim();

    var highScores = JSON.parse(localStorage.getItem("highscores")) || [];

    var newScore = {
        score: time,
        initials: initials 
        };

        highScores.push(newScore);
        localStorage.setItem("highscores", JSON.stringify(highScores));
            
        console.log(newScore);
        console.log(highScores);

        printHighScores();

}    


function printHighScores () {
    var endScreenEl = document.getElementById("end-screen");
    endScreenEl.setAttribute("class", "hide")

    var highScoresScreenEl = document.getElementById("high-scores-screen");
    highScoresScreenEl.removeAttribute("class")

    var highScores = JSON.parse(localStorage.getItem("highscores")) || [];
    console.log(highScores);

    highScores.sort(function(a,b) {
        return b.score - a.score;
    });

    for(var i = 0; i < 10; i++){
        var topScores = document.createElement("li");
        leaderBoardEl.appendChild(topScores);

        topScores.innerHTML = highScores[i].score + "  -  " + highScores[i].initials;

        

        console.log(topScores);
    }

    
}


function showLeaderBoard () {
    var startScreenEl = document.getElementById ("start-screen")
    startScreenEl.setAttribute("class", "hide")

    printHighScores();
    
    
}

viewHighScores.addEventListener("click", showLeaderBoard, { once: true })


function clearHighScores() {
    localStorage.clear();
    leaderBoardEl.setAttribute("class", "hide")
}

clearScoresBtn.addEventListener("click", clearHighScores);



submitBtn.addEventListener("click", saveHighScore);

startBtn.addEventListener("click", startQuiz);

