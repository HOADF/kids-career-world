export const UI = {
    // Показать нужную карточку, скрыть остальные
    showSection(id) {
        document.querySelectorAll('section').forEach(s => s.classList.add('hidden'));
        const target = document.getElementById(id);
        if (target) target.classList.remove('hidden');
    },

    // Обновляет фон океана под профессию (если для профессии подготовлен
    // собственный фон). Медузу-гида мы НЕ трогаем — она остаётся на экране
    // с самого начала и до конца, как и было задумано.
    //
    // Если файл фона для профессии ещё не нарисован (так сейчас для
    // большинства профессий, кроме стандартного океана), картинка просто
    // не меняется — вместо битой ссылки ребёнок продолжит видеть океан.
    updateTheme(worldData) {
        const bg = document.querySelector('.bg-full');
        const floor = document.querySelector('.floor-full');

        if (bg && worldData && worldData.bg) {
            const previousSrc = bg.src;
            bg.onerror = () => {
                bg.src = previousSrc;
                bg.onerror = null;
            };
            bg.src = worldData.bg;
        }

        if (floor && worldData && worldData.floor) {
            const previousSrc = floor.src;
            floor.onerror = () => {
                floor.src = previousSrc;
                floor.onerror = null;
            };
            floor.src = worldData.floor;
        }
    }
};
