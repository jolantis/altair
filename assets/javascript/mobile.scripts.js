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

	// LazySizes support for background images
	addEventListener('lazybeforeunveil', function(e) {
		var bg = e.target.getAttribute('data-bg');
		if(bg){
			e.target.style.backgroundImage = 'url(' + bg + ')';
			e.target.removeAttribute('data-bg');
		}
	});

	// LazySizes RiAS plugin (3rd/resrc party support) config
	addEventListener('lazyriasmodifyoptions', function(event) {
		event.detail.quality = (window.devicePixelRatio || 1) > 1.4 ? 65 : 80;
	});

	alerts.init(push_message);                // Init alerts
	expand.init();                            // Init expand / collapse
	navMain.init();                           // Init main navigation
	smoothScroll.init();                      // Init smoothscroll

});


// LazySizes support for background images
// document.addEventListener('lazybeforeunveil', function(e) {
// 	var bg = e.target.getAttribute('data-bg');
// 	if(bg){
// 		e.target.style.backgroundImage = 'url(' + bg + ')';
// 		e.target.removeAttribute('data-bg');
// 	}
// });

// LazySizes RiAS plugin (3rd/resrc party support) config
// document.addEventListener('lazyriasmodifyoptions', function(event) {
// 	event.detail.quality = (window.devicePixelRatio || 1) > 1.4 ? 65 : 80;
// });
