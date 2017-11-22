<?php
return function($site, $pages, $page, $args) {

	// Set defaults
	$page_num     = false;
	$pagination   = false;

	// Fetch key-value filter pair
	$filter_key   = (cookie::exists('filter_key')) ? cookie::get('filter_key') : false;
	$filter_value = (cookie::exists('filter_value')) ? cookie::get('filter_value'): false;

	return compact('page_num', 'pagination', 'filter_key', 'filter_value');

};
?>
