import { petAssets } from './config.js';

export function assemblePet(type, markType = 'heart') {
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
    const mark = petAssets.marks[markType] || "";
    return `
    <svg viewBox="0 0 200 200" style="width:100%; height:100%;">
      ${background}
      ${backdrop}
      ${body}
      <g class="accessory-layer">${mark}</g>
    </svg>`;
}