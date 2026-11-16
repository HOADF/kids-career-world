// Игра "Вылечи лапку" — Зайчонок в клинике (раздел 4, игра №6 плана
// ПЛАН_2). Базовая последовательность: убрать грязь ватой → намазать
// зелёнкой → наложить марлю → забинтовать. Инструменты в подносе
// перемешаны, но нажимать их нужно строго по порядку — неверный
// порядок просто не засчитывается (без штрафа), питомец подсказывает.

import { createPetStage, variedPhrases, shuffled } from '../engine/game-shell.js';

document.addEventListener('DOMContentLoaded', () => {
    const pet = createPetStage('doctor');
    const trayBox = document.getElementById('tray-box');
    const restartBtn = document.getElementById('restart');

    // Порядок лечения — шаг 0 (грязь/царапина) уже показан по
    // умолчанию в SVG, дальше идут ровно эти четыре инструмента.
    const TOOLS = [
        { step: 1, name: 'Вата', svg: toolCotton(), stepGroup: 'step-clean' },
        { step: 2, name: 'Зелёнка', svg: toolBottle(), stepGroup: 'step-antiseptic' },
        { step: 3, name: 'Марля', svg: toolGauze(), stepGroup: 'step-gauze' },
        { step: 4, name: 'Бинт', svg: toolBandage(), stepGroup: 'step-bandage' },
    ];

    let currentStep = 0;

    const sayGreeting = variedPhrases([
        'Ой, я поранил лапку, когда прыгал по камушкам! Помоги мне! 🐰',
        'Лапка болит! Что нужно сделать сначала?',
    ]);
    const sayCorrect = variedPhrases([
        'Вот так лучше! Что дальше?',
        'Молодец, аккуратно получилось!',
        'Хорошо! Продолжаем лечение.',
        'Отлично, почти готово!',
    ]);
    const sayWrongOrder = variedPhrases([
        'Погоди, для этого ещё рано! Нужно по порядку.',
        'Не сейчас — сначала другое.',
        'Хм, не то. Подумай, что нужно раньше.',
    ]);
    const sayDone = 'Ура, лапка вылечена! Спасибо тебе огромное! 🐰💗';

    function toolCotton() {
        return `<svg viewBox="0 0 64 64" width="100%" height="100%">
            <circle cx="32" cy="32" r="22" fill="#FFFFFF" stroke="#E3E3E3" stroke-width="3" />
            <circle cx="22" cy="24" r="6" fill="#F3F3F3" />
            <circle cx="40" cy="22" r="6" fill="#F3F3F3" />
            <circle cx="42" cy="40" r="6" fill="#F3F3F3" />
        </svg>`;
    }
    function toolBottle() {
        return `<svg viewBox="0 0 64 64" width="100%" height="100%">
            <rect x="24" y="10" width="16" height="10" rx="2" fill="#5B6B5B" />
            <rect x="18" y="20" width="28" height="36" rx="6" fill="#2E8B57" />
            <rect x="22" y="28" width="20" height="18" rx="3" fill="#A7D7B8" opacity="0.6" />
        </svg>`;
    }
    function toolGauze() {
        return `<svg viewBox="0 0 64 64" width="100%" height="100%">
            <rect x="10" y="10" width="44" height="44" rx="4" fill="#FFFFFF" stroke="#D8D8D8" stroke-width="3" />
            <path d="M10 22 H54 M10 34 H54 M10 46 H54" stroke="#E6E6E6" stroke-width="2" />
        </svg>`;
    }
    function toolBandage() {
        return `<svg viewBox="0 0 64 64" width="100%" height="100%">
            <circle cx="32" cy="32" r="22" fill="#F2E7D8" stroke="#D8C8A8" stroke-width="3" />
            <circle cx="32" cy="32" r="8" fill="#D8C8A8" />
        </svg>`;
    }

    function renderTray() {
        trayBox.innerHTML = '';
        shuffled(TOOLS).forEach(tool => {
            const btn = document.createElement('div');
            btn.className = 'tool-item';
            btn.title = tool.name;
            btn.dataset.step = tool.step;
            btn.innerHTML = tool.svg;
            if (tool.step <= currentStep) btn.classList.add('used');
            btn.addEventListener('click', () => onToolClick(btn, tool));
            trayBox.appendChild(btn);
        });
    }

    function onToolClick(btn, tool) {
        if (btn.classList.contains('used')) return;

        if (tool.step === currentStep + 1) {
            currentStep = tool.step;
            btn.classList.add('used');
            document.getElementById(tool.stepGroup).classList.remove('hidden');

            if (currentStep === TOOLS.length) {
                pet.say(sayDone);
                setTimeout(() => startRound(), 1800);
            } else {
                pet.say(sayCorrect());
            }
        } else {
            btn.classList.add('wrong-shake');
            setTimeout(() => btn.classList.remove('wrong-shake'), 400);
            pet.say(sayWrongOrder());
        }
    }

    function startRound() {
        currentStep = 0;
        ['step-clean', 'step-antiseptic', 'step-gauze', 'step-bandage'].forEach(id => {
            document.getElementById(id).classList.add('hidden');
        });
        pet.say(sayGreeting());
        renderTray();
    }

    startRound();

    restartBtn?.addEventListener('click', startRound);
});
