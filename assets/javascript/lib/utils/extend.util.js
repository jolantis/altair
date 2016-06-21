/**
 * Add extend function that extends one object against another
 * Similar to jQuery's $.extend();
 *
 * Example:
 *
 * Extend({}, objA, objB);
 */


var Extend = {

	object: function(out) {
		out = out || {};

		for (var i = 1; i < arguments.length; i++) {
			if (!arguments[i]) {
				continue;
			}

			for (var key in arguments[i]) {
				if (arguments[i].hasOwnProperty(key)) {
					out[key] = arguments[i][key];
				}
			}
		}

		return out;
	}
};
