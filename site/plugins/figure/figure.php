<?php
require_once __DIR__.DS.'inc'.DS.'functions.php';

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
		'caption'    => null,
		'quality'    => c::get('thumbs.quality', 92),
		'lazyload'   => c::get('lazyload', false),
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

	// Set identifiers for default thumb sizes
	$thumbdefaultwidthname = c::get('responsiveimages.default', 'compact');
	$thumbfeedwidthname = c::get('responsiveimages.feed', 'wide');
	$thumbmaxwidthname = c::get('photoswipe.desktop', 'max');
	$thumbmobilemaxwidthname = c::get('photoswipe.mobile', 'wide');

	// Set thumb width
	if($feed == true) {
		$thumbwidth = kirby()->option('responsiveimages.sources')[$thumbfeedwidthname]['width'];
	}
	else {
		if(!isset($options['width'])) {
			$thumbwidth = kirby()->option('responsiveimages.sources')[$thumbdefaultwidthname]['width'];
		} else {
			$thumbwidth = $options['width'];
		}
	}

	// Set width for maximum thumb size, based on mobile or not
	if(s::get('device_class') == 'mobile') {
		$maxthumbwidth = kirby()->option('responsiveimages.sources')[$thumbmobilemaxwidthname]['width'];
	}
	else {
		$maxthumbwidth = kirby()->option('responsiveimages.sources')[$thumbmaxwidthname ]['width'];
	}

	// Set smaller width if max thumb width exeeds the image width (otherwise it wont use the thumbs folder)
	if($maxthumbwidth > $image->width()) {
		$maxthumbwidth = $image->width();
	}

	// if no crop variable is defined *and* no cropratio
	// is set, the crop variable is set to false
	if(!isset($options['crop']) && !isset($options['cropratio'])) {
		$options['crop'] = false;
	}

	// when a cropratio is set, calculate the ratio based height
	if(isset($options['cropratio'])) {
		// if a cropratio is set, the crop variable is always set to true
		$options['crop'] = true;
		// Manual set (crop)ratio
		$ratio = figure_convert_cropratio($options['cropratio']);
	}
	else {
		// Intrinsic image's ratio
		$ratio = 1 / $image->ratio();
		// Max. height of image
		$thumbheight = round($thumbwidth * $ratio);
	}

	// Percentage-padding to set image aspect ratio (prevents reflow on image load)
	$options['percentage_padding'] = round($ratio * 100, 2);

	// Srcset builder
	if($image && empty($srcset)) {
		$srcset = figure_get_srcset($image, $options['quality'], $options['crop'], $options['cropratio']);
	}

	// Sizes builder
	if($image && empty($sizes)) {
		$sizes = figure_get_sizes($image);
	}

	// Set height for default thumb
	if(isset($options['cropratio']) && isset($options['crop'])) {
		$defaultthumbheight = figure_height_by_cropratio( $options['cropratio'], $thumbwidth );
		$maxthumbheight = figure_height_by_cropratio( $options['cropratio'], $maxthumbwidth );
	}
	else {
		$defaultthumbheight = null;
		$maxthumbheight = round($maxthumbwidth * $ratio); // Use intrinsic ratio, set earlier
	}

	$options['defaultthumb'] = thumb($image, array(
		'width' => $thumbwidth,
		'height' => $defaultthumbheight,
		'quality' => $options['quality'],
		'crop'    => $options['crop']
	), false);

	// Set Max thumb, used for Photoswipe
	$options['maxthumb'] = thumb($image, array(
		'width' => $maxthumbwidth,
		'height' => $maxthumbheight,
		'quality' => $options['quality'],
		'crop'    => $options['crop']
	), false);

	// Get Photoswipe options
	$photoswipe = c::get('photoswipe', false);
	if($photoswipe) {
		$pswphref = $options['maxthumb'];
		$pswpsize = $maxthumbwidth.'x'.$maxthumbheight;
	}
	else {
		$pswphref = null;
		$pswpsize = null;
	}

	// If no caption given as attribute, set caption from file
	if(!isset($options['caption'])) {
		if(!$image->caption()->empty()) {
			$options['caption'] = $image->caption();
		}
		else {
			$options['caption'] = false;
		}
	}


	// Add more values to options array, for use in template
	$options['image'] = $image;
	$options['thumbwidth'] = $thumbwidth;
	$options['thumbheight'] = $defaultthumbheight;
	$options['customwidth'] = $options['width'];
	$options['customquality'] = $options['quality'];
	$options['ratio'] = $ratio;
	$options['srcset'] = $srcset;
	$options['sizes'] = $sizes;
	$options['photoswipe'] = $photoswipe;
	$options['pswphref'] = $pswphref;
	$options['pswpsize'] = $pswpsize;

	// Return template HTML
	return tpl::load(__DIR__ . DS . 'template/figure.php', $options);
}

