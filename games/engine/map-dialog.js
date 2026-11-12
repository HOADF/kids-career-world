// games/engine/map-dialog.js
//
// Общий модуль карты-хаба (раздел 1 и 11 плана
// claude/ПЛАН_2 Карта профессий и мини-игры.md).
//
// Отвечает за:
//   1. Загрузку данных карты из games-map.json и отрисовку зданий.
//   2. Прогресс по каждой точке (сколько раз испытание пройдено) —
//      хранится в localStorage, никаких личных данных не собирается.
//   3. Компактную карточку-диалог персонажа (раздел 1.3) с затемнением
//      карты, кнопкой «Помочь!» и крестиком закрытия.
//   4. Переход либо в готовую мини-игру (status: "ready"), либо на
//      честную страницу-заглушку games/coming-soon.html (status: "soon") —
//      никаких битых ссылок и href="#".
//
// Один и тот же модуль используется для всех точек карты — новая
// профессия добавляется просто новой записью в games-map.json, без
// нового кода здесь.

const PROGRESS_KEY = 'ccw_map_progress';

/**
 * Читает прогресс из localStorage. Формат: { [pointId]: число раз,
 * когда испытание было пройдено }. Если localStorage недоступен или
 * данные повреждены — просто считаем, что прогресса пока нет
 * (ничего не ломаем и не бросаем ошибку ребёнку в лицо).
 */
function loadProgress() {
    try {
        const raw = localStorage.getItem(PROGRESS_KEY);
        if (!raw) return {};
        const parsed = JSON.parse(raw);
        return (parsed && typeof parsed === 'object') ? parsed : {};
    } catch (err) {
        return {};
    }
}

function saveProgress(progress) {
    try {
        localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
    } catch (err) {
        // localStorage может быть недоступен (приватный режим и т.п.) —
        // карта всё равно должна работать, просто без сохранения между
        // визитами.
    }
}

/**
 * Если в адресе страницы есть ?done=<id> — значит ребёнок только что
 * вернулся из мини-игры этой точки (кнопка «Домой» в игре добавляет
 * этот параметр). Засчитываем прохождение и убираем параметр из
 * адресной строки, чтобы повторная перезагрузка страницы не считала
 * одно и то же прохождение дважды.
 */
function consumeDoneParam(progress) {
    const url = new URL(window.location.href);
    const doneId = url.searchParams.get('done');
    if (!doneId) return;

    progress[doneId] = (progress[doneId] || 0) + 1;
    saveProgress(progress);

    url.searchParams.delete('done');
    window.history.replaceState({}, '', url.toString());
}

function buildingBadge(point, solvedCount) {
    if (solvedCount > 0) {
        return `<span class="map-badge map-badge--solved" aria-hidden="true">⭐ ${solvedCount}</span>`;
    }
    return `<span class="map-badge map-badge--waiting" aria-hidden="true">❗</span>`;
}

function renderBuildings(container, points, progress, onOpen) {
    container.innerHTML = '';

    points.forEach(point => {
        const solvedCount = progress[point.id] || 0;

        const el = document.createElement('button');
        el.type = 'button';
        el.className = `map-building map-building--${point.type}`;
        el.style.setProperty('--bld-color', point.color);
        el.style.left = `${point.layout.left}%`;
        el.style.top = `${point.layout.top}%`;
        el.style.width = `${point.layout.width}%`;
        el.style.height = `${point.layout.height}%`;
        if (point.shadowLength === 'long') {
            el.classList.add('map-building--long-shadow');
        }

        el.innerHTML = `
            ${buildingBadge(point, solvedCount)}
            <span class="map-building__icon" aria-hidden="true">${point.petEmoji}</span>
            <span class="map-building__label">${point.buildingName}</span>
        `;
        el.setAttribute('aria-label', `${point.buildingName} — ${point.petName}`);

        el.addEventListener('click', () => onOpen(point, solvedCount));
        container.appendChild(el);
    });
}

function renderDialog(dialogRoot, point, solvedCount) {
    const isRepeat = solvedCount > 0;
    const speech = isRepeat
        ? `${point.petName} машет лапкой: «Привет! Хочешь сыграть ещё раз?»`
        : point.requestText;

    dialogRoot.innerHTML = `
        <div class="map-dialog-overlay" role="dialog" aria-modal="true" aria-label="${point.buildingName}">
            <div class="map-dialog-card" style="--bld-color: ${point.color}">
                <button type="button" class="map-dialog-close" aria-label="Закрыть">✕</button>
                <div class="map-dialog-portrait" aria-hidden="true">${point.petEmoji}</div>
                <p class="map-dialog-name">${point.petName}</p>
                <p class="map-dialog-speech">${speech}</p>
                <button type="button" class="map-dialog-help">Помочь! 💛</button>
            </div>
        </div>
    `;
    dialogRoot.classList.add('is-open');
    // Затемнение и размытие самой карты (раздел 1.3 плана) — вешаем
    // класс на body, а не трогаем структуру карты, чтобы этот модуль
    // не зависел от того, как именно устроена вёрстка карты на странице.
    document.body.classList.add('map-dialog-open');

    const overlay = dialogRoot.querySelector('.map-dialog-overlay');
    const closeBtn = dialogRoot.querySelector('.map-dialog-close');
    const helpBtn = dialogRoot.querySelector('.map-dialog-help');

    function close() {
        dialogRoot.classList.remove('is-open');
        dialogRoot.innerHTML = '';
        document.body.classList.remove('map-dialog-open');
    }

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) close();
    });
    closeBtn.addEventListener('click', close);

    helpBtn.addEventListener('click', () => {
        if (point.status === 'ready' && point.gameUrl) {
            window.location.href = point.gameUrl;
            return;
        }
        if (point.type === 'sea' && point.gameUrl) {
            window.location.href = point.gameUrl;
            return;
        }
        // Игра ещё не готова — ведём на честную страницу-заглушку,
        // а не оставляем ребёнка на мёртвой кнопке.
        const params = new URLSearchParams({
            pet: point.petName,
            emoji: point.petEmoji,
            color: point.color,
            building: point.buildingName
        });
        window.location.href = `games/coming-soon.html?${params.toString()}`;
    });
}

/**
 * Запускает карту-хаб на странице.
 *
 * @param {Object} options
 * @param {string} options.dataUrl - путь к games-map.json
 * @param {string} options.mapSelector - CSS-селектор контейнера зданий
 * @param {string} options.dialogSelector - CSS-селектор контейнера диалога
 */
export async function initCityMap({ dataUrl, mapSelector, dialogSelector }) {
    const mapContainer = document.querySelector(mapSelector);
    const dialogRoot = document.querySelector(dialogSelector);
    if (!mapContainer || !dialogRoot) return;

    const response = await fetch(dataUrl);
    const data = await response.json();
    const points = data.points || [];

    const progress = loadProgress();
    consumeDoneParam(progress);

    function refresh() {
        renderBuildings(mapContainer, points, progress, (point, solvedCount) => {
            renderDialog(dialogRoot, point, solvedCount);
        });
    }

    refresh();
}
