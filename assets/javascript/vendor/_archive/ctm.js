/**
 * Cutting the mustard
 *
 * Check if the browser is an 'HTML4 or HTML5' browser.
 * Why? See: http://responsivenews.co.uk/post/18948466399/cutting-the-mustard
 */

var cutsthemustard = false;
if('querySelector' in document && 'localStorage' in window && 'addEventListener' in window) {
	document.getElementsByTagName( 'html' )[0].className += ' ' + 'ctm';
	cutsthemustard = true;
}
