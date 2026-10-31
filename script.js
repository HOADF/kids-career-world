import { games } from './config.js';
import { QuizManager } from './quiz.js';
import { UI } from './ui.js';
import { assemblePet } from './pet-factory.js';

document.addEventListener('DOMContentLoaded', () => {
    const quiz = new QuizManager();

    const continueBtn = document.getElementById('continue');
    const restartBtn = document.getElementById('restart');
    const backBtn = document.getElementById('btn-back');
    const learnMoreBtn = document.getElementById('learn-more');
    const moreInfo = document.getElementById('more-info');

    // Профессия последнего результата — нужна кнопке "В комнату!",
    // чтобы знать, в какую игру вести ребёнка.
    let lastResultType = null;

    // 1. Клик по кнопке "Давай дружить"
    document.getElementById('start-quiz')?.addEventListener('click', () => {
        quiz.reset();
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
            btn.className = 'answer-btn'; // Компактная кнопка в сетке ответов
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
        UI.updateTheme(result.data.world);

        lastResultType = result.type;

        const resTitle = document.getElementById('result-title');
        const resPet = document.getElementById('result-pet');
        const resGames = document.getElementById('result-games');

        if (resTitle) resTitle.textContent = `Твой друг: ${result.data.pet}`;
        if (resPet) resPet.innerHTML = assemblePet(result.type);
        if (resGames) resGames.textContent = result.data.games;

        // Готова ли игра для этой профессии — если нет, предлагаем
        // вернуться и попробовать другую профессию, а не ведём в пустоту.
        if (continueBtn) {
            if (games[result.type]) {
                continueBtn.textContent = 'В комнату! 🎮';
            } else {
                continueBtn.textContent = 'Пока нет игры 🙂 Сначала';
            }
        }
    }

    // 4. Кнопка "Назад" на экране вопросов
    backBtn?.addEventListener('click', () => {
        const movedBack = quiz.prevQuestion();
        if (movedBack) {
            renderQuestion();
        } else {
            // Мы на первом вопросе — возвращаемся на приветственный экран
            quiz.reset();
            UI.showSection('welcome-card');
        }
    });

    // 5. Кнопка "Сначала" на экране результата
    restartBtn?.addEventListener('click', () => {
        quiz.reset();
        lastResultType = null;
        UI.showSection('welcome-card');
    });

    // 6. Кнопка "В комнату!" на экране результата — ведёт в мини-игру
    //    профессии, если она готова. Если игры пока нет — мягко
    //    возвращает на старт, а не оставляет ребёнка на мёртвой кнопке.
    continueBtn?.addEventListener('click', () => {
        const gamePath = lastResultType ? games[lastResultType] : null;
        if (gamePath) {
            window.location.href = gamePath;
        } else {
            quiz.reset();
            lastResultType = null;
            UI.showSection('welcome-card');
        }
    });

    // 7. Кнопка "Узнать больше" — раскрывает короткое описание проекта
    learnMoreBtn?.addEventListener('click', () => {
        if (!moreInfo) return;
        const isHidden = moreInfo.classList.contains('hidden');
        moreInfo.classList.toggle('hidden');
        learnMoreBtn.textContent = isHidden ? 'Скрыть' : 'Узнать больше';
    });
});
