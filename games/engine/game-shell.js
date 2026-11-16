// Общий помощник для "сцены питомца" (раздел 1.4 плана ПЛАН_2):
// сборка питомца через pet-factory.js + облачко реплик, которое
// постоянно на экране и говорит разное на правильный ход и на
// ошибку. Раньше эта логика (pandaSay / pandaSayLocationAware) была
// написана отдельно внутри artist-game.js — теперь это один общий
// модуль, который подключает любая новая игра, вместо копирования
// того же кода.

import { assemblePet } from '../../pet-factory.js';

/**
 * Готовит сцену питомца: вставляет SVG питомца в #pet-visual и
 * возвращает объект с методом say() для обновления облачка.
 *
 * @param {string} petType - тип питомца из config.js (petAssets), например 'police'.
 * @param {object} [options]
 * @param {string} [options.petVisualId='pet-visual']
 * @param {string} [options.bubbleId='speech-bubble']
 * @param {string} [options.markType] - необязательный аксессуар (см. assemblePet).
 */
export function createPetStage(petType, options = {}) {
    const petVisualId = options.petVisualId || 'pet-visual';
    const bubbleId = options.bubbleId || 'speech-bubble';

    const petVisual = document.getElementById(petVisualId);
    const bubble = document.getElementById(bubbleId);

    // includeBackdrop:false — убирает цветную "медаль"-подложку позади
    // питомца (см. комментарий в pet-factory.js): она задумана для
    // старой плоской карточки результата теста без своей сцены, а
    // здесь, внутри полноценной сцены-биома, с ней питомец выглядел бы
    // как сидящий в кружке поверх фона, а не стоящий в сцене.
    if (petVisual) {
        petVisual.innerHTML = assemblePet(petType, options.markType || null, { includeBackdrop: false });
    }

    function say(text) {
        if (bubble) bubble.innerText = text;
    }

    return { say, petVisual, bubble };
}

/**
 * Создатель "не повторяющегося подряд" генератора реплик: берёт
 * случайную фразу из списка, но никогда ту же самую, что в прошлый
 * раз для этого же списка (чтобы питомец не повторялся два раза
 * подряд при нескольких ошибках/успехах в ряд). Для списка из одной
 * фразы просто всегда её и возвращает.
 *
 * Использование:
 *   const sayCorrect = variedPhrases(["Красота!", "Вот так!", "Ура!"]);
 *   ...
 *   pet.say(sayCorrect());
 */
export function variedPhrases(list) {
    let lastIndex = -1;
    return function pick() {
        if (list.length === 1) return list[0];
        let idx;
        do {
            idx = Math.floor(Math.random() * list.length);
        } while (idx === lastIndex);
        lastIndex = idx;
        return list[idx];
    };
}

/**
 * Перемешивает массив (Фишер — Йейтс) и возвращает новый массив —
 * не трогая исходный. Пригодится для игр, где нужно раскладывать
 * элементы в новом случайном порядке при каждом раунде (полицейский,
 * мультипликатор и т.п.).
 */
export function shuffled(array) {
    const copy = array.slice();
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}
