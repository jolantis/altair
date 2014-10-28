/**
 * resizeThrottle plugin (c) Studio Dumbar, Marijn Tijhuis
 *
 * How to:
 * 1. Load plugin in javascript files
 * 2. Call plugin on window.load() using $.resizeThrottle({ options, callback });
 *
 * Example:
 * $.resizeThrottle({
 * 		options : { throttletime : 100 },
 * 		callback: function() { console.log('the window is resized!'); }
 * 	});
*/

;(function ($) {

	$.resizeThrottle = function(arguments) {

		// extend the options from pre-defined values:
		var methods = $.extend({
			options : {
				throttletime : 10 // throttletime default
			},
			callback: function() {}
		}, arguments);

		var init = function() {
			// Set empty resizeThrottleVar
			var resizeThrottleVar = null;

			// listen for the resize event
			$(window).resize(function() {
				// throttle the resize event to x amount of ms
				clearTimeout(resizeThrottleVar);
				resizeThrottleVar = setTimeout(function(){
					// call the callback and apply the scope:
					methods.callback.call(this);
				}, methods.options.throttletime);
			});
		}

		init();

	}

})(jQuery);
