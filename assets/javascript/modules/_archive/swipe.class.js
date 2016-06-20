/**
 * Hook up Swipe JS
 *
 * Needs swipe.js script
 * * * * * * * * * * * * * * * *
 * Usage:
 *
 * Makes a list of elements a swipe-able slider
 *
 * Pass a unique ID to swipeSlider.init, example: swipeSlider.init('#slider-1');
 * Because each slider gets his own eventhandlers, we should target a unique element.
 * Thew HTML should contain a series of elements wrapped in two containers.
 * An unordered list makes sense most of the time, but this can be any combination of elements that has the same structure.
 *
 * * * * * * * * * * * * * * * *
 * Example:
 *
 * <div id="slider-1" class="Slider">
      <ul class="Slider-group">
         <li class="Slider-item"><img src="..." class="Slider-image" /></li>
         <li class="Slider-item"><img src="..." class="Slider-image" /></li>
         <li class="Slider-item"><img src="..." class="Slider-image" /></li>
      </ul>
 * </div>
 *
 * * * * * * * * * * * * * * * *
 */

var swipeSlider = {

	/**
	 * Initiate the swipe plugin
	 * @param {swipe_element} a string for the element identifier to pass to the swipe plugin
	 * @param {show_bullets} boolean if we want to show bullets or not
	 */
	init: function(swipe_element, show_bullets) {

		// check if show_bullets var exists and is true
		if(typeof show_bullets !== 'undefined' && show_bullets === true){
			// add bullets element after the .slides element
			swipeSlider.addBullets(swipe_element);
			// define bullets var for use in callback
			var bullets = $(swipe_element).find('.Slider-index li');
		}
		else {
			show_bullets = false;
		}


		// If Modernizr did *not* add a class no-csstransforms
		// So either Modernizr did not load, or Modernizr detected that csstransforms are supported
		if($('html').hasClass('no-csstransforms') === false){
			var elem = $(swipe_element).get(0);   // Get the DOM element of the sider
			window.slider = new Swipe(elem, {
				startSlide: 0,                    // Integer: index position Swipe should start at (0 = first slide)
				speed: 800,                       // Integer: speed of prev and next transitions in milliseconds
				auto: 4000,                       // Integer: begin with auto slideshow (time in milliseconds between slides)
				continuous: true,                 // Boolean: create an infinite feel with no endpoints
				disableScroll: false,             // Boolean: stop any touches on this container from scrolling the page
				callback: function(e, pos) {      // Function: runs at slide change
					// only if we show bullets
					if(show_bullets){
						var i = bullets.length;
						while (i--) {
							bullets[i].className = ' ';
						}
						bullets[pos].className = 'active';
					}
				}
			});
		}

	},

	/**
	 * Add an ordered list with the index after the slides
	 * @param {swipe_element} a string for the element identifier to pass to the swipe plugin
	 */
	addBullets: function(swipe_element){
		var swiper = $(swipe_element);
		var index = $('<ol class="Slider-index"/>');

		$('li', swiper).each(function(i){
			var span = $('<span>&bull; <em>' + i + '</em></span>');
			var li = $('<li/>');
			if (i===0){
				li.addClass('active');
			}
			index.append(li.append(span));
		});
		swiper.find('.Slider-group').after(index);
	}

};