/**
 * Figure tag
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
		$quality    = $tag->attr('quality', c::get('thumbs.quality', 92));
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
		$photoswipe = c::get('photoswipe', false);

		// Alt tag should not be 'null' but an empty string
		if(!isset($alt) || is_null($alt)) {
			$alt = ' ';
		}

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

		// Set identifiers for default thumb and photoswipe sizes
		$thumbdefaultwidthname = c::get('responsiveimages.default', 'compact');
		$thumbfeedwidthname = c::get('responsiveimages.feed', 'wide');
		$thumbmaxwidthname = c::get('photoswipe.desktop', 'max');
		$thumbmobilemaxwidthname = c::get('photoswipe.mobile', 'wide');

		// Create markup for every image
		$i = 0;
		foreach($imageresult as $image) {

			if(!$image->caption()->empty()) {
				$pswpcaption = $image->caption();
			}
			else {
				$pswpcaption = false;
			}

			// If the crop variable is explicitly set to 'false' string *and*
			// no cropratio is set, the crop variable is always set to false
			if($crop == 'false' && !isset($cropratio)) {
				$crop = false;
			}

			// Set thumb width for feed
			if($feed == true) {
				$thumbwidth = kirby()->option('responsiveimages.sources')[$thumbfeedwidthname]['width'];
			}
			else {
				$thumbwidth = kirby()->option('responsiveimages.sources')[$thumbdefaultwidthname]['width'];
			}

			// Set width for maximum thumb size, based on mobile or not
			if(s::get('device_class') == 'mobile') {
				$maxthumbwidth = kirby()->option('responsiveimages.sources')[$thumbmobilemaxwidthname]['width'];
			}
			else {
				$maxthumbwidth = kirby()->option('responsiveimages.sources')[$thumbmaxwidthname ]['width'];
			}

			// Set smaller width if max thumb width exeeds the image width (otherwise it wont use the thumbs folder)
			if($maxthumbwidth > $image->width()) {
				$maxthumbwidth = $image->width();
			}

			// When a cropratio is set, calculate the ratio based height
			if(isset($cropratio)) {
				// If a cropratio is set, the crop variable is always set to true
				$crop = true;
				// Manual defined (crop)ratio
				$ratio = figure_convert_cropratio($cropratio);
			}
			else {
				// Intrinsic image's ratio
				$ratio = 1 / $image->ratio();
				// Max. height of image
				$thumbheight = round($thumbwidth * $ratio);
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

			// Srcset builder
			$srcset = figure_get_srcset($image, $quality, $crop, $cropratio);

			// Sizes builder
			if($image && empty($sizes)) {
				if ($feed == true) {
					$sizes = '100vw'; // Set sizes on full viewport width for feed
				}
				else {
					$sizes = figure_get_sizes($image, $width);
				}
			}

			// Set height for default thumb
			if(isset($cropratio) && isset($crop)) {
				$defaultthumbheight = figure_height_by_cropratio( $cropratio, $thumbwidth );
				$maxthumbheight = figure_height_by_cropratio( $cropratio, $maxthumbwidth );
			}
			else {
				$defaultthumbheight = null;
				$maxthumbheight = round($maxthumbwidth * $ratio); // Use intrinsic ratio, set earlier
			}

			if($feed == true) { // Default image in a feed (full width)
				$noscript = false;
			}

			$defaultthumburl = thumb($image, array(
				'width' => $thumbwidth,
				'height' => $defaultthumbheight,
				'quality' => $quality,
				'crop'    => $crop,
			), false);

			$maxthumburl = thumb($image, array(
				'width' => $maxthumbwidth,
				'height' => $maxthumbheight,
				'quality' => $quality,
				'crop'    => $crop,
			), false);

			// Set variables for Photoswipe if needed
			if($photoswipe) {
				$class .= ' pswp-img';
				$pswphref = $maxthumburl;
				$pswpsize = $maxthumbwidth.'x'.$maxthumbheight;
			}
			else {
				$pswphref = '';
				$pswpsize = '';
			}

			// [1] Regular image; resized thumb (e.g. `responsiveimages.default`)
			if($lazyload == false) {

				$imagethumb = html::img($defaultthumburl,array(
					// 'data-width'     => $image->width(),
					// 'data-height'    => $image->height(),
					'srcset'         => $srcset,
					'sizes'          => $sizes,
					'class'          => $class,
					'alt'            => html($alt),
					'data-pswp-href' => $pswphref,
					'data-pswp-size' => $pswpsize,
					'data-pswp-caption' => $pswpcaption
					)
				);

				$noscript = false;

			}

			// [2] Lazyload image; responsive image via srcset
			if($lazyload == true) {

				$imagethumb = html::img('data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==',array(
					'data-src'  => $defaultthumburl,
					'data-srcset'    => $srcset,
					'data-sizes'     => $sizes,
					// 'data-width'     => $image->width(),
					// 'data-height'    => $image->height(),
					'class'     => $class . ' lazyload',
					'alt'       => html($alt),
					'data-pswp-href' => $pswphref,
					'data-pswp-size' => $pswpsize,
					'data-pswp-caption' => $pswpcaption
					)
				);

				$noscript = '<noscript><img src="'. $defaultthumburl .'" class="'. $class .'" width="'. $thumbwidth .'" height="'. $thumbheight .'" alt="'. html($alt) .'"/></noscript>';

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
		if(isset($caption)) {
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
