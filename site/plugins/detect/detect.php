<?php

/**
 * Detect Plugin
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
 * @version     2.0.0
 */

// Load the Mobile_Detect.php script
if(!class_exists('Mobile_Detect')) require_once('lib/Mobile_Detect.php');

// Now create a new mobile detect class
$detect = new Mobile_Detect();

// Start a session
s::start();

// Set the session variables for the device classes
if($detect->isMobile() && !$detect->isTablet()) {
	s::set('device_class', 'mobile');
}
// elseif($detect->isTablet()) {
// 	s::set('device_class', 'tablet');
// }
else {
	s::set('device_class', 'desktop'); // if device class can't be detected, assume it's desktop
}

// Load the device pecific template snippets
function snippet_detect($file, $data = array(), $return = false) {
	if(is_object($data)) $data = array('item' => $data);

	// If the session variable is not found, set the default value (e.g 'mobile')
	$device_class = s::get('device_class', 'mobile');

	// Embed the device class specific snippet
	if($device_class == 'mobile') {
		// Embed the mobile snippet (`mobile` is the default snippet, without the device specific `.postfix`, e.g. footer.php)
		return tpl::load(kirby::instance()->roots()->snippets() . DS . $file . '.php', $data, $return);
	} else {
		// Embed the device class specific snippet (e.g. `footer.desktop.php`)
		return tpl::load(kirby::instance()->roots()->snippets() . DS . $file . '.' . $device_class . '.php', $data, $return);
	}
}

?>
