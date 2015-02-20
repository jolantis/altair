<?php ///////////////////////////////////////////////////////
// ----------------------------------------------------------
// SNIPPET
// ----------------------------------------------------------
// No-CTM fallback scripts, like plain ReSRC
// ----------------------------------------------------------
// Check for CTM, and if absent load ReSRC aynchonously
// (http://www.resrc.it/docs/javascript)
// ----------------------------------------------------------
///////////////////////////////////////////////////////////// ?>
	<script>
		if(enhance.ctm() === false) {
			<?php if(c::get('resrc') == true) : ?>
			(function () {
				var d = false;
				var r = document.createElement("script");
				r.src = "//use.resrc.it/0.9";
				r.type = "text/javascript";
				r.async = "true";
				r.onload = r.onreadystatechange = function () {
					var rs = this.readyState;
					if (d || rs && rs != "complete" && rs != "loaded") return;
					d = true;
					try {
						resrc.ready(function () {
							resrc.configure({
								resrcClass : "<?php ecco(c::get('lazyload'), 'js-resrcIsLazy', 'resrc'); ?>"
							}).run();
						});
					} catch (e) {}
				};
				var s = document.getElementsByTagName("script")[0];
				s.parentNode.insertBefore(r, s);
			})();
			<?php endif; ?>
		}
	</script>
