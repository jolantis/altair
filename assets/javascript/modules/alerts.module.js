/**
* Alerts module
* Launches a message or alert bar fixed in the top of the window, or a modal.
*
* Needs:
* - utils/exend.util.js
* - plugins/transitionend.js
* ----
* To add a message from the html template, paste this code into the template:
*
* <script>
	push_message.push({status: 'info', text: 'This notification is sent from the template', timeout : 3000});
* </script>
*
* Then, pass the array to Alerts.init inside main.scripts.js (or maybe mobile.scripts.js) like this:
*
* Alerts.init(push_message);
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

		Extend.object(alertoptions, options);

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
