<?php ///////////////////////////////////////////////////////
// ----------------------------------------------------------
// SNIPPET
// ----------------------------------------------------------
// No-CTM fallback scripts (e.g. plain resrc)
// ----------------------------------------------------------
// Check for CTM, and if absent load ReSRC aynchonously
// (http://www.resrc.it/docs/javascript)
// ----------------------------------------------------------
///////////////////////////////////////////////////////////// ?>

<script>if(enhance.ctm()===false){<?php if(c::get('resrc')==true): ?>!function(){var a=!1,b=document.createElement("script");b.src="//use.resrc.it/0.9",b.type="text/javascript",b.async="true",b.onload=b.onreadystatechange=function(){var b=this.readyState;if(!(a||b&&"complete"!=b&&"loaded"!=b)){a=!0;try{resrc.ready(function(){resrc.configure({resrcClass:"<?php if(c::get('lazyload')): echo 'js-resrcIsLazy'; else: echo 'resrc'; endif; ?>"}).run()})}catch(c){}}};var c=document.getElementsByTagName("script")[0];c.parentNode.insertBefore(b,c)}();<?php endif; ?>}</script>

<?php /* //////// UNMINIFIED! ////////
<script>
	if(enhance.ctm() === false) {
		<?php if(c::get('resrc') == true): ?>
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
								resrcClass : "<?php if(c::get('lazyload')): echo 'js-resrcIsLazy'; else: echo 'resrc'; endif; ?>"
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
*/ ?>
