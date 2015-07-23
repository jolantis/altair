<?php ///////////////////////////////////////////////////////
// ----------------------------------------------------------
// SNIPPET
// ----------------------------------------------------------
// No-ctm fallback scripts
// ----------------------------------------------------------
///////////////////////////////////////////////////////////// ?>

<script>
// function cutsTheMustard() {
// 	if('querySelector' in document && 'localStorage' in window && 'addEventListener' in window) {
// 		return true;
// 	}
// 	else {
// 		return false;
// 	}
// }

if(enhance.ctm() === false) {
	var lazyloadimgs = document.querySelectorAll('img.lazyload');

	for(i = 0; i < lazyloadimgs.length; i++) {
		// Set data-src as src
		var datasrc = lazyloadimgs[i].getAttribute('data-src');
		lazyloadimgs[i].setAttribute('src', datasrc);

		// Set/undo some no-js styles to show images nicely
		lazyloadimgs[i].style.display = 'block';
		lazyloadimgs[i].parentNode.style.display = 'block';
		lazyloadimgs[i].parentNode.style.paddingBottom = '0px';
	}

	var lazyloaddivs = document.querySelectorAll('[data-bgset]');
	for(i = 0; i < lazyloaddivs.length; i++) {
		// Set data-bgset as style background
		var datasrc = lazyloaddivs[i].getAttribute('data-bgset');
		lazyloaddivs[i].style.backgroundImage = 'url('+datasrc+')';
	}
}
</script>

<?php /* ///////////////////// UNMINIFIED! /////////////////////
<script>
	unminified here!
</script>
////////////////////////////////////////////////////////// */ ?>
