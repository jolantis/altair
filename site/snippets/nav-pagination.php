<?php ///////////////////////////////////////////////////////
// ----------------------------------------------------------
// SNIPPET
// ----------------------------------------------------------
////////////////////////////////////////////////////////// ?>

<?php if($pagination && $pagination->hasPages()): ?>
	<div role="navigation" class="pagination contain-padding">
		<?php /* <h2 class="is-hidden-visually">Page navigation</h2> */ ?>

		<p class="pagination__count">
			<strong><?php echo $pagination->items(); ?></strong> results / showing <strong><?php echo $pagination->numStart(); ?></strong> &ndash; <strong><?php echo ($pagination->items() < $pagination->numEnd()) ? $pagination->items() : $pagination->numEnd(); ?></strong>
		</p>

		<ul class="pagination__list">
			<?php if($pagination->hasPrevPage()): ?>
				<li class="pagination__item pagination__item--newer">
					<?php if($page_num == 2): ?>
						<a href="<?php echo url(kirby()->request()->path()->first() . (($filter_value) ? '/' . (($filter_key == 'tags') ? 'tag' : $filter_key) . '/' . $filter_value : '')); ?>">
					<?php else: ?>
						<a href="<?php echo url(kirby()->request()->path()->first() . (($filter_value) ? '/' . $filter_value : '') . '/page/' . ($page_num - 1)); ?>">
					<?php endif; ?>
							Previous page
						</a>
				</li>
			<?php endif; ?>

			<?php if($pagination->hasNextPage()): ?>
				<li class="pagination__item pagination__item--older">
					<a href="<?php echo url(kirby()->request()->path()->first() . (($filter_value) ? '/' . (($filter_key == 'tags') ? 'tag' : $filter_key) . '/' . $filter_value : '') . '/page/' . ($page_num + 1)); ?>">
						Next page
					</a>
				</li>
			<?php endif; ?>
		</ul>
	</div>
<?php endif; ?>
