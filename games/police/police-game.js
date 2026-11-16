// Игра "Найди воришку" — Щенок-полицейский (раздел 4, игра №3
// плана ПЛАН_2). Во дворе участка — несколько зверят, ровно один из
// них в маске (воришка). Жизней/поражения нет: неправильные клики
// просто копятся как реакции воришки, после нескольких промахов он
// хихикает, потом показывает язык, а после подряд ~7 промахов —
// "убегает" и прячется в новой раскладке с другими зверятами.

import { createPetStage, variedPhrases, shuffled } from '../engine/game-shell.js';

document.addEventListener('DOMContentLoaded', () => {
    const pet = createPetStage('police');
    const yardArea = document.getElementById('yard-area');
    const roundCounter = document.getElementById('round-counter');
    const restartBtn = document.getElementById('restart');

    // Шесть мест во дворе (в процентах от .yard-area) — расставлены
    // так, чтобы зверята не перекрывали друг друга и не упирались в
    // подсказку/счётчик сверху.
    const SLOTS = [
        { left: 18, top: 42 },
        { left: 38, top: 68 },
        { left: 58, top: 38 },
        { left: 78, top: 64 },
        { left: 28, top: 86 },
        { left: 68, top: 90 },
    ];

    // Цвета шёрстки — чисто декоративные, никак не намекают, кто
    // воришка (воришку выдаёт только маска, не цвет).
    const FUR_COLORS = ['#E3A857', '#B9956C', '#8C8C8C', '#D98E73', '#C9B458', '#9FB5C9'];

    let catchCount = 0;
    let missStreak = 0; // промахи подряд по ТЕКУЩЕМУ воришке/раскладке
    let thiefIndex = 0;
    let roundLocked = false; // блокируем клики во время анимации "поймали"/"убежал"

    const sayGreeting = variedPhrases([
        'У меня пропал любимый значок! Кто из них в маске? 🐶',
        'Воришка снова где-то здесь! Найдёшь его? 🐾',
    ]);
    const sayCaught = variedPhrases([
        'Поймали! Ты настоящий сыщик! 🎉',
        'Ура, это он! Молодец! 👏',
        'Вот и воришка! Отличная работа! ⭐',
        'Точно он! Так держать! 🐾',
    ]);
    const sayMiss = variedPhrases([
        'Не-ет, это не он. Посмотри внимательнее!',
        'Этот ни в чём не виноват. Ищи маску!',
        'Промах! Попробуй другого.',
        'Почти, но не этот.',
    ]);
    const sayGiggle = 'Воришка хихикает — ищи получше! 😄';
    const sayTongue = 'Воришка показал язык и дразнится! 😜';
    const sayEscape = 'Воришка убежал и перепрятался! Ищи заново! 💨';

    // Простой SVG-зверёк "с нуля" (не питомец из pet-factory —
    // подозреваемые во дворе не связаны с системой питомцев, это
    // просто фон-массовка). Один параметр masked добавляет настоящую
    // маску разбойника — широкую изогнутую полосу через глаза, но с
    // двумя светлыми "прорезями" под глаза, чтобы сами глаза оставались
    // отчётливо видны (как у классического енота/грабителя), а не
    // выглядели плоской чёрной повязкой. Плюс платок на шее — по плану
    // первого уровня воришка должен ЯВНО отличаться, без хитрых подсказок.
    function suspectSvg(furColor, masked) {
        // Полоса маски рисуется ДО глаз в порядке SVG-элементов, чтобы
        // глаза (прорези + зрачки) оказались поверх неё и были видны.
        const maskBand = masked
            ? `<path d="M16 36 Q50 24 84 36 L80 56 Q50 66 20 56 Z" fill="#2b2b2b" />`
            : '';
        // Светлые "прорези" под глаза — только у воришки, чтобы зрачки
        // не сливались с тёмной маской.
        const eyeHoles = masked
            ? `<ellipse cx="38" cy="46" rx="10" ry="8" fill="#f3d9c4" />
               <ellipse cx="62" cy="46" rx="10" ry="8" fill="#f3d9c4" />`
            : '';
        const neckerchief = masked
            ? `<path d="M30 76 Q50 92 70 76 L66 86 Q50 96 34 86 Z" fill="#C94C4C" />`
            : '';
        return `
        <svg viewBox="0 0 100 100" width="100%" height="100%">
            <ellipse cx="50" cy="58" rx="34" ry="30" fill="${furColor}" />
            <circle cx="28" cy="24" r="12" fill="${furColor}" />
            <circle cx="72" cy="24" r="12" fill="${furColor}" />
            <circle cx="28" cy="24" r="6" fill="#f3d9c4" />
            <circle cx="72" cy="24" r="6" fill="#f3d9c4" />
            <circle cx="50" cy="46" r="26" fill="${furColor}" />
            ${maskBand}
            ${eyeHoles}
            <circle cx="38" cy="44" r="4" fill="#2b2b2b" class="pet-eyes" />
            <circle cx="62" cy="44" r="4" fill="#2b2b2b" class="pet-eyes" />
            <ellipse cx="50" cy="56" rx="6" ry="4" fill="#2b2b2b" />
            ${neckerchief}
        </svg>`;
    }

    function renderRound(newLayout) {
        yardArea.querySelectorAll('.suspect-slot').forEach(el => el.remove());

        const positions = newLayout ? shuffled(SLOTS) : SLOTS;
        thiefIndex = Math.floor(Math.random() * SLOTS.length);
        missStreak = 0;
        roundLocked = false;

        positions.forEach((pos, i) => {
            const slot = document.createElement('div');
            slot.className = 'suspect-slot';
            slot.style.left = pos.left + '%';
            slot.style.top = pos.top + '%';

            const isThief = i === thiefIndex;
            const fur = FUR_COLORS[Math.floor(Math.random() * FUR_COLORS.length)];

            const suspect = document.createElement('div');
            suspect.className = 'suspect';
            suspect.dataset.thief = isThief ? '1' : '0';
            suspect.innerHTML = suspectSvg(fur, isThief);

            suspect.addEventListener('click', () => onSuspectClick(suspect));

            slot.appendChild(suspect);
            yardArea.appendChild(slot);
        });
    }

    function onSuspectClick(suspect) {
        if (roundLocked) return;

        if (suspect.dataset.thief === '1') {
            roundLocked = true;
            catchCount += 1;
            roundCounter.textContent = `Поймано: ${catchCount}`;
            suspect.classList.add('caught');
            pet.say(sayCaught());
            setTimeout(() => renderRound(true), 650);
            return;
        }

        missStreak += 1;
        suspect.classList.add('wrong-shake');
        setTimeout(() => suspect.classList.remove('wrong-shake'), 400);

        if (missStreak >= 7) {
            pet.say(sayEscape);
            roundLocked = true;
            setTimeout(() => renderRound(true), 500);
        } else if (missStreak >= 5) {
            pet.say(sayTongue);
        } else if (missStreak >= 3) {
            pet.say(sayGiggle);
        } else {
            pet.say(sayMiss());
        }
    }

    pet.say(sayGreeting());
    renderRound(false);

    restartBtn?.addEventListener('click', () => {
        catchCount = 0;
        roundCounter.textContent = 'Поймано: 0';
        pet.say(sayGreeting());
        renderRound(true);
    });
});
