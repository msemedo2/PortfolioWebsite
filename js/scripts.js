// LOADER

let loader = document.getElementById('loader');

setTimeout(() => {
	loader.style.display = 'none';
}, 1000);

// HAMBURGER MENU

const hamburgerMenu = document.getElementById('hamburger-menu');
const navbar = document.getElementById('navbar');
const barTop = document.querySelector('.bar-top');
const barMiddle = document.querySelector('.bar-middle');
const barBottom = document.querySelector('.bar-bottom');
const navLink = document.querySelectorAll('.nav__link');

hamburgerMenu.addEventListener('click', () => {
	if (navbar.classList.contains('sidebar')) {
		barTop.style.transform = 'rotate(0deg)';
		barMiddle.style.transform = 'translateX(0rem)';
		barMiddle.style.opacity = '1';
		barBottom.style.transform = 'rotate(0deg)';
	} else {
		barTop.style.transform = 'rotate(45deg)';
		barMiddle.style.transform = 'translateX(1rem)';
		barMiddle.style.opacity = '0';
		barBottom.style.transform = 'rotate(-45deg)';
	}
});

function toggleMenu() {
	navbar.classList.toggle('sidebar');
}

hamburgerMenu.addEventListener('click', toggleMenu);

function closeNav() {
	if (window.innerWidth > 950) {
		barTop.style.transform = 'rotate(0deg)';
		barMiddle.style.transform = 'translateX(0rem)';
		barMiddle.style.opacity = '1';
		barBottom.style.transform = 'rotate(0deg)';
		navbar.classList.remove('sidebar');
	}
}
window.addEventListener('resize', closeNav);

navLink.forEach((item) => {
	item.addEventListener('click', () => {
		navbar.classList.remove('sidebar');
		barTop.style.transform = 'rotate(0deg)';
		barMiddle.style.transform = 'translateX(0rem)';
		barMiddle.style.opacity = '1';
		barBottom.style.transform = 'rotate(0deg)';
	});
});

// FORM VALIDATION

const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const text = document.getElementById('text');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	validateInputs();

	let success = document.getElementsByClassName('success').length;
	if (success === 4) {
		sendEmail();
	}
});

const setError = (element, message) => {
	const inputControl = element.parentElement;
	const errorDisplay = inputControl.querySelector('.error');

	errorDisplay.innerText = message;
	inputControl.classList.add('error');
	inputControl.classList.remove('success');
};

const setSuccess = (element) => {
	const inputControl = element.parentElement;
	const errorDisplay = inputControl.querySelector('.error');

	errorDisplay.innerText = '';
	inputControl.classList.add('success');
	inputControl.classList.remove('error');
};

const isValidEmail = (email) => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
	const nameValue = name.value.trim();
	const emailValue = email.value.trim();
	const subjectValue = subject.value.trim();
	const textValue = text.value.trim();

	if (nameValue === '') {
		setError(name, 'Username is required');
	} else {
		setSuccess(name);
	}

	if (emailValue === '') {
		setError(email, 'Email is required');
	} else if (!isValidEmail(emailValue)) {
		setError(email, 'Provide a valid email address');
	} else {
		setSuccess(email);
	}

	if (subjectValue === '') {
		setError(subject, 'Subject is required');
	} else {
		setSuccess(subject);
	}

	if (textValue === '') {
		setError(text, 'Please write a message');
	} else {
		setSuccess(text);
	}
};

// SEND EMAIL

const modal = document.querySelector('.modal');

document.addEventListener('click', () => {
	modal.style.display = 'none';
});

(function () {
	emailjs.init('jEsjPBTKasG7wrr3g');
})();

function sendEmail() {
	let name = document.getElementById('name').value;
	let email = document.getElementById('email').value;
	let subject = document.getElementById('subject').value;
	let text = document.getElementById('text').value;

	let templateParams = {
		name: name,
		email: email,
		subject: subject,
		text: text,
	};

	emailjs.send('service_ngijfeh', 'template_w165o0n', templateParams).then(
		function (response) {
			console.log('SUCCESS!', response.status, response.text);
			// SUCCESS MODAL
			modal.style.display = 'flex';
		},
		function (error) {
			console.log('FAILED...', error);
		}
	);
}

// Animation - Intersection Observer

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry);
		entry.target.classList.toggle('show', entry.isIntersecting);
		if (entry.isIntersecting) observer.unobserve(entry.target);
	});
});

const observerText = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry);
		entry.target.classList.toggle('show-text', entry.isIntersecting);
		if (entry.isIntersecting) observerText.unobserve(entry.target);
	});
});

const rightName = document.querySelectorAll('.right-name');
const right = document.querySelectorAll('.right');
const rightImg = document.querySelectorAll('.right-img');
const left = document.querySelectorAll('.left');
const textScale = document.querySelectorAll('.text-scale');

rightName.forEach((el) => observer.observe(el));
right.forEach((el) => observer.observe(el));
rightImg.forEach((el) => observer.observe(el));
left.forEach((el) => observer.observe(el));
textScale.forEach((el) => observerText.observe(el));
