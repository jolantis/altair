/**
 * Photoswipe
 */

var photoswipegallery = {
	init : function() {
		var pswpElement = document.querySelectorAll('.pswp')[0];

		var pswpItems = document.querySelectorAll('.FigureImage-item');
		var items = [];
		var item = {};
		// build items array
		for(i=0; pswpItems.length > i; i++){
			var itemsrc = pswpItems[i].getAttribute('data-src');
			var itemwidth = pswpItems[i].getAttribute('data-width');
			var itemheight = pswpItems[i].getAttribute('data-height');

			item = {
				src: itemsrc,
				w: itemwidth,
				h: itemheight
			};

			items.push(item);

		}

		// define options (if needed)
		var options = {
		// optionName: 'option value'
		// for example:
		index: 0 // start at first slide
		};


		var initbutton = document.querySelector('.js-pwsp-gallery');
		if((typeof initbutton !== 'undefined') && (initbutton !== null)) {
			initbutton.addEventListener('click', function(){
				var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
				gallery.init();
			}, false);
		}
	}
};

