/**
 * Lazysizes
 *
 * Lazy loader class for (responsive) images
 * https://github.com/aFarkas/lazysizes
 */

var fontobserver = {

	/**
	 * Init fonts
	 */
	init: function(){

		// If the class `fonts-loaded` is already set, we're good
		if(document.documentElement.className.indexOf('fonts-loaded') > -1 ) {
			return;
		}

		// Define the fonts and font variants to observed
		var fontObservers = [];
		var fontFamilies = {
			'Fira Sans': [
				{
					weight: 400,
				},
				{
					weight: 400,
					style: 'italic'
				},
				{
					weight: 700
				},
			],
			// 'Another Font': [
			// 	{
			// 		weight: 400,
			// 		font-variant: small-caps;
			// 	},
			// 	{
			// 		weight: 600
			// 	},
			// ],
		};

		// Init the observer on the defined font settings
		Object.keys(fontFamilies).forEach(function(family) {
			fontObservers.push(fontFamilies[family].map(function(config) {
				return new FontFaceObserver(family, config).check();
			}));
		});

		// Set the `fonts-loaded` class and avoid re-downloading the web fonts
		// over and over again (and do not run the fontobserver script when the
		// font is already available from cache) by setting a cookie
		Promise
			.all(fontObservers)
			.then(function() {
				// document.documentElement.classList.add('fonts-loaded');
				document.documentElement.className += ' fonts-loaded';
				enhance.cookie('fonts-loaded', 'true', 7);
				// cookie.set('fonts-loaded', 'true', 7);
			}, function() {
				console.info('Web fonts could not be loaded in time. Falling back to system fonts.');
			});

	},
};
