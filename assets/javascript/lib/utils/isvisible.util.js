/**
 * Function to check if someting is (partly) visible (in viewport)
 *
 * Based on this SO answer: http://tinyurl.com/y8vv5rds
 */

var isVisible = function(el) {
	var rect    = el.getBoundingClientRect();
	var vWidth  = window.innerWidth || doc.documentElement.clientWidth;
	var vHeight = window.innerHeight || doc.documentElement.clientHeight;

	efp = function (x, y) { return document.elementFromPoint(x, y); };

	// // Return false if it's completely out of the viewport
	// if(rect.right < 0 || rect.bottom < 0 || rect.left > vWidth || rect.top > vHeight) {
	// 	return false;
	// }

	// Return false if it's just out of the viewport (partly visible)
	if(rect.right < 0 || rect.bottom < 0 || rect.right + el.parentNode.offsetLeft > vWidth || rect.bottom + el.parentNode.offsetTop > vHeight) {
		return false;
	}

	// Return true if any of its four corners are visible
	return (el.contains(efp(rect.left,  rect.top)) ||  el.contains(efp(rect.right, rect.top)) ||  el.contains(efp(rect.right, rect.bottom)) ||  el.contains(efp(rect.left,  rect.bottom)));
}
