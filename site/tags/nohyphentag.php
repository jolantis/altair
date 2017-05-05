<?php
/**
 * Nohyphentag
 * Implements the option to exclude a (part of a) sentence to be hyphenated, by
 * wrapping a text string in a <span> tag with the class `no-hyphen`.
 *
 * Syntax:
 * (nohyphen: My Company Name)
 *
 * Copyright: Marijn Tijhuis (fatpixel.nl), Jonathan van Wunnik (artlantis.nl)
 * License: http://www.gnu.org/licenses/gpl-3.0.txt GPLv3 License
 */

kirbytext::$tags['nohyphen'] = array(
	'html' => function($tag) {

		$text = $tag->attr('nohyphen');

		return '<span class="text-no-hyphen">' . $text . '</span>';

	}
);
