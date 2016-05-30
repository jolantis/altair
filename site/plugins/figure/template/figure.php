 <figure class="FigureImage">

	<?php // [1] Regular image; resized thumb (e.g. `responsiveimages.default`) ?>
	<?php if($lazyload == false): ?>
		<img sizes="<?php echo $sizes; ?>" srcset="<?php echo $srcset; ?>" src="<?php echo $defaultthumb; ?>" class="FigureImage-item<?php if($class): echo ' ' . $class; endif; ?><?php if($photoswipe): ?> pswp-img<?php endif; ?>" width="<?php echo $thumbwidth; ?>" height="<?php echo $thumbheight; ?>" alt="<?php if($alt): echo $alt; endif; ?>"<?php if($photoswipe): ?> data-pswp-href="<?php echo $pswphref;?>" data-pswp-size="<?php echo $pswpsize;?>"<?php endif; ?> />
	<?php endif; ?>

	<?php // [2] Lazyload image; responsive image via srcset  ?>
	<?php if($lazyload == true): ?>
		<div class="FigureImage-lazy lazyload" style="padding-bottom: <?php echo $percentage_padding; ?>%;">
			<img data-sizes="<?php echo $sizes; ?>" data-srcset="<?php echo $srcset; ?>" data-src="<?php echo $defaultthumb; ?>" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" class="FigureImage-item lazyload<?php if($class): echo ' ' . $class; endif; ?><?php if($photoswipe): ?> pswp-img<?php endif; ?>" width="<?php echo $thumbwidth; ?>" height="<?php echo $thumbheight; ?>" alt="<?php if($alt): echo $alt; endif; ?>"<?php if($photoswipe): ?> data-pswp-href="<?php echo $pswphref;?>" data-pswp-size="<?php echo $pswpsize;?>"<?php endif; ?> />
		</div>
		<noscript>
			<img src="<?php echo $defaultthumb; ?>" width="<?php echo $thumbwidth; ?>" height="<?php echo $thumbheight; ?>" class="FigureImage-item<?php if($class): echo ' ' . $class; endif; ?>" alt="<?php if($alt): echo $alt; endif; ?>" />
		</noscript>
	<?php endif; ?>

	<?php if($caption): ?>
		<figcaption class="FigureImage-caption">
			<?php echo kirbytext($caption); ?>
		</figcaption>
	<?php endif; ?>

</figure>
