/**
 * Popup window
 *
 * Simple popupwindow
 * Use "$(a.external).on('click', {}, popup.openWindow)" to initiate
 * Between curly braces set custom height and width, or leave empty.
 * Goes a little something like this: {w: 400, h: 800}
 */

var popup = {

	/**
	 * Initiate popup event handlers
	 */
	init: function() {
		var popuplinks = document.querySelectorAll('.js-popup');
		for (var i = 0; i < popuplinks.length; i++) {
			if (popuplinks[i] !== null) {
				popuplinks[i].addEventListener('click', popup.openWindow, false);
			}
		}

	},

	openWindow: function(event){
		var url = event.currentTarget.getAttribute('href');
		window.open(url, 'popupwin', 'height=400,width=650,resizable=1,toolbar=0,menubar=0,status=0,location=0,scrollbars=1');
		event.preventDefault();
	}
};
