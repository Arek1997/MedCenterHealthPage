const swiper = new Swiper('.swiper', {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	grabCursor: true,
	speed: 550,
	autoplay: {
		delay: 2500,
		// disableOnInteraction: false,
		disableOnInteraction: true,
		pauseOnMouseEnter: true,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	breakpoints: {
		768: {
			slidesPerView: 2,
		},
	},
});
