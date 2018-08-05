<?php

/**
 * Colorprofile Plugin
 *
 * @author      Jonathan van Wunnik <jonathan@artlantis.nl>
 *
 * @license     Code and contributions have 'MIT License'
 *              More details: ... (link to github license.md)
 *
 * @link        GitHub Repo:  ...
 *              README:       ...
 *
 * @version     1.0.0
 */

thumb::$drivers['im'] = function($thumb) {

	$icc_profile = c::get('thumbs.icc.profile') ? c::get('thumbs.icc.profile') : false;
	$meta_data = c::get('thumbs.meta.data') ? c::get('thumbs.meta.data') : false;

	$command = array();

	$command[] = isset($thumb->options['bin']) ? $thumb->options['bin'] : 'convert';
	$command[] = '"' . $thumb->source->root() . '"';

	if($icc_profile == false && $meta_data == false) {
		$command[] = '-strip';
	}

	if($thumb->options['interlace']) {
		$command[] = '-interlace line';
	}

	if($thumb->source->extension() === 'gif') {
		$command[] = '-coalesce';
	}

	if($thumb->options['grayscale']) {
		$command[] = '-colorspace gray';
	}

	if($thumb->options['autoOrient']) {
		$command[] = '-auto-orient';
	}

	if($icc_profile == true && $meta_data == false) {
		$command[] = '-thumbnail';
	} else {
		$command[] = '-resize';
	}

	if($thumb->options['crop']) {
		if(empty($thumb->options['height'])) {
			$thumb->options['height'] = $thumb->options['width'];
		}
		$command[] = $thumb->options['width'] . 'x' . $thumb->options['height'] . '^';
		$command[] = '-gravity Center -crop ' . $thumb->options['width'] . 'x' . $thumb->options['height'] . '+0+0';
	} else {
		$dimensions = clone $thumb->source->dimensions();
		$dimensions->fitWidthAndHeight($thumb->options['width'], $thumb->options['height'], $thumb->options['upscale']);
		$command[] = $dimensions->width() . 'x' . $dimensions->height() . '!';
	}

	$command[] = '-quality ' . $thumb->options['quality'];

	if($thumb->options['blur']) {
		$command[] = '-blur 0x' . $thumb->options['blurpx'];
	}

	$command[] = '-limit thread 1';
	$command[] = '"' . $thumb->destination->root . '"';

	exec(implode(' ', $command));

};
