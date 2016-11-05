<?php snippet_detect('html_head', array(
	// 'criticalcss' => 'other_than_default',
	'prev_next' => true
)); ?>

	<?php snippet('banner'); ?>

	<!-- Background image example  -->
	<?php echo bgimage($page->images()->first(), array(
		'width'     => 1200,
		'cropratio' => 2/3,
		'class'     => 'bg-image default-3by2 large-16by9 huge-2by1'
	)); ?>

	<div class="contain-padding">

		<main role="main" class="copy space-trailer-m">

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

		<?php snippet('nav_prevnext', array('back_to_overview_url' => back_to_overview_url($page, 'asc'))); ?>

		<?php snippet('share_page'); ?>

	</div>

<?php snippet_detect('footer'); ?>
