import LocomotiveScroll from 'locomotive-scroll';

const locomotive = (function () {
	function init() {
		let scroll = new LocomotiveScroll({
			el: document.querySelector('[data-scroll-container]'),
			smooth: true,
			tablet: {smooth: true},
			smartphone: {smooth: true},
		});

		return scroll;
	}

	return {
		init,
	};
})();

export default locomotive;
