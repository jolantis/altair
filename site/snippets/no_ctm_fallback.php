<?php ///////////////////////////////////////////////////////
// ----------------------------------------------------------
// SNIPPET
// ----------------------------------------------------------
// No-ctm fallback scripts
// ----------------------------------------------------------
///////////////////////////////////////////////////////////// ?>

<script>if(enhance.ctm()===!1){var lazyloadimgs=document.querySelectorAll("img.lazyload");for(i=0;i<lazyloadimgs.length;i++){var datasrc=lazyloadimgs[i].getAttribute("data-bgsrc");lazyloadimgs[i].setAttribute("src",datasrc),lazyloadimgs[i].style.display="block",lazyloadimgs[i].parentNode.style.display="block",lazyloadimgs[i].parentNode.style.paddingBottom="0px"}var lazyloaddivs=document.querySelectorAll("[data-bgsrc]");for(i=0;i<lazyloaddivs.length;i++){var datasrc=lazyloaddivs[i].getAttribute("data-bgsrc");lazyloaddivs[i].style.backgroundImage="url("+datasrc+")"}}</script>
<?php /* ///////////////////// UNMINIFIED! /////////////////////
<script>
	if(enhance.ctm() === false) {
		// Display lazyloaded images with default width and quality,
		// see: `responsiveimages.default` width and `thumbs.quality` in config
		var lazyloadimgs = document.querySelectorAll('img.lazyload');
		for(i = 0; i < lazyloadimgs.length; i++) {
			// Set data-bgsrc as src
			var datasrc = lazyloadimgs[i].getAttribute('data-bgsrc');
			lazyloadimgs[i].setAttribute('src', datasrc);

			// Set/undo some no-js styles to show images nicely
			lazyloadimgs[i].style.display = 'block';
			lazyloadimgs[i].parentNode.style.display = 'block';
			lazyloadimgs[i].parentNode.style.paddingBottom = '0px';
		}

		// Display lazyloaded background images with default width and quality,
		// see: `responsiveimages.default` width and `thumbs.quality` in config
		var lazyloaddivs = document.querySelectorAll('[data-bgsrc]');
		for(i = 0; i < lazyloaddivs.length; i++) {
			// Set data-bgset as style background
			var datasrc = lazyloaddivs[i].getAttribute('data-bgsrc');
			lazyloaddivs[i].style.backgroundImage = 'url('+datasrc+')';
		}
	}
</script>
////////////////////////////////////////////////////////// */ ?>
