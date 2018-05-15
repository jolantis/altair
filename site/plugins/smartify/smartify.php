<?php

/**
 * Smartify Plugin
 *
 * @author      Current author:  Jonathan van Wunnik <jonathan@artlantis.nl>
 *              Original author: Anselm Hannemann (https://helloanselm.com/)
 *
 * @license     Code and contributions have 'MIT License'
 *              More details: ... (link to github license.md)
 *
 * @link        GitHub Repo:  ...
 *              README:       ...
 *
 * @version     1.0.0
 */

// Smartyfy Kirbytext before (pre) Markdown or Kirbytags are parsed
kirbytext::$pre[] = function($kirbytext, $text) {
	// Add hair spaces around en and em dashes.
	return preg_replace('/(\S)(---|--|—|–)(\S)/', '$1&#8202;$2&#8202;$3', $text);
};

// Global smartify parser shortcut
function smartify($text) {
	// Add hair spaces around en and em dashes.
	$content = preg_replace('/(\S)(---|--|—|–)(\S)/', '$1&#8202;$2&#8202;$3', $text);
	// // Parse content with smartypants
	return smartypants($content);
};

// Parses the field value with smartify
field::$methods['smartypants'] = function($field) {
  $field->value = smartify($field->value);
  return $field;
};
