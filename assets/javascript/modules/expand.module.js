/**
 * Expand / collapse module
 */

var Expand = (function () {

	function toggle(event) {
		event.preventDefault();
		var button = event.target;
		var targetid = button.getAttribute('href');
		var cookieid = targetid.substring(1);
		var target = document.querySelector(targetid);
		var expandparent = target.parentNode;

		if(expandparent.classList.contains('is-closed')) {
			button.classList.add('is-active');
			expandparent.classList.remove('is-closed');
			expandparent.classList.add('is-open');
			// cookie.set(cookieid,'open');                                     // When using `cookie.util.js` (not enhance)
			enhance.cookie(cookieid, 'open');                                   // When using enhance (and thus enhance.cookie)
		}
		else {
			button.classList.remove('is-active');
			expandparent.classList.remove('is-open');
			expandparent.classList.add('is-closed');
			// cookie.erase(cookieid);                                          // When using `cookie.util.js` (not enhance)
			enhance.cookie(cookieid, false);                                    // When using enhance (and thus enhance.cookie)
		}
	}

	function init() {
		var expanders = document.querySelectorAll('.js-expandtarget');
		for (i = 0; i < expanders.length; i++) {
			var expanderid = expanders[i].getAttribute('id');
			// if(cookie.get(expanderid)) {                                     // When using `cookie.util.js` (not enhance)
			if(enhance.cookie(expanderid)) {                                    // When using enhance (and thus enhance.cookie)
				expanders[i].parentNode.classList.add('is-open');
				expanders[i].parentNode.querySelector('.js-expandbutton').classList.add('is-active');
				// console.log(expanders[i]);
			}
			else {
				expanders[i].parentNode.classList.add('is-closed');
			}
		}

		var expandbuttons = document.querySelectorAll('.js-expandbutton');
		for (i = 0; i < expandbuttons.length; i++) {
			expandbuttons[i].addEventListener('click', Expand.toggle, false);
		}
	}

	/**
	 * Return public methods
	 */
	return {
		toggle: toggle,
		init: init
	};
})();

