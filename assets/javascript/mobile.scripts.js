/**
 * mobile.scripts.js
 *
 * Custom mobile specific scripts
 */

// Executed on DOM ready
domready(function () {

	// Invoke modules
	Alerts.init(push_message);                // Init alerts
	Expand.init();                            // Init expand / collapse
	FontObserverHandler.init();                      // Init font(face)observer
	// Lazysizes.init();                         // Init lazysizes; out-comment when apply custom actions on lazysizes init (also out-comment `lazysizes.class.js` in gruntfile.js)
	NavMain.init();                           // Init main navigation

	// Invoke plugins
	smoothScroll.init();                      // Init smoothscroll
	// gumshoe.init();                           // Init gumshoe (scrollspy)

});
