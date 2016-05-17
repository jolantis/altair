<?php // [1] Regular responsivebackground image; default sized thumb (e.g. `responsiveimages.default`) ?>
<?php if($lazyload == false): ?>
	<div style="background-image:url(<?php echo $defaultthumburl; ?>);"<?php if($class): echo ' class="' . $class . '"'; endif; ?>></div>
<?php endif; ?>

<?php // [2] Lazyload responsive image; bgset and sizes ?>
<?php if($lazyload == true): ?>
	<div data-sizes="auto" data-bgset="<?php echo $srcset; ?>" class="<?php if($class): echo $class . ' '; endif; ?>lazyload"></div>
	<noscript>
		<div style="background-image:url(<?php echo $defaultthumburl; ?>);" <?php if($class): echo 'class="' . $class . '"'; endif; ?>></div>
	</noscript>
<?php endif; ?>
