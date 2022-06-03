// import { create } from "vinyl-ftp";

let burger = document.querySelector('.menu__icon');
let list = document.querySelector('.menu__list');
let blockAbout = document.querySelector('.aboute');
let textAbout = document.querySelector('.aboute__text');
let menuLinks = document.querySelectorAll('.menu__link');


export function switchMenu() {
	burger.onclick = () => {
		burger.classList.toggle('active');
		list.classList.toggle('active');
		document.body.classList.toggle('lock');
	}

	menuLinks.forEach(link => {
		link.onclick = () => {
			burger.classList.remove('active');
			list.classList.remove('active');
			document.body.classList.remove('lock');
		}
	})
}


