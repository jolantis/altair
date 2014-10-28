/**
 * Lazy loading
 * Initialize and handle layloading of images
 *
 * Uses echo.js plugin
 */

var lazyload = {

	/**
	 * Init lazyloading of images via customized Echo.js method.
	 * Runs Resrc when image is in viewport and js-resrcIsLazy class is set.
	 * Runs 'normal' echo.js scripts when js-resrcIsLazy is not set.
	 * Add a is-loading and is-loaded class on loading and done.
	 *
	 * Make sure the modified echo.js plugin is included in your gruntfile.
	 */
	init: function() {

		lazyload.bindResrcToWindow();

		var lazyimages = document.querySelectorAll('img[data-src]');

		for (var i = 0; i < lazyimages.length; i++) {
			lazyload.elementLoading(lazyimages[i]);
		}

		/* Use echo.js plugin */
		echo.init({
			offset: 0,
			debounce: false, // Set to `false` to use (traditional) throttling where it will only check the images every `throttle` milliseconds; set to `true` so that the checking function is only triggered after a user stops scrolling (http://underscorejs.org/#debounce).
			throttle: 250,
			unload: false,
			selector: 'data-src',
			callback: function(element){
				if(element.classList.contains('js-resrcIsLazy') === true && typeof(window.resrc.run) !== 'undefined') {
					window.resrc.run(element);
				}
				lazyload.elementLoaded(element);
			}
		});
	},

	/**
	 * Bind ReSrc variable to window, to use it everywhere
	 */
	bindResrcToWindow: function() {
		var resrc;
		if(typeof resrc === 'undefined') {
			// Set resrc to false if it's not loaded (on local for example)
			resrc = false;
		}
		window.resrc = resrc;
	},

	/**
	 * Run the initial resrc for non-lazy resrc files.
	 * Will run Resrc for elements with the .resrc class and a data-src attribute
	 */
	runResrcNonLazy: function() {
		// Only run if resrc is set by bindResrcToWindow
		if(typeof window.resrc.run !== 'undefined') {
			window.resrc.run();
		}
	},

	elementLoading: function(element) {
		var parent = domparents.findAncestorByClass(element, 'FigureImage');
		parent.classList.add('is-loading');
	},

	elementLoaded: function(element) {
		var parent = domparents.findAncestorByClass(element, 'FigureImage');
		parent.classList.remove('is-loading');
		parent.classList.add('is-loaded');
	},

	/**
	 * Defer loading of videos's, loop all videos and fire deferVideo function
	 */
	initDeferVideos: function() {
		var deferredvideos = document.querySelectorAll('iframe[data-deferred-src]');
		// console.log(deferredvideos);
		for (var i = 0; i < deferredvideos.length; i++) {
			lazyload.deferVideo(deferredvideos[i]);
		}
	},

	/**
	 * Deferred loading of video, replace the src by the data attribute
	 * @param  {DOM node} element the video element
	 */
	deferVideo: function(element) {
		var src = element.getAttribute('data-deferred-src');
		element.setAttribute('src',src);
	}

};
