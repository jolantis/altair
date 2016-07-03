<?php ///////////////////////////////////////////////////////
// ----------------------------------------------------------
// SNIPPET
// ----------------------------------------------------------

// If there is a param in the url
if(param()) {

	// Get the first key of the param array, but when the first key in url is `tag` (singular), make sure to use `tags` (plural; used in the text files) as the key value!
	$paramkey = (key(param()) == 'tag') ? 'tags' : key(param());

	// Unslug the param to a tag
	$paramvalue = tagunslug(param(key(param())));

	// Save param and tag for use in URL
	$paramurl = key(param()) . ':' . param(key(param()));

	// Filter projects by param
	$page_items = $page->siblings()->visible()->filterBy($paramkey, ($paramvalue), ',')->flip();

	$lookup_page = [];
	$i = 0;

	// Build an array with all project id's of the filtered projects
	foreach($page_items as $page_item) {
		$lookup_page[$i] = $page_item->id();
		$i++;
	}

	// return the key of the array where the current page is located
	$current_page_index = array_search($page->id(), $lookup_page);

	if(isset($current_page_index)) {
		// If the current page is not the first of the filtered list
		if($current_page_index > 0) {
			$next_page = page($lookup_page[$current_page_index - 1]);
			$next_title = $next_page->title();
			$next_url = $next_page->url() . '/' . $paramurl;
			$has_next = true;
		}
		else {
			$has_next = false;
		}
		// If the current page is not the last of the filtered list
		if(($current_page_index + 1) < count($lookup_page)) {
			$prev_page = page($lookup_page[$current_page_index + 1]);
			$prev_title = $prev_page->title();
			$prev_url = $prev_page->url() . '/' . $paramurl;
			$has_prev = true;
		}
		else {
			$has_prev = false;
		}
	}
}
// There is no param in the url
else {
	$has_prev = $page->hasPrevVisible();
	$prev_title = ($page->hasPrevVisible()) ? $page->prevVisible()->title() : false;
	$prev_url = ($page->hasPrevVisible()) ? $page->prevVisible()->url() : false;

	$has_next = $page->hasNextVisible();
	$next_title = ($page->hasNextVisible()) ? $page->nextVisible()->title() : false;
	$next_url = ($page->hasNextVisible()) ? $page->nextVisible()->url() : false;
}
////////////////////////////////////////////////////////// ?>

<?php if($has_prev || $has_next): ?>
<nav role="navigation" class="pagination">
	<h2 class="is-hidden-visually">Next/previous navigation</h2>
	<ul>
		<?php if($has_next): ?>
			<li class="pagination__newer<?php if($has_prev == false): echo ' pagination__newer--first'; endif; ?>">
				<a href="<?php echo $next_url; ?>"><?php echo $next_title; ?></a> &rarr;
			</li>
		<?php endif; ?>
		<?php if($has_prev): ?>
			<li class="pagination__older<?php if($has_next == false): echo ' pagination__older--first'; endif; ?>">
				&larr; <a href="<?php echo $prev_url; ?>"><?php echo $prev_title; ?></a>
			</li>
		<?php endif; ?>
	</ul>
</nav>
<?php endif; ?>
