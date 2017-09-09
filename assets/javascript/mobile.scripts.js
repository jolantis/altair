/**
 * mobile.scripts.js
 *
 * Custom mobile specific scripts
 */

// Executed on DOM ready
domready(function () {

	// Invoke modules
	Alerts.init(push_message);                                                  // Init alerts
	Expand.init();                                                              // Init expand / collapse
	FontObserverHandler.init();                                                 // Init font(face)observer
	NavMain.init();                                                             // Init main navigation

	// Invoke plugins
	// gumshoe.init();                                                             // Init gumshoe (scrollspy)
	smoothScroll.init();                                                        // Init smoothscroll

});
