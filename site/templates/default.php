<?php snippet_detect('html_head', array(
	'criticalcss' => 'home',
	'prev_next' => false,
	'prerender' => false
)); ?>

	<?php snippet('banner'); ?>

	<!-- Background image example  -->
	<?php echo bgimage($page->images()->first(), array(
		'width'     => 1200,
		'cropratio' => 2/3,
		'class'     => 'bg-image default-3by2 large-16by9 huge-2by1'
	)); ?>

	<div class="contain">

		<main role="main" class="copy u-spaceTrailerM">

			<h1><?php echo $page->title()->smartypants()->widont(); ?></h1>

			<?php echo $page->intro()->kirbytext(); ?>
			<?php echo $page->text()->kirbytext(); ?>

		</main>

		<?php snippet('share_page'); ?>

	</div>

<?php snippet_detect('footer'); ?>
