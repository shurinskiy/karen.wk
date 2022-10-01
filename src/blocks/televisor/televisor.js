(() => {

	document.querySelector('.televisor__video').addEventListener('click', function(e) {
		let player = this.querySelector('iframe');
		let func = player.classList.contains('paused') ? "playVideo" : "pauseVideo";

		if (player.src) {
			player.contentWindow.postMessage(JSON.stringify({"event":"command", "func":`${func}`}), '*');
			player.classList.toggle('paused');
		}

		if (!player.src && e.target.classList.contains('televisor__play')) {
			player.src = e.target.dataset.youtubeSrc;
			e.target.remove();
		}
	});

})();