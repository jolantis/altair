<?php snippet_detect('html-head', array(
	// 'criticalcss' => 'other_than_default',
)); ?>

	<?php snippet('banner'); ?>

	<main role="main" class="contain-padding copy">

		<h1><?php echo $page->title()->smartypants()->widont(); ?></h1>

		<?php if($page->date($format=true)): ?>
			<?php snippet('datetime'); ?>
		<?php endif; ?>

		<?php echo $page->intro()->kirbytext(); ?>
		<?php echo $page->text()->kirbytext(); ?>

		<?php snippet('nav-sub'); ?>

	</main>

<?php snippet_detect('footer'); ?>
