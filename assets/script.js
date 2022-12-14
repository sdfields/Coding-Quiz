var introEl = document.getElementById("intro");
var introButtonEl = document.getElementById("intro-button");
var quizEl = document.getElementById("quiz");
var resultsEl = document.getElementById("results");
var questionEl = document.getElementById("question");
var choicesEl = document.getElementById("choices");
var questionIndex = 0
var allQuestions = [
    {
        question:"What does CSS stand for?",
        choices: ["Option A", "Option B", "Option C", "Option D"],
        solution: "Option B"

    },

    {
        question:"Insert Question 2 Here",
        choices: [
            "Option A", "Option B", "Option C", "Option D"
        ],
        solution: "Option C"
        
    },

    {
        question:"Insert Question 3 Here",
        choices: [
            "Option A", "Option B", "Option C", "Option D"
        ],
        solution: "Option D"
        
    },

];

function startQuiz(){
    console.log("start");
    introEl.style.display="none"
    quizEl.style.display="block"
    renderQuiz()
};

function renderQuiz(){
    console.log("renderQuiz")
    questionEl.textContent = allQuestions[questionIndex].question

    for(var i = 0; i < allQuestions[questionIndex].choices.length; i++) {
        var option = allQuestions[questionIndex].choices[i]
        var optionButton = document.createElement("button")
        // addEventListener
        optionButton.textContent = option
        choicesEl.append(optionButton)
    }


    // Display all choices using For loop
    // inside For loop
    // create new button element
    // assign each choice into the button using textContent
    // assign addEventListner
    // append this button in choicesEl
};

introButtonEl.addEventListener("click", startQuiz);
