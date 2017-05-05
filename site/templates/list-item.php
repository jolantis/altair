<?php snippet_detect('html-head', array(
	// 'criticalcss' => 'other_than_default',
	'prev_next' => true
)); ?>

	<?php snippet('banner'); ?>

	<main role="main" class="copy copy--contain space-trailer-l">

		<h1>Planet: <?php echo $page->title()->smartypants()->widont(); ?></h1>

		<?php echo $page->intro()->kirbytext(); ?>
		<?php echo $page->text()->kirbytext(); ?>

		<?php if($page->tags()->isNotEmpty()): ?>
			<p>
				<strong>Tagged with: </strong>
				<?php $i = 0; foreach($tags = str::split($page->tags(),',') as $tag): ?>
					<a href="<?php echo $page->parent()->url().'/tags:'.tagslug($tag); ?>"><?php echo $tag; ?></a><?php if($i < (count($tags) -1)): echo '<span>,</span> '; endif; ?>
				<?php $i++; endforeach; ?>
			</p>
		<?php endif; ?>

		<p>Content taken from: <a href="http://starwars.wikia.com">Wookiepedia</a></p>

	</main>

	<?php snippet('nav-prevnext', array('back_to_overview_url' => back_to_overview_url($page, 'asc'))); ?>
	<?php snippet('share-page'); ?>

<?php snippet_detect('footer'); ?>
