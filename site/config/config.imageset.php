<?php

/* -----------------------------------------------------------------------------
Imageset
--------------------------------------------------------------------------------

License code for Imageset should be added to the `config.license.php` file.
For a more detailed description of the (global) configuration, see:

https://github.com/fabianmichael/kirby-imageset#3-global-configuration

*/

c::set('imageset.styles.consolidate', false); // only enable if passing the HTML5 validator is really important and if AJAX is not used to load markup containing image sets dynamically!!!
c::set('imageset.tags.image', true); // replace Kirby's built-in image Kirbytag
c::set('imageset.tags.image.sizes.default', 'default'); // the default size of image sets generated via the image Kirbytag
c::set('imageset.tags.image.class', 'figure-image'); // use {size} placeholder to be replaced by the name of the corresponding preset
c::set('imageset.placeholder', 'color'); // false, triangles, mosaic, blurred, lqip, color
c::set('imageset.noscript', true); // include a fallback for clients without JavaScript support or disabled JavaScript
c::set('imageset.lazyload', true); // enable lazy loading of image sets


/* -----------------------------------------------------------------------------
Size presets
--------------------------------------------------------------------------------

Projects' re-occuring image sizes. A set of default presets to be used
in your templates.

https://github.com/fabianmichael/kirby-imageset#44-working-with-size-presets

*/

c::set('imageset.presets', [
	'default' => [
		[ '300-2880,5' ],
	],
	'1of2' => [
		[ '320-1440,3' ],
	],
	'1of3' => [
		[ '320-960,2' ],
	],
	'hero' => [
		[ '320x180-1920x1080,5', 'media' => '(min-aspect-ratio: 3/2)' ],
		[ '320x320-1000x1000,5' ],
	],
]);
