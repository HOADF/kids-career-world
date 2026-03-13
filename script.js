import { petAssets } from './config.js';
import { QuizManager } from './quiz.js';

document.addEventListener('DOMContentLoaded', () => {
    const quiz = new QuizManager();

    // Элементы интерфейса
    const welcomeCard = document.getElementById('welcome-card');
    const questionsSection = document.getElementById('questions-section');
    const resultSection = document.getElementById('result-section');
    const petRoom = document.getElementById('pet-room');
    
    // Кнопки
    const startBtn = document.getElementById('start-quiz');
    const btnRestart = document.getElementById('restart');
    const btnContinue = document.getElementById('continue');
    const btnBack = document.getElementById('btn-back');

    // Поля теста
    const qTitle = document.getElementById('question-title');
    const qAnswers = document.getElementById('answers');
    const qIndexEl = document.getElementById('q-index');
    const qTotalEl = document.getElementById('q-total');
    
    // Поля результата
    const resultPet = document.getElementById('result-pet');
    const resultGames = document.getElementById('result-games');
    const resultTitle = document.getElementById('result-title');

    // Слои мира (динамический фон)
    const bgImg = document.getElementById('bg-img');
    const floorImg = document.getElementById('floor-img');
    const mainPetImg = document.getElementById('pet-img');

    // 1. ПРОВЕРКА ВХОДА
    if (localStorage.getItem('childName') && petRoom) {
        welcomeCard?.classList.add('hidden');
        petRoom.classList.remove('hidden');
    }

    // 2. СБОРКА SVG ПИТОМЦА
    function assemblePet(type, markType = 'heart') {
        const body = petAssets.bodies[type] || petAssets.bodies['artist'];
        const mark = petAssets.marks[markType] || "";
        return `
        <svg viewBox="0 0 200 200" style="width:100%; height:100%;">
          ${body}
          <g class="accessory-layer">${mark}</g>
        </svg>`;
    }

    // 3. ОБНОВЛЕНИЕ ВИЗУАЛА МИРА
    function updateWorld(worldData, petType) {
        if (!worldData) return;
        
        // Плавная смена через прозрачность (если добавить transition в CSS)
        if (bgImg) bgImg.src = worldData.bg;
        if (floorImg) floorImg.src = worldData.floor;
        
        // Меняем главного персонажа на фоне
        if (mainPetImg) {
            mainPetImg.src = `pets/${petType}.svg`; 
            // Если используешь SVG сборку для фона:
            // mainPetImg.parentElement.innerHTML = assemblePet(petType);
        }
    }

    // 4. ОТОБРАЖЕНИЕ ВОПРОСА
    function renderQuestion() {
        const q = quiz.getCurrentQuestion();
        const progress = quiz.getProgress();

        qIndexEl.textContent = progress.current;
        qTotalEl.textContent = progress.total;
        qTitle.textContent = q.text;
        qAnswers.innerHTML = '';

        q.answers.forEach(ans => {
            const btn = document.createElement('button');
            btn.className = 'answer-btn btn-primary'; // Используем наши новые стили
            btn.style.margin = "5px";
            btn.textContent = ans.text;
            
            btn.onclick = () => {
                const step = quiz.nextQuestion(ans.type);
                if (step.finished) {
                    showResult(step.result);
                } else {
                    renderQuestion();
                }
            };
            qAnswers.appendChild(btn);
        });

        if (btnBack) btnBack.disabled = progress.current === 1;
    }

    function showResult(result) {
        questionsSection.classList.add('hidden');
        resultSection.classList.remove('hidden');

        // Меняем фон и персонажа под результат
        updateWorld(result.data.world, result.type);

        resultTitle.textContent = `Твой друг: ${result.data.pet}`;
        resultPet.innerHTML = assemblePet(result.type, 'heart');
        resultGames.textContent = result.data.games;
    }

    // 5. СОБЫТИЯ
    startBtn?.addEventListener('click', () => {
        welcomeCard.classList.add('hidden');
        questionsSection.classList.remove('hidden');
        renderQuestion();
    });

    btnBack?.addEventListener('click', () => {
        if (quiz.prevQuestion()) renderQuestion();
    });

    btnRestart?.addEventListener('click', () => {
        quiz.reset();
        resultSection.classList.add('hidden');
        welcomeCard.classList.remove('hidden');
        // Возвращаем стандартный фон океана
        if (bgImg) bgImg.src = 'backgrounds/ocean.svg';
        if (floorImg) floorImg.src = 'backgrounds/ocean_floor.svg';
    });

    btnContinue?.addEventListener('click', () => {
        localStorage.setItem('childName', 'Друг');
        location.reload(); 
    });
});