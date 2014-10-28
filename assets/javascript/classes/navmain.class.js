/**
 * Navigation class
 * Add simple navigation functionality (open and close) to .js-nav element
 *
 * Usage:
 * nav.init(); // navigation fixed on top of window
 * nav.init('basic'); // navigation relative at top of document
 */

var navMain = {

	elements: {
		banner: document.querySelector('.Banner'),
		html: document.querySelector('html')
	},

	/**
	 * Initiate the navigation
	 */
	init: function(type) {
		var navMainShow = document.querySelector('.js-navMainShow');
		var navMainHide = document.querySelector('.js-navMainHide');
		navMainShow.addEventListener('click', navMain.open, false);
		navMainHide.addEventListener('click', navMain.close, false);
	},

	setNavHandlers: function() {
		// var navMainEl =  document.querySelector('.js-navMain');
		// navMainEl.addEventListener('click', navMain.handleNavClick, false); // Only do this if navheight != windowheight
		document.addEventListener('keyup', navMain.handleNavClick, false);
	},

	unsetNavHandlers: function() {
		// var navMainEl =  document.querySelector('.js-navMain');
		// navMainEl.removeEventListener('click', navMain.handleNavClick, false); // Only do this if navheight != windowheight
		document.removeEventListener('keyup', navMain.handleNavClick, false);
	},

	handleNavClick: function(event) {
		var target = event.target;
		if((target.classList.contains('js-navMain')) || (event.keyCode === 27)) {
			navMain.close(event);
		}
	},

	open: function(event) {
		event.preventDefault();
		navMain.elements.html.classList.add('is-openMainNav');
		navMain.setNavHandlers();
	},

	close: function(event) {
		event.preventDefault();
		navMain.elements.html.classList.remove('is-openMainNav');
		navMain.unsetNavHandlers();
	}

};
