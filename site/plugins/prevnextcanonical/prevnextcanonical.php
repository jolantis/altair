<?php

/**
 * Camelcase Plugin
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

function get_lookup_page($paramkey, $paramvalue, $page) {
	// Filter projects by param
	$page_items = $page->siblings()->visible()->filterBy($paramkey, ($paramvalue), ',')->flip();

	$lookup_page = [];
	$i = 0;

	// Build an array with all project id's of the filtered projects
	foreach($page_items as $page_item) {
		$lookup_page[$i] = $page_item->id();
		$i++;
	}

	return $lookup_page;
}

/**
 * Generate back to overview url, based on the page
 * @param { page } the kirby page variable
 * @param { order } string, set as 'asc' when the order of the list is sorted ascending
 * @return { url } string with href
 */
function back_to_overview_url($page, $order = NULL) {

	$items_per_page = c::get('pagination.' . $page->parent()->intendedTemplate());
	$total_items = $page->parent()->children()->visible()->count();
	$total_pages = ceil($total_items / $items_per_page);
	$item_number = $page->num();

	if(strtolower($order) == 'asc') {
		$page_number = ceil((($total_items + 1) / $items_per_page) - (($item_number - ($total_items + 1)) / -$items_per_page));
	}
	else {
		$page_number = ceil(($item_number - ($total_items + 1)) / -$items_per_page);
	}
	$page_param = ($page_number != 1 && !params()) ? '/page:' .  $page_number : '';
	$param_key = (param()) ? '/' . key(param()) . ':' : '';
	$param_tag = (params()) ? param()[key(param())] : '';

	return $page->parent()->url() . $param_key .  $param_tag . $page_param . '#' . $page->slug();
}

/**
 * Echo meta tags for prev, next and canonical. Based on the page, pagination settings and used params
 * @param { page } the kirby page variable
 */
function meta_prevnextcanonical_general($page) {

	if(count(params()) >= 1) {

		$i = 0; foreach(params() as $param_value) {
			if(count(params()) > 1 && array_keys(params())[0] == 'page') {
				go($page->url(), 301);
			}
			if($i < count(params()) && array_keys(params())[$i] == 'page') {
				$page_number = param('page');
				$pages_total = ceil($page->children()->visible()->count() / c::get('pagination.' . $page->intendedTemplate()));
				if($page_number == 2) {
					echo '<link rel="prev" href="' . $page->url() . '">';
				}
				if($page_number > 2 && $page_number <= $pages_total) {
					echo '<link rel="prev" href="' . $page->url() . '/page:' . ($page_number - 1) . '">';
				}
				if($page_number != $pages_total) {
					echo '<link rel="next" href="' . $page->url() . '/page:' . ($page_number + 1) . '">';
				}
			}
		$i++; }

	}

	if(params()) {

		$i = 0; foreach(params() as $param_value) {
			// TO DO: check for more than 1 non 'page' params!
			if($i < count(params()) && array_keys(params())[$i] != 'page') {
				// echo $params = '/' . array_keys(param())[$i] . ':' . array_values(param())[$i];
				echo '<link rel="canonical" href="' . $page->url() . '">';
				break;
			}
		$i++; }

	}

	if(!params() && $page->hasVisibleChildren()) {

		if(c::get('pagination.' . $page->intendedTemplate()) != false && ($page->children()->visible()->count() > c::get('pagination.' . $page->intendedTemplate()))) {
			echo '<link rel="next" href="' . $page->url() . '/page:2">';
		}

	}

}

/**
 * Echo meta tags for prev, next used on specific prev_next pages (siblings), enable 'prev_next' => true in page template!
 * @param { page } the kirby page variable
 */
function meta_prevnextcanonical_single($page) {

	if(params() && count(params()) >= 1) {

		// Get the first key of the param array, but when the first key in url is `tag` (singular), make sure to use `tags` (plural; used in the text files) as the key value!
		$paramkey = (key(params()) == 'tag') ? 'tags' : key(params());

		// Unslug the param to a tag
		$paramvalue = tagunslug(params()[key(params())]);

		// Get lookup page array from params
		$lookup_page = get_lookup_page($paramkey, $paramvalue, $page);

		// return the key of the array where the current page is located
		$current_page_index = array_search($page->id(), $lookup_page);

		if(isset($current_page_index)) {
			// If the current page is not the first of the filtered list
			if($current_page_index > 0) {
				$next_page = page($lookup_page[$current_page_index - 1]);
				// $next_title = $next_page->title();
				// $next_url = $next_page->url() . '/' . key(params()) . ':' . $paramvalue;
				// echo '<link rel="next" href="' . $next_url . '" title="' . $next_title . '">';
				$next_url = $next_page->url();
				echo '<link rel="next" href="' . $next_url . '">';
			}
			// If the current page is not the last of the filtered list
			if(($current_page_index + 1) < count($lookup_page)) {
				$prev_page = page($lookup_page[$current_page_index + 1]);
				// $prev_title = $prev_page->title();
				// $prev_url = $prev_page->url() . '/' . key(params()) . ':' . $paramvalue;
				// echo '<link rel="prev" href="' . $prev_url . '" title="' . $prev_title . '">';
				$prev_url = $prev_page->url();
				echo '<link rel="prev" href="' . $prev_url . '">';
			}
		}
	}
	else {
		if($page->hasNextVisible()) {
			echo '<link rel="next" href="' . $page->nextVisible()->url() . '" title="' . $page->nextVisible()->title()->smartypants() . '">';
		}
		if($page->hasPrevVisible()) {
			echo '<link rel="prev" href="' . $page->prevVisible()->url() . '" title="' . $page->prevVisible()->title()->smartypants() . '">';
		}
	}
}

?>
