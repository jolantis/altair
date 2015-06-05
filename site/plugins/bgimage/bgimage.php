<?php

/**
 * imgsrc Plugin
 *
 * @author Marijn Tijhuis <marijn@studiodumbar.com>
 * @author Jonathan van Wunnik <jonathan@studiodumbar.com.com>
 * @version 1.0.0
 */

function bgimage($image=false, $options=array()) {

	if(!$image) {
		return;
	}

	// Default key values
	$defaults = array(
		'width'      => null,
		'height'     => null,
		'crop'       => null,
		'cropratio'  => null,
		'class'      => '',
		'alt'        => '',
		'quality'    => c::get('thumbs.quality', 92),
		'lazyload'   => c::get('lazyload', false),   // Lazyloading with lazySizes (https://github.com/aFarkas/lazysizes)
	);

	// Merge defaults and options
	$options = array_merge($defaults, $options);

	// Without resrc, maximize thumb width, for speedier loading of page!
	if(c::get('resrc') == false) {
		if(!isset($options['width'])) {
			$thumbwidth = c::get('thumbs.width.default', 800);
		} else {
			$thumbwidth = $options['width'];
		}
	}
	else {
		// If resrc is enabled, use original image width
		$thumbwidth = $image->width();
	}

	// If no crop variable is defined *and* no cropratio
	// is set, the crop variable is set to false
	if(!isset($options['crop']) && !isset($options['cropratio'])) {
		$options['crop'] = false;
	}

	// When a cropratio is set, calculate the ratio based height
	if(isset($options['cropratio'])) {
		// If cropratio is a fraction string (e.g. 1/2), convert to decimal
		if(strpos($options['cropratio'], '/') !== false) {
			list($numerator, $denominator) = str::split($options['cropratio'], '/');
			$options['cropratio'] = $numerator / $denominator;
		}
		// Calculate new thumb height based on cropratio
		$thumbheight = round($thumbwidth * $options['cropratio']);
		// If a cropratio is set, the crop variable is always set to true
		$options['crop'] = true;
		// Manual set (crop)ratio
		$ratio = $options['cropratio'];
	}
	else {
		// Intrinsic image's ratio
		$ratio = 1 / $image->ratio();
		// Max. height of image
		$thumbheight = round($thumbwidth * $ratio);
	}

	// Create thumb url (create a new thumb object)
	$options['thumburl'] = thumb($image, array(
		'width'   => $thumbwidth,
		'height'  => $thumbheight,
		'quality' => $options['quality'],
		'crop'    => $options['crop']
	), false);

	// Add more values to options array, for use in template
	$options['customwidth'] = $options['width'];
	$options['customquality'] = $options['quality'];
	$options['ratio'] = $ratio;

	// Return template HTML
	return tpl::load(__DIR__ . DS . 'template/bgimage.php', $options);

}
?>
