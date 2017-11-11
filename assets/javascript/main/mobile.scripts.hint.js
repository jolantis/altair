/**
 * For JSHint only!
 */
var Alerts = (function () {

	/**
	 * Privates
	 */

	/**
	 * Define some basic variable settings for the 'dismiss' button label (and hidden close/cross text)
	 */
	var alertsettings = {
		dismiss : 'Dismiss'
	};

	/**
	 * Define the basic options the init of the messages
	 */
	var alertoptions = {
		type: 'bar'
	};

	function onTimeoutNotification(element) {
		var dismiss = element.querySelector('[data-dismiss]');
		// Fire off a click on the dismiss button
		clickevent = document.createEvent('HTMLEvents');
		clickevent.initEvent('click', true, false);
		dismiss.dispatchEvent(clickevent);
	}

	/**
	* Initiate the messages function
	*/
	function init(push_message) {
		// are there language variables set?
		if (typeof LANG_MESSAGE_DISMISS !== 'undefined'){
			alertsettings.dismiss = LANG_MESSAGE_DISMISS;
		}

		// are there generated messages from the page?
		if (typeof push_message !== 'undefined'){
			// loop trough the messages array
			for(var i=0; i<push_message.length; i++){
				// show these messages
				Alerts.addMessage({status: push_message[i].status, content: push_message[i].text, timeout: push_message[i].timeout, type: push_message[i].type});
			}
		}

		// Close messages when cliked on .bar__dismiss
		var dismissbutton = document.querySelectorAll('[data-dismiss]');
		if(dismissbutton !== null) {
			Array.prototype.forEach.call(dismissbutton, function(el, i){
				el.addEventListener('click', Alerts.hideNotification, false);
			});
		}
	}

	/**
	* Method for adding message to DOM body
	* @param {user_options} object with settings for the messages
	* @object user_options {status} a string with the status for the messages (error, info, success, warning)
	* @object user_options {content} a string with the content of the messages
	* @object user_options {timeout} a string with timeout time for the messages (Can be empty)
	* @object user_options {type} a string to determine what type of box/bar we want (bar, modal) (Can be empty)
	*/
	function addMessage(options) {

		// TODO: check if alerts are accessible without JS, for IE8 and other old fucks.

		var message_element;

		extend.object(alertoptions, options);

		message_element = document.createElement('div');

		if(alertoptions.type === 'bar' || typeof alertoptions.type === 'undefined'){
			// Create message DOM element
			message_element.className = 'alert alert--bar alert--' + alertoptions.status + ' js-alert';
			message_element.setAttribute('data-element-type','bar');
			message_element.innerHTML = '<div class="alert__message">' + alertoptions.content + '</div><button type="button" class="alert__close" data-dismiss="alert" aria-hidden="true" role="presentation">&times;</button>';
			document.body.insertBefore(message_element, document.body.firstChild);
		}
		if(alertoptions.type === 'modal'){
			// Create backdrop DOM element
			backdrop_element = document.createElement('div');
			backdrop_element.className = 'backdrop js-backdrop';
			// Create message DOM element
			message_element.className = 'alert alert--modal alert--' + alertoptions.status + ' js-alert';
			message_element.setAttribute('data-element-type','modal');
			message_element.innerHTML = '<div class="alert__message">' + alertoptions.content + '</div><button class="button button--primary" data-dismiss="alert">'+ alertsettings.dismiss +'</button>';
			document.body.appendChild(backdrop_element);
			document.body.appendChild(message_element);
		}

		this.showNotification(message_element);

		// if there is no timeout set in addMessage, or timeout = 0, don't set timeout
		if((typeof alertoptions.timeout === 'undefined')||alertoptions.timeout === 0){
			return;
		} else {
			setTimeout(function(){
				onTimeoutNotification(message_element);
			},alertoptions.timeout);
		}
	}

	/**
	* Method for showing the messages
	*/
	function showNotification(element) {

		var notification = element;

		// Use a short timeout, to make sure the transition runs
		setTimeout(function(){
			notification.classList.add('is-visible');
		},10);

		// notification.classList.add('is-visible');
		if(alertoptions.type === 'modal'){
			var backdrops = document.querySelectorAll('.backdrop');
			Array.prototype.forEach.call(backdrops, function(el, i){
				el.classList.add('is-visible');
			});
		}
	}

	/**
	* Method for hiding the message
	*/
	function hideNotification(event) {

		var notification = event.target.parentNode;

		// remove and set classes for css animation
		notification.classList.remove('is-visible');
		notification.classList.remove('is-hidden');
		if(alertoptions.type === 'modal'){
			var backdrop = document.querySelector('.backdrop');
			backdrop.classList.remove('is-visible');
			backdrop.classList.add('is-hiding');
		}

		var notificationHasTransformSet = null;
		var notificationHasWebkitTransformSet = null;

		// Get the transform of an element via getComputedStyle (if the browser supports this..)
		if (window.getComputedStyle) {
			notificationHasTransformSet = window.getComputedStyle(notification, null).getPropertyValue('transform');
			notificationHasWebkitTransformSet = window.getComputedStyle(notification, null).getPropertyValue('-webkit-transform');
		}

		// If browser doesn't support transitions or there is no transform (or -webkit-transform...) set
		if(!Modernizr.csstransitions || notificationHasTransformSet === 'none' || notificationHasWebkitTransformSet === 'none'){
			Alerts.removeNotificationElements(notification);
		}
		else {
			// Wait for transition to end, makes use of transitionend.js plugin!
			notification.addEventListener(transitionEnd, function(){
				Alerts.removeNotificationElements(this);
			}, false);
		}

		return false;
	}

	function removeNotificationElements(element) {
		var elementtype = element.getAttribute('data-element-type');
		element.parentNode.removeChild(element);
		if(elementtype === 'modal'){
			var backdrop = document.querySelector('.backdrop');
			backdrop.parentNode.removeChild(backdrop);
		}
	}

	/**
	 * Return public methods
	 */
	return {

		addMessage: addMessage,
		showNotification: showNotification,
		hideNotification: hideNotification,
		removeNotificationElements: removeNotificationElements,
		init: init

	};
})();
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

