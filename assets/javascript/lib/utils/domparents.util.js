/**
 * Functions to traverse the DOM parents
 */

var domparents = {
	/**
	 * Find an ancestor by it's class name, just like jQuery's parents()
	 * @param  {DOM node} el  the element
	 * @param  {string}   cls the classname, without the dot
	 * @return {DOM node}     the DOM node that is the matching ancestor
	 */
	findAncestorByClass: function(el, cls) {
		while ((el = el.parentElement) && !el.classList.contains(cls)) {
			// Loop parent elements, until class matches
		}
		return el;
	},

	/**
	 * Find an ancestor by it's element type, just like jQuery's parents()
	 * @param  {DOM node} el  the element
	 * @param  {string}   cls the element type name, like img, or div
	 * @return {DOM node}     the DOM node that is the matching ancestor
	 *
	 * If no ancestor element is found, throw an error. There is no fallback ;)
	 */
	findAncestorByElement: function(el, elname) {
		while (el = el.parentElement) {
			// Loop parent elements, until class matches
			if(el.nodeName.toLowerCase() == elname.toLowerCase()) {
				return el;
			}
		}
		throw('no ancestor found with that element type. Try checking your DOM tree!');
	}
}
