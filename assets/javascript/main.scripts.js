/**
 * main.script.js
 *
 * Custom, additional scripts
 */

// Executed on DOM ready
domready(function () {

	lazysizes.rias();                         // Init lazysizes rias
	// lazysizes.bgimages();                     // Init lazysizes basic background image support (e.g. no-resrc bgimages!)
	alerts.init(push_message);                // Init alerts
	expand.init();                            // Init expand / collapse
	navMain.init();                           // Init main navigation
	smoothScroll.init();                      // Init smoothscroll
	popup.init();                             // Init popup

});
