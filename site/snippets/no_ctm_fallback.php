<?php ///////////////////////////////////////////////////////
// ----------------------------------------------------------
// SNIPPET
// ----------------------------------------------------------
// No-ctm fallback scripts
// ----------------------------------------------------------
///////////////////////////////////////////////////////////// ?>

<script>
function cutsTheMustard() {
	if('querySelector' in document && 'localStorage' in window && 'addEventListener' in window) {
		return true;
	}
	else {
		return false;
	}
}

if(cutsTheMustard() === false) {
	var lazyloads = document.querySelectorAll('img.lazyload');

	for(i = 0; i < lazyloads.length; i++) {
		// Set data-src as src
		var datasrc = lazyloads[i].getAttribute('data-src');
		lazyloads[i].setAttribute('src', datasrc);

		// Set/undo some no-js styles to show images nicely
		lazyloads[i].style.display = 'block';
		lazyloads[i].parentNode.style.display = 'block';
		lazyloads[i].parentNode.style.paddingBottom = '0px';
	}
}
</script>

<?php /* ///////////////////// UNMINIFIED! /////////////////////
<script>
	unminified here!
</script>
////////////////////////////////////////////////////////// */ ?>
