import { petAssets } from './config.js';

// markType по умолчанию отключён (сердечки убраны со всех питомцев по
// просьбе заказчика — "это было как идея"). Сам набор меток в
// config.js (petAssets.marks) не удалён — просто сейчас по умолчанию
// ничего не накладывается. Если понадобится вернуть — вызвать
// assemblePet(type, 'heart') или 'star' явно.
//
// options.includeBackdrop (по умолчанию true) — см. комментарий у
// самой переменной backdrop ниже: эту "медаль"-подложку нужно
// ПОЛНОСТЬЮ убирать, когда питомец показывается внутри полноценной
// сцены-биома (страницы мини-игр на каркасе games/engine/game-shell —
// см. его createPetStage, который сам вызывает assemblePet с
// includeBackdrop:false). На старых экранах без своей сцены (карточка
// результата теста в script.js) поведение по умолчанию не меняется.
export function assemblePet(type, markType = null, options = {}) {
    const includeBackdrop = options.includeBackdrop !== false;

    // Фон (если для питомца нарисован) рисуется первым слоем — и
    // попадает в тот же SVG, что и сам питомец, значит показывается
    // вместе с ним, в каком бы месте сайта assemblePet() ни вызвали.
    const background = petAssets.backgrounds[type] || "";
    // Подложка-"медальон" под питомцем — мягкий цветной круг позади
    // тела. Задумана для СТАРОЙ плоской карточки результата теста, где
    // у питомца вообще нет своего фона — там светлые питомцы (панда,
    // зайчонок) сливались с белой карточкой, и круг был нужен как
    // контрастная подложка. Внутри полноценной сцены-биома (все
    // страницы мини-игр) этот же круг выглядит наоборот плохо — питомец
    // кажется "сидящим в кружке"-медальоне поверх нарисованной сцены,
    // а не стоящим в ней. Поэтому на страницах игр эта подложка
    // отключается через includeBackdrop:false (см. выше).
    const backdrop = includeBackdrop
        ? (petAssets.backdrops[type] || petAssets.backdrops['artist'] || "")
        : "";
    const body = petAssets.bodies[type] || petAssets.bodies['artist'];
    const mark = markType ? (petAssets.marks[markType] || "") : "";
    return `
    <svg viewBox="0 0 200 200" style="width:100%; height:100%;">
      ${background}
      ${backdrop}
      ${body}
      <g class="accessory-layer">${mark}</g>
    </svg>`;
}