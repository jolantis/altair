<?php
return function($site, $pages, $page, $args) {

	// Set defaults
	$page_num            = (isset($args['page_num'])) ? ($args['page_num']) : 1;
	$pagination          = (c::get('pagination.' . $page->intendedTemplate()) == false) ? false : true;
	$pagination_filtered = (c::get('pagination.filtered') == true) ? true : false;

	// Set key-value filter pair
	$filter_key          = (isset($args['filter_key'])) ? ((($args['filter_key']) == 'tag') ? 'tags' : ($args['filter_key'])) : false;
	$filter_value        = (isset($args['filter_value'])) ? ($args['filter_value']) : false;

	# Set (or remove) filter (key-value pair) cookies
	($filter_key && $filter_value) ? cookie::set('filter_key', $filter_key, 0) : cookie::remove('filter_key');
	($filter_value && $filter_key) ? cookie::set('filter_value', $filter_value, 0) : cookie::remove('filter_value');

	// Fetch the basic set of pages
	$page_items          = $page->children()->visible()->flip();

	# If pagination
	if($pagination) {
		# If filter (key-value pair) is in url
		if($filter_value) {
			# If pagination is true for filtered set of page items
			if($pagination_filtered) {
				$page_items = $page_items->filterBy($filter_key, '==', tagunslug($filter_value), ',')->paginate(c::get('pagination.' . $page->intendedTemplate(), 10), array('page' => $page_num));
			}
			# Else...
			else {
				if($page_num and $page_num != 1) go(site()->errorPage()->url(), 404);

				$page_items = $page_items->filterBy($filter_key, '==', tagunslug($filter_value), ',');
			}

			// Go to error page
			if($page_items->count() == 0) go(site()->errorPage()->url(), 404);
		}
		# If no filter (key-value pair) is in url
		else {
			$page_items = $page_items->paginate(c::get('pagination.' . $page->intendedTemplate(), 10), array('page' => $page_num));
		}
	}
	# If no pagination
	else {
		if($filter_value) {
			$page_items = $page_items->filterBy($filter_key, '==', tagunslug($filter_value), ',');
		}
		$pagination = false;
	}

	# Filter by date to exclude future posts (on production only)
	if(c::get('environment') != 'local' && c::get('environment') != 'stage') {
		$page_items = $page_items->filterBy('date', '<', time());
	}

	# Set pagination
	$pagination = $page_items->pagination();

	return compact('page_items', 'page_num', 'pagination', 'filter_key', 'filter_value');

};
?>
