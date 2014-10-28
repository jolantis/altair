/**
 * Toggle list (expand/collapse)
 *
 * Needs jquery.min.js
 *
 * Usage: Checks for an element with .toggle-list class.
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
		$('.toggle-list > div > :first-child, .toggle-list .toggle-list__icon').on('click', this.toggleContent);

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

			// Loop through the divs on the togglelist
			$('> div', togglelist).each(function(index) {
				var togglecontainer = $(this);
				var togglehead = $(this).children(':first');
				var togglecontent = $(this).children(':nth-child(2)');

				togglehead.append('<span class="toggle-list__icon"></span>');

				// if there's a cookie set AND cookies are allowed
				if(cookieState[index]) {
					// if cookie is set to 'closed'
					if(cookieState[index] === 'closed') {
						cookieState[index] = 'closed';
						// Close all toggle items, except the one's that are set to 'open'
						togglecontainer.addClass('js-toggle-list-closed');
						togglecontent.hide();
					}
					// if cookie is not set to closed
					else {
						cookieState[index] = 'open';
					}
				}
				// if there's no cookie set
				else {
					// if the h2 is not default set to 'open'
					if(!togglecontainer.hasClass('js-toggle-list-open')){
						// Set cookie
						cookieState[index] = 'closed';
						// Close all categories, except the one's that are set to 'open'
						togglecontainer.addClass('js-toggle-list-closed');
						togglecontent.hide();
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
	toggleContent: function(element) {
		var el = $(element.target);
		var togglehead = el;
		// check if the h2 was clicked or an element within the h2 (link or icon)
		if(el.is('.toggle-list__icon')){
			togglehead = el.parent();
		}
		var togglecontainer = togglehead.parent();
		var togglelistparent = togglecontainer.parent('.toggle-list');
		var togglecontent = $('> :nth-child(2)', togglecontainer);
		var closed = togglecontainer.hasClass('js-toggle-list-closed');
		if (closed) {
			togglecontainer.removeClass('js-toggle-list-closed');
			togglecontent.slideDown(300,function() {
				// Save cookie state
				toggleList.saveCookieState(false,togglelistparent);
			});
		}
		else {
			togglecontainer.removeClass('js-toggle-list-open');
			togglecontainer.addClass('js-toggle-list-closed');
			togglecontent.slideUp(200,function() {
				// Save cookie state
				toggleList.saveCookieState(false,togglelistparent);
			});
		}
		return false;
	},

	/**
	 * Get the cookie string for the expand list via the jQuery cookie plugin
	 * @param {togglelistEl} the togglelist element the cookie is set for (jQuery element)
	 * @return false or an array from the cookie string
	 */
	getCookieState: function(togglelistEl) {
		var cookieName = togglelistEl.attr('data-cookiename');
		var cookieArray = $.cookie('togglelist-'+cookieName+'-state');
		// check if cookies are allowed in this script
		if(cookieConsent.checkCookieAllowed()) {
			if(cookieArray){
				// return array if cookie is set
				return cookieArray.split('.');
			}
			else {
				// return false if cookie not set
				return false;
			}
		}
		else {
			// return false if cookies not allowed
			return false;
		}
	},

	/**
	 * Saves the cookie state for the expand list via the jQuery cookie plugin
	 * @param {cookieStr} the string we might want to place in the cookie
	 * @param {togglelistEl} the togglelist element the cookie is set for (jQuery element)
	 */
	saveCookieState: function(cookieStr, togglelistEl) {
		var cookieName = togglelistEl.attr('data-cookiename');
		
		// only set cookie if there's a data attr AND cookies are allowed
		if(cookieName && cookieConsent.checkCookieAllowed()){
			// if no cookie set, create string
			if(!cookieStr) {
				cookieStr = new Array([]); // Create empty cookie array
				$('> div',togglelistEl).each(function(index) {
					cookieStr[index] = (!($(this).hasClass('js-toggle-list-closed')) ? 'open' : 'closed');
				});
			}
			$.cookie('togglelist-'+cookieName+'-state', cookieStr.join('.'));
		}
	}
};
