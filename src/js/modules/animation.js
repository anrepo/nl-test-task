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
