const quizData = [
  { question: "Capital of India?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"], answer: "Delhi" },
  { question: "5 + 3 = ?", options: ["5", "8", "10", "15"], answer: "8" },
  { question: "Color of the sky?", options: ["Blue", "Green", "Red", "Yellow"], answer: "Blue" }
];

let current = 0, score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultEl = document.getElementById("result");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
  const q = quizData[current];
  questionEl.innerText = q.question;
  optionsEl.innerHTML = "";
  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.classList.add("option-btn");
    btn.onclick = () => {
      if (opt === q.answer) score++;
      nextQuestion();
    };
    optionsEl.appendChild(btn);
  });
}

function nextQuestion() {
  current++;
  if (current < quizData.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz").style.display = "none";
    resultEl.innerText = `Your Score: ${score} / ${quizData.length}`;
  }
}

nextBtn.onclick = nextQuestion;

loadQuestion();
