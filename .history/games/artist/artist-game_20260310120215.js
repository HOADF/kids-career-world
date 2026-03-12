document.addEventListener('DOMContentLoaded', () => {
    let selectedColor = null;
    let selectedId = null;
    let selectedHex = null;

    const bubble = document.getElementById('speech-bubble');
    const colorItems = document.querySelectorAll('.color-item');
    const areas = document.querySelectorAll('.paint-area');

    // Функция для Пандочки
    function pandaSay(text) {
        bubble.innerText = text;
        bubble.classList.remove('hidden');
        setTimeout(() => bubble.classList.add('hidden'), 3000);
    }

    // Выбор цвета
    colorItems.forEach(item => {
        item.addEventListener('click', () => {
            colorItems.forEach(i => i.classList.remove('selected'));
            selectedColor = item.getAttribute('data-color');
            selectedHex = item.getAttribute('data-hex');
            selectedId = item.id;
            item.classList.add('selected');
        });
    });

    // Покраска
    areas.forEach(area => {
        area.addEventListener('click', () => {
            if (!selectedColor) {
                pandaSay("Сначала нажми на краску внизу! 😊");
                return;
            }

            if (area.getAttribute('data-correct') === selectedColor) {
                // ПРАВИЛЬНО: убираем пунктир, заливаем цветом
                area.style.fill = selectedHex;
                area.style.strokeDasharray = "0";
                area.style.stroke = "none";
                
                document.getElementById(selectedId).classList.add('used');
                selectedColor = null;
                
                pandaSay("Здорово! Прямо как настоящее!");
                checkWin();
            } else {
                // ОШИБКА
                pandaSay("Ой, этот цвет сюда не подходит!");
            }
        });
    });

    function checkWin() {
        const remaining = document.querySelectorAll('.color-item:not(.used)');
        if (remaining.length === 0) {
            document.getElementById('finish-btn').classList.remove('hidden');
            pandaSay("Ура! Мы нарисовали шедевр! 🎨");
        }
    }
});