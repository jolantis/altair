<?php

/**
 * Tagslag Plugin
 *
 * @author      Current authors: Marijn Tijhuis <fatpixelstudio@gmail.com>
 *                               Jonathan van Wunnik <jonathan@artlantis.nl>
 *
 * @license     Code and contributions have 'MIT License'
 *              More details: ... (link to github license.md)
 *
 * @link        GitHub Repo:  ...
 *              README:       ...
 *
 * @version     1.0.0
 */

// Field method
field::$methods['tagslug'] = function($field) {
	$field->value = tagslug($field);
	return $field;
};

// Convert tag name to slug (url)
function tagslug($text) {
	// replace & by -and-
	$text = str_replace('&', '-and-', $text);

	// replace non letter or digits by -
	$text = preg_replace('~[^\\pL\d]+~u', '-', $text);

	// trim
	$text = trim($text, '-');

	// transliterate
	$text = iconv('utf-8', 'us-ascii//TRANSLIT', $text);

	// lowercase
	$text = strtolower($text);

	// remove unwanted characters
	$text = preg_replace('~[^-\w]+~', '', $text);

	if (empty($text)) {
		return 'n-a';
	}

	return $text;
}

?>
