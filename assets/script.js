var introEl = document.getElementById("intro");
var introButtonEl = document.getElementById("intro-button");
var quizEl = document.getElementById("quiz");
var resultsEl = document.getElementById("results");
var questionEl = document.getElementById("question");
var choicesEl = document.getElementById("choices");
var questionIndex = 0;
var score = 0;
var allQuestions = [
  {
    question: "What does CSS stand for?",
    choices: [
      "A: Computer Style Sheets",
      "B: Cascading Style Sheets",
      "C: Cascading Style Scripts",
      "D: Computer Script Sheets",
    ],
    solution: "B: Cascading Style Sheets",
  },

  {
    question: "Insert Question 2 Here",
    choices: [
        "Option A",
        "Option B",
        "Option C",
        "Option D",
    ],
    solution: "Option C",
  },

  {
    question: "Insert Question 3 Here",
    choices: [
        "Option A",
        "Option B",
        "Option C",
        "Option D",
    ],
    solution: "Option D",
  },
];

function startQuiz() {
  introEl.style.display = "none";
  quizEl.style.display = "block";
  renderQuiz();
};

function renderQuiz() {
  // Clear Quiz Questions from previous answer
  
  // For question element in HTML the text content is equal to the first question
  questionEl.textContent = allQuestions[questionIndex].question;
  // For loop starts loop at index 0 and loops through the choices
  for (var i = 0; i < allQuestions[questionIndex].choices.length; i++) {
  
    var option = allQuestions[questionIndex].choices[i];

    var optionButton = document.createElement("button");

    optionButton.textContent = option;

    choicesEl.append(optionButton);
  }
};

function answerQuestion() {
  if (event.target.textContent === allQuestions[0].solution) {
    // Add global variable with time and do not subtract if correct
    console.log('Correct')
  } else {
    // Subtract if incorrect
    console.log('Incorrect')
  } 
  questionIndex = questionIndex+1
  renderQuiz()
};

introButtonEl.addEventListener("click", startQuiz);
choicesEl.addEventListener("click", answerQuestion);
