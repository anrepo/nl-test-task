import header from '../components/header';
import helpers from '../helpers';

/**
* Модуль "Плавный переход к якорю"
*/
const init = () => {
	$('.js-to-anchor').on('click', (e) => {
		e.preventDefault();
		e.stopPropagation();

		const id = $(e.currentTarget).attr('href');
		const speed = $(e.currentTarget).data('speed') || 500;
		const offset = helpers.$header.css('position') === 'fixed' || helpers.$header.css('position') === 'absolute' ? -helpers.$header.outerHeight(true) : 0;

		header.closeMenu().then(() => {
			$('.js-burger').removeClass('is-active');
			// helpers.scrollTo($(id), speed, offset);

			helpers.locoScroll.scrollTo(document.querySelector(`${id}`), {
				speed,
				offset,
			});
		});
	});
};

const destroy = () => {
	helpers.$document.off('.js-to-anchor');
};

export default {
	init,
	destroy,
};
