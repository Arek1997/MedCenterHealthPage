'use strict';

const navLogo = document.querySelector('.nav__logo-img');
const offersOne = document.querySelector('#offers-one');
const headerBtn = document.querySelector('.button');
const burgerBtn = document.querySelector('.nav__burger');
const mobileMenu = document.querySelector('.nav__menu--mobile');
const mobileLinks = mobileMenu.querySelectorAll('a');
const footerYear = document.querySelector('.footer__year');

const handleNav = function () {
	document.body.classList.toggle('turnOffScroll');
	mobileMenu.classList.toggle('nav__menu--mobile-active');
	addAnimation();
};

const closeNav = function () {
	document.body.classList.remove('turnOffScroll');
	mobileMenu.classList.remove('nav__menu--mobile-active');
};

const addAnimation = function () {
	let delay = 0;
	mobileLinks.forEach((link) => {
		link.classList.toggle('fadeLeft');
		link.style.animationDelay = `.${delay}s`;
		delay++;
	});
};

mobileMenu.addEventListener('click', function (e) {
	e.target.matches('a') && handleNav();
});

footerYear.textContent = new Date().getFullYear();
headerBtn.addEventListener('click', () => {
	offersOne.scrollIntoView({ behavior: 'smooth' });
});

burgerBtn.addEventListener('click', handleNav);
navLogo.addEventListener('click', closeNav);
