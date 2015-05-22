<?php // [1] Regular background image; resized thumb (thumbs.dev.width) ?>
<?php if($lazyload == false && c::get('resrc') == false): ?>
	style="background-image:url(<?php echo $thumburl; ?>);"<?php if($class): echo ' class="' . $class . '"'; endif; ?>
<?php endif; ?>

<?php // [2] Lazyload image; resized thumb (thumbs.dev.width)  ?>
<?php if($lazyload == true && c::get('resrc') == false): ?>
	data-bg="<?php echo $thumburl; ?>" class="BgImage lazyload<?php if($class): echo ' ' . $class; endif; ?>"
<?php endif; ?>

<?php // [3] Lazyload + resrc image; full size thumb (let resrc resize and optimize the biggest possible thumb!) ?>
<?php if($lazyload == true && c::get('resrc') == true): ?>
	data-sizes="auto" data-bgset="<?php echo 'http://' . c::get('resrc.plan') . '/s=w{width}/o={quality}/' . $thumburl; ?>" class="BgImage lazyload<?php if($class): echo ' ' . $class; endif; ?>"
<?php endif; ?>
