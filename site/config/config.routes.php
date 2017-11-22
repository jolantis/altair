<?php

/* -----------------------------------------------------------------------------
Routes
--------------------------------------------------------------------------------

Additional route setup for Kirby's internal router.

*/

c::set('routes', array(

	/**
	 * Redirect `/sitemap` to `/sitemap.xml`
	 */
	array(
		'pattern' => 'sitemap',
		'action'  => function() {
			return go('sitemap.xml');
		}
	),

	/**
	 * Redirect `/target/page` and `/target/page/1` to page `/target`
	 */
	array(
		'pattern' => array('(:any)/page', '(:any)/page/1'),
		'action'  => function($target) {

			$target_page = page($target);

			return go($target_page);
		}
	),

	/**
	 * Redirect `/target/filter-key/filter-value/page` and
	 * `/target/filter-key/filter-value/page/1` to page `/target/filter-key`
	 */
	array(
		'pattern' => array('(:any)/(:any)/(:any)/page', '(:any)/(:any)/(:any)/page/1'),
		'action'  => function($target, $filter_key, $filter_value) {

			$target_page = page($target);

			return go($target_page . (($filter_value) ? '/' . $filter_key . '/' . $filter_value : ''));
		}
	),

	/**
	 * Archive pagination (e.g. /target/page/2, /target/page/3, etc.)
	 */
	array(
		'pattern' => '(:any)/page/(:num)',
		'action'  => function($target, $page_num) {

			$args        = array('filter_key' => null, 'filter_value' => null, 'page_num' => $page_num);
			$target_page = page($target);

			if(!$target_page) {
				return site()->visit(site()->errorPage(), 404);
			}
			else {
				return array($target, $args);
			}
		}
	),

	/**
	 * Filter archive pages by filter-value (e.g. /target/filter-key/filter-value)
	 */
	array(
		'pattern' => '((?!thumbs)[a-zA-Z0-9\.\-_%=]+)/(:any)/(:any)',
		'action'  => function($target, $filter_key, $filter_value) {

			$args        = array('filter_key' => $filter_key, 'filter_value' => $filter_value, 'page_num' => null);
			$page        = page($target . '/' . $filter_key . ':' . $filter_value);
			$target_page = page($target);

			if(!$target_page) {
				return site()->visit(site()->errorPage(), 404);
			}
			else {
				if($page) {
					// If page actually exists then return it
					return site()->visit($page->uri());
				} else {
					// Otherwise probably a filter-value
					return array($target, $args);
				}
			}
		}
	),

	/**
	 * Filtered archive pages pagination (e.g. /target/filter-key/filter-value/page/2,
	 * /target/filter-key/filter-value/page/3, etc.)
	 */
	array(
		'pattern' => '(:any)/(:any)/(:any)/page/(:num)',
		'action'  => function($target, $filter_key, $filter_value, $page_num) {

			$args        = array('filter_key' => $filter_key, 'filter_value' => $filter_value, 'page_num' => $page_num);
			$target_page = page($target);

			if(!$target_page) {
				return site()->visit(site()->errorPage(), 404);
			}
			else {
				return array($target, $args);
			}
		}
	),

	// /**
	//  * Post items within filter-value (e.g. /target/filter-key/filter-value/post)
	//  */
	// array(
	// 	'pattern' => '((?!thumbs)[a-zA-Z0-9\.\-_%=]+)/(:any)/(:any)/(:any)',
	// 	'action'  => function($target, $filter_key, $filter_value, $post) {

	// 		$args        = array('filter_key' => $filter_key, 'filter_value' => $filter_value, 'page_num' => null);
	// 		$target_page = page($target);

	// 		if(isset($post)) {
	// 			$page = page($target . '/' . $post);
	// 			if(!$page) $page = go(site()->errorPage(), 404);
	// 			return array($target . '/'. $post, $args);
	// 		}

	// 		// If page actually exists then return it
	// 		if($page) return site()->visit($page->uri());

	// 		// Otherwise probably a filter-value
	// 		return array($target, $args);
	// 	}
	// ),

));
