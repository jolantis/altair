<?php snippet_detect('html_head', array(
	'criticalcss' => false,
	'prev_next' => false,
	'prerender' => false
)); ?>

	<?php snippet('banner'); ?>

	<main role="main" class="Contain Copy">

		<h1><?php echo $page->title()->smartypants()->widont(); ?></h1>

		<?php echo figure($page->images()->first(), array(
			'crop'       => true,
			'cropratio'  => '1/2',
			'quality'    => 78,
			'caption'    => 'This is an image defined in the template, from the figure plugin.',
			'alt'        => 'Alt text defined in template'
		)); ?>

		<?php echo $page->intro()->kirbytext(); ?>
		<?php echo $page->text()->kirbytext(); ?>

		<?php snippet('share_page'); ?>

	</main>

<?php snippet_detect('footer'); ?>
