import { switchMenu } from "./modules/menuSwitching.js";
// import { progress } from "./modules/progressBar.js";
import { scrollToblock } from "./modules/scrollTo.js";
import { addColorToHeader } from "./modules/addBgToHeader.js"
import { animateScroll } from "./modules/animateScroll.js"

// добовл0ет анимацию при скроле
animateScroll();
//при скроле у хедера появ-я цвет
addColorToHeader();
// навигация по меню
switchMenu();
// собирает элементы с заданным классом и смотрит их 
// id в котором аказаны проценты прогресса 
// progress();
//при клике по ссылке прокрутка к нужному блоку
scrollToblock();


const linlPlay = document.querySelector('#play');

linlPlay.onclick = (e) => {
	e.preventDefault();
	alert("######3132");
}



