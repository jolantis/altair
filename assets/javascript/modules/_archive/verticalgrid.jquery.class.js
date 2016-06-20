/**
 * Distribute elements into a vertical grid
 *
 * Needs jquery.min.js
 */

var verticalGrid = {

	/**
	 * Initiate the vertical grid
	 * @param {containelement} DOMobject of parent element whose children should be distributed
	 * @param {heightelement} DOMobject of an element that determines the height
	 */
	init: function(containelement,heightelement) {
		verticalGrid.distributeHeight(containelement,heightelement);
	},

	/**
	 * Distribute the height of children elements across window height
	 * @param {containelement} DOMobject of parent element whose children should be distributed
	 * @param {heightelement} DOMobject of an element that determines the height
	 */
	distributeHeight: function(containelement,heightelement) {
		var totheight = heightelement.height();
		var items = containelement.children(); // Use direct children
		var itemheight = totheight / items.length;
		$(items).css('height', itemheight);
	}

};
