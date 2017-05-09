<?php

/**
 * Textbeautifier Plugin
 *
 * @author      Current author:  Jonathan van Wunnik <jonathan@artlantis.nl>
 *
 *              Original author: Anselm Hannemann (https://helloanselm.com/)
 *
 * @license     Code and contributions have 'MIT License'
 *              More details: https://github.com/anselmh/kirby-textbeautifier/blob/master/LICENSE.md
 *
 * @link        GitHub Repo:  https://github.com/anselmh/kirby-textbeautifier
 *              README:       https://github.com/anselmh/kirby-textbeautifier/blob/master/README.md
 *
 * @version     1.0.0
 */

// Beautify Kirbytext before (pre) Markdown or Kirbytags are parsed.
kirbytext::$pre[] = function($kirbytext, $text) {
	// Add hair spaces around en and em dashes.
	return preg_replace('/(\S)(---|--|—|–)(\S)/', '$1&#8202;$2&#8202;$3', $text);
};
