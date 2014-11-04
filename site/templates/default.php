<?php snippet_detect('html_head', array(
	'criticalcss' => 'home',
	'prev_next' => false,
	'prerender' => false
)); ?>

	<?php snippet('banner'); ?>

	<div class="CoverImage FluidEmbed FluidEmbed--3by2 FluidEmbed--compact16by9 FluidEmbed--medium2by1 FluidEmbed--large3by1"
		style="background-image: url('<?php echo page('home')->images()->shuffle()->first()->url(); ?>')">
	</div>

	<div class="ContainPadding">

		<main role="main" class="Copy u-spaceTrailerM">

			<h1><?php echo $page->title()->smartypants()->widont(); ?></h1>

			<?php echo $page->intro()->kirbytext(); ?>
			<?php echo $page->text()->kirbytext(); ?>

		</main>

		<?php snippet('share_page'); ?>

	</div>

<?php snippet_detect('footer'); ?>
