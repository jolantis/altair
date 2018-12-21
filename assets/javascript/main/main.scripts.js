/**
 * main.script.js
 *
 * Custom, additional scripts
 */

// Executed on DOM ready
domready(function () {

	/**
	 * Invoke modules
	 */

	Alerts.init(push_message);                                                  // Init alerts
	Expand.init();                                                              // Init expand / collapse
	FontObserverHandler.init();                                                 // Init font(face)observer
	NavMain.init();                                                             // Init main navigation
	// Popup.init();                                                               // Init popup

	/**
	 * Invoke plugins
	 */

	// Run svg4everybody polyfill (e.g. for IE11)
	// svg4everybody({
	// 	nosvg: false,                                                           // Shiv <svg> and <use> elements and use image fallbacks
	// 	polyfill: true                                                          // Polyfill <use> elements for external content
	// });

	// Init smoothscroll (with or without hash)
	new SmoothScroll('a[href*="#"]', {
		// ignore: '[data-scroll-ignore]',                                         // Selector for links to ignore (must be a valid CSS selector)
		// header: null,                                                           // Selector for fixed headers (must be a valid CSS selector)
		speed: 500,                                                             // Integer. Amount of time in milliseconds it should take to scroll 1000px
		// speedAsDuration: false,                                                 // If true, use speed as the total duration of the scroll animation
		clip: true,                                                             // If true, adjust scroll distance to prevent abrupt stops near the bottom of the page
		offset: 32,                                                             // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
		topOnEmptyHash: true,                                                   // Scroll to the top of the page for links with href="#"
		easing: 'easeInOutQuad',                                                // Easing pattern to use (e.g. easeInQuad, easeInOutQuad, easeInOutCubic, easeOutCubic, etc.)
		updateURL: false,                                                       // Update the URL on scroll
		popstate: false,                                                        // Animate scrolling with the forward/backward browser buttons (requires updateURL to be true)
		emitEvents: false                                                       // Emit custom events (e.g. scrollStart, scrollStop and scrollCancel)
	});
	// smoothScrollWithoutHash('a[href*="#"]', {
	// 	// speed: 500,
	// 	offset: 32
	// });

	// Init gumshoe (scrollspy)
	// gumshoe.init();

});
