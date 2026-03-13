// Функции для работы с экранами и фоном
export const UI = {
    // Переключить экран
    showSection(id) {
        document.querySelectorAll('section').forEach(s => s.classList.add('hidden'));
        document.getElementById(id)?.classList.remove('hidden');
    },

    // Обновить фон и персонажа
    updateTheme(worldData, petType) {
        const bg = document.querySelector('.bg-full');
        const floor = document.querySelector('.floor-full');
        const pet = document.getElementById('main-pet');

        if (bg && worldData.bg) bg.src = worldData.bg;
        if (floor && worldData.floor) floor.src = worldData.floor;
        if (pet) pet.src = `pets/${petType}.svg`;
    }
};