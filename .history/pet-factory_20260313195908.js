import { petAssets } from './config.js';

export function assemblePet(type, markType = 'heart') {
    const body = petAssets.bodies[type] || petAssets.bodies['artist'];
    const mark = petAssets.marks[markType] || "";
    return `
    <svg viewBox="0 0 200 200" style="width:100%; height:100%;">
      ${body}
      <g class="accessory-layer">${mark}</g>
    </svg>`;
}