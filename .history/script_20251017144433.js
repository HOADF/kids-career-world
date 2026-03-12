const startBtn = document.getElementById('start-quiz');
const learnMoreBtn = document.getElementById('learn-more');
const welcomeCard = document.getElementById('welcome-card');
const questionsSection = document.getElementById('questions-section');
const resultSection = document.getElementById('result-section');

const qTitle = document.getElementById('question-title');
const qAnswers = document.getElementById('answers');
const qIndexEl = document.getElementById('q-index');
const qTotalEl = document.getElementById('q-total');
const btnNext = document.getElementById('btn-next');
const btnBack = document.getElementById('btn-back');
const resultPet = document.getElementById('result-pet');
const resultGames = document.getElementById('result-games');
const btnRestart = document.getElementById('restart');
const btnContinue = document.getElementById('continue');

const questions = [
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
      { text: '🦊 Лисёнок — выдумщик, мультипликатор и рассказчик', type: 'creator' },
      { text: '🦈 Акулёнок — любознательный, создаёт игровые миры', type: 'coder' },
      { text: '🐧 Пингвинёнок — заботливый и весёлый повар', type: 'chef' },
      { text: '🐰 Зайчонок — добрый и внимательный доктор', type: 'doctor' },
      { text: '🐶 Щенок — отважный, помогает и охраняет порядок', type: 'police' },
      { text: '🐻 Медвежонок — смелый спасатель, всегда готов помочь', type: 'rescuer' },
      { text: '🦉 Совёнок — умный и любит узнавать новое', type: 'scientist' }
    ]
  }
];

const results = {
  artist: {
    pet: '🐼 Пандочка-художник',
    games: 'Тебе подойдут игры с рисованием и творчеством!'
  },
  builder: {
    pet: '🐯 Тигрёнок-строитель',
    games: 'Попробуй игры про строительство и создание домов!'
  },
  creator: {
    pet: '🦊 Лисёнок-мультипликатор',
    games: 'Создавай мультфильмы и придумывай истории!'
  },
  coder: {
    pet: '🦈 Акулёнок-гейммейкер',
    games: 'Создавай игровые миры и учись программировать в игре!'
  },
  chef: {
    pet: '🐧 Пингвинёнок-повар',
    games: 'Готовь вкусные блюда и открывай новые рецепты!'
  },
  doctor: {
    pet: '🐰 Зайчонок-доктор',
    games: 'Лечи людей и зверят, будь добрым врачом!'
  },
  police: {
    pet: '🐶 Щенок-полицейский',
    games: 'Следи за порядком и помогай друзьям, как настоящий герой!'
  },
  rescuer: {
    pet: '🐻 Медвежонок-спасатель',
    games: 'Спасай, помогай и не бойся трудностей — ты настоящий герой!'
  },
  scientist: {
    pet: '🦉 Совёнок-учёный',
    games: 'Изучай окружающий мир и открывай тайны Вселенной!'
  }
};


const petSvgs = {
  artist: `<svg width="96" height="96" viewBox="0 0 96 96"><circle cx="48" cy="48" r="44" fill="#FFF8F0"/><rect x="18" y="22" width="60" height="18" rx="6" fill="#F7E6FF"/><circle cx="36" cy="50" r="6" fill="#000"/><path d="M56 56 Q48 64 40 56" stroke="#FF9F1C" stroke-width="2" fill="none" stroke-linecap="round"/><text x="48" y="86" font-size="10" text-anchor="middle" fill="#174B4A">Пандочка</text></svg>`,
  builder: `<svg width="96" height="96" viewBox="0 0 96 96"><rect x="10" y="10" width="76" height="76" rx="14" fill="#FFFBEF"/><path d="M24 62 L40 34 L56 62 Z" fill="#FFB44A"/><circle cx="48" cy="40" r="6" fill="#002"/><text x="48" y="86" font-size="10" text-anchor="middle" fill="#174B4A">Тигрёнок</text></svg>`,
  creator: `<svg width="96" height="96" viewBox="0 0 96 96"><rect x="8" y="8" width="80" height="80" rx="12" fill="#F0FFF9"/><path d="M28 34 C40 22, 56 22, 68 34" stroke="#E07A3C" stroke-width="3" fill="none"/><circle cx="34" cy="56" r="6" fill="#000"/><text x="48" y="86" font-size="10" text-anchor="middle" fill="#174B4A">Лисёнок</text></svg>`,
  coder: `<svg width="96" height="96" viewBox="0 0 96 96"><rect x="6" y="14" width="84" height="56" rx="8" fill="#EFFBFF" stroke="#CDEFF6"/><rect x="18" y="26" width="60" height="28" rx="4" fill="#FFFFFF"/><circle cx="30" cy="54" r="3" fill="#0B6B6F"/><circle cx="66" cy="54" r="3" fill="#0B6B6F"/><text x="48" y="86" font-size="10" text-anchor="middle" fill="#174B4A">Акулёнок</text></svg>`,
  chef: `<svg width="96" height="96" viewBox="0 0 96 96"><rect x="6" y="10" width="84" height="76" rx="12" fill="#FFF7F0"/><circle cx="48" cy="40" r="10" fill="#fff"/><path d="M36 54 Q48 66 60 54" stroke="#E07A3C" stroke-width="3" fill="none"/><text x="48" y="86" font-size="10" text-anchor="middle" fill="#174B4A">Пингвинёнок</text></svg>`,
  doctor: `<svg width="96" height="96" viewBox="0 0 96 96"><rect x="8" y="8" width="80" height="80" rx="12" fill="#F6FDFF"/><circle cx="48" cy="38" r="10" fill="#fff"/><path d="M38 56 H58 M48 48 V64" stroke="#0B6B6F" stroke-width="3" stroke-linecap="round"/><text x="48" y="86" font-size="10" text-anchor="middle" fill="#174B4A">Зайчонок</text></svg>`,
  police: `<svg width="96" height="96" viewBox="0 0 96 96"><rect x="6" y="8" width="84" height="80" rx="12" fill="#F0F7FF"/><path d="M36 56 L60 56 L48 32 Z" fill="#9ED0FF"/><circle cx="48" cy="68" r="4" fill="#002"/><text x="48" y="86" font-size="10" text-anchor="middle" fill="#174B4A">Щенок</text></svg>`,
  rescuer: `<svg width="96" height="96" viewBox="0 0 96 96"><rect x="6" y="8" width="84" height="80" rx="12" fill="#FFF8F3"/><path d="M30 36 L66 36 L48 64 Z" fill="#FFB44A"/><circle cx="48" cy="28" r="6" fill="#000"/><text x="48" y="86" font-size="10" text-anchor="middle" fill="#174B4A">Медвежонок</text></svg>`,
  scientist: `<svg width="96" height="96" viewBox="0 0 96 96"><rect x="8" y="8" width="80" height="80" rx="12" fill="#F7FFFB"/><path d="M36 60 C36 48, 60 48, 60 60" stroke="#9EE0D6" stroke-width="3" fill="none"/><circle cx="48" cy="36" r="8" fill="#fff"/><text x="48" y="86" font-size="10" text-anchor="middle" fill="#174B4A">Совёнок</text></svg>`
};

