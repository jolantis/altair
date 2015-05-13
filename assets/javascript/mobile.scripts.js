/**
 * mobile.scripts.js
 *
 * Custom mobile specific scripts
 */

// Executed on DOM ready
domready(function () {

	// Initialize resrc.run() function
	// if(typeof custom_resrc === 'undefined') {
	// 	resrc.run();
	// }
	// else {
	// 	resrc.configure(custom_resrc).run();
	// }

	alerts.init(push_message);                // Init alerts
	expand.init();                            // Init expand / collapse
	navMain.init();                           // Init main navigation
	smoothScroll.init();                      // Init smoothscroll

});

// lazySizes config
document.addEventListener('lazyriasmodifyoptions', function(event){
	// event.detail referes the placeholders/options and event.target the corresponding element
	event.detail.quality = (window.devicePixelRatio || 1) > 1.4 ? 65 : 80;
});
