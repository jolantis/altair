/**
 * main.script.js
 *
 * Custom, additional scripts
 */

// Only serve JavaScript to 'Cutting the Mustard' browsers
if(enhance.ctm()){

	// Executed on DOM ready
	domready(function () {

		alerts.init(push_message);                // Init alerts
		expand.init();                            // Init expand / collapse
		navMain.init();                           // Init main navigation
		popup.init();                             // Init popup
		lazyload.init();                          // Init lazyload with resrc

	});

}
