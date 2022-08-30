// LOADER

// let loader = document.getElementById('loader');

// setTimeout(() => {
// 	loader.style.display = 'none';
// }, 1000);

// HAMBURGER MENU

const hamburgerMenu = document.getElementById('hamburger-menu');
const navbar = document.getElementById('navbar');
const barTop = document.querySelector('.bar-top');
const barMiddle = document.querySelector('.bar-middle');
const barBottom = document.querySelector('.bar-bottom');

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
