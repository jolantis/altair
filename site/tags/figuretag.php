<?php

/**
 * Figuretag
 *
 * Based on some example code of Lukas Bestle:
 * https://forum.getkirby.com/t/markdown-grid-for-images/2624/2
 *
 * Syntax:
 * 1) (figure: image_a.jpg caption: ...)
 * 2) (figure: image_a.jpg | image_b.jpg)
 * 3) (figure: image_a.jpg:1of2 | image_b.jpg:1of2)
 * 4) (figure: image_a.jpg:2of3 | image_b.jpg, image_c.jpg:1of3 class: full-width)
 * 5) (figure: image_a.jpg:8of17 | image_b.jpg, image_c.jpg:9of17 caption: ...)
 * 6) (figure: image_a.jpg:9of13 | image_b.jpg:4of13 class: text-width caption: ...)
 * 7) (figure: image_a.jpg:1of3 | image_b.jpg:1of3 | image_c.jpg:1of3 class: full-width)
 *
 * Copyright: Jonathan van Wunnik (artlantis.nl)
 * License: http://www.gnu.org/licenses/gpl-3.0.txt GPLv3 License
 */

kirbytext::$tags['figure'] = array(
	'attr' => array(
		'alt',
		'class',
		'caption',
		'lazy'
	),
	'html' => function($tag) {

		$url      = $tag->attr('figure');
		$alt      = $tag->attr('alt');
		$class    = $tag->attr('class');
		$caption  = $tag->attr('caption');
		$lazyload = $tag->attr('lazy');

		// CHeck if it is the rss/feed template
		if(page()->representation() == 'rss') {
			$rss = true;
		}
		// If not set rss to false
		else {
			$rss = false;
		}

		// If lazyload is set to false (in text) or rss is true
		if($lazyload == 'false' || $rss == true) {
			$lazyload = false;
			$output   = 'plain';
		}
		// Else lazyload is enabled (is the default)
		else {
			$lazyload = true;
			$output   = 'auto';
		}

		// Start figure
		$html = $rss ? '<figure>' : '<figure class="figure-image' . ($class ? ' ' . $class : '') . '">';

		// Check if the url string has a piper separator
		if(strpos($url, '|') !== false) {

			// Split the url in its containers
			$containers = explode('|', $url);

			// Check for multiple (stacked) images in each container
			// If there is comma seperated value, it means there is
			// more than 1 image in a container (thus a triptych)!
			for($i = 0; $i < count($containers); $i++) {
				$triptych = (strpos($containers[$i],',') !== false) ? ' triptych' : '';
			}

			// Add grid div
			$html .= $rss ? '' : '<div class="grid">';

			// Loop through containers
			foreach($containers as $container) {

				// Remove space after the comma
				$container = trim($container);

				// Check if the container string has a colon separator
				if(strpos($container, ':') !== false) {
					// If there is a colon separated value, it means there
					// is a size class in every container.
					// Seperate images from size classes,
					list($images, $size) = explode(':', $container);

				}
				// The container string has NOT a colon separator,
				// meaning there is no size class available
				else {

					// Add size class of '1of3' when number of containers is 3
					if(count($containers) === 3) {
						$images = $container;
						$size = '1of3';
					}
					// Else fall back to a default size class of '1of2'
					else {
						$images = $container;
						$size = '1of2';
					}
				}

				// Get the image array
				$images = explode(',', $images);

				// Open grid cell div wrapper
				$html .= $rss ? '' : '<div class="grid__cell compact-' . $size . $triptych . '">';

				// Add every image within one grid cell (or container)
				foreach($images as $image) {

					// Remove space fromt image url after the comma
					$url = trim($image);

					// Add the images (wrapped in a div with figure image and size classes)
					$html .= $rss ? '' : '<div class="figure-image">';
					$html .=
							$tag->page()->image($url)->imageset(
								'default',
							[
								'alt' => $alt,
								'lazyload' => $lazyload,
								'output'   => $output
							]);
					$html .= $rss ? '' : '</div>';
				}

				// Close wrapper
				$html .= $rss ? '' : '</div>';

			}

			// Add caption if available
			if($caption) {
				$html .= '<figcaption>' . smartypants($caption) . '</figcaption>';
			}

			// Close grid div and figure
			$html .= $rss ? '' : '</div>';
			$html .= '</figure>';

		}

		// The url string has NOT a piper separator,
		// meaning there's only one image
		else {

			// Add the (single) image
			$html .=
					$tag->page()->image($url)->imageset(
						'default',
					[
						'alt'      => $alt,
						'lazyload' => $lazyload,
						'output'   => $output
					]);

			// Add caption if available
			if($caption) {
				$html .= '<figcaption>' . smartypants($caption) . '</figcaption>';
			}

		}

		// Close figure
		$html .= '</figure>';

		// Return html
		return $html;

	}
);
