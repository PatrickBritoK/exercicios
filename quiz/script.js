const questions = [
    {
        question: "Qual é a capital do Brasil?",
        options: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
        correctAnswer: 2
    },
    {
        question: "Qual é o maior planeta do Sistema Solar?",
        options: ["Terra", "Júpiter", "Marte", "Vênus"],
        correctAnswer: 1
    },
    {
        question: "Quem escreveu 'Dom Quixote'?",
        options: ["Machado de Assis", "Cervantes", "Shakespeare", "Tolstói"],
        correctAnswer: 1
    }
];

let currentQuestionIndex = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const resultElement = document.getElementById("result");
const nextButton = document.getElementById("next-button");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsElement.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.className = "option";
        button.onclick = () => checkAnswer(index);
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correctAnswer) {
        resultElement.textContent = "Resposta Correta!";
    } else {
        resultElement.textContent = "Resposta Incorreta. Tente novamente.";
    }
    nextButton.style.display = "block";
    optionsElement.querySelectorAll(".option").forEach(button => {
        button.disabled = true;
    });
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        resultElement.textContent = "";
        nextButton.style.display = "none";
        optionsElement.querySelectorAll(".option").forEach(button => {
            button.disabled = false;
        });
    } else {
        questionElement.textContent = "Quiz concluído!";
        optionsElement.innerHTML = "";
        resultElement.textContent = "";
        nextButton.style.display = "none";
    }
}

loadQuestion();
