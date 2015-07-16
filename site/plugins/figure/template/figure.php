 <figure class="FigureImage">

	<?php // [1] Regular image; resized thumb (thumbs.width.default) ?>
	<?php if($lazyload == false && c::get('resrc') == false): ?>
		<img src="<?php echo $thumburl; ?>" class="FigureImage-item<?php if($class): echo ' ' . $class; endif; ?>" width="<?php echo $thumbwidth; ?>" height="<?php echo $thumbheight; ?>" alt="<?php if($alt): echo $alt; endif; ?>" />
	<?php endif; ?>

	<?php // [2] Lazyload image; resized thumb (thumbs.width.default)  ?>
	<?php if($lazyload == true && c::get('resrc') == false): ?>
		<div class="FigureImage-lazy lazyload" style="padding-bottom: <?php echo $percentage_padding; ?>%;">
			<img data-src="<?php echo $thumburl; ?>" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" class="FigureImage-item lazyload<?php if($class): echo ' ' . $class; endif; ?>" width="<?php echo $thumbwidth; ?>" height="<?php echo $thumbheight; ?>" alt="<?php if($alt): echo $alt; endif; ?>" />
		</div>
		<noscript>
			<img src="<?php echo $thumburl; ?>" width="<?php echo $thumbwidth; ?>" height="<?php echo $thumbheight; ?>" class="FigureImage-item<?php if($class): echo ' ' . $class; endif; ?>" alt="<?php if($alt): echo $alt; endif; ?>" />
		</noscript>
	<?php endif; ?>

	<?php // [3] Lazyload + resrc image; full size thumb (let lazysizes calculate and resrc optimize the biggest possible thumb!) ?>
	<?php if($lazyload == true && c::get('resrc') == true): ?>
		<?php
			// Use custom placeholder thumb width, quality, and pixel density, else apply default values from config
			$thumbwidth = (isset($customwidth)) ? $customwidth : c::get('resrc.width.default', 800);
			$thumbquality = (isset($customquality)) ? $customquality : c::get('resrc.quality.default', 78);
			$pixeldensity = (c::get('resrc.dpi', 1) > 1) ? ',pd' . c::get('resrc.dpi') : '';
			// Resrc url with (custom) thumb width and quality
			$resrc = 'https://' . c::get('resrc.plan') . '/s=w' . $thumbwidth . $pixeldensity . '/o=' . $thumbquality . '/' . $thumburl;
		?>
		<div class="FigureImage-lazy lazyload" style="padding-bottom: <?php echo $percentage_padding; ?>%;">
			<img data-sizes="auto" data-src="<?php echo $resrc; ?>" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" class="FigureImage-item lazyload<?php if($class): echo ' ' . $class; endif; ?>" alt="<?php if($alt): echo $alt; endif; ?>" />
		</div>
		<noscript>
			<img src="<?php echo $resrc; ?>" class="FigureImage-item<?php if($class): echo ' ' . $class; endif; ?>" width="<?php echo $thumbwidth; ?>" height="<?php echo round($thumbwidth * $ratio); ?>" alt="<?php if($alt): echo $alt; endif; ?>" />
		</noscript>
	<?php endif; ?>

	<?php if($caption->isNotEmpty()): ?>
		<figcaption class="FigureImage-caption">
			<?php echo kirbytext($caption); ?>
		</figcaption>
	<?php endif; ?>

</figure>
