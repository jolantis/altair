<?php

/**
 * Custom filter methods
 *
 * @author      Jonathan van Wunnik <jonathan@artlantis.nl>
 *
 * @license     Code and contributions have 'MIT License'
 *
 * @link        https://getkirby.com/docs/developer-guide/objects/page
 *
 */

/**
 * Exclude (easier) files that contain a specific string
 *
 * Usage example (to exlude files with 'cover' in the file name):
 * `$page->images()->filterBy('filename', '!*=', 'cover');`
 *
 * Based on code exmples from Nico Hoffmann ([distantnative.com](http://distantnative.com)) and
 * Tobias Weh ([tobiw.de](http://tobiw.de)), posted on the Kirby forum, see:
 * https://forum.getkirby.com/t/filter-to-exclude-files-that-contain-specific-string-in-their-name/573
 */

collection::$filters['!*='] = function($collection, $field, $value, $split = false) {

	foreach($collection->data as $key => $item) {
		if(!str::contains((string)collection::extractValue($item, $field), $value)) continue;
		unset($collection->$key);
	}

	return $collection;

}

?>
