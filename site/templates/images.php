<?php snippet('html-head', array('criticalcss' => 'images')); ?>

	<?php snippet('banner'); ?>

	<main role="main" class="copy copy--contain space-trailer-l">

		<h1><?php echo $page->title()->smartypants()->widont(); ?></h1>

		<?php
			// echo figure($page->images()->first(), array(
			// 	'crop'       => true,
			// 	'cropratio'  => '1/2',
			// 	'quality'    => 78,
			// 	'caption'    => 'This is an image defined in the template, from the figure plugin.',
			// 	'alt'        => 'Alt text defined in template'
			// ));
		?>

		<?php echo $page->intro()->kirbytext(); ?>
		<?php echo $page->text()->kirbytext(); ?>

	</main>

	<?php snippet('share-page'); ?>

	<?php snippet('contentinfo'); ?>

<?php snippet('html-foot'); ?>
