<?php ///////////////////////////////////////////////////////
// ----------------------------------------------------------
// SNIPPET
// ----------------------------------------------------------
// Example embed code:
// 1)
//   $projects = $page->children()->visible()->flip()->paginate(24);
// 2)
//   snippet('nav-pagination', array('pagination' => $projects->pagination(), 'start_end' => true, 'range' => 5));
// ----------------------------------------------------------
////////////////////////////////////////////////////////// ?>


<div class="pagination">

	<p class="pagination__count">
		<strong><?php echo $pagination->items(); ?></strong> results / showing <strong><?php echo $pagination->numStart(); ?></strong> &ndash; <strong><?php echo ($pagination->items() < $pagination->numEnd()) ? $pagination->items() : $pagination->numEnd(); ?></strong>
	</p>

	<?php if($pagination->countItems() > $pagination->limit()): ?>
	<nav role="navigation" class="pagination__nav">
		<h2 class="is-hidden-visually">Page navigation</h2>
		<ul>
			<?php if(isset($start_end) && $start_end == true): ?>
				<?php if(!$pagination->isFirstPage()): ?>
					<li class="pagination__item">
						<a href="<?php echo $pagination->firstPageURL(); ?>">&larr;&larr; First page</a>
					</li>
				<?php else: ?>
					<li class="pagination__item">
						<span class="pagination__newest">(&larr;&larr; First page)</span>
					</li>
				<?php endif; ?>
			<?php endif; ?>

			<?php if($pagination->hasPrevPage()): ?>
				<li class="pagination__item">
					<a href="<?php echo $pagination->prevPageURL(); ?>">&larr; Prev page</a>
				</li>
			<?php else: ?>
				<li class="pagination__item">
					<span>(&larr; Prev page)</span>
				</li>
			<?php endif; ?>

			<?php if(isset($range) && $range != false && $pagination->items() > 1): ?>
				<li class="pagination-range">
					<ul>
					<?php foreach($pagination->range($range=$range) as $range_num): ?>
						<li class="pagination-range__item<?php if($pagination->page() == $range_num) echo ' is-active' ?>">
							<a href="<?php echo $pagination->pageURL($range_num) ?>"><?php echo $range_num ?></a>
						</li>
					<?php endforeach ?>
					</ul>
				</li>
			<?php endif; ?>

			<?php if($pagination->hasNextPage()): ?>
				<li class="pagination__item">
					<a href="<?php echo $pagination->nextPageURL(); ?>">Next page &rarr;</a>
				</li>
			<?php else: ?>
				<li class="pagination__item">
					<span>(Next page &rarr;)</span>
				</li>
			<?php endif; ?>

			<?php if(isset($start_end) && $start_end == true): ?>
				<?php if(!$pagination->isLastPage()): ?>
					<li class="pagination__item">
						<a href="<?php echo $pagination->lastPageURL() ?>" class="pagination__oldest">Last page &rarr;&rarr;</a>
					</li>
				<?php else: ?>
					<li class="pagination__item">
						<span class="pagination__oldest">(Last page &rarr;&rarr;)</span>
					</li>
				<?php endif; ?>
			<?php endif; ?>
		</ul>

	</nav>
	<?php endif; ?>

</div>
