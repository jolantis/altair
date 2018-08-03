/**
 * main.script.js
 *
 * Custom, additional scripts
 */

// Executed on DOM ready
domready(function () {

	// Invoke modules
	Alerts.init(push_message);                                                  // Init alerts
	Expand.init();                                                              // Init expand / collapse
	FontObserverHandler.init();                                                 // Init font(face)observer
	NavMain.init();                                                             // Init main navigation
	// Popup.init();                                                               // Init popup

	// Invoke plugins
	// gumshoe.init();                                                             // Init gumshoe (scrollspy)
	smoothScroll.init();                                                        // Init smoothscroll

	// Run svg4everybody polyfill (e.g. for IE11)
	// svg4everybody({
	// 	nosvg: false,                                                           // Shiv <svg> and <use> elements and use image fallbacks
	// 	polyfill: true                                                          // Polyfill <use> elements for external content
	// });

	// Init smoothscroll (with or without hash)
	new SmoothScroll('a[href*="#"]', {
		// speed: 500,
		offset: 32
	});
	// smoothScrollWithoutHash('a[href*="#"]', {
	// 	// speed: 500,
	// 	offset: 32
	// });
});
