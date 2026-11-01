import { assemblePet } from '../../pet-factory.js';

document.addEventListener('DOMContentLoaded', () => {
    let selectedColor = null;
    let selectedHex = null;
    let selectedId = null;

    const bubble = document.getElementById('speech-bubble');
    const colorItems = document.querySelectorAll('.color-item');
    const areas = document.querySelectorAll('.paint-area');
    const restartBtn = document.getElementById('restart');
    const petVisual = document.getElementById('pet-visual');

    // Палитра на широком экране стоит СПРАВА от картинки, а на узком
    // (≤760px) CSS переносит её под картинку — см. artist-style.css,
    // .palette внутри "@media (max-width: 760px)". Брейкпоинт здесь
    // должен быть ТЕМ ЖЕ числом, что и в CSS: если его там поменяют,
    // надо поменять и тут, иначе подсказка разойдётся с реальным
    // расположением красок.
    const paletteQuery = window.matchMedia('(max-width: 760px)');

    function paletteSide() {
        return paletteQuery.matches ? 'снизу' : 'справа';
    }

    function greetingText() {
        return `Выбери краску ${paletteSide()} и раскрась картинку! 🎨`;
    }

    function noColorChosenText() {
        return `Выбери краску ${paletteSide()}! 🎨`;
    }

    // Запоминаем, какую "ролевую" реплику панда говорит сейчас
    // (greeting / noColor), чтобы при смене расположения палитры
    // (поворот телефона, изменение размера окна) можно было тут же
    // перерисовать именно её с актуальной стороной — остальные
    // реплики (про цвет, про победу) к расположению красок не
    // привязаны и трогать их не нужно.
    let activeLocationBubble = null;

    function pandaSayLocationAware(kind) {
        activeLocationBubble = kind;
        bubble.innerText = kind === 'greeting' ? greetingText() : noColorChosenText();
    }

    paletteQuery.addEventListener('change', () => {
        if (activeLocationBubble) {
            pandaSayLocationAware(activeLocationBubble);
        }
    });

    // Питомец собирается движком слоёв (pet-factory.js), а не берётся
    // из файла картинки — так он есть всегда, даже если SVG-арт
    // конкретного зверька ещё не нарисован.
    if (petVisual) {
        petVisual.innerHTML = assemblePet('artist');
    }

    // Приветствие сразу выставляем из JS с учётом реальной ширины
    // экрана — в HTML лежит просто заглушка-текст на случай, пока JS
    // не выполнился, её сторону ("справа") мы здесь не используем.
    pandaSayLocationAware('greeting');

    // Запоминаем исходный цвет каждой зоны, чтобы можно было
    // аккуратно вернуть её в начальное состояние при рестарте.
    const originalFill = new Map();
    areas.forEach(area => originalFill.set(area, area.style.fill || ''));

    // Облачко теперь постоянно на экране — панда "говорит" всё время,
    // реплика просто меняется на новую, а не прячется через 3 секунды
    // (раньше ребёнок мог не успеть дочитать).
    function pandaSay(text) {
        // Эта реплика не привязана к расположению палитры — выходим
        // из "location-aware" режима, чтобы ресайз окна её больше не
        // переписывал.
        activeLocationBubble = null;
        bubble.innerText = text;
    }

    colorItems.forEach(item => {
        item.addEventListener('click', () => {
            if (item.classList.contains('used')) return;
            colorItems.forEach(i => i.classList.remove('selected'));
            selectedColor = item.getAttribute('data-color');
            selectedHex = item.getAttribute('data-hex');
            selectedId = item.id;
            item.classList.add('selected');
        });
    });

    areas.forEach(area => {
        area.addEventListener('click', () => {
            if (!selectedColor) {
                pandaSayLocationAware('noColor');
                return;
            }

            const correct = area.getAttribute('data-correct');
            const areaName = area.getAttribute('data-name');

            if (selectedColor === correct) {
                // ПРАВИЛЬНО
                area.style.fill = selectedHex;
                area.style.strokeDasharray = "0";
                area.style.stroke = "none";

                document.getElementById(selectedId).classList.add('used');
                selectedColor = null;

                pandaSay("Красота! Идём дальше?");
                checkWin();
            } else {
                // ОШИБКА
                pandaSay(`${areaName} не бывает такого цвета...`);
                // Эффект тряски для объекта
                area.style.fill = "#ffcccc";
                setTimeout(() => area.style.fill = "#e8edea", 400);
            }
        });
    });

    function checkWin() {
        const remaining = document.querySelectorAll('.color-item:not(.used)');
        if (remaining.length === 0) {
            // Раньше результат ("Ты раскрасил весь мир!") дублировался
            // отдельной надписью под игрой — убрали её совсем: теперь
            // об этом тоже говорит панда, одним и тем же облачком.
            pandaSay("Ура! Мы нарисовали шедевр! Ты — настоящий художник! 🐼✨");
        }
    }

    function resetGame() {
        areas.forEach(area => {
            area.style.fill = originalFill.get(area) || '';
            // Контур теперь сплошной (см. artist-style.css, .paint-area) —
            // раньше здесь возвращался пунктир ('8'), из-за чего после
            // рестарта контур опять становился пунктирным.
            area.style.strokeDasharray = '';
            area.style.stroke = '';
        });
        colorItems.forEach(item => item.classList.remove('selected', 'used'));
        selectedColor = null;
        selectedHex = null;
        selectedId = null;
        pandaSayLocationAware('greeting');
    }

    restartBtn?.addEventListener('click', resetGame);
});
