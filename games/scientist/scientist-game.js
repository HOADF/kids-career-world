// Игра "Разложи пробирки" — Совёнок в лаборатории (раздел 4, игра
// №10 плана ПЛАН_2). Четыре гнезда в ряд, каждое с цветной
// подсказкой-контуром; под ними — те же четыре пробирки в перемешанном
// виде. Заполнять нужно гнёзда СТРОГО ПО ПОРЯДКУ слева направо, а
// цвет взятой пробирки должен совпасть с подсказкой текущего гнезда.
// Ошибка — "шипение и дым" (переливающийся эффект), раунд
// перезапускается заново целиком, без штрафов/жизней.

import { createPetStage, variedPhrases, shuffled } from '../engine/game-shell.js';

document.addEventListener('DOMContentLoaded', () => {
    const pet = createPetStage('scientist');
    const nestsRow = document.getElementById('nests-row');
    const tubesRow = document.getElementById('tubes-row');
    const labArea = document.getElementById('lab-area');
    const restartBtn = document.getElementById('restart');

    const COLORS = [
        { id: 'purple', hex: '#8C5FD9' },
        { id: 'teal', hex: '#3FBFA6' },
        { id: 'orange', hex: '#F0A040' },
        { id: 'pink', hex: '#E86FA0' },
    ];

    let nestOrder = []; // правильная последовательность цветов по гнёздам
    let currentNest = 0;

    const sayGreeting = variedPhrases([
        'Ой, кажется, я перепутал все пробирки с зельем! Поможешь? 🦉',
        'Нужно расставить пробирки по своим гнёздам по порядку!',
    ]);
    const sayCorrect = variedPhrases([
        'Да, точно туда! Что дальше?',
        'Верно! Продолжаем.',
        'Отлично подмечено!',
        'Так и есть, молодец!',
    ]);
    const sayOops = variedPhrases([
        'Ой-ой, зашипело! Кажется, я что-то напутал — начнём заново.',
        'Пшшш! Не то зелье. Давай ещё раз, по порядку!',
        'Дым пошёл! Попробуем собрать заново.',
    ]);
    const sayDone = 'Ура, зелье светится! Ты настоящий учёный! 🦉✨';

    function tubeSvg(hex) {
        return `<svg viewBox="0 0 40 60" width="100%" height="100%">
            <rect x="14" y="2" width="12" height="8" rx="2" fill="#B9B9B9" />
            <path d="M15 10 L15 38 Q15 52 20 52 Q25 52 25 38 L25 10 Z" fill="#E8F4FA" stroke="#9fb3aa" stroke-width="1.5" />
            <path d="M16 30 L16 38 Q16 49 20 49 Q24 49 24 38 L24 30 Z" fill="${hex}" />
        </svg>`;
    }

    function renderRound() {
        currentNest = 0;
        labArea.classList.remove('oops');
        nestOrder = shuffled(COLORS);

        nestsRow.innerHTML = '';
        nestOrder.forEach((color) => {
            const nest = document.createElement('div');
            nest.className = 'nest-slot';
            nest.style.setProperty('--nest-color', color.hex);
            nest.dataset.colorId = color.id;
            nestsRow.appendChild(nest);
        });

        tubesRow.innerHTML = '';
        shuffled(COLORS).forEach((color) => {
            const tube = document.createElement('div');
            tube.className = 'tube-item';
            tube.dataset.colorId = color.id;
            tube.innerHTML = tubeSvg(color.hex);
            tube.addEventListener('click', () => onTubeClick(tube, color));
            tubesRow.appendChild(tube);
        });
    }

    function onTubeClick(tube, color) {
        if (tube.classList.contains('used')) return;
        if (currentNest >= nestOrder.length) return;

        const targetColor = nestOrder[currentNest];
        const nestEl = nestsRow.children[currentNest];

        if (color.id === targetColor.id) {
            tube.classList.add('used');
            nestEl.classList.add('filled');
            nestEl.innerHTML = `<div class="nest-tube">${tubeSvg(color.hex)}</div>`;
            currentNest += 1;

            if (currentNest === nestOrder.length) {
                pet.say(sayDone);
                setTimeout(() => renderRound(), 1800);
            } else {
                pet.say(sayCorrect());
            }
        } else {
            tube.classList.add('wrong-shake');
            setTimeout(() => tube.classList.remove('wrong-shake'), 400);
            labArea.classList.add('oops');
            pet.say(sayOops());
            setTimeout(() => renderRound(), 900);
        }
    }

    pet.say(sayGreeting());
    renderRound();

    restartBtn?.addEventListener('click', () => {
        pet.say(sayGreeting());
        renderRound();
    });
});
