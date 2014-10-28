<?php ///////////////////////////////////////////////////////
// ----------------------------------------------------------
// SNIPPET
// ----------------------------------------------------------
// Analytics, tracking, site stats
// ----------------------------------------------------------
// Set analytics tool of choice and ID/API KEY in config.php
// ----------------------------------------------------------
/////////////////////////////////////////////////////////////

// ----------------------------------------------------------
// Google Analytics Classic (optimized: http://j.mp/w6i5el)
// ----------------------------------------------------------
if (c::get('analytics.tool') == 'ga-classic'): ?>

	<script>var _gaq=[['_setAccount','<?php echo c::get("google.analytics.id", "TRACKING ID IS NOT SET"); ?>'],['_trackPageview'],['_setDomainName', '<?php echo str::substr($site->url(), 7); ?>']];(function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];g.src='//www.google-analytics.com/ga.js';s.parentNode.insertBefore(g,s)}(document,'script'));</script>

<?php endif;

// ----------------------------------------------------------
// Google Universal Analytics (optimized: http://j.mp/12dBWJm)
// ----------------------------------------------------------
if (c::get('analytics.tool') == 'ga-universal'): ?>

	<script>(function(G,o,O,g,l){G.GoogleAnalyticsObject=O;G[O]||(G[O]=function(){(G[O].q=G[O].q||[]).push(arguments)});G[O].l=+new Date;g=o.createElement('script'),l=o.scripts[0];g.src='//www.google-analytics.com/analytics.js';l.parentNode.insertBefore(g,l)}(this,document,'ga'));ga('create','<?php echo c::get("google.analytics.id", "TRACKING ID IS NOT SET"); ?>', '<?php echo str::substr($site->url(), 7); ?>');ga('send','pageview');</script>

<?php endif;

// ----------------------------------------------------------
// GoSquared
// ----------------------------------------------------------
if (c::get('analytics') == 'gosquared'): ?>

	<script>var GoSquared={};GoSquared.acct='<?php echo c::get("gosquared.id", "TRACKING ID IS NOT SET"); ?>';(function(w){function gs(){w._gstc_lt=+new Date;var d=document,g=d.createElement('script');g.src='//d1l6p2sc9645hc.cloudfront.net/tracker.js';var s=d.getElementsByTagName('script')[0];s.parentNode.insertBefore(g,s);}w.addEventListener?w.addEventListener('load',gs,false):w.attachEvent('onload',gs);})(window);</script>

<?php endif;

// ----------------------------------------------------------
// Segment.io
// ----------------------------------------------------------
if (c::get('analytics.tool') == 'segment-io'): ?>

	<script>var analytics=analytics||[];analytics.load=function(e){var t=document.createElement('script');t.type='text/javascript',t.async=!0,t.src=('https:'===document.location.protocol?'https://':'http://')+'d2dq2ahtl5zl1z.cloudfront.net/analytics.js/v1/'+e+'/analytics.min.js';var n=document.getElementsByTagName('script')[0];n.parentNode.insertBefore(t,n);var r=function(e){return function(){analytics.push([e].concat(Array.prototype.slice.call(arguments,0)))}},i=['identify','track','trackLink','trackForm','trackClick','trackSubmit','pageview','ab','alias','ready','group'];for(var s=0;s<i.length;s++)analytics[i[s]]=r(i[s])};analytics.load('<?php echo c::get("segment.io.api.key", "TRACKING API KEY IS NOT SET"); ?>');</script>

<?php endif;

// ----------------------------------------------------------
// No tracking
// ----------------------------------------------------------
if (c::get('analytics.tool') == false): ?>

	<!-- NO TRACKING SET! -->

<?php endif; ?>
