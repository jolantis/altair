<?php snippet_detect('html_head', array(
	'criticalcss' => false,
	'prev_next' => false,
	'prerender' => false
)); ?>

	<?php snippet('banner'); ?>

	<main role="main" class="Contain Copy">

		<h1><?php echo $page->title()->smartypants()->widont(); ?></h1>

		<?php echo $page->text()->kirbytext(); ?>

	</main>

<?php snippet_detect('footer'); ?>
