<?php
/**
 * Figure
 * ----
 * Custom (multi) figure tag
 *
 * What it does:
 * Generates an image wrapped in a <figure> tag, with a lot of additional
 * options. Among other things multiple images within one figure tag, the use
 * of a 'relative' width (i.e. 1of3 or 1of4) for responsive images.
 *
 * Usage:
 * 1) (figure: myimage.jpg width: 1of3)
 * 2) (figure: myimage.jpg width: 1of3 caption: Nice figure caption!)
 * 3) (figure: myimage.jpg griditem: true caption: Single image in a multifigure grid)
 * 4) (figure: myimage.jpg width: 2of3 height: 200 crop: true caption: Nice figure caption!)
 * 5) (figure: myimage.jpg width: width: 2of3 align: center)
 * 6) (figure: myimage1.jpg | myimage2.jpg, myimage3.jpg width: 1of3, 1of3, 1of3 break: medium gutter: percentage)
 *
 * Example page:
 * http://altair.studiodumbar.com/images
 */

kirbytext::$tags['figure'] = array(
	'attr' => array(
		// Basics
		'caption',
		// Widths
		'width',
		// Cropping and quality
		'crop',
		'cropratio',
		'upscale',
		'quality',
		// CSS class setting
		'break',
		'gutter',
		'align',
		'griditem',
		// Single figure specific
		'height',
		'alt',
	),
	'html' => function($tag) {

		$images = $tag->attr('figure');

		// Check if the figure has multiple images to output, check for comma
		if(strpos($images,',') === false) {
			$is_multifigure = false;
			// Set the one images as the first in an images array
			$images = array($images);
		}
		else {
			$is_multifigure = true;
			// Set all images to the array
			$images = str::split(str_replace(' ', '', $images), ',');
		}

		// Check if there are images passed to the array
		if(empty($images)) return false;

		// Build array of image objects
		foreach($images as $img) {
			$imgObj = $tag->file($img);
			if($imgObj) $imageresult[] = $imgObj;
		}

		// Check if array of images has real items (after building objects)
		if(empty($imageresult)) return false;

		// set variables for both single and multi figures
		$upscale    = $tag->attr('upscale');
		$quality    = $tag->attr('quality', c::get('thumbs.quality', 100));
		$caption    = $tag->attr('caption');
		$break      = $tag->attr('break', c::get('figureimage.break', 'small'));
		$gutter     = $tag->attr('gutter', c::get('figureimage.gutter', 'default'));
		$offset     = $tag->attr('offset');
		$align      = $tag->attr('align');
		$griditem   = $tag->attr('griditem');
		$alt        = $tag->attr('alt');
		$crop       = $tag->attr('crop');
		$cropratio  = $tag->attr('cropratio');
		$width      = $tag->attr('width');
		$height     = $tag->attr('height');

		// Get width variable(s) of image(s)
		if($is_multifigure) {
			$widths = str::split(str_replace(' ', '', $tag->attr('width')), ',');
		}
		else {
			$widths = str::split($tag->attr('width'));
			if (empty($widths)) $widths = null;
		}

		// Set classes used in layout grid
		if(count($imageresult) > 1 || $tag->attr('gutter') || isset($griditem)) {
			$gridclass = ' Grid Grid--withGutter' . (($gutter == 'percentage') ? 'Percentage' : '');
			$gridcellclass = 'Grid-cell ';
		}
		else {
			$gridclass = '';
			$gridcellclass = '';
		}

		// Set break class used in layout grid
		if(count($imageresult) > 1) {
			$breakclass = ' Grid--breakFrom'.ucfirst($break);
		}
		else {
			$breakclass = '';
		}

		// Set possible align classes
		if(isset($align)) {
			$alignclass = ' FigureImage--align'.ucfirst($align); // Add capitalized align class (IE: Grid--alignCenter)
		}
		else {
			$alignclass = '';
		}

		// If feed/rss page, lazyload is always disable
		if(kirby()->request()->path()->last() == 'feed') {
			$lazyload = false;
			$feed = true;
		}
		// Else lazyload variable is set in config
		else {
			$lazyload = c::get('lazyload', false);
			$feed = false;
		}

		// Add figure DOM element with appended classes
		$figure = new Brick('figure');
		if($feed != true) {
			$figure->addClass('FigureImage' . $gridclass . $breakclass . $alignclass);
		}

		// Create markup for every image
		$i = 0;
		foreach($imageresult as $image) {

			// If the crop variable is explicitly set to 'false' string *and*
			// no cropratio is set, the crop variable is always set to false
			if($crop == 'false' && !isset($cropratio)) {
				$crop = false;
			}

			// Set thumb width for feed
			if($feed == true) {
				$thumbwidth = c::get('thumbs.width.feed', 1200);
			}
			else {
				// Without resrc, maximize thumb width, for speedier loading of page!
				if(c::get('resrc') == false) {
					$thumbwidth = c::get('thumbs.width.default', 800);
				}
				else {
					// If resrc is enabled, set thumbwidth to width of original
					// image, to use maximum (original) image width
					$thumbwidth = null;
				}
			}

			// When a cropratio is set, calculate the ratio based height
			if(isset($cropratio)) {
				// If cropratio is a fraction string (e.g. 1/2), convert to decimal
				if(strpos($cropratio, '/') !== false) {
					list($numerator, $denominator) = str::split($cropratio, '/');
					$cropratio = $numerator / $denominator;
				}
				// If resrc is enabled ($thumbwidth is not set (e.g. `null`),
				// to use max width of image!), set thumbwidth to width of
				// original image
				if(!isset($thumbwidth)) {
					$thumbwidth = $image->width();
				}
				// Calculate new thumb height based on cropratio
				$thumbheight = round($thumbwidth * $cropratio);
				// If a cropratio is set, the crop variable is always set to true
				$crop = true;
				// Manual defined (crop)ratio
				$ratio = $cropratio;
			}
			else {
				// Max. height of image
				$thumbheight = null;
				// Intrinsic image's ratio
				$ratio = 1 / $image->ratio();
			}

			// Percentage-padding to set image aspect ratio (prevents reflow on image load)
			$percentage_padding = round($ratio * 100, 2);

			// Initialize wrapper divs if lazyloading
			if($lazyload == true) {
				// Only init griddiv when $gridcellclass or one (or more) width is set
				if($gridcellclass != '' || count($widths) > 0) {
					$griddiv = new Brick('div');
				}
				$lazydiv = new Brick('div');
				$lazydiv->addClass('FigureImage-lazy lazyload');
				$lazydiv->attr('style', 'padding-bottom: ' . $percentage_padding . '%;');
			}

			// Set width class names of image(s)
			$width = $widths[$i];

			// If there is one or more width set (and it's not in a feed), apply the width variable(s)
			if($feed != true) {
				if(count($widths) > 0) {
					// The first part (the 1 of 3)
					$classgridpart = str::substr($width, 0, 1);
					// The total (the 3)
					$classgridtot = str::substr($width, 3, 1);
					// Add extra griddiv for lazyload
					if($lazyload == true) {
						// Set the class for the image
						$class = 'FigureImage-item';
						// Set the class on the grid div
						if(isset($griddiv)) {
							$griddiv->addClass($gridcellclass.'u-size' . $width . '--' . $break);
						}
					}
					else {
						$class = 'FigureImage-item ' . $gridcellclass . 'u-size' . $width . '--' . $break;
					}
				}
				else {
					// Add extra griddiv for lazyload
					if($lazyload == true) {
						// Set the class for the image
						$class = 'FigureImage-item';
						// Set the class for the grid div
						if(isset($griddiv)) {
							$griddiv->addClass($gridcellclass);
						}
					}
					else {
						$class = 'FigureImage-item ' . $gridcellclass . 'u-size' . $width . '--' . $break;
					}
				}
			} else {
				$class = null;
			}

			$thumburl = thumb($image,array(
				'width'   => $thumbwidth,
				'height'  => $thumbheight,
				'quality' => $quality,
				'crop'    => $crop,
			), false);

			if($feed == true) {

				$imagethumb = html::img($thumburl,array(
					// 'width'     => $image->width(),
					// 'height'    => $image->height(),
					'class'     => $class,
					'alt'       => html($alt)
					)
				);

				$noscript = false;

			}

			// [1] Regular image; resized thumb (e.g. thumbs.width.default)
			if($lazyload == false && c::get('resrc') == false) {

				$imagethumb = html::img($thumburl,array(
					// 'width'     => $image->width(),
					// 'height'    => $image->height(),
					'class'     => $class,
					'alt'       => html($alt)
					)
				);

				$noscript = false;

			}

			// [2] Lazyload image; resized thumb (e.g thumbs.width.default)
			if($lazyload == true && c::get('resrc') == false) {

				$imagethumb = html::img('data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==',array(
					'data-src'  => $thumburl,
					// 'width'     => $image->width(),
					// 'height'    => $image->height(),
					'class'     => $class . ' lazyload',
					'alt'       => html($alt)
					)
				);

				$noscript = '<noscript><img src="'. $thumburl .'" class="'. $class .'" alt="'. html($alt) .'" width="'. $thumbwidth .'" height="'. $thumbheight .'"/></noscript>';

			}

			// [3] Lazyload + resrc image; full size thumb (let resrc resize and optimize the biggest possible thumb!)
			if($lazyload == true && c::get('resrc') == true) {

				$resrc = 'http://' . c::get('resrc.plan') . '/s=w' . c::get('thumbs.width.default', 800) . '/o=' . c::get('thumbs.quality', 92) . '/' . $thumburl;

				$imagethumb = html::img('data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==',array(
					'data-sizes' => 'auto',
					'data-src'   => $resrc,
					// 'width'      => $image->width(),
					// 'height'     => $image->height(),
					'class'      => $class . ' lazyload',
					'alt'        => html($alt)
					)
				);

				$noscript = '<noscript><img src="'. $resrc .'" class="'. $class .'" alt="'. html($alt) .'"/></noscript>';

			}

			// Output different markup, depending on lazyload or not
			if($lazyload == true) {
				$lazydiv->append($imagethumb);
				if(isset($griddiv)) { // If the image should be inside a grid
					$griddiv->append($lazydiv);
					if($noscript) { // If noscript is set, append to figure
						$griddiv->append($noscript);
					}
					$figure->append($griddiv);
				}
				else { // If the image should NOT be inside a grid
					$figure->append($lazydiv);
					if($noscript) { // If noscript is set, append to figure
						$figure->append($noscript);
					}
				}
			}
			else {
				$figure->append($imagethumb);
			}

			$i++;

		}

		// Add caption
		if(!empty($caption)) {
			// Also add break class to figcaption if alignment is set to image
			if(count($widths) > 0 && isset($align)) {
				$figure->append('<figcaption class="FigureImage-caption u-size' . $width . '--' . $break  . '">' . kirbytext($caption) . '</figcaption>');
			}
			else {
				$figure->append('<figcaption class="FigureImage-caption">' . kirbytext($caption) . '</figcaption>');
			}
		}

		return $figure;

	}
);

?>
