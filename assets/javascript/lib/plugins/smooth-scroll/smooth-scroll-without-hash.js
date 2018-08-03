/*!
 * Smooth scrolling without updating the URL
 * https://github.com/cferdinandi/smooth-scroll#scrolling-without-updating-the-url
 */

var scroll = new SmoothScroll();

var smoothScrollWithoutHash = function (selector, settings) {
	/**
	* If smooth scroll element clicked, animate scroll
	*/
	var clickHandler = function (event) {
		var toggle = event.target.closest(selector);
		// console.log(toggle);
		if (!toggle || toggle.tagName.toLowerCase() !== 'a') { return; }
		// console.log(toggle.hash);
		var anchor = document.querySelector(toggle.hash);
		if (!anchor) { return; }

		event.preventDefault(); // Prevent default click event
		scroll.animateScroll(anchor, toggle, settings || {}); // Animate scroll
	};

	window.addEventListener('click', clickHandler, false);
};
