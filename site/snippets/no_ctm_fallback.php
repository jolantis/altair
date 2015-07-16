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

<?php /*
<script>if(enhance.ctm()===false){<?php if(c::get('resrc')==true): ?>!function(){var a=!1,b=document.createElement("script");b.src="//use.resrc.it/0.9",b.type="text/javascript",b.async="true",b.onload=b.onreadystatechange=function(){var b=this.readyState;if(!(a||b&&"complete"!=b&&"loaded"!=b)){a=!0;try{resrc.ready(function(){resrc.configure({resrcClass:"<?php if(c::get('lazyload')): echo 'js-resrcIsLazy'; else: echo 'resrc'; endif; ?>"}).run()})}catch(c){}}};var c=document.getElementsByTagName("script")[0];c.parentNode.insertBefore(b,c)}();<?php endif; ?>}</script>
*/ ?>

<script>
function getNoscriptContent(noScript) {
	return noScript.textContent || noScript.innerText;
}

function cutsTheMustard() {
	if('querySelector' in document && 'localStorage' in window && 'addEventListener' in window) {
		return true;
	}
	else {
		return false;
	}
}

if(cutsTheMustard() === false) {
	var noscripts = document.getElementsByTagName('noscript');
	var lazyloads = document.querySelectorAll('.lazyload');

	for(i = 0; i < lazyloads.length; i++) {
		lazyloads[i].parentNode.removeChild(lazyloads[i]);
	}

	for(i = 0; i < noscripts.length; i++) {
		var fallbackparent = noscripts[i].parentNode;
		var fallbackimg = getNoscriptContent(noscripts[i]);
		var fallbackdiv = document.createElement('div');
		fallbackdiv.innerHTML = fallbackimg;
		fallbackparent.insertBefore(fallbackdiv, noscripts[i]);
	}
}
</script>

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
