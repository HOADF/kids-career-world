export const UI = {
    // Показать нужную карточку, скрыть остальные
    showSection(id) {
        document.querySelectorAll('section').forEach(s => s.classList.add('hidden'));
        const target = document.getElementById(id);
        if (target) target.classList.remove('hidden');
    },

    // ОБНОВЛЕННАЯ ФУНКЦИЯ: Обновляет фон и медузу на всем экране
    updateTheme(worldData, petType) {
        // Ищем картинки фона по их классам
        const bg = document.querySelector('.bg-full');
        const floor = document.querySelector('.floor-full');
        const pet = document.getElementById('main-pet');

        // Если картинки есть, меняем их src
        if (bg && worldData && worldData.bg) bg.src = worldData.bg;
        if (floor && worldData && worldData.floor) floor.src = worldData.floor;
        
        // Меняем главного персонажа в океане (медузу)
        if (pet) {
            pet.src = `pets/${petType}.svg`;
        }
    }
};