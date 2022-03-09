const header = document.querySelector('.header');

export function addColorToHeader() {
	window.addEventListener('scroll', checkScroll);
	function checkScroll() {
		if (window.scrollY > 5) {
			header.style.backgroundColor = '#5066f2';
		} else {
			header.style.backgroundColor = '#5066f200';
		}
	}
	checkScroll();
}
