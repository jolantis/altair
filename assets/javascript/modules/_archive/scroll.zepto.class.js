/**
 * Scroll to anchor
 *
 * Needs the zepto.min.js and zepto.scroll.js plugin
 * Scroll to top by setting '0' instead of 'offset': $.scroll(0);
 */

var smoothScroll = {

	/**
	 * Initiate thezepto scroll
	 * @param {scroll_element} a string for the element identifier to pass to the scroll evcent handler
	 */
	init: function(scroll_element) {

		// Set scroller event handlers
		$(scroll_element).on('click', smoothScroll.onScrollClick);

	},

	/**
	 * What to do at scroll click
	 * @param {element} a string for the element identifier to pass to the plugin
	 */
	onScrollClick: function(element) {
		element.preventDefault();
		element.stopPropagation();
		var el = $(element.target);
		var target = $(el.attr('href')).offset().top - 14;
		$.scrollTo(target);
	}

};
