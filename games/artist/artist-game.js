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
    const canvasArea = document.querySelector('.canvas-area');
    const paletteBox = document.querySelector('.palette');

    // Было: число брейкпоинта (760px) хранилось ОДНОВРЕМЕННО в CSS
    // (artist-style.css) и тут в JS — если поправить одно и забыть
    // другое, подсказка начинает врать. Теперь никакого числа в JS
    // нет вообще: смотрим на РЕАЛЬНЫЕ координаты палитры и картинки
    // на странице (getBoundingClientRect). Если палитра оказалась
    // ниже картинки — значит её перенесло вниз, какой бы брейкпоинт
    // или логику раскладки ни задавали в CSS. Один источник правды —
    // сама страница, а не повторённая в двух местах константа.
    function paletteSide() {
        if (!canvasArea || !paletteBox) return 'справа';
        const canvasRect = canvasArea.getBoundingClientRect();
        const paletteRect = paletteBox.getBoundingClientRect();
        // "-1" — защита от пограничного случая, когда из-за
        // субпиксельного округления низ картинки и верх палитры
        // совпадают почти точно, но не идеально.
        const isBelow = paletteRect.top >= canvasRect.bottom - 1;
        return isBelow ? 'снизу' : 'справа';
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

    // ResizeObserver реагирует на ЛЮБОЕ изменение размеров карточки
    // игры: ресайз окна, поворот телефона, смену масштаба — без
    // привязки к конкретному числу пикселей.
    if (canvasArea && 'ResizeObserver' in window) {
        const resizeObserver = new ResizeObserver(() => {
            if (activeLocationBubble) {
                pandaSayLocationAware(activeLocationBubble);
            }
        });
        resizeObserver.observe(canvasArea);
        if (paletteBox) resizeObserver.observe(paletteBox);
    } else {
        // Подстраховка для совсем старых браузеров без ResizeObserver.
        window.addEventListener('resize', () => {
            if (activeLocationBubble) {
                pandaSayLocationAware(activeLocationBubble);
            }
        });
    }

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
