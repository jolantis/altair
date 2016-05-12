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
	lazysizes.init();                         // Init lazysizes
	navMain.init();                           // Init main navigation
	// gumshoe.init();                           // Init gumshoe (scrollspy)
	photoswipegallery.init();                 // Init photoswipe
	popup.init();                             // Init popup
	smoothScroll.init();                      // Init smoothscroll

});
