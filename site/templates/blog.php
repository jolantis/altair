<?php snippet('html-head', array(
	// 'criticalcss' => 'other_than_default',
)); ?>

	<?php snippet('banner'); ?>

	<main role="main" class="contain-padding">

		<h1 class="beta-heading space-trailer-m"><?php echo $page->title()->smartypants(); ?></h1>

		<?php snippet('filters', array('filter_key' => 'tags')); ?>

		<div class="grid grid--gutter space-leader-m">
			<?php foreach ($page_items as $page_item) : ?>

				<?php $page_item_image = ($page_item->images()->filterBy('filename','*=','main')->first()) ? $page_item->images()->filterBy('filename','*=','main')->first() : $page_item->images()->sortBy('sort', 'asc')->first(); ?>

				<article class="grid__cell medium-1of2 space-trailer-l" id="<?php echo $page_item->slug(); ?>">
					<a href="<?php echo $page_item->url(); ?>" class="bg-image bg-image--link default-16by9 aligner">
						<?php // echo $page_item_image->imageset('grid'); ?>
						<?php echo $page_item_image->imageset('grid', ['output' => 'bgimage']); ?>
						<span class="bg-text aligner aligner--bottom">
							<h2 class="bg-text__title"><?php echo $page_item->title()->smartypants()->widont(); ?></h2>
							<p class="bg-text__meta"><?php snippet('datetime', ['relative' => true, 'page' => $page_item]); ?></p>
						</span>
					</a>
				</article>

			<?php endforeach; ?>
		</div>

	</main>

	<?php snippet('nav-pagination'); ?>

	<?php snippet('contentinfo'); ?>

<?php snippet('html-foot'); ?>
