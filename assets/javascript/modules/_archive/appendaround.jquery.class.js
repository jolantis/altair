/**
 * appendAround
 *
 * Needs jquery.min.js and plugins/jquery.appendaround.js
 * https://github.com/filamentgroup/AppendAround
 */

var appendAround = {

	/**
	 * Initiate the appendAround functionality
	 * @param {element_string} a string of the element to append around
	 */
	init: function(element_string) {
		// Fire appendAround once on init
		$(element_string).appendAround();
	},

	/**
	 * Seperate function (for clarity) to fire appendAround on element (used as callback on resize for instance)
	 * @param {element_string} a string of the element to append around
	 */
	appendAroundElement: function(element_string) {
		// Fire appendAround plugin for the element
		$(element_string).appendAround();
	}
};


