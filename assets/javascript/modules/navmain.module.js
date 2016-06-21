/**
 * Navigation module
 * Add simple navigation functionality (open and close) to .js-navMain element
 *
 * Usage:
 * NavMain.init(); // navigation fixed on top of window
 */

var NavMain = (function () {

	/**
	 * Privates
	 */
	var navelements = {
		banner: document.querySelector('.banner'),
		html: document.querySelector('html'),
		navEl: document.querySelector('.js-nav-main')
	};

	function handleNavClick(event) {
		var target = event.target;
		if((target.classList.contains('js-nav-main')) || (event.keyCode === 27)) {
			NavMain.closeNav(event);
		}
	}

	function setNavHandlers() {
		// var navMainEl =  document.querySelector('.js-navMain');
		// navMainEl.addEventListener('click', handleNavClick, false); // Only do this if navheight != windowheight
		document.addEventListener('keyup', handleNavClick, false);
	}

	function unsetNavHandlers() {
		// var navMainEl =  document.querySelector('.js-navMain');
		// navMainEl.removeEventListener('click', handleNavClick, false); // Only do this if navheight != windowheight
		document.removeEventListener('keyup', handleNavClick, false);
	}

	/**
	 * Return public methods
	 */
	return {
		openNav : function(event) {
			if(typeof event !== 'undefined'){
				event.preventDefault();
			}
			navelements.html.classList.add('is-open-main-nav');
			setNavHandlers(true);
		},

		closeNav : function(event) {
			if(typeof event !== 'undefined'){
				event.preventDefault();
			}

			navelements.navEl.addEventListener(transitionEnd, function endTransitionNavClose(){
				navelements.html.classList.remove('is-closing-main-nav');
				navelements.html.classList.remove('is-open-main-nav');
				this.removeEventListener(transitionEnd, endTransitionNavClose, false);
			},false);

			navelements.html.classList.add('is-closing-main-nav');

			unsetNavHandlers();
		},

		/**
		 * Initiate navigation
		 */
		init : function() {
			var navMainShow = document.querySelector('.js-nav-main-show');
			var navMainHide = document.querySelector('.js-nav-main-hide');

			navelements.navEl = document.querySelector('.js-nav-main');

			// Check if nav-main, and nav-main-show DOM navelements exist
			if (typeof(navelements.navEl) !== 'undefined' && navelements.navEl !== null && typeof(navMainShow) !== 'undefined' && navMainShow !== null) {
				// Set the event listeners
				navMainShow.addEventListener('click', NavMain.openNav, false);
				navMainHide.addEventListener('click', NavMain.closeNav, false);
			}
		}
	};
})();
