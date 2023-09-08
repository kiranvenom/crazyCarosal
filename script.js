const swiper = new Swiper('.swiper', {
	loop: true,
	autoplay: {
		delay: 450,
		disableOnInteraction: false,
	},
	slidesPerView: 3,
	speed: 550,
	effect: 'slide',

	scrollbar: {
		el: '.mainLoader',
		dragClass: 'lgOrg',
	},
});

swiper.el.addEventListener('mouseenter', () => {
	swiper.autoplay.stop();
});
swiper.el.addEventListener('mouseleave', () => {
	swiper.autoplay.start();
});

//spliting

const target = document.querySelector('#target');
const targetname = document.querySelector('#targetName');
const results = Splitting({ target: target, by: 'chars' });
const resultss = Splitting({ target: targetname, by: 'chars' });

let tl = gsap.timeline();

tl.from('.char', {
	y: 100,
	opacity: 0,
	duration: 2,
	stagger: 0.04,
	ease: 'back',
});
tl.to('.char', {
	y: -100,
	opacity: 0,
	duration: 0.8,
	stagger: 0.04,
	ease: 'back',
});
tl.from('.loadingAnimation', {
	y: 100,
	opacity: 0,
	duration: 0.8,
	stagger: 0.04,
	ease: 'back',
});
tl.to('.emptyLoaderShow', {
	width: '100%',
	duration: 2,
});
tl.to('.loadingAnimation', {
	y: -100,
	opacity: 0,
	duration: 0.8,
	ease: 'back',
});
tl.to('.loader', {
	top: '-100%',
	duration: 0.6
});
