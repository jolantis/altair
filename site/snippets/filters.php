<?php ///////////////////////////////////////////////////////
// ----------------------------------------------------------
// SNIPPET
// ----------------------------------------------------------
/////////////////////////////////////////////////////////////

// Get (as passed `filter_items` variable) or otherwise fetch all (visible) page items
$page_items = (isset($filter_items)) ? $filter_items : $page->children()->visible();

// Fetch filter values (e.g. tags), seperated by comma, associated to blog posts
$filter_values = $page_items->pluck($filter_key, ',', true);

// Get (as passed `sort` variable) sort order ('count' or 'abc')
$sort = (isset($sort)) ? $sort : false;

// Sort all filter values (e.g. tags) by the number of instances of each filter value
if($sort == 'count') {
	usort($filter_values, function($a, $b) use($page_items, $filter_key) {
		$aCount = $page_items->filterBy($filter_key, $a, ',')->count();
		$bCount = $page_items->filterBy($filter_key, $b, ',')->count();
		return strcmp($bCount, $aCount);
	});
}

// Sort filter values (e.g. tags) alphabetical
if($sort == 'abc') {
	sort($filter_values);
}

////////////////////////////////////////////////////////// ?>

<?php if($filter_values): ?>
	<div class="filters">
		<h2 class="is-hidden-visually">Filter blog posts by&hellip;</h2>
		<ul class="filterlist">
			<?php if($filter_value): ?>
				<li class="filterslist__item is-active">
					<a href="<?php echo $page->url(); ?>" class="filterlist__button" title="Remove filter: &lsquo;<?php echo tagunslug($filter_value); ?>&rsquo;">
						<span class="is-hidden-visually">Remove filter: </span>
						<?php echo tagunslug($filter_value); ?> &times;
					</a>
				</li>
			<?php endif; ?>

			<?php foreach($filter_values as $filter_item): ?>

				<?php $page_items_count = $page_items->filterBy($filter_key, '==', tagunslug($filter_item), ',')->count(); // Associated number count of blog posts for the current filter value ?>

				<?php if(!$filter_value || $filter_value != tagslug($filter_item)): ?>
					<li class="filterslist__item">
						<a href="<?php echo url($page->url() . '/' . (($filter_key == 'tags') ? 'tag' : $filter_key) . '/' . tagslug($filter_item)) ?>" class="filterlist__button" title="Add filter: &lsquo;<?php echo html($filter_item); ?>&rsquo;"><?php echo html($filter_item . ' [<small>' . $page_items_count . '</small>]'); ?></a>
					</li>
				<?php endif; ?>

			<?php endforeach; ?>
		</ul>
	</div>
<?php endif; ?>
