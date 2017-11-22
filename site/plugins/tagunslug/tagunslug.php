<?php

/**
 * Tagunslag Plugin
 *
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
field::$methods['tagunslug'] = function($field) {
	$field->value = tagunslug($field);
	return $field;
};

// Convert tag slug (see tagslug plugin) string to tag name
function tagunslug($text){
	// uppercase first character after -and-
	// $text = implode('-and-', array_map('ucfirst', explode('-and-', $text)));

	// replace -and- by <space>&<space>
	$text = str_replace('-and-', ' & ', $text);

	// replace - buy <space>
	$text = str_replace('-', ' ', $text);

	// uppercase
	// $text = ucfirst($text);
	$text = preg_replace_callback('/([&])\s*(\w)/', function ($matches) {
		return strtoupper($matches[1] . ' ' . $matches[2]);
	}, ucfirst($text));

	return $text;
}

?>
