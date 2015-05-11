/**
 * main.script.js
 *
 * Custom, additional scripts
 */

// Executed on DOM ready
domready(function () {

	// Initialize resrc.run() function
	if(typeof custom_resrc === 'undefined') {
		resrc.run();
	}
	else {
		resrc.configure(custom_resrc).run();
	}

	alerts.init(push_message);                // Init alerts
	expand.init();                            // Init expand / collapse
	navMain.init();                           // Init main navigation
	// lazyload.init();                          // Init lazyload with resrc
	smoothScroll.init();                      // Init smoothscroll
	popup.init();                             // Init popup

});
