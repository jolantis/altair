/**
 * main.script.js
 *
 * Custom, additional scripts
 */

// Only serve JavaScript to 'Cutting the Mustard' browsers
if(enhance.ctm()){

	// Executed on DOM ready
	domready(function () {

		if(typeof custom_resrc === 'undefined') {
			resrc.run();
		}
		else {
			resrc.configure(custom_resrc).run();
		}

		alerts.init(push_message);                // Init alerts
		expand.init();                            // Init expand / collapse
		navMain.init();                           // Init main navigation
		popup.init();                             // Init popup
		lazyload.init();                          // Init lazyload with resrc

	});

}
// If not 'Cutting the Mustard', serve normal ReSRC images
else {
	if(typeof resrc !== 'undefined') {
		resrc.ready(function () {
			resrc.configure({
				resrcClass : 'img[data-src]'
			}).run();
		});
	}
}
