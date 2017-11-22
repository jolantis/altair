<?php snippet('html-head', array(
	// 'criticalcss' => 'other_than_default',
)); ?>

	<?php snippet('banner'); ?>

	<main role="main" class="copy copy--contain space-trailer-l">

		<h1><?php echo $page->title()->smartypants()->widont(); ?></h1>

		<!-- Imageset example  -->
		<?php if($page->hasImages()) : ?>

			<?php foreach($page->images()->shuffle()->limit(1) as $image): ?>
				<?php $caption = ($image->caption()->isNotEmpty()) ? $image->caption() : ''; ?>
				<figure class="figure-image">
					<?php //echo $image->imageset('default'); ?>
					<?php echo $image->imageset('default'); ?>
					<?php if($caption): ?>
						<figcaption><?php echo $caption->smartypants(); ?></figcaption>
					<?php endif; ?>
				</figure>
			<?php endforeach; ?>

		<?php endif; ?>

		<?php echo $page->intro()->kirbytext(); ?>
		<?php echo $page->text()->kirbytext(); ?>

	</main>

	<?php // snippet('share-page'); ?>

<?php snippet('footer'); ?>
