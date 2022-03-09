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
		"about-story": "I never thought that I'd wanna become a programmer. I really thought it's boring. But one day on the internet I came across an advertisement for a free course on web development. It attracted me because everything was clearly. And now you are reading my CV. Web Development is sometimes very difficult for me. Consistency is important here.",
		"about-motivation": "It’s kind of fun to do the impossible. (Walt Disney) <span>P.S. Hope you know the Disney story</span>",
		"example-task": "Your task is to write a function maskify, which changes all but the last four characters into ‘#’.",
		"education-li1": "University: Belarusian State Academy of Telecommunications, Software maintenance",
		"education-li2": "I studied Web dev by myself using the Internet",
		"education-li3": "RS Schools Course «JavaScript/Front-end. Stage 0» (finished)",
		"education-li4": "English Intermediate. I practice and improve my English almoust every day",
		"contact-text": "Let's stay in touch. For more information send email or write to the social network ↓",
		"form-name": "Name*",
		"form-email": "Email*",
		"form-phone": "Phone",
		"form-message": "Message",
		"form-mark": "call me",
		"form-btn": "Send",
		"portfolio-descriptin-1": "The site to search for trailers and descriptions for movies and series. The sorting of files by trends, popular and top is also implemented. Used TMDB API in this project.",
		"portfolio-descriptin-2": "A simple landing page presenting a flower shop. Implemented a slider and a map with the location of the store.",
		"portfolio-descriptin-3": "Tic-tac-toe game implemented. You can play both with a computer and alone. Wins are being counted.",
		"portfolio-descriptin-4": "Made an audio player. From the controls (buttons): play, pause, flip, repeat, shuffle audio recordings.",
		"portfolio-descriptin-5": "Photographer's website. From the interesting - the language change and the theme of the site with storing in localstorage are implemented. Also a custom video player.",
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
		"about-story": "Никогда не думал, что стану программистом. Я действительно думал, что это скучнo. Но однажды в интернете я наткнулся на рекламу бесплатных курсов по веб-разработке. Это привлекло меня, потому что все было наглядно. И вот, ты читаете мое резюме. У меня нет большей цели, чем стать профессионалом в этой области. Да, здесь важна последовательность.",
		"about-motivation": "Делать невозможное — это весело. (Уолт Дисней) <span>P.S. Надеюсь, вы знаете историю Диснея</span>",
		"example-task": "Ваша задача — написать функцию maskify, которая заменяет все символы, кроме последних четырех, на «#».",
		"education-li1": "ВУЗ: Белорусская государственная академия связи, Сопровождение программного обеспечения",
		"education-li2": "Я изучал веб-разработку самостоятельно в интернете",
		"education-li3": "Курс RS Schools «JavaScript/Front-end. Этап 0» (завершен)",
		"education-li4": "Английский B1-уровень. Я практикуюсь и совершенствую язык почти каждый день",
		"contact-text": "Оставайся я на связи. Для получения дополнительной информации отправь email или напиши в соц.сети ↓",
		"form-name": "Имя*",
		"form-email": "E-мейл*",
		"form-phone": "Телефон",
		"form-message": "Сообщение",
		"form-mark": "перезвони мне",
		"form-btn": "отправить",
		"portfolio-descriptin-1": "Сайт для поиска трейлеров и описаний к фильмам и сериалам. Также реализована сортировка файлов по трендам, популярным и топовым. В этом проекте используется TMDB API.",
		"portfolio-descriptin-2": "Простая целевая страница, представляющая цветочный магазин. Реализован слайдер и карта с расположением магазина.",
		"portfolio-descriptin-3": "Реализована игра крестики-нолики. Можно играть как с компьютером так и одному. Ведётся подсчёт побед.",
		"portfolio-descriptin-4": "Сделан аудиоплеер. Из средств управления (кнопки): плей, пауза, перелистывание, повтор, перемешать аудиозаписи.",
		"portfolio-descriptin-5": "Сайт фотографа. Из интересного - реализованы смена языка и тема сайта с запоминанием в localstorage. Также кастомный видеоплеер. ",
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









