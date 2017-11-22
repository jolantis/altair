<?php ///////////////////////////////////////////////////////
// ----------------------------------------------------------
// SNIPPET
// ----------------------------------------------------------
////////////////////////////////////////////////////////// ?>

<ul class="nav breadcrumb contain-padding">
	<?php foreach($site->breadcrumb() as $page): ?>
		<?php if ($page->isActive()): ?>
		<?php continue; else: ?>
			<?php if($filter_key && $filter_value && $page == 'blog' && ($site->url() . '/' . kirby()->request()->path() != site()->errorPage()->url())): ?>
				<li><a href="<?php echo url($page->url() . '/' . (($filter_key == 'tags') ? 'tag' : $filter_key) . '/' . $filter_value); ?>" class="link link--no-history"><?php echo $page->title()->smartypants(); ?></a></li>
			<?php else: ?>
				<li><a href="<?php echo $page->url(); ?>" class="link link--no-history"><?php echo $page->title()->smartypants(); ?></a></li>
			<?php endif; ?>
		<?php endif; ?>
	<?php endforeach; ?>
</ul>
