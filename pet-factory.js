import { petAssets } from './config.js';

// markType по умолчанию отключён (сердечки убраны со всех питомцев по
// просьбе заказчика — "это было как идея"). Сам набор меток в
// config.js (petAssets.marks) не удалён — просто сейчас по умолчанию
// ничего не накладывается. Если понадобится вернуть — вызвать
// assemblePet(type, 'heart') или 'star' явно.
export function assemblePet(type, markType = null) {
    // Фон (если для питомца нарисован) рисуется первым слоем — и
    // попадает в тот же SVG, что и сам питомец, значит показывается
    // вместе с ним, в каком бы месте сайта assemblePet() ни вызвали.
    const background = petAssets.backgrounds[type] || "";
    // Подложка-"медальон" под питомцем — мягкий цветной круг позади
    // тела. Без неё светлые питомцы (панда, зайчонок) сливаются с
    // белой/светлой карточкой результата — на любом фоне карточки
    // питомец теперь виден за счёт собственного контрастного круга.
    const backdrop = petAssets.backdrops[type] || petAssets.backdrops['artist'] || "";
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