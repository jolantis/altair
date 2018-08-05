<?php snippet('html-head', array(
	// 'criticalcss' => 'other_than_default',
)); ?>

	<?php snippet('banner'); ?>

	<main role="main" class="copy copy--contain">

		<h1><?php echo $page->title()->smartypants()->widont(); ?></h1>

		<?php echo $page->text()->kirbytext(); ?>

	</main>

	<?php snippet('contentinfo'); ?>

<?php snippet('html-foot'); ?>
