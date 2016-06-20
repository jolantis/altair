/**
 * Invoke Spin.js
 *
 * Needs jquery.min.js or zepto.min.js
 * http://fgnass.github.com/spin.js/
*/

var spin = {

	/**
	 * Set options used in spin plugin
	 */
	opts: {
		lines: 11,                      // The number of lines to draw
		length: 4,                      // The length of each line
		width: 3,                       // The line thickness
		radius: 10,                     // The radius of the inner circle
		rotate: 7,                      // The rotation offset
		color: '#fff',                  // #rgb or #rrggbb
		trail: 60,                      // Afterglow percentage
		speed: 0.8,                     // Rounds per second
		shadow: false,                  // Whether to render a shadow
		hwaccel: true,                  // Whether to use hardware acceleration
		className: 'spinner',           // The CSS class to assign to the spinner
		zIndex: 2e9,                    // The z-index (defaults to 2000000000)
		top: 'auto',                    // Top position relative to parent in px
		left: 'auto'                    // Left position relative to parent in px
	},

	/**
	 * Initiate the spin plugin
	 * @param {spin_element} a string for the element identifier to pass to the spin plugin
	 */
	init: function(spin_element) {
		var spinner = $(spin_element);
		spinner.spin(this.opts);
	}
};
