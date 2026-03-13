import { QuizManager } from './quiz.js';
import { UI } from './ui.js';
import { assemblePet } from './pet-factory.js';

document.addEventListener('DOMContentLoaded', () => {
    const quiz = new QuizManager();

    // 1. Клик по кнопке "Давай дружить"
    document.getElementById('start-quiz')?.addEventListener('click', () => {
        UI.showSection('questions-section'); // Переключаем на экран вопросов
        renderQuestion();
    });

    // 2. Отрисовка вопроса
    function renderQuestion() {
        const q = quiz.getCurrentQuestion();
        const qTitle = document.getElementById('question-title');
        const qAnswers = document.getElementById('answers');
        const qIndex = document.getElementById('q-index');

        if (qIndex) qIndex.textContent = quiz.currentQuestion + 1;
        if (qTitle) qTitle.textContent = q.text;
        
        qAnswers.innerHTML = ''; // Очищаем старые ответы

        q.answers.forEach(ans => {
            const btn = document.createElement('button');
            btn.className = 'btn-main'; // Наш новый стиль
            btn.style.width = "100%";
            btn.style.marginBottom = "10px";
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
    }

    // 3. Показ результата
    function showResult(result) {
        UI.showSection('result-section');
        UI.updateTheme(result.data.world, result.type);
        
        const resTitle = document.getElementById('result-title');
        const resPet = document.getElementById('result-pet');
        
        if (resTitle) resTitle.textContent = `Твой друг: ${result.data.pet}`;
        if (resPet) resPet.innerHTML = assemblePet(result.type);
    }
});