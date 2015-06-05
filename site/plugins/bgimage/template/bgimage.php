<?php // [1] Regular background image; resized thumb (e.g. thumbs.width.default) ?>
<?php if($lazyload == false && c::get('resrc') == false): ?>
	style="background-image:url(<?php echo $thumburl; ?>);"<?php if($class): echo ' class="' . $class . '"'; endif; ?>
<?php endif; ?>

<?php // [2] Lazyload image; resized thumb (e.g. thumbs.width.default)  ?>
<?php if($lazyload == true && c::get('resrc') == false): ?>
	data-bgset="<?php echo $thumburl; ?>" class="<?php if($class): echo $class . ' '; endif; ?>lazyload"
<?php endif; ?>

<?php // [3] Lazyload + resrc image; full size thumb (let resrc resize and optimize the biggest possible thumb!) ?>
<?php if($lazyload == true && c::get('resrc') == true): ?>
	data-sizes="auto" data-bgset="<?php echo 'http://' . c::get('resrc.plan') . '/s=w' . c::get('thumbs.width.default', 800) . '/o=' . c::get('thumbs.quality', 92) . '/' . $thumburl; ?>" class="<?php if($class): echo $class . ' '; endif; ?>lazyload"
<?php endif; ?>
