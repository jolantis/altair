/**
 * Navigation class
 * Add simple navigation functionality (open and close) to .js-navMain element
 *
 * Usage:
 * navMain.init(); // navigation fixed on top of window
 */

var navMain = {

	elements: {
		banner: document.querySelector('.banner'),
		html: document.querySelector('html'),
		navEl: document.querySelector('.js-nav-main')
	},

	/**
	 * Initiate navigation
	 */
	init: function(type) {
		var navMainShow = document.querySelector('.js-nav-main-show');
		var navMainHide = document.querySelector('.js-nav-main-hide');

		navMain.elements.navEl = document.querySelector('.js-nav-main');

		// Check if nav-main, and nav-main-show DOM elements exist
		if (typeof(navMain.elements.navEl) !== 'undefined' && navMain.elements.navEl !== null && typeof(navMainShow) !== 'undefined' && navMainShow !== null) {
			// Set the event listeners
			navMainShow.addEventListener('click', navMain.open, false);
			navMainHide.addEventListener('click', navMain.close, false);
		}
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
		if((target.classList.contains('js-nav-main')) || (event.keyCode === 27)) {
			navMain.close(event);
		}
	},

	open: function(event) {
		event.preventDefault();
		navMain.elements.html.classList.add('is-open-main-nav');
		navMain.setNavHandlers();
	},

	close: function(event) {
		event.preventDefault();

		navMain.elements.navEl.addEventListener(transitionEnd, function endTransitionNavClose(){
			navMain.elements.html.classList.remove('is-closing-main-nav');
			navMain.elements.html.classList.remove('is-open-main-nav');
			this.removeEventListener(transitionEnd, endTransitionNavClose, false);
		},false);

		navMain.elements.html.classList.add('is-closing-main-nav');

		navMain.unsetNavHandlers();
	}

};
