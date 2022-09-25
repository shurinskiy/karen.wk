import { roughAccordion } from "../../js/lib";

(() => {

	roughAccordion(document.querySelectorAll('.roadmap__card'), { 
		events: 'click, mouseenter',
		cls: 'active',
	});

})();
