const questions = [
    {
    question: "What is the capital of France?",
    answers: ["Berlin", "Madrid", "Paris", "Rome"],
    correct: 2
    },
    {
    question: "Which programming language is used for web development?",
    answers: ["Python", "JavaScript", "C++", "Ruby"],
    correct: 1
    }
];
let index = 0;

// cache the DOM elements
const quizQuestion = document.getElementById("question-text");
const answerButtons = document.getElementsByClassName("choices");
const nextQButton = document.getElementById("next-question");
const quizFeedback = document.getElementById("feedback");

//Displays the current question, beginning with the first
function displayQuestion() {
     quizQuestion.textContent = questions[index].question;
     let qAnswers = questions[index].answers;
     let answerIndex = 0;
     let correctAnswer = questions[index].correct;
     for (answer of answerButtons) {
          answer.innerHTML = qAnswers[answerIndex];
          if (answerIndex === correctAnswer){
               answer.setAttribute("id", "correct");
          } else {
               answer.removeAttribute("id");
          }
          answerIndex++;
     }
}


// function to handle clicked answers 
function handleAnswerSelection(event){
     let selected = event.target;
     if (selected.hasAttribute("id")) {
          quizFeedback.textContent = "CORRECT!"
     } else {
          quizFeedback.textContent = "Oops! Wrong answer."
     }
}

// adding click events to each answer button
for (button of answerButtons) {
     button.addEventListener("click", handleAnswerSelection);
}

//Function to display next question
function nextQuestion() {
     index++;
     displayQuestion();
}

//click event that triggers nextQuestion()
nextQButton.addEventListener("click", nextQuestion);

//Display the question
displayQuestion();



   