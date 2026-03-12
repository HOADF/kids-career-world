// Импортируем наши данные
import { questions, results, petAssets } from './config.js';

const startBtn = document.getElementById('start-quiz');
const welcomeCard = document.getElementById('welcome-card');
const questionsSection = document.getElementById('questions-section');
const resultSection = document.getElementById('result-section');
const qTitle = document.getElementById('question-title');
const qAnswers = document.getElementById('answers');
const qIndexEl = document.getElementById('q-index');
const qTotalEl = document.getElementById('q-total');
const btnBack = document.getElementById('btn-back');
const resultPet = document.getElementById('result-pet');
const resultGames = document.getElementById('result-games');
const btnRestart = document.getElementById('restart');

let currentQuestion = 0;
let answersGiven = [];

// Сборка SVG питомца из частей
function assemblePet(type, markType = 'heart') {
    const body = petAssets.bodies[type] || petAssets.bodies['artist'];
    const mark = petAssets.marks[markType];
    return `
    <svg viewBox="0 0 200 200" width="200" height="200">
      ${body}
      <g class="accessory-layer">${mark}</g>
    </svg>`;
}

startBtn.onclick = () => {
    welcomeCard.classList.add('hidden');
    questionsSection.classList.remove('hidden');
    showQuestion();
};

function showQuestion() {
    const q = questions[currentQuestion];
    qIndexEl.textContent = currentQuestion + 1;
    qTotalEl.textContent = questions.length;
    qTitle.textContent = q.text;
    qAnswers.innerHTML = '';

    q.answers.forEach(ans => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.textContent = ans.text;
        btn.onclick = () => {
            answersGiven[currentQuestion] = ans.type;
            if (currentQuestion < questions.length - 1) {
                currentQuestion++;
                showQuestion();
            } else {
                showResult();
            }
        };
        qAnswers.appendChild(btn);
    });
    btnBack.disabled = currentQuestion === 0;
}

btnBack.onclick = () => {
    currentQuestion--;
    showQuestion();
};

function showResult() {
    questionsSection.classList.add('hidden');
    resultSection.classList.remove('hidden');

    const counts = {};
    answersGiven.forEach(t => counts[t] = (counts[t] || 0) + 1);
    const topType = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);

    document.getElementById('result-title').textContent = `Твой друг: ${results[topType].pet}`;
    resultPet.innerHTML = assemblePet(topType, 'heart'); // Здесь можно менять на 'star'
    resultGames.textContent = results[topType].games;
}

btnRestart.onclick = () => {
    resultSection.classList.add('hidden');
    welcomeCard.classList.remove('hidden');
    currentQuestion = 0;
    answersGiven = [];
};