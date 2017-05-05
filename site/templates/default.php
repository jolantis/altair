<?php snippet_detect('html-head', array(
	// 'criticalcss' => 'other_than_default',
)); ?>

	<?php snippet('banner'); ?>

	<!-- Background image example  -->
	<?php
		// echo bgimage($page->images()->first(), array(
		// 	'width'     => 1200,
		// 	'cropratio' => 2/3,
		// 	'class'     => 'bg-image default-3by2 large-16by9 huge-2by1'
		// ));
	?>

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

	<?php snippet('share-page'); ?>

<?php snippet_detect('footer'); ?>
