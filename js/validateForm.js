"use strict"
import { switchPopap } from "./modules/switchPopap.js";

document.addEventListener('DOMContentLoaded', function () {
	const contactForm = document.querySelector(".contact__form");
	contactForm.addEventListener("submit", formSend);

	async function formSend(e) {
		e.preventDefault();
		let error = formValidate();
		let formData = new FormData(contactForm);

		if (error === 0) {
			''
			contactForm.classList.add('_sending');
			let response = await fetch('../../php/sendmail.php', {
				method: 'POST',
				body: formData
			});
			console.log(formData.entries());
			if (response.ok) {
				let result = await response.json();
				switchPopap(result.message);
				contactForm.reset();
				contactForm.classList.remove('_sending');
			} else {
				switchPopap('Something went wrong (:<br>Please try again or contact me on social networks (see links below)<br><br>Что-то пошло не так...<br>Пожалуйста попробуйте ещё или свяжись со мной в соц. сети (ссылки смотри ниже)');
				contactForm.classList.remove('_sending');
			}
		} else {
			switchPopap(`Please enter correct information :)<br>Пожалуйста введи корректную информацию`);
		}
	}

	function formValidate() {
		let error = 0;
		let formReq = document.querySelectorAll('._req');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.name === "email") {
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			} else if (input.name === "name") {
				if (nameValidate(input)) {
					formAddError(input);
					error++;
				}
			}
			else if (input.name === "phone") {
				if (phoneValidate(input)) {
					formAddError(input);
					error++;
				}
			}
			else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}
		}
		return error;
	}

	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.nextElementSibling.classList.add('_error');
		input.classList.add('_error');
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.nextElementSibling.classList.remove('_error');
		input.classList.remove('_error');
	}

	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);

	}
	function nameValidate(input) {
		return /^[a-zA-Z0-9]+$/.test(input.value);
	}
	function phoneValidate(input) {
		return !/(\d|\+)\d{10,}/.test(input.value);
	}
});


