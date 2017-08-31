/**	throttle(callback, arguments, delay, object)
 *	Fires so many times per second until event is finished
 *	https://github.com/JDMcKinstry/debounce
 **/
;(function() {
	function throttle(cb, args, delay, obj) {
		(0 > delay || "number" != typeof delay) && (delay = 250);	//	250 milliseconds as a default delay time
		var lst, tmr;
		return function() {
			void 0 == obj && (obj = this);
			args = args && 'object' == typeof args ? Array.prototype.slice.call(args) : void 0 != args ? [args] : arguments;
			var now = +new Date;
			if (lst && now < lst + delay) {	//	hold it
				tmr && clearTimeout(tmr);
				return tmr = setTimeout(function() { lst = now; cb.apply(obj, args); }, delay);
			}
			lst = now;
			return cb.apply(obj, args);
		}
	}
	window.hasOwnProperty("throttle") || (window.throttle = throttle);
	// if (window.hasOwnProperty('jQuery') && !jQuery['throttle']) jQuery.throttle = throttle;
})();
