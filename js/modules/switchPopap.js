const popAnswer = document.querySelectorAll(".popap");


export const switchPopap = (messege) => {
	popAnswer.forEach(popap => {
		showPopap(popap, messege);
		popap.onclick = () => hidePopap(popap);
	});
}

function showPopap(popap, messege) {
	popap.classList.add("show");
	document.body.classList.add("lock");
	if (popap.classList.contains("popap-message-answer")) {
		popap.querySelector("p").innerHTML = messege;
	}
}

function hidePopap(popap) {
	popap.classList.remove("show");
	document.body.classList.remove("lock");
}