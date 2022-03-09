// собирает элементы с заданным классом и смотрит их 
// id в котором аказаны проценты прогресса 
import { progress } from "./progressBar.js";
const animeItems = document.querySelectorAll('._anime-item');
const blockSkills = document.querySelector('.aboute__container');


function offset(el) {
	const rect = el.getBoundingClientRect();
	const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
	const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}

export function animateScroll() {
	if (animeItems.length > 0) {
		window.addEventListener('scroll', animeOnScroll);

		function animeOnScroll() {
			for (let i = 0; i < animeItems.length; i++) {
				const animeItem = animeItems[i];
				const animeItemHeight = animeItem.offsetHeight;
				const animeItemOffset = offset(animeItem).top;
				const animeFactor = 10;

				let animeItemPoint = window.innerHeight - animeItemHeight / animeFactor;
				// если высота объект больше высоты экрана
				if (animeItemHeight > window.innerHeight) {
					animeItemPoint = window.innerHeight - window.innerHeight / animeFactor;
				}

				if (window.pageYOffset > (animeItemOffset - animeItemPoint)
					&& window.pageYOffset < (animeItemOffset + animeItemHeight)) {
					animeItem.classList.add('_animate');
				}
				// else {
				// 	if (!animeItem.classList.contains('_anime-hiden')) {
				// 		animeItem.classList.remove('_animate');
				// 	}
				// }
			}
		}
		setTimeout(() => animeOnScroll(), 300)
	}
}


window.addEventListener('scroll', determinateScrollToBlock);

function determinateScrollToBlock() {
	const blockOffset = offset(blockSkills).top;

	if (this.pageYOffset >= blockOffset) {
		progress();
		window.removeEventListener('scroll', determinateScrollToBlock);
	}
}
