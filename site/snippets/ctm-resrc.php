<?php ///////////////////////////////////////////////////////
// ----------------------------------------------------------
// SNIPPET
// ----------------------------------------------------------
// No-CTM resrc loading
// ----------------------------------------------------------
// Check for CTM, and if absent load ReSRC aynchonously
// (http://www.resrc.it/docs/javascript)
// ----------------------------------------------------------
///////////////////////////////////////////////////////////// ?>
	<script>
		if(enhance.ctm() === false) {
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
								resrcClass : 'img[data-src]'
							}).run();
						});
					} catch (e) {}
				};
				var s = document.getElementsByTagName("script")[0];
				s.parentNode.insertBefore(r, s);
			})();
		}
	</script>
