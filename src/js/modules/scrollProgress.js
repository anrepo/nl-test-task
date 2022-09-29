import helpers from '../helpers';

let progressCircle = (() => {
	class Circle {
		constructor(element) {
			this.percent = 0;
			this.element = element;
			this.radius = element.r.baseVal.value;
			this.circumference = 2 * Math.PI * this.radius;
			this.element.style.strokeDasharray = `${this.circumference} ${this.circumference}`;
			this.element.style.strokeDashoffset = this.circumference;
		}

		setProgress(percent) {
			this.percent = percent;
			this.element.style.strokeDashoffset = this.circumference - percent / 100 * this.circumference;
		}
	}

	function setReadingProcess(val) {
		$('.progress-circle__text').text(`${val}%`);
	}

	function getVerticalScrollPercentage() {
		let locoScrollBar = $('.c-scrollbar');
		let locoScrollThumb = $('.c-scrollbar_thumb');
		let progressScroll = +locoScrollThumb[0].style.transform.split(', ')[13];

		return progressScroll / (locoScrollBar.height() - locoScrollThumb.height()) * 100;
	}

	function setProgress(circleObj) {
		let percent = getVerticalScrollPercentage();

		if (percent.toFixed(0) < 100) {
			$('span.progress-circle__text').removeClass('hidden');
			$('img.toTopArrow').addClass('hidden');

			setReadingProcess(percent.toFixed(0));
			circleObj.setProgress(percent);
		} else {
			$('span.progress-circle__text').addClass('hidden');
			$('img.toTopArrow').removeClass('hidden');
			circleObj.setProgress(percent);
		}
	}

	function init() {
		const circlesProgress = document.querySelector('.progress-circle');
		const itemProgress = circlesProgress.querySelector('.progress');
		let circle = new Circle(itemProgress);
		setProgress(circle);

		helpers.locoScroll.on('scroll', () => {
			setProgress(circle); // 😎
		});
	}

	return {
		init,
	};
})();

export default progressCircle;
