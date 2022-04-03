
var questionsArr = [
    {
      title: "Javascript is a(n) _______ language?",
      choices: ["Object-Oriented", "Object Based", "Procedural", "None Of The Above"],
      answer: "Object-Oriented"
    },
    {
      title: "Which of the following keywords is used to define a variable in Javascript?",
      choices: [
        "var",
        "let",
        "Both A and B",
        "None of the above"
      ],
      answer: "Both A and B"
    },
    {
      title: "Which of the following methods is used to access HTML elements using Javascript?",
      choices: ["getElementById()", "getElementByClassName()", "Both A and B", "None of the above"],
      answer: "Both A and B"
    },
    {
      title: "Upon encountering empty statements, what does the Javascript Interpreter do?",
      choices: [
        "Throws an error",
        "Ignores the statements",
        "Gives a warning",
        "None of the above"
      ],
      answer: "Ignores the statements"
    },
    {
      title: "When an operator’s value is NULL, the typeof returned by the unary operator is:",
      choices: [
        "Boolean",
        "Undefined",
        "Object",
        "Integer"
      ],
      answer: "Object"
     }
    

];

// var choicesArr = [ "All the below", "For", "While", "do-while loops"

// ]

var startBtn = document.querySelector("#start-button");
var questionsEl = document.querySelector("#questions");
var timerEl = document.querySelector("#time");
var choicesEl = document.querySelector("#choices");
var feedbackEl = document.querySelector("#feedback")
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
        

        time -= 15;
    } else {
        document.body.style.backgroundColor = "green"
    }

    setTimeout(function() {
        document.body.style.backgroundColor = "white" 
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

        time -= 15;

        
    }

    clearInterval(timerId);

    timerEl.textContent = time;

    if (timerEl.textContent > 0) {
        clearInterval(timerId);
    } else {
        timerEl.textContent = 0;
    }

    

    questionsEl.setAttribute("class", "hide");

    var endScreenEl = document.getElementById("end-screen");
    endScreenEl.removeAttribute("class");


    
}

startBtn.addEventListener("click", startQuiz);

