let rocketMan = document.querySelector('.rocket-man');
const imgLength = document.querySelectorAll('img').length;
// console.log('Image Length: ' + imgLength);
let ratio = 100 / imgLength;
// console.log('Ratio: ' + ratio);
let preloaderProgress = 0;
let loadImage = 0;
let urlImages = [];
let d; let left; let
	bottom;

document.documentElement.style.overflow = 'hidden';

function onImageLoad() {
	preloaderProgress += ratio;
	loadImage += 1;
	document.querySelector('.preloader-progress').innerHTML = preloaderProgress.toFixed(0);

	left = parseInt(rocketMan.style.left, 10);
	bottom = parseInt(rocketMan.style.bottom, 10);
	d = Math.sqrt(Math.pow(left - (window.innerWidth + 380), 2) + Math.pow(bottom - (window.innerHeight + 380), 2));

	// console.log(d);

	rocketMan.style.left = `${d / 100 * preloaderProgress.toFixed(0)}px`;
	rocketMan.style.bottom = `${d / 100 * preloaderProgress.toFixed(0)}px`;

	// console.log(loadImage);

	if (loadImage === imgLength || preloaderProgress >= 100) {
		document.querySelector('.preloader-mask').classList.add('hidden');
		document.documentElement.style.overflow = 'auto';
	}
}

document.querySelectorAll('img').forEach((el) => {
	let imageCopy = new Image();
	imageCopy.src = el.getAttribute('src');
	urlImages.push(el.getAttribute('src'));
	imageCopy.onload = () => onImageLoad();
	imageCopy.onerror = () => onImageLoad();
});

// console.log(urlImages);
