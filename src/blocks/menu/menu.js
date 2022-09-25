(() => {

	const toggles = document.querySelectorAll('.menu__toggle, .menu__close');
	const menu = document.querySelector('.menu');

	toggles.forEach(item => {
		item.addEventListener('click', (e) => {
			e.preventDefault();
			e.stopPropagation();
			menu.classList.toggle('opened');
		});
	});

	['click','touchstart'].forEach(event => {
		document.addEventListener(event, function(e) {
			if(menu.classList.contains('opened') && !e.target.closest('.menu')) {
				e.preventDefault();
				menu.classList.toggle('opened');
			}
		});
	});

})();