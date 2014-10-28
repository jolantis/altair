/**
 * Toggle list (expand/collapse)
 *
 * Needs the zepto.min.js
 *
 * Usage: checks for an element with .toggle-list class.
 *
 * This togglelist should consist of child divs that can be expanded.
 * Inside these divs should be 2 elements: an always visible title element and an element that can be shown and hidden
 *
 * Example:
 *
 * <div class="toggle-list">
      <div class="toggle-list__item">
         <h2 class="toggle-list__title">Title</h2>
         <div class="toggle-list__body">Expandable content</div>
      </div>
      <div class="toggle-list__item">
         <h2 class="toggle-list__title">Title</h2>
         <div class="toggle-list__body">Expandable content</div>
      </div>
 * </div>
 */

var toggleList = {
	init: function() {

		toggleList.prepareListState('.toggle-list');

        // Initiate event handlers on expand list
		$('.toggle-list > div > :first-child').on('click', toggleList.onToggleClick );

	},

	/**
	 * Prepare the expand list by checking cookies, setting cookies and classes
	 * @param {element} the string of the expand list, to loop through
	 */
	prepareListState: function(element){
		var cookieState = new Array([]); // Create empty cookie array

		// Loop the expand lists on the page
		$(element).each(function() {
			var togglelist = $(this);
			cookieState = toggleList.getCookieState(togglelist); // Populate cookie array with values, if set

			var expanddivs = togglelist.children('div');
			// Loop through the divs on the togglelist
			$(expanddivs).each(function(index) {
				var togglecontainer = $(this);
				var togglehead = $(this).children(':nth-child(1)');
				var togglecontent = $(this).children(':nth-child(2)');

				// append teh iconz
				togglehead.append('<span class="toggle-list__icon"></span>');

				// give a css (animate) class so css will respond to changes on the element
				togglecontent.addClass('js-toggle-list-anim');

				// set the height in a data attr for each css anim div
				togglecontent.attr('data-css-height',togglecontent.height());

				// if there's a cookie set
				if(cookieState[index]) {
					// if cookie is set to 'closed'
					if(cookieState[index] === 'closed') {
						cookieState[index] = 'closed';
						// Close all toggle items, except the one's that are set to 'open'
						togglecontainer.addClass('js-toggle-list-closed');
					}
					// if cookie is not set to closed
					else {
						cookieState[index] = 'open';
					}
				}
				// if there's no cookie set
				else {
					// if the header is not default set to 'open'
					if(!togglecontainer.hasClass('js-toggle-list-open')){
						// Set cookie
						cookieState[index] = 'closed';
						// Close all categories, except the one's that are set to 'open'
						togglecontainer.addClass('js-toggle-list-closed');
					}
					else {
						// Set cookie
						cookieState[index] = 'open';
					}
				}
			});

			// Set initial cookie
			toggleList.saveCookieState(cookieState,togglelist);
		});
	},

	/**
	 * Toggle the content divs by setting the classes and height from the data attribute
	 * @param {element} the clicked DOM element
	 */
	onToggleClick: function(element){
		var el = $(element.target);
		var togglehead = el;
		// check if the title was clicked or an element within the title (link or icon)
		if(!(el.hasClass('toggle-list__title'))){
			togglehead = el.parents('.toggle-list__title');
		}		var togglecontainer = togglehead.parent();
		var togglelistparent = togglecontainer.parent('.toggle-list');
		var togglecontent = togglehead.parent().children('div:nth-child(2)');
		var closed = togglecontainer.hasClass('js-toggle-list-closed');

		if (closed) {
			togglecontainer.removeClass('js-toggle-list-closed');
            togglecontent.css('height','auto');
		}
		else {
			togglecontainer.removeClass('js-toggle-list-open');
			togglecontainer.addClass('js-toggle-list-closed');
            togglecontent.css('height','0px');
		}
		// Save cookie state
		toggleList.saveCookieState(false,togglelistparent);
	},

	/**
	 * Get the cookie string for the expand list via the Zepto cookie plugin
	 * @param {togglelistEl} the togglelist element the cookie is set for (DOM element)
	 * @return false or an array from the cookie string
	 */
	getCookieState: function(togglelistEl) {
		var cookieName = togglelistEl.attr('data-cookiename');
		var cookieArray = $.cookie('togglelist-'+cookieName+'-state');
		// check if cookies are allowed in this script
		if(cookieConsent.checkCookieAllowed()) {
			if(cookieArray) {
				// return array if cookie is set
				return cookieArray.split('.');
			}
			else {
				// return false if cookie not set
				return false;
			}
		}
		else{
			// return false if cookies not allowed
			return false;
		}
	},

	/**
	 * Saves the cookie state for the expand list via the Zepto cookie plugin
	 * @param {cookieStr} the string we might want to place in the cookie
	 * @param {togglelistEl} the togglelist element the cookie is set for (DOM element)
	 */
	saveCookieState: function(cookieStr, togglelistEl) {
		var cookieName = togglelistEl.attr('data-cookiename');

		// only set cookie if there's a data attr AND cookies are allowed
		if(cookieName && cookieConsent.checkCookieAllowed()){
			// if no cookie set, create string
			if(!cookieStr) {
				cookieStr = new Array([]); // Create empty cookie array
				var expanddivs = togglelistEl.children('div');
				$(expanddivs).each(function(index) {
					cookieStr[index] = (!($(this).hasClass('js-toggle-list-closed')) ? 'open' : 'closed');
				});
			}
			$.cookie('togglelist-'+cookieName+'-state', cookieStr.join('.'));
		}
	}
};
