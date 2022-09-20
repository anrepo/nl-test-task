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

gsap.fromTo('.job-list.slideLeft', {
	x: -200,
	opacity: 0,
}, {
	x: 0,
	opacity: 1,
	duration: 1,
	scrollTrigger: {
		trigger: '.job-list.slideLeft',
		start: '100px 80%',
		markers: false,
	},
});

gsap.fromTo('.places-list.sildeRight', {
	x: 200,
	opacity: 0,
}, {
	x: 0,
	opacity: 1,
	duration: 1,
	scrollTrigger: {
		trigger: '.places-list.sildeRight',
		start: '100px 80%',
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
