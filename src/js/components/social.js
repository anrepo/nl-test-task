import Share from 'ninelines-sharing';
// import html2canvas from 'html2canvas';
// import { saveAs } from 'file-saver';

function changeShareData() {
	$('meta[property="og:title"]').attr('content', $('.share span.name').text());
	$('meta[property="og:description"]').attr('content', $('.share span.position').text());

	$('meta[property="twitter:title"]').attr('content', $('.share span.name').text());
	$('meta[property="twitter:description"]').attr('content', $('.share span.position').text());
}

// function createCanvas() {
// 	console.log('Canvas');
// 	html2canvas(document.querySelector('.share-box')).then(function(canvas) {
// 		document.body.appendChild(canvas);

// 		canvas.toBlob(function(blob) {
// 			saveAs(blob, "/images/share.png");
// 		});
// 	});
// }

if (document.querySelector('[data-social]')) {
	const list = document.querySelectorAll('[data-social]');

	Array.prototype.forEach.call(list, (item) => {
		item.addEventListener('click', (e) => {
			const social = e.currentTarget.dataset.social;
			const url = location.origin + location.pathname;

			// createCanvas();
			changeShareData();

			Share[social](url);
		});
	});
}
