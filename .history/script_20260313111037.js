import { questions, results, petAssets } from './config.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Находим все элементы интерфейса
    const welcomeCard = document.getElementById('welcome-card');
    const questionsSection = document.getElementById('questions-section');
    const resultSection = document.getElementById('result-section');
    const petRoom = document.getElementById('pet-room');
    
    const startBtn = document.getElementById('start-quiz');
    const btnRestart = document.getElementById('restart');
    const btnContinue = document.getElementById('continue');
    const btnBack = document.getElementById('btn-back');

    const qTitle = document.getElementById('question-title');
    const qAnswers = document.getElementById('answers');
    const qIndexEl = document.getElementById('q-index');
    const qTotalEl = document.getElementById('q-total');
    
    const resultPet = document.getElementById('result-pet');
    const resultGames = document.getElementById('result-games');

    // Находим слои фона
    const layerBg = document.querySelector('.layer-bg');
    const layerFloor = document.querySelector('.layer-floor');
    const layerFx = document.querySelector('.layer-fx');

    let currentQuestion = 0;
    let answersGiven = [];

    // 2. Проверка входа (если уже играли)
    const isRegistered = localStorage.getItem('childName'); 
    if (isRegistered && petRoom) {
        welcomeCard.classList.add('hidden');
        petRoom.classList.remove('hidden');
    }

    // 3. Сборка SVG питомца
    function assemblePet(type, markType = 'heart') {
        const body = petAssets.bodies[type] || petAssets.bodies['artist'];
        const mark = petAssets.marks[markType];
        return `
        <svg viewBox="0 0 200 200" width="200" height="200">
          ${body}
          <g class="accessory-layer">${mark}</g>
        </svg>`;
    }

    // 4. Логика теста
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
        if (btnBack) btnBack.disabled = currentQuestion === 0;
    }

    function showResult() {
        questionsSection.classList.add('hidden');
        resultSection.classList.remove('hidden');

        // Считаем какой тип ответов победил
        const counts = {};
        answersGiven.forEach(t => counts[t] = (counts[t] || 0) + 1);
        const topType = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);

        // МЕНЯЕМ МИР: Привязываем фон к типу питомца из config.js
        const world = results[topType].world;
        if (world) {
            if (layerBg) layerBg.src = world.bg;
            if (layerFloor) layerFloor.src = world.floor;
            if (layerFx) layerFx.src = world.fx;
        }

        document.getElementById('result-title').textContent = `Твой друг: ${results[topType].pet}`;
        resultPet.innerHTML = assemblePet(topType, 'heart');
        resultGames.textContent = results[topType].games;
    }

    // 5. Обработка кнопок
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            welcomeCard.classList.add('hidden');
            questionsSection.classList.remove('hidden');
            showQuestion();
        });
    }

    if (btnRestart) {
        btnRestart.addEventListener('click', () => {
            resultSection.classList.add('hidden');
            welcomeCard.classList.remove('hidden');
            currentQuestion = 0;
            answersGiven = [];
        });
    }

    if (btnContinue) {
        btnContinue.addEventListener('click', () => {
            alert("Ура! Отправляемся в твою комнату!");
            localStorage.setItem('childName', 'Друг'); // "Регистрируем" для примера
            location.reload(); // Перезагружаем, чтобы сработал вход в комнату
        });
    }

    if (btnBack) {
        btnBack.addEventListener('click', () => {
            if (currentQuestion > 0) {
                currentQuestion--;
                showQuestion();
            }
        });
    }
});