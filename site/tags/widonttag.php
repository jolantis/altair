<?php
/**
 * Widonttag
 * Implements an option to remove widows from a text string, by replacing
 * the last space by a non-breaking-space (e.g. `&nbsp;`).
 * Piggybackss Kirby toolkit's widont helper function (based on str::widont).
 *
 * Syntax:
 * (widont: This is a title without widows)
 *
 * Copyright: Jonathan van Wunnik (artlantis.nl), Marijn Tijhuis (fatpixel.nl)
 * License: http://www.gnu.org/licenses/gpl-3.0.txt GPLv3 License
 */

kirbytext::$tags['widont'] = array(
	'html' => function($tag) {

		$text = $tag->attr('widont');

		return widont($text);

	}
);

?>
