import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo('.description.slideUp', {
	y: 200,
	opacity: 0,
}, {
	scrollTrigger: '.slideUp',
	y: 0,
	opacity: 1,
	duration: 1,
});

gsap.fromTo('.contacts.sildeRight', {
	x: 200,
	opacity: 0,
}, {
	scrollTrigger: '.contacts.sildeRight',
	x: 0,
	opacity: 1,
	duration: 1,
});

gsap.fromTo('.job-list.slideTop', {
	y: 200,
	opacity: 0,
}, {
	y: 0,
	opacity: 1,
	duration: 1,
	scrollTrigger: {
		trigger: '.job-list.slideTop',
		start: '-200px 80%',
		markers: false,
	},
});

gsap.fromTo('.places-list.sildeTop', {
	y: 200,
	opacity: 0,
}, {
	y: 0,
	opacity: 1,
	duration: 1,
	scrollTrigger: {
		trigger: '.places-list.sildeTop',
		start: '-200px 80%',
		markers: false,
	},
});

gsap.fromTo('.bounceOut', {
	scale: 0,
}, {
	scale: 1,
	scrollTrigger: {
		trigger: '.bounceOut',
		start: '-80px 80%',
		markers: false,
	},
	ease: 'bounce.out',
	duration: 1.5,
});
