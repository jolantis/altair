<?php snippet_detect('html-head', array(
	// 'criticalcss' => 'other_than_default',
)); ?>

	<?php snippet('banner'); ?>

	<main role="main" class="contain-padding copy">

		<h1><?php echo $page->title()->smartypants()->widont(); ?></h1>

		<?php echo $page->text()->kirbytext(); ?>

	</main>

<?php snippet_detect('footer'); ?>
