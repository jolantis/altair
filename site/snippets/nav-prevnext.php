<?php ///////////////////////////////////////////////////////
// ----------------------------------------------------------
// SNIPPET
// ----------------------------------------------------------
////////////////////////////////////////////////////////// ?>

<?php if($prev || $next): ?>
	<div role="navigation" class="pagination contain-padding">
		<?php /* <h2 class="is-hidden-visually">Page navigation</h2> */ ?>
		<ul class="pagination__list">
			<?php if($next): ?>
				<li class="pagination__item pagination__item--newer">
					<a href="<?php echo $next->url(); ?>">
						Newer post <em>(<?php echo $next->title()->smartypants(); ?>)</em>
					</a>
				</li>
			<?php endif ?>

			<?php if($prev): ?>
				<li class="pagination__item pagination__item--older">
					<a href="<?php echo $prev->url(); ?>">
						Older post <em>(<?php echo $prev->title()->smartypants(); ?>)</em>
					</a>
				</li>
			<?php endif ?>
		</ul>
	</div>
<?php endif; ?>
