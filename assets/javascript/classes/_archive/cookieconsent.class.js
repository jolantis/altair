/**
 * CookieConsent
 *
 * Check if cookies allowed, run scripts or present choice
 * Diabled by default, but to activate, follow these steps:
 * - include in gruntfile
 * - initialize in main script with cookieConsent.init();
 * - add the text variables to your html file (when these texts are from a CMS, or translated or something):
 *
 * Example:
 * 	<!-- Grab cookie consent message plus 'yes' and 'no' labels from site.txt -->
	<script>
		var LANG_COOKIE_MESSAGE = '<?php echo kirbytext($site->cookie_message()); ?>';
		var LANG_COOKIE_YES = '<?php echo kirbytext($site->cookie_yes()); ?>';
		var LANG_COOKIE_NO = '<?php echo kirbytext($site->cookie_no()); ?>';
	</script>
 *
 */

var cookieConsent = {
	/**
	 * Define some basic variable settings for this class
	 */
	settings: {
		optout : false,
		analyticsId: '',
		message : 'We use cookies to give you the best experience on our website. Are you okay with this?',
		yes : 'yes',
		no : 'no'
	},

	/**
	 * Initialize the cookie class
	 * @params {optout} is optout true or false
	 */
	init: function(optout){
		if(optout){
			this.settings.optout = optout;
		}

		if (typeof LANG_COOKIE_MESSAGE !== 'undefined' && LANG_COOKIE_MESSAGE.length > 1){
			this.settings.message = LANG_COOKIE_MESSAGE;
		}
		if (typeof LANG_COOKIE_YES !== 'undefined' && LANG_COOKIE_YES.length > 1){
			this.settings.yes = LANG_COOKIE_YES;
		}
		if (typeof LANG_COOKIE_NO !== 'undefined' && LANG_COOKIE_YES.length > 1){
			this.settings.no = LANG_COOKIE_NO;
		}

		cookieConsent.settings.analyticsId = $('#ga-id').attr('data-ga-id'); // Analytics id is set from the <div /> thats set in the analytics.php Kirby snippet
		window['ga-disable-'+cookieConsent.settings.analyticsId] = true; // Disable tracking until we know what to do

		if(this.checkCookiePresent()) {
			if(this.checkCookieAllowed()) {
				// Run these scripts if cookies are okay
				cookieConsent.analyticsTrack();
			}
		} else {
			if(this.settings.optout){
				// Run these scripts, because we're in optout modus
				cookieConsent.analyticsTrack(optout);
			}
			this.showCookieDialog();
		}

		// Event handler for allow and deny buttons
		$('.js-cookie-allow, .js-cookie-deny').on('click', this.setCookieChoice);
	},

	/**
	 * Check if the cookie is present at all
	 * @return true or false
	 */
	checkCookiePresent: function() {
		if($.cookie('cookie_allowed')) {
			return true;
		} else {
			return false;
		}
	},

	/**
	 * Check if the cookie_allowed cookie has the content "yes"
	 * @return true or false
	 */
	checkCookieAllowed: function() {
		if($.cookie('cookie_allowed')==='yes') {
			return true;
		} else {
			return false;
		}
	},

	/**
	 * Show cookie dialog on top of page
	 */
	showCookieDialog: function() {
        messages.addMessage({
			status: 'warning',
			content: '<p>'+ cookieConsent.settings.message +' <a href="#yup" class="js-cookie-allow">'+ cookieConsent.settings.yes +'</a> <a href="#nope" class="js-cookie-deny">'+ cookieConsent.settings.no +'</a></p>'
		});
    },

	/**
	 * Check if the cookie_allowed cookie has the content "yes"
	 * @return true or false
	 */
	setCookieChoice: function(event) {
		var choice = $(this).attr('class'); // choice var is populated from the class of the link that's clicked

		// hasClass() is only needed for IE 8 and 7, because selectivizr can be used on these f'n browsers.
		if(choice==='js-cookie-allow' || $(this).hasClass('js-cookie-allow')) {
			$.cookie('cookie_allowed','yes', { expires: 365 });
			// check if the script isn't set to optout, because then we've allready called the analytics track
			if(cookieConsent.settings.optout === false){
				cookieConsent.analyticsTrack(); // run the analytics script once when cookies are okay
			}
		} else {
			$.cookie('cookie_allowed','no', { expires: 365 });
		}

		messages.hideNotification(event);
		return false;
	},

	/**
	 * Run the Google analytics script
	 */
	analyticsTrack: function() {
		window['ga-disable-'+cookieConsent.settings.analyticsId] = false;
		ga('create',cookieConsent.settings.analyticsId);
		ga('send','pageview');
	}
};
