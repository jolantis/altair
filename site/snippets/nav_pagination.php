<?php ///////////////////////////////////////////////////////
// ----------------------------------------------------------
// SNIPPET
// ----------------------------------------------------------
// Example embed code:
// 1)
//   $projects = $page->children()->visible()->flip()->paginate(24);
// 2)
//   snippet('nav_pagination', array('pagination' => $projects->pagination(), 'start_end' => true, 'range' => 5));
// ----------------------------------------------------------
////////////////////////////////////////////////////////// ?>

<div class="Pagination">

	<p class="Pagination-count">
		<strong><?php echo $pagination->items(); ?></strong> results / showing <strong><?php echo $pagination->numStart(); ?></strong> &ndash; <strong><?php echo ($pagination->items() < $pagination->numEnd()) ? $pagination->items() : $pagination->numEnd(); ?></strong>
	</p>

	<?php if($pagination->countItems() > $pagination->limit()): ?>
	<nav role="navigation" class="Pagination-nav">
		<h2 class="is-hiddenVisually">Page navigation</h2>
		<ul>
			<?php if(isset($start_end) && $start_end == true): ?>
				<?php if(!$pagination->isFirstPage()): ?>
					<li class="Pagination-item">
						<a href="<?php echo $pagination->firstPageURL(); ?>">&larr;&larr; First page</a>
					</li>
				<?php else: ?>
					<li class="Pagination-item">
						<span class="Pagination-newest">(&larr;&larr; First page)</span>
					</li>
				<?php endif; ?>
			<?php endif; ?>

			<?php if($pagination->hasPrevPage()): ?>
				<li class="Pagination-item">
					<a href="<?php echo $pagination->prevPageURL(); ?>">&larr; Prev page</a>
				</li>
			<?php else: ?>
				<li class="Pagination-item">
					<span>(&larr; Prev page)</span>
				</li>
			<?php endif; ?>

			<?php if(isset($range) && $range != false && $pagination->items() > 1): ?>
				<li class="PaginationRange">
					<ul>
					<?php foreach($pagination->range($range=$range) as $range_num): ?>
						<li class="PaginationRange-item<?php if($pagination->page() == $range_num) echo ' is-active' ?>">
							<a href="<?php echo $pagination->pageURL($range_num) ?>"><?php echo $range_num ?></a>
						</li>
					<?php endforeach ?>
					</ul>
				</li>
			<?php endif; ?>

			<?php if($pagination->hasNextPage()): ?>
				<li class="Pagination-item">
					<a href="<?php echo $pagination->nextPageURL(); ?>">Next page &rarr;</a>
				</li>
			<?php else: ?>
				<li class="Pagination-item">
					<span>(Next page &rarr;)</span>
				</li>
			<?php endif; ?>

			<?php if(isset($start_end) && $start_end == true): ?>
				<?php if(!$pagination->isLastPage()): ?>
					<li class="Pagination-item">
						<a href="<?php echo $pagination->lastPageURL() ?>" class="Pagination-oldest">Last page &rarr;&rarr;</a>
					</li>
				<?php else: ?>
					<li class="Pagination-item">
						<span class="Pagination-oldest">(Last page &rarr;&rarr;)</span>
					</li>
				<?php endif; ?>
			<?php endif; ?>
		</ul>

	</nav>
	<?php endif; ?>

</div>
