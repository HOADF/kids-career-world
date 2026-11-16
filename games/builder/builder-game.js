// Игра "Построй домик" — Тигрёнок на стройке (раздел 4, игра №2
// плана ПЛАН_2 — старейшая игра на сайте). Переведена на общий каркас
// games/engine/game-shell.js: теперь у Тигрёнка есть своя сцена-стройка
// и постоянное облачко, которое комментирует каждую деталь (а не
// молчит до самого конца, как раньше). Сама механика drag-and-drop
// (мышь) + touch (палец) не менялась — она и так была написана
// аккуратно.

import { createPetStage, variedPhrases } from '../engine/game-shell.js';

document.addEventListener('DOMContentLoaded', () => {
    const pet = createPetStage('builder');
    const parts = document.querySelectorAll('#part img');
    const zones = document.querySelectorAll('.dropzone');
    const restart = document.getElementById('restart');

    const sayGreeting = variedPhrases([
        'У меня совсем нет дома! Поможешь мне его построить? 🐯',
        'Нужно собрать домик по кусочкам! Готов помочь?',
    ]);
    const sayCorrect = variedPhrases([
        'Вот это я понимаю, дом!',
        'Отлично, прямо по чертежу!',
        'Так держать, строитель!',
        'Класс, подходит идеально!',
    ]);
    const sayWrong = variedPhrases([
        'Хм, не сюда — это не та деталь.',
        'Подожди, здесь должно быть другое.',
        'Не подходит, попробуй другую деталь.',
    ]);
    const sayDone = 'Ура! Вот это дом! Спасибо тебе огромное! 🐯🏠';

    let placed = 0;
    let draggedPart = null; // для тача

    // --- dragstart (мышь) ---
    parts.forEach(p => {
        p.addEventListener('dragstart', e => {
            e.dataTransfer.setData('text/plain', p.dataset.part);
            if (e.dataTransfer.setDragImage) {
                const img = p.cloneNode(true);
                img.style.width = '48px';
                img.style.height = '48px';
                img.style.position = 'absolute';
                img.style.top = '-1000px';
                document.body.appendChild(img);
                e.dataTransfer.setDragImage(img, 24, 24);
                setTimeout(() => document.body.removeChild(img), 0);
            }
            p.classList.add('dragging');
        });
        p.addEventListener('dragend', () => p.classList.remove('dragging'));
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
            e.preventDefault();
        }, { passive: false });

        p.addEventListener('touchend', e => {
            if (!draggedPart) return;
            const touch = e.changedTouches[0];
            const el = document.elementFromPoint(touch.clientX, touch.clientY);
            const zone = el && (el.closest ? el.closest('.dropzone') : null);
            if (zone) placePart(zone, draggedPart.dataset.part);
            draggedPart.classList.remove('dragging');
            draggedPart = null;
        }, { passive: false });
    });

    // --- установка детали ---
    function placePart(zone, partType) {
        if (!partType) return;
        const want = zone.dataset.part;

        if (partType !== want) {
            zone.classList.add('wrong');
            setTimeout(() => zone.classList.remove('wrong'), 350);
            pet.say(sayWrong());
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

        orig.classList.add('hidden');
        placed++;

        if (placed === zones.length) {
            pet.say(sayDone);
        } else {
            pet.say(sayCorrect());
        }
    }

    pet.say(sayGreeting());

    restart.addEventListener('click', () => {
        zones.forEach(z => { z.innerHTML = ''; z.classList.remove('filled', 'hover', 'wrong'); });
        parts.forEach(p => p.classList.remove('hidden', 'dragging'));
        placed = 0;
        draggedPart = null;
        pet.say(sayGreeting());
    });
});
