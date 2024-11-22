const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correct: 2
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correct: 1
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    correct: 3
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["Shakespeare", "Dickens", "Austen", "Hemingway"],
    correct: 0
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const questionObj = questions[currentQuestion];
  document.getElementById("question").textContent = questionObj.question;
  const buttons = document.querySelectorAll(".answer-btn");
  buttons.forEach((btn, index) => {
    btn.textContent = questionObj.options[index];
    btn.disabled = false; //-------------------------------------- Enable the buttons for the next question
  });
  document.getElementById("score").textContent = `Score: ${score}`;
  document.getElementById("next-btn").style.display = "none"; //---------------------- Hide the "Next" button initially
}

function checkAnswer(selected) {
  const correctAnswer = questions[currentQuestion].correct;

  //------------------------------------- Disable all buttons after an answer is selected
  const buttons = document.querySelectorAll(".answer-btn");
  buttons.forEach((btn) => {
    btn.disabled = true;
  });

  if (selected === correctAnswer) {
    score++;
  }

  document.getElementById("score").textContent = `Score: ${score}`;
  document.getElementById("next-btn").style.display = "block"; //-------------------------- Show the "Next" button after answering
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  const quizBox = document.querySelector(".quiz-box");
  quizBox.innerHTML = `
        <h2>Quiz Complete!</h2>
        <p>Your score is ${score} out of ${questions.length}.</p>
    `;
}

loadQuestion();
