document.addEventListener('DOMContentLoaded', () => {
    let selectedColor = null;
    let selectedHex = null;
    let selectedId = null;

    const bubble = document.getElementById('speech-bubble');
    const mouth = document.getElementById('mouth');
    const drops = document.querySelectorAll('.color-drop');
    const areas = document.querySelectorAll('.paint-area');

    // База фраз
    const hints = {
        error: [
            "Ой! Мне кажется, этот цвет тут не подходит...",
            "Хмм, поищи другой цвет для этого предмета!",
            "Пандочка думает, что тут должен быть другой цвет!"
        ],
        success: "Ух ты! Как красиво получается! ✨"
    };

    function showMessage(text, isError = false) {
        bubble.innerText = text;
        bubble.className = 'visible';
        
        // Эмоции Пандочки
        if (isError) {
            mouth.setAttribute('d', 'M44 68 Q48 65 52 68'); // Грустный ротик
        } else {
            mouth.setAttribute('d', 'M44 63 Q48 70 52 63'); // Улыбка
        }

        setTimeout(() => {
            bubble.className = 'hidden';
            mouth.setAttribute('d', 'M44 65 Q48 68 52 65'); // Спокойный ротик
        }, 3000);
    }

    // 1. Выбор цвета
    drops.forEach(drop => {
        drop.addEventListener('click', () => {
            drops.forEach(d => d.classList.remove('selected'));
            selectedColor = drop.getAttribute('data-color');
            selectedHex = drop.getAttribute('data-hex');
            selectedId = drop.id;
            drop.classList.add('selected');
        });
    });

    // 2. Клик по объекту
    areas.forEach(area => {
        area.addEventListener('click', () => {
            if (!selectedColor) {
                showMessage("Сначала выбери краску! 🎨");
                return;
            }

            const correct = area.getAttribute('data-correct');
            const areaName = area.getAttribute('data-name');

            if (selectedColor === correct) {
                // ПРАВИЛЬНО
                area.style.fill = selectedHex;
                showMessage(hints.success);
                
                // Делаем цвет серым на палитре
                const colorEl = document.getElementById(selectedId);
                colorEl.classList.add('used');
                colorEl.classList.remove('selected');
                
                selectedColor = null;
                checkWin();
            } else {
                // ОШИБКА
                const randomError = hints.error[Math.floor(Math.random() * hints.error.length)];
                showMessage(`${areaName} не может быть такого цвета. Попробуй ещё раз!`, true);
            }
        });
    });

    function checkWin() {
        const remaining = document.querySelectorAll('.color-drop:not(.used)');
        if (remaining.length === 0) {
            document.getElementById('finish-btn').style.display = 'block';
            showMessage("Ура! Мы раскрасили весь мир!");
        }
    }
});