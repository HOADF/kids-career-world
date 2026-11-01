// config.js — Хранилище данных и ассетов

export const questions = [
    {
        text: 'Что тебе больше нравится делать?',
        answers: [
            { text: 'Рисовать или лепить', type: 'artist' },
            { text: 'Строить или собирать что-то новое', type: 'builder' },
            { text: 'Придумывать истории или мультики', type: 'creator' },
            { text: 'Создавать игровые миры', type: 'coder' },
            { text: 'Готовить и угощать других', type: 'chef' },
            { text: 'Лечить людей и зверят', type: 'doctor' },
            { text: 'Следить за порядком и помогать друзьям', type: 'police' },
            { text: 'Спасать тех, кто попал в беду', type: 'rescuer' },
            { text: 'Изучать мир и проводить опыты', type: 'scientist' }
        ]
    },
    {
        text: 'Где тебе интереснее всего?',
        answers: [
            { text: 'Там, где можно творить и рисовать', type: 'artist' },
            { text: 'На стройке, где можно строить что-то новое', type: 'builder' },
            { text: 'В студии, где создаются мультики и сказки', type: 'creator' },
            { text: 'В мире игр и приключений', type: 'coder' },
            { text: 'На кухне, где вкусно пахнет', type: 'chef' },
            { text: 'В больнице, где лечат и заботятся', type: 'doctor' },
            { text: 'На улице, где можно защищать и помогать', type: 'police' },
            { text: 'Где можно спасать тех, кто попал в беду', type: 'rescuer' },
            { text: 'В лаборатории, где происходят чудеса науки', type: 'scientist' }
        ]
    },
    {
        text: 'Что бы ты сделал, если бы стал волшебником?',
        answers: [
            { text: 'Создал бы красивую картину', type: 'artist' },
            { text: 'Построил бы огромный дом или город', type: 'builder' },
            { text: 'Придумал бы весёлый мультфильм', type: 'creator' },
            { text: 'Создал бы интересную игру', type: 'coder' },
            { text: 'Приготовил бы волшебное блюдо', type: 'chef' },
            { text: 'Вылечил бы всех зверят и людей', type: 'doctor' },
            { text: 'Защитил бы всех от беды', type: 'police' },
            { text: 'Спас бы людей и зверят из беды', type: 'rescuer' },
            { text: 'Изучал бы окружающий мир и другие планеты', type: 'scientist' }
        ]
    },
    {
        text: 'Какой подарок тебе был бы интереснее?',
        answers: [
            { text: 'Набор для рисования', type: 'artist' },
            { text: 'Конструктор LEGO', type: 'builder' },
            { text: 'Камера для мультиков', type: 'creator' },
            { text: 'Компьютер для игр и фантазий', type: 'coder' },
            { text: 'Форма повара и посуда', type: 'chef' },
            { text: 'Игровой набор врача', type: 'doctor' },
            { text: 'Полицейская форма и фонарик', type: 'police' },
            { text: 'Шлем и аптечка спасателя', type: 'rescuer' },
            { text: 'Набор для опытов или микроскоп', type: 'scientist' }
        ]
    },
    {
        text: 'Какой питомец тебе больше нравится? 🐾',
        answers: [
            { text: '🐼 Пандочка — спокойная и любит рисовать', type: 'artist' },
            { text: '🦁 Тигрёнок — смелый и любит строить', type: 'builder' },
            { text: '🦊 Лисёнок — выдумщик и рассказчик', type: 'creator' },
            { text: '🦈 Акулёнок — создаёт игровые миры', type: 'coder' },
            { text: '🐧 Пингвинёнок — заботливый повар', type: 'chef' },
            { text: '🐰 Зайчонок — добрый доктор', type: 'doctor' },
            { text: '🐶 Щенок — охраняет порядок', type: 'police' },
            { text: '🐻 Медвежонок — смелый спасатель', type: 'rescuer' },
            { text: '🦉 Совёнок — умный учёный', type: 'scientist' }
        ]
    }
];

