<?php

/**
 * Filterstring Plugin
 *
 * @author      Current authors: Marijn Tijhuis <fatpixelstudio@gmail.com>
 *                               Jonathan van Wunnik <jonathan@artlantis.nl>
 *
 * @license     Code and contributions have 'MIT License'
 *              More details: ... (link to github license.md)
 *
 * @link        https://forum.getkirby.com/t/filter-to-exclude-files-that-contain-specific-string-in-their-name/573
 *
 * @version     1.0.0
 */

collection::$filters['!*='] = function($collection, $field, $value, $split = false) {

	foreach($collection->data as $key => $item) {
		if(!str::contains((string)collection::extractValue($item, $field), $value)) continue;
		unset($collection->$key);
	}

	return $collection;

}

?>
