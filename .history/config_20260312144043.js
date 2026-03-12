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
    artist: { pet: '🐼 Пандочка-художник', games: 'Тебе подойдут игры с рисованием и творчеством!' },
    builder: { pet: '🐯 Тигрёнок-строитель', games: 'Попробуй игры про строительство и создание домов!' },
    creator: { pet: '🦊 Лисёнок-мультипликатор', games: 'Создавай мультфильмы и придумывай истории!' },
    coder: { pet: '🦈 Акулёнок-гейммейкер', games: 'Создавай игровые миры и учись программировать!' },
    chef: { pet: '🐧 Пингвинёнок-повар', games: 'Готовь вкусные блюда и открывай новые рецепты!' },
    doctor: { pet: '🐰 Зайчонок-доктор', games: 'Лечи людей и зверят, будь добрым врачом!' },
    police: { pet: '🐶 Щенок-полицейский', games: 'Следи за порядком и помогай друзьям!' },
    rescuer: { pet: '🐻 Медвежонок-спасатель', games: 'Спасай, помогай и не бойся трудностей!' },
    scientist: { pet: '🦉 Совёнок-учёный', games: 'Изучай мир и открывай тайны Вселенной!' }
};

export const petAssets = {
    marks: {
        heart: `<path class="heart-mark" d="M100 120 C95 110 80 110 80 125 C80 140 100 155 100 155 C100 155 120 140 120 125 C120 110 105 110 100 120" fill="#FF4B2B" />`,
        star: `<path class="star-mark" d="M100 110 L105 125 L120 125 L108 135 L112 150 L100 140 L88 150 L92 135 L80 125 L95 125 Z" fill="#FFD700" />`
    },
    bodies: {
        artist: `<circle cx="100" cy="100" r="80" fill="#FFD1DC"/><circle cx="70" cy="80" r="10" fill="#333"/><circle cx="130" cy="80" r="10" fill="#333"/><path d="M70 130 Q100 160 130 130" stroke="#333" stroke-width="5" fill="none"/>`,
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