export const results = {
    artist: { 
        pet: '🐼 Пандочка-художник', 
        games: 'Тебе подойдут игры с рисованием и творчеством!',
        world: {
            bg: 'backgrounds/studio_wall.svg',
            floor: 'backgrounds/studio_floor.svg',
            fx: 'fx/paint_splatters.svg'
        }
    },
    builder: { 
        pet: '🐯 Тигрёнок-строитель', 
        games: 'Попробуй игры про строительство и создание домов!',
        world: {
            bg: 'backgrounds/construction_sky.svg',
            floor: 'backgrounds/construction_ground.svg',
            fx: 'fx/dust_particles.svg'
        }
    },
    creator: { 
        pet: '🦊 Лисёнок-мультипликатор', 
        games: 'Создавай мультфильмы и придумывай истории!',
        world: {
            bg: 'backgrounds/cartoon_hills.svg',
            floor: 'backgrounds/cartoon_grass.svg',
            fx: 'fx/stars_sparkle.svg'
        }
    },
    coder: { 
        pet: '🦈 Акулёнок-гейммейкер', 
        games: 'Создавай игровые миры и учись программировать!',
        world: {
            bg: 'backgrounds/cyber_grid.svg',
            floor: 'backgrounds/cyber_floor.svg',
            fx: 'fx/code_rain.svg'
        }
    },
    chef: { 
        pet: '🐧 Пингвинёнок-повар', 
        games: 'Готовь вкусные блюда и открывай новые рецепты!',
        world: {
            bg: 'backgrounds/kitchen_wall.svg',
            floor: 'backgrounds/kitchen_table.svg',
            fx: 'fx/steam_bubbles.svg'
        }
    },
    doctor: { 
        pet: '🐰 Зайчонок-доктор', 
        games: 'Лечи людей и зверят, будь добрым врачом!',
        world: {
            bg: 'backgrounds/clinic_wall.svg',
            floor: 'backgrounds/clinic_floor.svg',
            fx: 'fx/clean_sparkle.svg'
        }
    },
    police: { 
        pet: '🐶 Щенок-полицейский', 
        games: 'Следи за порядком и помогай друзьям!',
        world: {
            bg: 'backgrounds/city_street.svg',
            floor: 'backgrounds/city_road.svg',
            fx: 'fx/police_lights.svg'
        }
    },
    rescuer: { 
        pet: '🐻 Медвежонок-спасатель', 
        games: 'Спасай, помогай и не бойся трудностей!',
        world: {
            bg: 'backgrounds/mountain_peaks.svg',
            floor: 'backgrounds/mountain_snow.svg',
            fx: 'fx/snowflakes.svg'
        }
    },
    scientist: { 
        pet: '🦉 Совёнок-учёный', 
        games: 'Изучай мир и открывай тайны Вселенной!',
        world: {
            bg: 'backgrounds/space_deep.svg',
            floor: 'backgrounds/moon_surface.svg',
            fx: 'fx/meteors.svg'
        }
    }
};

// Карта игр: какая мини-игра соответствует какой профессии.
// Если для профессии пока нет игры — ключа в этом объекте нет,
// и экран результата покажет вежливое сообщение вместо битой ссылки.
export const games = {
    artist: 'games/artist/artist-game.html',
    builder: 'games/builder/builder-game.html'
};

