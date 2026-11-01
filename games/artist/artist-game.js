import { assemblePet } from '../../pet-factory.js';

document.addEventListener('DOMContentLoaded', () => {
    let selectedColor = null;
    let selectedHex = null;
    let selectedId = null;

    const bubble = document.getElementById('speech-bubble');
    const colorItems = document.querySelectorAll('.color-item');
    const areas = document.querySelectorAll('.paint-area');
    const finishBtn = document.getElementById('finish-btn');
    const restartBtn = document.getElementById('restart');
    const petVisual = document.getElementById('pet-visual');

    // Питомец собирается движком слоёв (pet-factory.js), а не берётся
    // из файла картинки — так он есть всегда, даже если SVG-арт
    // конкретного зверька ещё не нарисован.
    if (petVisual) {
        petVisual.innerHTML = assemblePet('artist');
    }

    // Запоминаем исходный цвет каждой зоны, чтобы можно было
    // аккуратно вернуть её в начальное состояние при рестарте.
    const originalFill = new Map();
    areas.forEach(area => originalFill.set(area, area.style.fill || ''));

    function pandaSay(text) {
        bubble.innerText = text;
        bubble.classList.remove('hidden');
        setTimeout(() => bubble.classList.add('hidden'), 3000);
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
                pandaSay("Выбери краску внизу! 🎨");
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
            finishBtn?.classList.remove('hidden');
            pandaSay("Ура! Мы нарисовали шедевр! 🐼✨");
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
        finishBtn?.classList.add('hidden');
    }

    restartBtn?.addEventListener('click', resetGame);
});
