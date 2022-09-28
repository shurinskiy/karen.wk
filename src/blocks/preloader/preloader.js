(() => {

	window.onload = function() {
		let preloader = document.querySelector('.preloader');
		preloader.classList.add('preloader_hide');

		setInterval(function() {
			preloader.classList.add('preloader_hidden');
		}, 990);
	}

})();