export const petAssets = {
    // Фоновые сценки конкретного питомца. Раньше рисовались первым
    // слоем прямо внутри SVG питомца — получался маленький квадратик
    // неба/травы вокруг самой панды, а не полноценная сцена. Теперь
    // полная сцена (небо, солнце, бамбук, трава) — отдельный файл
    // backgrounds/panda_habitat.svg, подключённый как CSS-фон на всю
    // панель с питомцем (см. .pet-side в artist-game.html/.css), а
    // здесь для 'artist' фона больше нет — иначе получится два неба
    // друг на друге. Когда страница "Домик питомца" станет рабочей,
    // туда стоит подключить тот же backgrounds/panda_habitat.svg тем
    // же способом (CSS-фон контейнера), а не возвращать фон сюда.
    backgrounds: {
        artist: ``
    },

    marks: {
        // Сердечко теперь на животе питомца (пониже), а не у рта —
        // раньше накладывалось на мордочку и выглядело как "нос".
        heart: `<path class="heart-mark" d="M100 158 C94 150 82 150 82 140 C82 130 92 128 100 136 C108 128 118 130 118 140 C118 150 106 150 100 158" fill="#FF4B2B" />`,
        star: `<path class="star-mark" d="M100 110 L105 125 L120 125 L108 135 L112 150 L100 140 L88 150 L92 135 L80 125 L95 125 Z" fill="#FFD700" />`
    },
    bodies: {
        // Сидящая панда: белое тело и голова, чёрные уши/лапы/пятна
        // вокруг глаз — узнаваемая расцветка, а не абстрактный розовый
        // шар, как было раньше.
        artist: `
            <ellipse cx="100" cy="150" rx="48" ry="34" fill="#FFFFFF" />
            <ellipse cx="55" cy="158" rx="15" ry="20" fill="#2B2B2B" transform="rotate(-18 55 158)" />
            <ellipse cx="145" cy="158" rx="15" ry="20" fill="#2B2B2B" transform="rotate(18 145 158)" />
            <ellipse cx="76" cy="180" rx="17" ry="11" fill="#2B2B2B" />
            <ellipse cx="124" cy="180" rx="17" ry="11" fill="#2B2B2B" />
            <circle cx="100" cy="92" r="42" fill="#FFFFFF" />
            <circle cx="66" cy="56" r="16" fill="#2B2B2B" />
            <circle cx="134" cy="56" r="16" fill="#2B2B2B" />
            <ellipse cx="80" cy="92" rx="14" ry="18" fill="#2B2B2B" transform="rotate(-8 80 92)" />
            <ellipse cx="120" cy="92" rx="14" ry="18" fill="#2B2B2B" transform="rotate(8 120 92)" />
            <circle cx="81" cy="94" r="4" fill="#FFFFFF" />
            <circle cx="119" cy="94" r="4" fill="#FFFFFF" />
            <circle cx="82" cy="95" r="2" fill="#2B2B2B" />
            <circle cx="118" cy="95" r="2" fill="#2B2B2B" />
            <circle cx="72" cy="108" r="6" fill="#FFC9C9" opacity="0.7" />
            <circle cx="128" cy="108" r="6" fill="#FFC9C9" opacity="0.7" />
            <ellipse cx="100" cy="110" rx="6" ry="4" fill="#2B2B2B" />
            <path d="M90 118 Q100 126 110 118" stroke="#2B2B2B" stroke-width="3" fill="none" stroke-linecap="round" />
        `,
        builder: `<rect x="40" y="40" width="120" height="120" rx="20" fill="#A2D2FF"/><circle cx="75" cy="85" r="12" fill="#333"/><circle cx="125" cy="85" r="12" fill="#333"/><path d="M80 130 H120" stroke="#333" stroke-width="8"/>`,
        creator: `<ellipse cx="100" cy="100" rx="90" ry="70" fill="#CDB4DB"/><circle cx="70" cy="90" r="10" fill="#333"/><circle cx="130" cy="90" r="10" fill="#333"/><path d="M80 135 Q100 115 120 135" stroke="#333" stroke-width="5" fill="none"/>`,
        coder: `<polygon points="100,20 180,160 20,160" fill="#BDE0FE"/><circle cx="85" cy="110" r="8" fill="#333"/><circle cx="115" cy="110" r="8" fill="#333"/>`,
        chef: `<circle cx="100" cy="110" r="70" fill="#FFF4E0"/><circle cx="75" cy="100" r="8" fill="#333"/><circle cx="125" cy="100" r="8" fill="#333"/><path d="M60 60 Q100 20 140 60 L140 80 H60 Z" fill="#FFF" stroke="#333"/>`,
        doctor: `<circle cx="100" cy="100" r="80" fill="#E0F2F1"/><circle cx="75" cy="85" r="10" fill="#333"/><circle cx="125" cy="85" r="10" fill="#333"/><rect x="85" y="30" width="30" height="30" fill="#FF5252" rx="5"/>`,
        police: `<circle cx="100" cy="100" r="80" fill="#C5CAE9"/><path d="M60 40 L140 40 L130 70 L70 70 Z" fill="#3F51B5"/><circle cx="75" cy="90" r="10" fill="#333"/><circle cx="125" cy="90" r="10" fill="#333"/>`,
        rescuer: `<circle cx="100" cy="100" r="80" fill="#FFCCBC"/><path d="M70 30 H130 L140 60 H60 Z" fill="#F44336"/><circle cx="75" cy="95" r="10" fill="#333"/><circle cx="125" cy="95" r="10" fill="#333"/>`,
        scientist: `<circle cx="100" cy="100" r="80" fill="#D1C4E9"/><rect x="65" y="65" width="25" height="25" rx="12" fill="none" stroke="#333" stroke-width="3"/><rect x="110" y="65" width="25" height="25" rx="12" fill="none" stroke="#333" stroke-width="3"/><path d="M90 77 H110" stroke="#333" stroke-width="2"/>`
    }
};