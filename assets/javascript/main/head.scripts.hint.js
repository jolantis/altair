/**
 * For JSHint only!
 */
// Load respimage if <picture> element is not supported
if(!window.HTMLPictureElement) {
	document.createElement('picture');
	enhance.loadJS('/assets/javascript/lib/polyfills/respimage.min.js');
}