var FontObserverHandler = (function () {

	function init(){

		// If the class `fonts-loaded` is already set, we're good
		if(document.documentElement.className.indexOf('fonts-loaded') > -1 ) {
			return;
		}

		// Define the fonts and font variants to observed
		var fontObservers = [];
		var fontFamilies = {
			'Fira Sans': [
				{
					weight: 400,
				},
				{
					weight: 400,
					style: 'italic'
				},
				{
					weight: 700
				},
			],
			// 'Another Font': [
			// 	{
			// 		weight: 400,
			// 		font-variant: small-caps;
			// 	},
			// 	{
			// 		weight: 600
			// 	},
			// ],
		};

		// Init the observer on the defined font settings
		Object.keys(fontFamilies).forEach(function(family) {
			fontObservers.push(fontFamilies[family].map(function(config) {
				return new FontFaceObserver(family, config).load();
			}));
		});

		// Set the `fonts-loaded` class and avoid re-downloading the web fonts
		// over and over again (and do not run the fontobserver script when the
		// font is already available from cache) by setting a cookie
		Promise
			.all(fontObservers)
			.then(function() {
				// document.documentElement.classList.add('fonts-loaded');
				document.documentElement.className += ' fonts-loaded';
				enhance.cookie('fonts-loaded', 'true', 7);
				// cookie.set('fonts-loaded', 'true', 7);
			}, function() {
				console.info('Web fonts could not be loaded in time. Falling back to system fonts.');
			});

	}

	/**
	 * Return public methods
	 */
	return {
		init: init
	};
})();
var NavMain = (function () {

	/**
	 * Privates
	 */
	var navelements = {
		banner: document.querySelector('.banner'),
		html: document.querySelector('html'),
		navEl: document.querySelector('.js-nav-main')
	};

	function handleNavClick(event) {
		var target = event.target;
		if((target.classList.contains('js-nav-main')) || (event.keyCode === 27)) {
			NavMain.closeNav(event);
		}
	}

	function setNavHandlers() {
		// var navMainEl =  document.querySelector('.js-navMain');
		// navMainEl.addEventListener('click', handleNavClick, false); // Only do this if navheight != windowheight
		document.addEventListener('keyup', handleNavClick, false);
	}

	function unsetNavHandlers() {
		// var navMainEl =  document.querySelector('.js-navMain');
		// navMainEl.removeEventListener('click', handleNavClick, false); // Only do this if navheight != windowheight
		document.removeEventListener('keyup', handleNavClick, false);
	}

	function openNav(event) {
		if(typeof event !== 'undefined'){
			event.preventDefault();
		}
		navelements.html.classList.add('is-open-main-nav');
		setNavHandlers(true);
	}

	function closeNav(event) {
		if(typeof event !== 'undefined'){
			event.preventDefault();
		}

		navelements.navEl.addEventListener(transitionEnd, function endTransitionNavClose(){
			navelements.html.classList.remove('is-closing-main-nav');
			navelements.html.classList.remove('is-open-main-nav');
			this.removeEventListener(transitionEnd, endTransitionNavClose, false);
		},false);

		navelements.html.classList.add('is-closing-main-nav');

		unsetNavHandlers();
	}

	function init() {
		var navMainShow = document.querySelector('.js-nav-main-show');
		var navMainHide = document.querySelector('.js-nav-main-hide');

		navelements.navEl = document.querySelector('.js-nav-main');

		// Check if nav-main, and nav-main-show DOM navelements exist
		if (typeof(navelements.navEl) !== 'undefined' && navelements.navEl !== null && typeof(navMainShow) !== 'undefined' && navMainShow !== null) {
			// Set the event listeners
			navMainShow.addEventListener('click', openNav, false);
			navMainHide.addEventListener('click', closeNav, false);
		}
	}

	/**
	 * Return public methods
	 */
	return {
		openNav: openNav,
		closeNav: closeNav,
		init: init
	};
})();
// Executed on DOM ready
domready(function () {

	// Invoke modules
	Alerts.init(push_message);                                                  // Init alerts
	Expand.init();                                                              // Init expand / collapse
	FontObserverHandler.init();                                                 // Init font(face)observer
	NavMain.init();                                                             // Init main navigation

	// Invoke plugins
	// gumshoe.init();                                                             // Init gumshoe (scrollspy)
	smoothScroll.init();                                                        // Init smoothscroll

	// Run svg4everybody polyfill (e.g. for IE11)
	// svg4everybody({
	// 	nosvg: false,                                                           // Shiv <svg> and <use> elements and use image fallbacks
	// 	polyfill: true                                                          // Polyfill <use> elements for external content
	// });

});