let currentQuestion = 0;
let answersGiven = [];
qTotalEl.textContent = questions.length;

function showQuestion(index) {
  const q = questions[index];
  qTitle.textContent = q.text;
  qIndexEl.textContent = index + 1;
  qAnswers.innerHTML = '';
  q.answers.forEach((a, i) => {
    const btn = document.createElement('button');
    btn.textContent = a.text;
    btn.dataset.type = a.type;
    btn.onclick = () => selectAnswer(i);
    qAnswers.appendChild(btn);
  });
  btnBack.disabled = index === 0;
  btnNext.disabled = !answersGiven[index];
}

function selectAnswer(i) {
  const all = qAnswers.querySelectorAll('button');
  all.forEach(b => b.classList.remove('selected'));
  all[i].classList.add('selected');
  answersGiven[currentQuestion] = questions[currentQuestion].answers[i].type;
  btnNext.disabled = false;
}

function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion(currentQuestion);
  } else {
    showResult();
  }
}

function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion(currentQuestion);
  }
}

function showResult() {
  questionsSection.classList.add('hidden');
  resultSection.classList.remove('hidden');
  const counts = {};
  answersGiven.forEach(t => counts[t] = (counts[t] || 0) + 1);
  const top = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
  const res = results[top];
  resultPet.innerHTML = petSvgs[top] + `<p>${res.pet}</p>`;
  resultGames.textContent = res.games;
}

function restartQuiz() {
  resultSection.classList.add('hidden');
  welcomeCard.classList.remove('hidden');
  currentQuestion = 0;
  answersGiven = [];
}

function startQuiz() {
  welcomeCard.classList.add('hidden');
  questionsSection.classList.remove('hidden');
  currentQuestion = 0;
  answersGiven = [];
  showQuestion(currentQuestion);
}

function learnMore() {
  alert('Этот сайт помогает детям узнать, какие профессии им ближе, через весёлые мини-игры!');
}

startBtn.onclick = startQuiz;
learnMoreBtn.onclick = learnMore;
btnNext.onclick = nextQuestion;
btnBack.onclick = prevQuestion;
btnRestart?.addEventListener('click', restartQuiz);


let topType = null; // переменная для запоминания выбранного типа

function showResult() {
  questionsSection.classList.add('hidden');
  resultSection.classList.remove('hidden');

  const counts = {};
  answersGiven.forEach(t => counts[t] = (counts[t] || 0) + 1);
  topType = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0]; // ← запоминаем тип

  const res = results[topType];
  resultPet.innerHTML = petSvgs[topType] + `<p>${res.pet}</p>`;
  resultGames.textContent = res.games;
}

function restartQuiz() {
  resultSection.classList.add('hidden');
  welcomeCard.classList.remove('hidden');
  currentQuestion = 0;
  answersGiven = [];
  topType = null;
}

btnContinue?.addEventListener('click', () => {
  if (!topType) return alert('Сначала пройди тест!');
  const path = `games/${topType}/${topType}-game.html`;
  
  // Проверка существования пути (предохранитель, если файла нет)
  if (!path) return alert('Ошибка: не найдена игра для выбранного питомца.');
  
  window.location.href = path;
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("games-container");

  fetch("games.json")
    .then(response => {
      if (!response.ok) throw new Error("Не удалось загрузить games.json");
      return response.json();
    })
    .then(games => {
      games.forEach(game => {
        const card = document.createElement("div");
        card.className = "game-card";

        card.innerHTML = `
          <img src="${game.image}" alt="${game.title}">
          <h3>${game.title}</h3>
          <p class="level">Уровень ${game.level} (${game.age} лет)</p>
          <p>${game.description}</p>
          <a href="${game.path}" class="play-btn">Играть</a>
        `;

        container.appendChild(card);
      });
    })
    .catch(err => {
      console.error(err);
      container.innerHTML = "<p>⚠️ Не удалось загрузить список игр.</p>";
    });
});