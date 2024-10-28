const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
            { text: "Paris", correct: true },
            { text: "Rome", correct: false }
        ]
    },
    {
        question: "Who is the CEO of Tesla?",
        answers: [
            { text: "Jeff Bezos", correct: false },
            { text: "Elon Musk", correct: true },
            { text: "Bill Gates", correct: false },
            { text: "Mark Zuckerberg", correct: false }
        ]
    },
    {
        question: "What is the capital of Japan?",
        answers: [
            { text: "Seoul", correct: false },
            { text: "Tokyo", correct: true },
            { text: "Beijing", correct: false },
            { text: "Bangkok", correct: false }
        ]
    }
];

const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const resultContainer = document.getElementById('result');
const scoreElement = document.getElementById('score');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add('hidden');
    nextButton.classList.remove('hidden');
    questionContainer.classList.remove('hidden');
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.textContent = question.question;
    answerButtonsElement.innerHTML = ''; // Clear previous answers
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtonsElement.appendChild(button);
    });
}

function selectAnswer(answer) {
    const buttons = Array.from(answerButtonsElement.children);
    buttons.forEach(button => button.disabled = true); // Disable buttons after selection
    if (answer.correct) {
        score++;
    }
    buttons.forEach(button => {
        const answerText = button.textContent;
        const correctAnswer = questions[currentQuestionIndex].answers.find(a => a.correct);
        if (answerText === correctAnswer.text) {
            button.classList.add('correct');
        } else {
            button.classList.add('wrong');
        }
    });
    if (currentQuestionIndex < questions.length - 1) {
        nextButton.classList.remove('hidden');
    } else {
        showResult();
    }
}

function showResult() {
    questionContainer.classList.add('hidden');
    nextButton.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    scoreElement.textContent = `${score} / ${questions.length-1}`;
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    showQuestion(questions[currentQuestionIndex]);
    nextButton.classList.add('hidden');
});
