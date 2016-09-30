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
	// Lazysizes.init();                                                           // Init lazysizes; out-comment when apply custom actions on lazysizes init (also out-comment `lazysizes.class.js` in gruntfile.js)
	NavMain.init();                                                             // Init main navigation
	// Popup.init();                                                               // Init popup

	// Invoke plugins
	smoothScroll.init();                                                        // Init smoothscroll
	// gumshoe.init();                                                             // Init gumshoe (scrollspy)

});
