/**
 * Lazysizes module
 *
 * Lazy loader module for (responsive) images
 * https://github.com/aFarkas/lazysizes
 */

var Lazysizes = (function () {

	function init() {
		// Room for actions on lazysizes init

		// Example: Basic support for background images (for without bgset plugin)
		// document.addEventListener('lazybeforeunveil', function(e){
		// 	var bg = e.target.getAttribute('data-bg');
		// 	if(bg) {
		// 		e.target.style.backgroundImage = 'url(' + bg + ')';
		// 		e.target.removeAttribute('data-bg');
		// 	}
		// });
	}

	/**
	 * Return public methods
	 */
	return {
		init: init
	};
})();
