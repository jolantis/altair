<?php ///////////////////////////////////////////////////////
// ----------------------------------------------------------
// SNIPPET
// ----------------------------------------------------------
// Google analytics.js
// ----------------------------------------------------------
// Enable and set analytics ID/API KEY in config.php
// ----------------------------------------------------------
// Respect user's privacy:
// https://blog.j15h.nu/web-analytics-privacy/
// ----------------------------------------------------------
/////////////////////////////////////////////////////////////

// ----------------------------------------------------------
// Google Universal Analytics
// ----------------------------------------------------------

if (c::get('google.analytics') == true && c::get('google.analytics.id') != 'TRACKING ID IS NOT SET'): ?>

	<script>
		// Respect user's privacy
		if ('navigator.doNotTrack' != 'yes' && 'navigator.doNotTrack' != '1' && 'navigator.msDoNotTrack' != '1') {
			window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;ga('create','<?php echo c::get("google.analytics.id", "TRACKING ID IS NOT SET"); ?>','<?php echo str::after($site->url(), '://'); ?>');ga('set', 'anonymizeIp', true);ga('set', 'forceSSL', true);ga('send','pageview');
		}
	</script>
	<script src="https://www.google-analytics.com/analytics.js" async defer></script>

<?php else: ?>

	<!-- NO TRACKING SET! -->

<?php endif; ?>
