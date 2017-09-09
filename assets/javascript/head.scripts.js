/**
 * head.script.js
 *
 * Essential scripts, to be loaded in the head of the document
 * Use gruntfile.js to include the necessary script files.
 */

// Load respimage if <picture> element is not supported
if(!window.HTMLPictureElement){
	enhance.loadJS('/assets/javascript/lib/polyfills/respimage.min.js');
}
