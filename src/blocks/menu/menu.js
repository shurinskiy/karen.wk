(() => {

	const $toggle = $('.menu__toggle').add('.menu__close');
	const $menu = $('.menu');
	
	$toggle.on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		$menu.toggleClass('opened');
	});

	$(window).on('click touchstart', function(e) {
		if($menu.hasClass('opened') && !e.target.closest('.menu')) {
			e.preventDefault();
			$menu.toggleClass('opened');
		}
	});

})();
