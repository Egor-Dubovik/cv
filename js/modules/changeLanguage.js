const languages = {
  "en": {
    "home": "Home",
    "about": "About",
    "skills": "Skills",
    "code": "Code",
    "portfolio": "Portfolio",
    "education": "Education",
    "contact": "Contacts",
    "about-title": "About me",
    "skills-title": "Skills and Proficiency",
    "code-title": "Code example:",
    "portfolio-title": "My portfolio",
    "education-title": "Education",
    "contact-title": "Contact Me",
    "home-title": "HE<br>LLO.",
    "about-story": `
    I'm in my early 20s and am a beginner Frontend developer. When I took up web development, I was over the moon. I hope you guess, that was the moment you found the love of all your life. And now I can’t stop, I'm going to be the best in this field. And this is wonderful because there is no limit to perfection! 
    <br><br>My hobbies are learning English and running. I'm also keen on rollerblading.
    Therefore, with the exception of web development, we can chat in English and go rollerblading ;)
    `,
    "about-motivation": "It’s kind of fun to do the impossible. (Walt Disney) <span>P.S. Hope you know the Disney story</span>",
    "example-task": "Your task is to write a function maskify, which changes all but the last four characters into ‘#’.",
    "education-li1": "Сomprehensive school (gymnasium №1, Kopyl, Minsk region) 2008-2017",
    "education-li2": "College of Information Communication Technology (technical operation of telecommunication networks) 2017-2021",
    "education-li3": "University: Belarusian State Academy of Telecommunications (software maintenance) 2021-2024",
    "education-li4": "RS Schools Course «JavaScript/Front-end» (2022)",
    "education-li5": "Streamline language courses (English, Pre Intermediate) 2022",
    "contact-text": "Let's stay in touch. For more information send email or write to the social network ↓",
    "form-name": "Name",
    "form-email": "Email",
    "form-phone": "Phone",
    "form-message": "Message",
    "form-mark": "call me",
    "form-btn": "Send",
    "portfolio-descriptin-1": "The site to search for trailers and descriptions for movies and series. The sorting of files by trends, popular and top is also implemented. Used TMDB API in this project.",
    "portfolio-descriptin-2": "Implemented slider and pagination (JS), 2 pages.",
    "portfolio-descriptin-3": "Tic-tac-toe game implemented. You can play both with a computer and alone. Wins are being counted.",
    "portfolio-descriptin-4": "Made an audio player. From the controls (buttons): play, pause, flip, repeat, shuffle audio recordings.",
    "portfolio-descriptin-5": "Photographer's website. From the interesting - the language change and the theme of the site with storing in localstorage are implemented. Also a custom video player.",
    "portfolio-descriptin-6": "Implemented virtual keyboard. Only JS (ES6) was used to display content. There is a backlight change.",
    "portfolio-descriptin-7": "Weather app. Used yandex and openweather API, native scroll is also implemented (JS).",
  },
  "ru": {
    "home": "Главная",
    "about": "Обо мне",
    "skills": "Навыки",
    "code": "Код",
    "portfolio": "Портфолио",
    "education": "Образование",
    "contact": "Контакты",
    "about-title": "Обо мне",
    "skills-title": "Навыки и мастерство",
    "code-title": "Пример кода:",
    "portfolio-title": "Мое портфолио",
    "education-title": "Образование",
    "contact-title": "Свяжись со мной",
    "home-title": "Салют 👋",
    "about-story": `
    Мне немного за 20, и я начинающий Frontend-разработчик. Когда я занялся веб-разработкой, я был на седьмом небе от счастья. Надеюсь, вы догадались, что это был момент, когда находишь любовь всей своей жизни. И теперь я не могу остановиться, собираюсь быть лучшим в этой области. И это прекрасно, ведь нет предела совершенству!
    <br><br>Мои хобби изучение английского языка и бег. Я также увлекаюсь роликами.
    Поэтому, за исключением веб-разработки, мы можем поболтать на английском и покататься на роликах ;) 
    `,
    "about-motivation": "Делать невозможное — это весело. (Уолт Дисней) <span>P.S. Надеюсь, вы знаете историю Диснея</span>",
    "example-task": "Ваша задача — написать функцию maskify, которая заменяет все символы, кроме последних четырех, на «#».",
    "education-li1": "Общеобразовательная школа (гимназия №1, г. Копыль, Минская область) 2008-2017",
    "education-li2": "Колледж информационно-коммуникационных технологий (техническая эксплуатация телекоммуникационных сетей) 2017-2021",
    "education-li3": "ВУЗ: Белорусская государственная академия связи (сопровождение программного обеспечения) 2021-2024",
    "education-li4": "RS School курс «JavaScript/Front-end» (2022)",
    "education-li5": "Языковые курсы Streamline (English, Pre Intermediate) 2022",
    "contact-text": "Оставайся я на связи. Для получения дополнительной информации отправь email или напиши в соц.сети ↓",
    "form-name": "Имя",
    "form-email": "E-мейл",
    "form-phone": "Телефон",
    "form-message": "Сообщение",
    "form-mark": "перезвони мне",
    "form-btn": "отправить",
    "portfolio-descriptin-1": "Сайт для поиска трейлеров и описаний к фильмам и сериалам. Также реализована сортировка файлов по трендам, популярным и топовым. В этом проекте используется TMDB API.",
    "portfolio-descriptin-2": "Реализован слайдер и пагинация (JS), 2 страницы.",
    "portfolio-descriptin-3": "Реализована игра крестики-нолики. Можно играть как с компьютером так и одному. Ведётся подсчёт побед.",
    "portfolio-descriptin-4": "Сделан аудиоплеер. Из средств управления (кнопки): плей, пауза, перелистывание, повтор, перемешать аудиозаписи.",
    "portfolio-descriptin-5": "Сайт фотографа. Из интересного - реализованы смена языка и тема сайта с запоминанием в localstorage. Также кастомный видеоплеер. ",
    "portfolio-descriptin-6": "Реализована виртуальная клавиатура. Для отображения контента использовался только JS (ES6). Присутствует смена подсветки.",
    "portfolio-descriptin-7": "Приложение погода. Использовал yandex и openweather API, также реализован нативный скролл (JS)",
  }
}

const arrOfReplaceWords = document.querySelectorAll('._lan');
const switcherLang = document.querySelector('.menu__checkbox');


function replaceWords(lang) {
  arrOfReplaceWords.forEach(el => {
    let replaceEl = el.dataset.lan;
    el.innerHTML = languages[lang][replaceEl];
  })
}


export function switchLang() {
  let localLang = localStorage.getItem('lang');

  if (localLang !== null) {
    localLang === 'en' ? switcherLang.checked = true : switcherLang.checked = false;
  }

  if (switcherLang.checked) {
    replaceWords('en')
  } else {
    replaceWords('ru');
  }

  switcherLang.addEventListener("change", (e) => {
    if (!e.target.checked) {
      localStorage.setItem('lang', 'ru');
      replaceWords('ru');
    } else {
      localStorage.setItem('lang', 'en');
      replaceWords('en');
    }
  });

}









