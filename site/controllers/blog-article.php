<?php
return function($site, $pages, $page, $args) {

	// First unset (remove) filter (key-value pair) cookies
	// if referer url does not contain 'blog'!
	if(!str::contains(kirby()->request()->referer(), 'blog')) {
		$filter_key = false; cookie::remove('filter_key');
		$filter_value = false; cookie::remove('filter_value');
	}

	// Set defaults
	$page_num     = false;
	$pagination   = false;

	// Set key-value filter pair
	// $filter_key   = (isset($args['filter_key'])) ? ((($args['filter_key']) == 'tag') ? 'tags' : ($args['filter_key'])) : false;
	// $filter_value = (isset($args['filter_value'])) ? ($args['filter_value']) : false;
	$filter_key   = (cookie::exists('filter_key')) ? cookie::get('filter_key') : false;
	$filter_value = (cookie::exists('filter_value')) ? cookie::get('filter_value') : false;

	// Fetch the basic set of pages
	$page_items   = ($filter_key && $filter_value) ? $page->siblings()->visible()->filterBy($filter_key, tagunslug($filter_value), ',') : $page->siblings()->visible();
	// $index      = $page_items->indexOf($page);

	# Filter by date to exclude future posts (on production only)
	if(c::get('environment') != 'local' && c::get('environment') !== 'stage') {
		$page_items = $page_items->filterBy('date', '<', time());
	}

	// Set next and prev (sibling) pages
	$prev = $page->prev_sibling($page_items);
	$next = $page->next_sibling($page_items);

	// // Go to error page
	// if($filter_key && $filter_value) {
	// 	if($page_items->count() == 0) go(site()->errorPage()->url(), 404);
	// }

	return compact('page_items', 'page_num', 'pagination', 'filter_key', 'filter_value', 'next', 'prev');

};
?>
