document.addEventListener('DOMContentLoaded', () => {
    let selectedColor = null;
    let selectedHex = null;
    let selectedId = null;

    const bubble = document.getElementById('speech-bubble');
    const colorItems = document.querySelectorAll('.color-item');
    const areas = document.querySelectorAll('.paint-area');
    const finishBtn = document.getElementById('finish-btn');

    function pandaSay(text) {
        bubble.innerText = text;
        bubble.classList.remove('hidden');
        setTimeout(() => bubble.classList.add('hidden'), 3000);
    }

    colorItems.forEach(item => {
        item.addEventListener('click', () => {
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
            finishBtn.classList.remove('hidden');
            pandaSay("Ура! Мы нарисовали шедевр! 🐼✨");
        }
    }
});