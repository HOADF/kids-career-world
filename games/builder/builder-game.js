// builder-game.js
document.addEventListener('DOMContentLoaded', () => {
  const parts = document.querySelectorAll('#part img');   // панель деталей
  const zones = document.querySelectorAll('.dropzone');   // приёмные зоны
  const status = document.getElementById('status');
  const restart = document.getElementById('restart');

  let placed = 0;
  let draggedPart = null; // для тача

  // --- dragstart (мышь) ---
  parts.forEach(p => {
    // обязательно draggable="true" в HTML
    p.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text/plain', p.dataset.part);
      // для старых браузеров можно также:
      if (e.dataTransfer.setDragImage) {
        // уменьшенный drag image (по желанию)
        const img = p.cloneNode(true);
        img.style.width = '48px';
        img.style.height = '48px';
        img.style.position = 'absolute';
        img.style.top = '-1000px';
        document.body.appendChild(img);
        e.dataTransfer.setDragImage(img, 24, 24);
        setTimeout(() => document.body.removeChild(img), 0);
      }
    });
  });

  // --- зоны: мышь ---
  zones.forEach(zone => {
    zone.addEventListener('dragover', e => e.preventDefault());
    zone.addEventListener('dragenter', () => zone.classList.add('hover'));
    zone.addEventListener('dragleave', () => zone.classList.remove('hover'));

    zone.addEventListener('drop', e => {
      e.preventDefault();
      zone.classList.remove('hover');
      const partType = e.dataTransfer.getData('text/plain');
      placePart(zone, partType);
    });
  });

  // --- поддержка касаний (touch) ---
  parts.forEach(p => {
    p.addEventListener('touchstart', e => {
      draggedPart = p;
      p.classList.add('dragging');
      // блокируем скролл во время таска (passive:false в слушателе)
      e.preventDefault();
    }, {passive: false});

    p.addEventListener('touchend', e => {
      if (!draggedPart) return;
      // определяем элемент под пальцем
      const touch = e.changedTouches[0];
      const el = document.elementFromPoint(touch.clientX, touch.clientY);
      const zone = el && (el.closest ? el.closest('.dropzone') : null);
      if (zone) placePart(zone, draggedPart.dataset.part);
      draggedPart.classList.remove('dragging');
      draggedPart = null;
    }, {passive: false});
  });

  // --- установка детали ---
  function placePart(zone, partType) {
    if (!partType) return;
    const want = zone.dataset.part;
    if (partType !== want) {
      // неверная деталь — краткая подсветка
      zone.classList.add('wrong');
      setTimeout(() => zone.classList.remove('wrong'), 350);
      return;
    }
    if (zone.querySelector('[data-part-clone]')) return; // уже что-то есть

    const orig = document.querySelector(`#part img[data-part="${partType}"]`);
    if (!orig) return;

    const clone = orig.cloneNode(true);
    clone.removeAttribute('draggable');
    clone.setAttribute('data-part-clone', partType);
    clone.style.width = '100%';
    clone.style.height = '100%';
    clone.style.objectFit = 'cover';

    zone.innerHTML = '';
    zone.appendChild(clone);
    zone.classList.add('filled');

    orig.classList.add('hidden'); // скрываем оригинал
    placed++;
    if (placed === zones.length) status.classList.remove('hidden');
  }

  // --- перезапуск ---
  restart.addEventListener('click', () => {
    zones.forEach(z => { z.innerHTML = ''; z.classList.remove('filled','hover','wrong'); });
    parts.forEach(p => p.classList.remove('hidden','dragging'));
    status.classList.add('hidden');
    placed = 0;
    draggedPart = null;
  });
});
