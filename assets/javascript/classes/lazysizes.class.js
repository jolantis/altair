/**
 * Lazysizes
 *
 * Lazy loader class for (responsive) images
 * https://github.com/aFarkas/lazysizes
 */

var lazysizes = {

	/**
	 * Init RiAS (3rd/resrc party support) modification config
	 */
	rias: function() {
		document.addEventListener('lazyriasmodifyoptions', function(event) {
			event.detail.quality = (window.devicePixelRatio || 1) > 1.4 ? 65 : 80; // Set JPG quality to 65% if pixel ratio > 1.4!
		});
	},

	// /**
	//  * Add support for (basic) background images
	//  */
	// bgimages: function() {
	// 	document.addEventListener('lazybeforeunveil', function(e) {
	// 		var bg = e.target.getAttribute('data-bg');
	// 		if(bg) {
	// 			e.target.style.backgroundImage = 'url(' + bg + ')';
	// 			e.target.removeAttribute('data-bg');
	// 		}
	// 	});
	// },
};
