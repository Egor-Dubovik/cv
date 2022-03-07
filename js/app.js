import { addClass } from "./modules/function.js";
import { progress } from "./modules/progressBar.js";
import { scrollToblock } from "./modules/scrollTo.js";
import { addColorToHeader } from "./modules/addBgToHeader.js"


addColorToHeader();
// добавляет класс active
addClass();


// собирает элементы с заданным классом и смотрит их 
// id в котором аказаны проценты прогресса 
progress();


scrollToblock();


const linlPlay = document.querySelector('#play');

linlPlay.onclick = (e) => {
	e.preventDefault();
	alert("######3132");
}



