'use strict';
const percentOfElementView = 0.2;

// https://scrollrevealjs.org/api/defaults.html
// Basic animations settings
ScrollReveal({
	duration: 1000,
	delay: 400,
	distance: '100px',
	easing: 'ease',
});

// Header elements animation

ScrollReveal().reveal('header h1', { origin: 'left' });

ScrollReveal().reveal('header p', {
	origin: 'left',
	delay: 500,
	interval: 300,
});

ScrollReveal().reveal('header button', {
	origin: 'bottom',
	delay: 1000,
});

// Section offers-one

ScrollReveal().reveal('.offers-one__text', {
	origin: 'bottom',
	viewFactor: percentOfElementView,
});

// lab tests
ScrollReveal().reveal('.lab-tests__box1', {
	origin: 'left',
	viewFactor: percentOfElementView,
});

ScrollReveal().reveal('.lab-tests__box2', {
	origin: 'right',
	viewFactor: percentOfElementView,
	delay: 650,
});

// Section system

ScrollReveal().reveal('.system__text-top', {
	origin: 'bottom',
	viewFactor: percentOfElementView,
});

ScrollReveal().reveal('.system__card', {
	origin: 'bottom',
	viewFactor: percentOfElementView,
	interval: 400,
});

// Section offers-two

ScrollReveal().reveal('.offers-two-top div, .offers-two-down div', {
	distance: '0px',
	origin: 'bottom',
	viewFactor: percentOfElementView,
	interval: 300,
});

// Section contact

ScrollReveal().reveal('.contact__container h2', {
	origin: 'bottom',
	viewFactor: percentOfElementView,
});

ScrollReveal().reveal('.contact__img-box', {
	origin: 'left',
	viewFactor: percentOfElementView,
});

ScrollReveal().reveal('.contact__text-box', {
	origin: 'right',
	viewFactor: percentOfElementView,
});
