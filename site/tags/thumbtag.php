<?php
/**
 * Thumbtag
 * Implements a thumb generated image, by wrapping an
 * img tag inside a figure element.
 *
 * Syntac:
 * (thumb: image.jpg width: 225 height: 225 alt: Just a thumb)
 * (thumb: image.jpg width: 225 height: 225 quality: 75 alt: Thumb with quality 75)
 * (thumb: image.jpg width: 400 height: 250 crop: true alt: Thumb cropped)
 *
 * Copyright: Marijn Tijhuis (fatpixel.nl)
 * License: http://www.gnu.org/licenses/gpl-3.0.txt GPLv3 License
 */

kirbytext::$tags['thumb'] = array(
	'attr' => array(
		'width',
		'height',
		'alt',
		'quality',
		'crop',
		'blur',
		'grayscale',
		'class'
		),
	'html' => function($tag) {

		$url       = $tag->attr('thumb');
		$class     = $tag->attr('class');
		$crop      = $tag->attr('crop');
		$blur      = $tag->attr('blur');
		$grayscale = $tag->attr('grayscale');
		$file      = $tag->file($url);

		// Only crop when explicitly set to true; default is false
		if($crop == 'true') {
			$crop = true;
		}
		else {
			$crop = false;
		}

		// Only blur when explicitly set to true; default is false
		if($blur == 'true') {
			$blur = true;
		}
		else {
			$blur = false;
		}

		// Only grayscale when explicitly set to true; default is false
		if($grayscale == 'true') {
			$grayscale = true;
		}
		else {
			$grayscale = false;
		}

		$image = thumb($file, array(
			'width'     => $tag->attr('width'),
			'height'    => $tag->attr('height'),
			'alt'       => $tag->attr('alt'),
			'quality'   => $tag->attr('quality', c::get('thumbs.quality', 92)),
			'crop'      => $crop,
			'blur'      => $blur,
			'grayscale' => $grayscale,
		));

		$figure = new Brick('figure');
		if($class) {
			$figure->addClass($class);
		}
		$figure->append($image);

		return $figure;

	}
);
