/**
 * main.script.js
 *
 * Custom, additional scripts
 */

// Executed on DOM ready
domready(function () {

	alerts.init(push_message);                // Init alerts
	expand.init();                            // Init expand / collapse
	fontobserver.init();                      // Init font(face)observer
	// lazysizes.init();                         // Init lazysizes; out-comment when apply custom actions on lazysizes init (also out-comment `lazysizes.class.js` in gruntfile.js)
	navMain.init();                           // Init main navigation
	// gumshoe.init();                           // Init gumshoe (scrollspy)
	popup.init();                             // Init popup
	smoothScroll.init();                      // Init smoothscroll

});
