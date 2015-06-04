<?php

/**
 * Figure Plugin
 *
 * @author Marijn Tijhuis <marijn@studiodumbar.com>
 * @author Jonathan van Wunnik <jonathan@studiodumbar.com.com>
 * @version 1.0.0
 */

function figure($image=false, $options=array()) {

	if(!$image) {
		return;
	}

	// default key values
	$defaults = array(
		'width'      => null,
		'height'     => null,
		'crop'       => null,
		'cropratio'  => null,
		'class'      => '',
		'alt'        => '',
		'caption'    => null,                        // Output a figcaption
		'lazyload'   => c::get('lazyload', false),   // Lazyloading with lazysizes (https://github.com/aFarkas/lazysizes)
	);

	// merge defaults and options
	$options = array_merge($defaults, $options);

	// If feed/rss page, set $feed variable to tue
	if(kirby()->request()->path()->last() == 'feed') {
		$feed = true;
	}
	// Else variable is false
	else {
		$feed = false;
	}

	// Set thumb width
	if($feed == true) {
		$thumbwidth = c::get('thumbs.feed.width', 1200);
	}
	else {
		// without resrc, maximize thumb width, for speedier loading of page!
		if(c::get('resrc') == false) {
			if(!isset($options['width'])) {
				$thumbwidth = c::get('thumbs.medium.width', 800);
			} else {
				$thumbwidth = $options['width'];
			}
		}
		else {
			// with resrc use maximum (original) image width
			$thumbwidth = null;
		}
	}

	// if no crop variable is defined *and* no cropratio
	// is set, the crop variable is set to false
	if(!isset($options['crop']) && !isset($options['cropratio'])) {
		$options['crop'] = false;
	}

	// when a cropratio is set, calculate the ratio based height
	if(isset($options['cropratio'])) {
		// if resrc is enabled (and therefor $thumbwidth is not set (e.g. `null`),
		// to use max width of image!), set thumbwidth to width of original image
		if(!isset($thumbwidth)) {
			$thumbwidth = $image->width();
		}
		// if cropratio is a fraction string (e.g. 1/2), convert to decimal
		// if(!is_numeric($options['cropratio'])) {
		if(strpos($options['cropratio'], '/') !== false) {
			list($numerator, $denominator) = str::split($options['cropratio'], '/');
			$options['cropratio'] = $numerator / $denominator;
		}
		// calculate new thumb height based on cropratio
		$thumbheight = round($thumbwidth * $options['cropratio']);
		// if a cropratio is set, the crop variable is always set to true
		$options['crop'] = true;
		// Manual set (crop)ratio
		$ratio = $options['cropratio'];
	}
	else {
		$thumbheight = null; // max height of image
		// Intrinsic image's ratio
		$ratio = 1 / $image->ratio();
	}

	// Percentage-padding to set image aspect ratio (prevents reflow on image load)
	$options['percentage_padding'] = round($ratio * 100, 2);

	// Create thumb url (create a new thumb object)
	$options['thumburl'] = thumb($image, array(
		'width'   => $thumbwidth,
		'height'  => $thumbheight,
		'crop'    => $options['crop']
	), false);

	// Add image object to options array, for use in template
	$options['image'] = $image;

	// Return template HTML
	return tpl::load(__DIR__ . DS . 'template/figure.php', $options);
}
?>
