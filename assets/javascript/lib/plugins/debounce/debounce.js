/**	debounce(callback, arguments, delay, object)
 *	Method to help reduce multifire issues
 *	https://github.com/JDMcKinstry/debounce
 **/
;(function() {
	function debounce(cb, args, delay, obj) {	//	return function
		var tmr;
		return function() {
			void 0 == obj && (obj = this);
			tmr && clearTimeout(tmr);
			args = args && 'object' == typeof args ? Array.prototype.slice.call(args) : void 0 != args ? [args] : arguments;
			(0 > delay || "number" != typeof delay) && (delay = 250);	//	250 milliseconds as a default delay time
			tmr = setTimeout(function() { cb.apply(obj, args); }, delay);
		}
	}
	window.hasOwnProperty("debounce") || (window.debounce = debounce);
	// if (window.hasOwnProperty('jQuery') && !jQuery['debounce']) jQuery.debounce = debounce;
})();
