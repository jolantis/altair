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

	// Set identifiers for default thumb sizes
	$thumbdefaultwidthname = c::get('responsiveimages.default', 'compact');

	// Without width set, use default image width
	if(!isset($options['width'])) {
		$thumbwidth = $thumbwidth = kirby()->option('responsiveimages.sources')[$thumbfeedwidthname]['width'];
	} else {
		$thumbwidth = $options['width'];
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

	// Srcset builder
	if($image && empty($srcset)) {
		$srcset = figure_get_srcset($image, $options['quality'], $options['crop'], $options['cropratio']);
	}

	// Sizes builder
	if($image && empty($sizes)) {
		$sizes = figure_get_sizes($image);
	}

	// Create thumb url (create a new thumb object)
	$options['defaultthumburl'] = thumb($image, array(
		'width'   => $thumbwidth,
		'height'  => $thumbheight,
		'quality' => $options['quality'],
		'crop'    => $options['crop']
	), false);

	// Add more values to options array, for use in template
	$options['customwidth'] = $options['width'];
	$options['customquality'] = $options['quality'];
	$options['ratio'] = $ratio;
	$options['srcset'] = $srcset;
	$options['sizes'] = $sizes;

	// Return template HTML
	return tpl::load(__DIR__ . DS . 'template/bgimage.php', $options);

}
?>
