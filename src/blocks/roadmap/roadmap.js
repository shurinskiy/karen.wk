import { roughAccordion } from "../../js/lib";

(() => {

	roughAccordion(document.querySelectorAll('.roadmap__card'), { 
		events: 'touchstart, click',
		cls: 'active',
	});

})();
