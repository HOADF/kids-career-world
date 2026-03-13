import { QuizManager } from './quiz.js';
import { UI } from './ui.js';
import { assemblePet } from './pet-factory.js';

document.addEventListener('DOMContentLoaded', () => {
    const quiz = new QuizManager();

    // Старт квиза
    document.getElementById('start-quiz')?.addEventListener('click', () => {
        UI.showSection('questions-section');
        renderQuestion();
    });

    // Логика отрисовки вопроса
    function renderQuestion() {
        const q = quiz.getCurrentQuestion();
        const qTitle = document.getElementById('question-title');
        const qAnswers = document.getElementById('answers');

        qTitle.textContent = q.text;
        qAnswers.innerHTML = '';

        q.answers.forEach(ans => {
            const btn = document.createElement('button');
            btn.className = 'btn-main';
            btn.textContent = ans.text;
            btn.onclick = () => {
                const step = quiz.nextQuestion(ans.type);
                step.finished ? showResult(step.result) : renderQuestion();
            };
            qAnswers.appendChild(btn);
        });
    }

    function showResult(result) {
        UI.showSection('result-section');
        UI.updateTheme(result.data.world, result.type);
        
        document.getElementById('result-title').textContent = result.data.pet;
        document.getElementById('result-pet').innerHTML = assemblePet(result.type);
    }
});