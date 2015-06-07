<?php // [1] Regular background image; resized thumb (e.g. thumbs.width.default) ?>
<?php if($lazyload == false && c::get('resrc') == false): ?>
	<div style="background-image:url(<?php echo $thumburl; ?>);"<?php if($class): echo ' class="' . $class . '"'; endif; ?>></div>
<?php endif; ?>

<?php // [2] Lazyload image; resized thumb (e.g. thumbs.width.default)  ?>
<?php if($lazyload == true && c::get('resrc') == false): ?>
	<div data-bgset="<?php echo $thumburl; ?>?{width}" class="<?php if($class): echo $class . ' '; endif; ?>lazyload"></div>
	<noscript>
		<div style="background-image:url(<?php echo $thumburl; ?>);" <?php if($class): echo 'class="' . $class . '"'; endif; ?>></div>
	</noscript>
<?php endif; ?>

<?php // [3] Lazyload + resrc image; full size thumb (let resrc resize and optimize the biggest possible thumb!) ?>
<?php if($lazyload == true && c::get('resrc') == true): ?>
	<?php
		// If set use custom plachodler width and quality, else apply default width from config
		$thumbwidth = (isset($customwidth)) ? $customwidth : c::get('resrc.width.default', 800);
		$thumbquality = (isset($customquality)) ? $customquality : c::get('resrc.quality.default', 78);
		$pixeldensity = (c::get('resrc.dpi', 1) > 1) ? ',pd' . c::get('resrc.dpi') : '';
		// Resrc url with (custom) thumbwidth and quality
		$resrc = 'https://' . c::get('resrc.plan') . '/s=w' . $thumbwidth . $pixeldensity . '/o=' . $thumbquality . '/' . $thumburl;
	?>
	<div data-sizes="auto" data-bgset="<?php echo $resrc; ?>" class="<?php if($class): echo $class . ' '; endif; ?>lazyload"></div>
	<noscript>
		<div style="background-image:url(<?php echo $resrc; ?>);" <?php if($class): echo 'class="' . $class . '"'; endif; ?>></div>
	</noscript>
<?php endif; ?>
