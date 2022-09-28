(() => {

	window.onload = function() {
		let preloader = document.querySelector('.preloader');

		preloader?.classList.add('preloader_hide');
		setInterval(() => {
			preloader?.classList.add('preloader_hidden');
		}, 990);
	}

})();
