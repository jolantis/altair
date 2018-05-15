<?php

/**
 * Snippetstag
 * Implements the inclusion of a snippet in kirbytext.
 *
 * Syntax:
 * (snippet: name-of-snippet)
 * (snippet: vcard)
 *
 * Copyright: Jonathan van Wunnik (artlantis.nl)
 * License: http://www.gnu.org/licenses/gpl-3.0.txt GPLv3 License
 */

kirbytext::$tags['snippet'] = array(
	'attr' => array(
	),
	'html' => function($tag) {
		$file =  $tag->attr('snippet');
		return snippet($file, array(), true);
	}
);
