const progressBlocks = document.querySelectorAll('.--add');

export function progress() {
	progressBlocks.forEach(elem => {
		let progressPercent = Number(elem.getAttribute('data-percent'))
		let width = 1;
		let idSet = setInterval(progressStatus, 20);
		function progressStatus() {
			if (width >= progressPercent) {
				clearInterval(idSet);
			} else {
				width++;
				elem.style.width = width + '%';
				elem.textContent = width + '%';
			}
		}
	})
}

