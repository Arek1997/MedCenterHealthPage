'use strict';

const body = document.body;
const navLogo = document.querySelector('.nav__logo-img');
const offersOne = document.querySelector('#offers-one');
const headerBtn = document.querySelector('.button');
const burgerBtn = document.querySelector('.nav__burger');
const mobileMenu = document.querySelector('.nav__menu--mobile');
const mobileLinks = mobileMenu.querySelectorAll('a');
const footerYear = document.querySelector('.footer__year');
let initialScrollPos = window.scrollY;

footerYear.textContent = new Date().getFullYear();

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

const hideNav = function () {
	const currentScrollPos = window.scrollY;

	initialScrollPos < currentScrollPos
		? body.classList.add('hideNav')
		: body.classList.remove('hideNav');

	initialScrollPos = currentScrollPos <= 0 ? 0 : currentScrollPos;
};

window.addEventListener('scroll', hideNav);

mobileMenu.addEventListener('click', function (e) {
	e.target.matches('a') && handleNav();
});

headerBtn.addEventListener('click', () => {
	offersOne.scrollIntoView({ behavior: 'smooth' });
});

burgerBtn.addEventListener('click', handleNav);
navLogo.addEventListener('click', closeNav);
