import { petAssets } from './config.js';

export function assemblePet(type, markType = 'heart') {
    // Фон (если для питомца нарисован) рисуется первым слоем — и
    // попадает в тот же SVG, что и сам питомец, значит показывается
    // вместе с ним, в каком бы месте сайта assemblePet() ни вызвали.
    const background = petAssets.backgrounds[type] || "";
    const body = petAssets.bodies[type] || petAssets.bodies['artist'];
    const mark = petAssets.marks[markType] || "";
    return `
    <svg viewBox="0 0 200 200" style="width:100%; height:100%;">
      ${background}
      ${body}
      <g class="accessory-layer">${mark}</g>
    </svg>`;
}