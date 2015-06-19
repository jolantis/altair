<?php snippet_detect('html_head', array(
	'criticalcss' => false,
	'prev_next' => false,
	'prerender' => false
)); ?>

	<?php snippet('banner'); ?>

	<main role="main" class="Contain Copy">

		<h1><?php echo $page->title()->smartypants()->widont(); ?></h1>

		<?php if($page->date($format=true)): ?>
			<?php snippet('datetime'); ?>
		<?php endif; ?>

		<?php echo $page->intro()->kirbytext(); ?>
		<?php echo $page->text()->kirbytext(); ?>

		<?php snippet('nav_sub'); ?>

	</main>

<?php snippet_detect('footer'); ?>
