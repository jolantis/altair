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
	smoothScroll.init();                                                        // Init smoothscroll
	// gumshoe.init();                                                             // Init gumshoe (scrollspy)

});
