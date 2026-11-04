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

    // Мягкая цветная "медаль"-подложка позади каждого питомца — чтобы
    // светлые питомцы (панда, зайчонок) не сливались с белой/светлой
    // карточкой результата, и чтобы у каждой профессии был свой узнаваемый
    // цветовой акцент на экране результата. Круг чуть меньше viewBox,
    // поэтому у питомца всегда есть ровное цветное поле вокруг силуэта.
    backdrops: {
        artist: `<circle cx="100" cy="110" r="92" fill="#E6F6F1" />`,
        builder: `<circle cx="100" cy="110" r="92" fill="#FFF1DE" />`,
        creator: `<circle cx="100" cy="110" r="92" fill="#FFEFE0" />`,
        coder: `<circle cx="100" cy="110" r="92" fill="#E7F5FB" />`,
        chef: `<circle cx="100" cy="110" r="92" fill="#EFF3F4" />`,
        doctor: `<circle cx="100" cy="110" r="92" fill="#FDEEF2" />`,
        police: `<circle cx="100" cy="110" r="92" fill="#FFF8E6" />`,
        rescuer: `<circle cx="100" cy="110" r="92" fill="#F4ECE1" />`,
        scientist: `<circle cx="100" cy="110" r="92" fill="#EFEAE3" />`
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
        //
        // Глаза обёрнуты в <g class="pet-eyes"> — это часть общей,
        // переиспользуемой системы анимации питомцев (см. animations.css,
        // класс .pet-eyes и анимация petBlink): моргание применяется к
        // любому питомцу, у которого есть этот класс на глазах, без
        // отдельного кода под каждого зверька. "Дыхание" (лёгкое покачивание
        // целиком) вешается не здесь, а на внешний контейнер персонажа
        // на странице (класс .character-pet) — так тело и аксессуары
        // (сердечко и т.п.) двигаются вместе, одним куском.
        artist: `
            <ellipse cx="100" cy="150" rx="48" ry="34" fill="#FFFFFF" />
            <ellipse cx="55" cy="158" rx="15" ry="20" fill="#2B2B2B" transform="rotate(-18 55 158)" />
            <ellipse cx="145" cy="158" rx="15" ry="20" fill="#2B2B2B" transform="rotate(18 145 158)" />
            <ellipse cx="76" cy="180" rx="17" ry="11" fill="#2B2B2B" />
            <ellipse cx="124" cy="180" rx="17" ry="11" fill="#2B2B2B" />
            <circle cx="100" cy="92" r="42" fill="#FFFFFF" />
            <circle cx="66" cy="56" r="16" fill="#2B2B2B" />
            <circle cx="134" cy="56" r="16" fill="#2B2B2B" />
            <g class="pet-eyes">
                <ellipse cx="80" cy="92" rx="14" ry="18" fill="#2B2B2B" transform="rotate(-8 80 92)" />
                <ellipse cx="120" cy="92" rx="14" ry="18" fill="#2B2B2B" transform="rotate(8 120 92)" />
                <circle cx="81" cy="94" r="4" fill="#FFFFFF" />
                <circle cx="119" cy="94" r="4" fill="#FFFFFF" />
                <circle cx="82" cy="95" r="2" fill="#2B2B2B" />
                <circle cx="118" cy="95" r="2" fill="#2B2B2B" />
            </g>
            <circle cx="72" cy="108" r="6" fill="#FFC9C9" opacity="0.7" />
            <circle cx="128" cy="108" r="6" fill="#FFC9C9" opacity="0.7" />
            <ellipse cx="100" cy="110" rx="6" ry="4" fill="#2B2B2B" />
            <path d="M90 118 Q100 126 110 118" stroke="#2B2B2B" stroke-width="3" fill="none" stroke-linecap="round" />
        `,
        // Тигрёнок-строитель: оранжевое тело с чёрными полосками на
        // лапах и голове, светлый "манишка"-патч на животе и мордочке —
        // та же схема слоёв, что у панды (тело → лапы → голова → уши →
        // глаза → щёки → нос → рот), просто другая расцветка и полоски.
        builder: `
            <ellipse cx="100" cy="150" rx="48" ry="34" fill="#FF9A3C" />
            <ellipse cx="100" cy="160" rx="28" ry="20" fill="#FFF3E0" />
            <ellipse cx="55" cy="158" rx="15" ry="20" fill="#FF9A3C" transform="rotate(-18 55 158)" />
            <ellipse cx="145" cy="158" rx="15" ry="20" fill="#FF9A3C" transform="rotate(18 145 158)" />
            <ellipse cx="76" cy="180" rx="17" ry="11" fill="#FF9A3C" />
            <ellipse cx="124" cy="180" rx="17" ry="11" fill="#FF9A3C" />
            <path d="M50 150 L60 168" stroke="#2B2B2B" stroke-width="4" stroke-linecap="round" />
            <path d="M140 150 L150 168" stroke="#2B2B2B" stroke-width="4" stroke-linecap="round" />
            <circle cx="100" cy="92" r="42" fill="#FF9A3C" />
            <ellipse cx="100" cy="110" rx="24" ry="19" fill="#FFF3E0" />
            <circle cx="64" cy="54" r="17" fill="#FF9A3C" />
            <circle cx="136" cy="54" r="17" fill="#FF9A3C" />
            <circle cx="64" cy="54" r="9" fill="#FFD9B3" />
            <circle cx="136" cy="54" r="9" fill="#FFD9B3" />
            <path d="M68 60 Q74 52 82 48" stroke="#2B2B2B" stroke-width="4" fill="none" stroke-linecap="round" />
            <path d="M132 60 Q126 52 118 48" stroke="#2B2B2B" stroke-width="4" fill="none" stroke-linecap="round" />
            <g class="pet-eyes">
                <ellipse cx="80" cy="92" rx="13" ry="16" fill="#2B2B2B" transform="rotate(-8 80 92)" />
                <ellipse cx="120" cy="92" rx="13" ry="16" fill="#2B2B2B" transform="rotate(8 120 92)" />
                <circle cx="81" cy="89" r="4" fill="#FFFFFF" />
                <circle cx="119" cy="89" r="4" fill="#FFFFFF" />
                <circle cx="82" cy="90" r="2" fill="#2B2B2B" />
                <circle cx="118" cy="90" r="2" fill="#2B2B2B" />
            </g>
            <circle cx="70" cy="112" r="6" fill="#FFC9C9" opacity="0.6" />
            <circle cx="130" cy="112" r="6" fill="#FFC9C9" opacity="0.6" />
            <path d="M93 103 L100 110 L107 103 Z" fill="#2B2B2B" />
            <path d="M88 118 Q100 126 112 118" stroke="#2B2B2B" stroke-width="3" fill="none" stroke-linecap="round" />
        `,
        // Лисёнок-мультипликатор: рыжее тело, белая "манишка", острые
        // чёрно-рыжие уши-треугольники.
        creator: `
            <ellipse cx="100" cy="150" rx="46" ry="33" fill="#FF8C42" />
            <ellipse cx="100" cy="160" rx="26" ry="18" fill="#FFF6EC" />
            <ellipse cx="56" cy="158" rx="14" ry="19" fill="#FF8C42" transform="rotate(-18 56 158)" />
            <ellipse cx="144" cy="158" rx="14" ry="19" fill="#FF8C42" transform="rotate(18 144 158)" />
            <ellipse cx="76" cy="180" rx="16" ry="10" fill="#2B2B2B" />
            <ellipse cx="124" cy="180" rx="16" ry="10" fill="#2B2B2B" />
            <circle cx="100" cy="92" r="41" fill="#FF8C42" />
            <ellipse cx="100" cy="110" rx="26" ry="21" fill="#FFF6EC" />
            <polygon points="58,62 42,22 76,46" fill="#FF8C42" />
            <polygon points="142,62 158,22 124,46" fill="#FF8C42" />
            <polygon points="60,56 50,30 70,46" fill="#2B2B2B" />
            <polygon points="140,56 150,30 130,46" fill="#2B2B2B" />
            <g class="pet-eyes">
                <ellipse cx="80" cy="90" rx="12" ry="15" fill="#2B2B2B" transform="rotate(-8 80 90)" />
                <ellipse cx="120" cy="90" rx="12" ry="15" fill="#2B2B2B" transform="rotate(8 120 90)" />
                <circle cx="81" cy="87" r="4" fill="#FFFFFF" />
                <circle cx="119" cy="87" r="4" fill="#FFFFFF" />
                <circle cx="82" cy="88" r="2" fill="#2B2B2B" />
                <circle cx="118" cy="88" r="2" fill="#2B2B2B" />
            </g>
            <circle cx="70" cy="110" r="6" fill="#FFC9C9" opacity="0.6" />
            <circle cx="130" cy="110" r="6" fill="#FFC9C9" opacity="0.6" />
            <path d="M94 104 L100 112 L106 104 Z" fill="#2B2B2B" />
            <path d="M88 119 Q100 127 112 119" stroke="#2B2B2B" stroke-width="3" fill="none" stroke-linecap="round" />
        `,
        // Акулёнок-гейммейкер: у акулы нет рук и ног, поэтому вместо
        // того же "сидячего" силуэта, что у остальных питомцев, теперь
        // это акулёнок боком, плывущий вправо — тело-торпеда, хвостовой
        // и спинной плавники, жабры, один глаз (т.к. вид сбоку).
        coder: `
            <path d="M38 112 L10 90 L18 112 L10 136 Z" fill="#7FCBE8" />
            <ellipse cx="105" cy="115" rx="68" ry="36" fill="#7FCBE8" />
            <path d="M55 128 Q105 152 165 124 Q150 140 105 143 Q62 141 55 128 Z" fill="#EDFAFF" />
            <path d="M90 80 Q104 46 126 78 Q110 73 90 80 Z" fill="#7FCBE8" />
            <path d="M100 134 Q116 152 140 142 Q120 136 100 134 Z" fill="#7FCBE8" />
            <path d="M148 98 Q152 108 148 118" stroke="#4E9CBF" stroke-width="2.5" fill="none" stroke-linecap="round" />
            <path d="M156 100 Q160 108 156 116" stroke="#4E9CBF" stroke-width="2.5" fill="none" stroke-linecap="round" />
            <g class="pet-eyes">
                <circle cx="160" cy="102" r="8" fill="#2B2B2B" />
                <circle cx="163" cy="99" r="2.5" fill="#FFFFFF" />
            </g>
            <circle cx="148" cy="116" r="5" fill="#FFC9C9" opacity="0.6" />
            <path d="M148 120 Q163 128 176 116" stroke="#1F5A73" stroke-width="3" fill="none" stroke-linecap="round" />
            <path d="M158 123 L160 127 M168 120 L170 124" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" />
        `,
        // Пингвинёнок-повар: тело вытянуто вверх (было похоже на шар) —
        // уже и выше, ближе к силуэту настоящего пингвина.
        chef: `
            <ellipse cx="100" cy="156" rx="39" ry="44" fill="#263238" />
            <ellipse cx="100" cy="168" rx="23" ry="32" fill="#FFFFFF" />
            <ellipse cx="60" cy="160" rx="12" ry="25" fill="#263238" transform="rotate(-16 60 160)" />
            <ellipse cx="140" cy="160" rx="12" ry="25" fill="#263238" transform="rotate(16 140 160)" />
            <ellipse cx="80" cy="192" rx="13" ry="7" fill="#FFA726" />
            <ellipse cx="120" cy="192" rx="13" ry="7" fill="#FFA726" />
            <circle cx="100" cy="90" r="37" fill="#263238" />
            <ellipse cx="100" cy="98" rx="23" ry="21" fill="#FFFFFF" />
            <g class="pet-eyes">
                <circle cx="84" cy="88" r="8" fill="#2B2B2B" />
                <circle cx="116" cy="88" r="8" fill="#2B2B2B" />
                <circle cx="86" cy="85" r="3" fill="#FFFFFF" />
                <circle cx="118" cy="85" r="3" fill="#FFFFFF" />
            </g>
            <circle cx="77" cy="104" r="5" fill="#FFC9C9" opacity="0.5" />
            <circle cx="123" cy="104" r="5" fill="#FFC9C9" opacity="0.5" />
            <path d="M91 101 L100 110 L109 101 Z" fill="#FFA726" />
        `,
        // Зайчонок-доктор: раньше было чисто-белое тело — на белой/
        // светлой карточке результата резало глаз даже с розовой
        // подложкой. Теперь тело мягкого серого цвета (сам зайчик
        // неброский), а розовый остался только внутри ушей, на носу
        // и щеках — так он не сливается с фоном, но и не кричит.
        doctor: `
            <ellipse cx="100" cy="150" rx="46" ry="34" fill="#DCE0E3" stroke="#B9C0C4" stroke-width="1" />
            <ellipse cx="55" cy="158" rx="14" ry="19" fill="#DCE0E3" stroke="#B9C0C4" stroke-width="1" transform="rotate(-18 55 158)" />
            <ellipse cx="145" cy="158" rx="14" ry="19" fill="#DCE0E3" stroke="#B9C0C4" stroke-width="1" transform="rotate(18 145 158)" />
            <ellipse cx="76" cy="180" rx="17" ry="10" fill="#DCE0E3" stroke="#B9C0C4" stroke-width="1" />
            <ellipse cx="124" cy="180" rx="17" ry="10" fill="#DCE0E3" stroke="#B9C0C4" stroke-width="1" />
            <ellipse cx="67" cy="36" rx="14" ry="36" fill="#DCE0E3" stroke="#B9C0C4" stroke-width="1" transform="rotate(-12 67 36)" />
            <ellipse cx="133" cy="36" rx="14" ry="36" fill="#DCE0E3" stroke="#B9C0C4" stroke-width="1" transform="rotate(12 133 36)" />
            <ellipse cx="67" cy="40" rx="7" ry="26" fill="#FFC9D6" transform="rotate(-12 67 40)" />
            <ellipse cx="133" cy="40" rx="7" ry="26" fill="#FFC9D6" transform="rotate(12 133 40)" />
            <circle cx="100" cy="94" r="40" fill="#DCE0E3" stroke="#B9C0C4" stroke-width="1" />
            <g class="pet-eyes">
                <ellipse cx="80" cy="92" rx="8" ry="11" fill="#8B5E3C" />
                <ellipse cx="120" cy="92" rx="8" ry="11" fill="#8B5E3C" />
                <circle cx="82" cy="89" r="3" fill="#FFFFFF" />
                <circle cx="118" cy="89" r="3" fill="#FFFFFF" />
            </g>
            <circle cx="72" cy="110" r="6" fill="#FFC9C9" opacity="0.6" />
            <circle cx="128" cy="110" r="6" fill="#FFC9C9" opacity="0.6" />
            <ellipse cx="100" cy="109" rx="5" ry="4" fill="#FF8FA3" />
            <path d="M92 117 Q100 123 108 117" stroke="#2B2B2B" stroke-width="2" fill="none" stroke-linecap="round" />
            <rect x="96" y="119" width="3" height="6" rx="1" fill="#FFFFFF" stroke="#DADADA" stroke-width="0.6" />
            <rect x="101" y="119" width="3" height="6" rx="1" fill="#FFFFFF" stroke="#DADADA" stroke-width="0.6" />
        `,
        // Щенок-полицейский: золотисто-песочное тело, тёмные висячие
        // уши, светлая "манишка". Уши теперь плотно прилегают к голове
        // и свисают вдоль мордочки естественно (раньше были сильно
        // развёрнуты в сторону и выглядели как отдельная деталь).
        police: `
            <ellipse cx="100" cy="150" rx="47" ry="34" fill="#E3A857" />
            <ellipse cx="100" cy="160" rx="24" ry="18" fill="#FFF3DE" />
            <ellipse cx="55" cy="158" rx="15" ry="20" fill="#E3A857" transform="rotate(-18 55 158)" />
            <ellipse cx="145" cy="158" rx="15" ry="20" fill="#E3A857" transform="rotate(18 145 158)" />
            <ellipse cx="76" cy="180" rx="17" ry="10" fill="#E3A857" />
            <ellipse cx="124" cy="180" rx="17" ry="10" fill="#E3A857" />
            <ellipse cx="64" cy="88" rx="14" ry="25" fill="#B5793A" transform="rotate(-6 64 88)" />
            <ellipse cx="136" cy="88" rx="14" ry="25" fill="#B5793A" transform="rotate(6 136 88)" />
            <circle cx="100" cy="92" r="41" fill="#E3A857" />
            <ellipse cx="100" cy="110" rx="24" ry="19" fill="#FFF3DE" />
            <g class="pet-eyes">
                <ellipse cx="80" cy="90" rx="10" ry="13" fill="#2B2B2B" />
                <ellipse cx="120" cy="90" rx="10" ry="13" fill="#2B2B2B" />
                <circle cx="82" cy="87" r="3" fill="#FFFFFF" />
                <circle cx="118" cy="87" r="3" fill="#FFFFFF" />
            </g>
            <circle cx="72" cy="110" r="5" fill="#FFC9C9" opacity="0.6" />
            <circle cx="128" cy="110" r="5" fill="#FFC9C9" opacity="0.6" />
            <ellipse cx="100" cy="112" rx="7" ry="5" fill="#2B2B2B" />
            <path d="M88 120 Q100 128 112 120" stroke="#2B2B2B" stroke-width="3" fill="none" stroke-linecap="round" />
        `,
        // Медвежонок-спасатель: коричневое тело, светлый "пятачок"-
        // мордочка, округлые уши.
        rescuer: `
            <ellipse cx="100" cy="150" rx="48" ry="35" fill="#9C6B46" />
            <ellipse cx="55" cy="158" rx="16" ry="20" fill="#9C6B46" transform="rotate(-18 55 158)" />
            <ellipse cx="145" cy="158" rx="16" ry="20" fill="#9C6B46" transform="rotate(18 145 158)" />
            <ellipse cx="76" cy="180" rx="18" ry="11" fill="#9C6B46" />
            <ellipse cx="124" cy="180" rx="18" ry="11" fill="#9C6B46" />
            <circle cx="100" cy="92" r="43" fill="#9C6B46" />
            <ellipse cx="100" cy="112" rx="26" ry="20" fill="#D9B48F" />
            <circle cx="63" cy="52" r="16" fill="#9C6B46" />
            <circle cx="137" cy="52" r="16" fill="#9C6B46" />
            <circle cx="63" cy="52" r="8" fill="#D9B48F" />
            <circle cx="137" cy="52" r="8" fill="#D9B48F" />
            <g class="pet-eyes">
                <ellipse cx="78" cy="90" rx="9" ry="12" fill="#2B2B2B" />
                <ellipse cx="122" cy="90" rx="9" ry="12" fill="#2B2B2B" />
                <circle cx="80" cy="87" r="3" fill="#FFFFFF" />
                <circle cx="120" cy="87" r="3" fill="#FFFFFF" />
            </g>
            <circle cx="70" cy="112" r="5" fill="#FFC9C9" opacity="0.5" />
            <circle cx="130" cy="112" r="5" fill="#FFC9C9" opacity="0.5" />
            <ellipse cx="100" cy="116" rx="7" ry="5" fill="#2B2B2B" />
            <path d="M88 124 Q100 131 112 124" stroke="#2B2B2B" stroke-width="3" fill="none" stroke-linecap="round" />
        `,
        // Совёнок-учёный: крупная голова (как у настоящих сов),
        // большие круглые глаза отлично подходят под систему моргания,
        // ушки-пучки, клюв-крючок.
        scientist: `
            <ellipse cx="100" cy="150" rx="46" ry="37" fill="#8D6E52" />
            <ellipse cx="100" cy="160" rx="27" ry="23" fill="#EFE0C8" />
            <ellipse cx="60" cy="158" rx="13" ry="20" fill="#8D6E52" transform="rotate(-15 60 158)" />
            <ellipse cx="140" cy="158" rx="13" ry="20" fill="#8D6E52" transform="rotate(15 140 158)" />
            <ellipse cx="80" cy="184" rx="10" ry="6" fill="#F2A541" />
            <ellipse cx="120" cy="184" rx="10" ry="6" fill="#F2A541" />
            <circle cx="100" cy="92" r="44" fill="#8D6E52" />
            <ellipse cx="100" cy="98" rx="30" ry="28" fill="#EFE0C8" />
            <polygon points="72,60 58,24 88,50" fill="#8D6E52" />
            <polygon points="128,60 142,24 112,50" fill="#8D6E52" />
            <g class="pet-eyes">
                <circle cx="80" cy="96" r="16" fill="#FFFFFF" />
                <circle cx="120" cy="96" r="16" fill="#FFFFFF" />
                <circle cx="80" cy="96" r="9" fill="#5B3A29" />
                <circle cx="120" cy="96" r="9" fill="#5B3A29" />
                <circle cx="82" cy="93" r="3" fill="#FFFFFF" />
                <circle cx="122" cy="93" r="3" fill="#FFFFFF" />
            </g>
            <polygon points="94,110 106,110 100,122" fill="#F2A541" />
        `
    }
};