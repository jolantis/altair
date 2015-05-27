<?php snippet_detect('html_head', array(
	'criticalcss' => 'home',
	'prev_next' => false,
	'prerender' => false
)); ?>

	<?php snippet('banner'); ?>

	<div <?php echo bgimage($page->images()->first(), array('width' => 100, 'class' => 'BgImage FluidEmbed--3by2 FluidEmbed--large16by9 FluidEmbed--huge2by1')); ?>></div>
	<noscript>
		<div style="background-image:url(<?php echo thumb($page->images()->first(), array(), false); ?>);" class="BgImage FluidEmbed--3by2 FluidEmbed--large16by9 FluidEmbed--huge2by1"></div>
	</noscript>

	<div class="ContainPadding">

		<main role="main" class="Copy u-spaceTrailerM">

			<h1><?php echo $page->title()->smartypants()->widont(); ?></h1>

			<?php echo $page->intro()->kirbytext(); ?>
			<?php echo $page->text()->kirbytext(); ?>

		</main>

		<?php snippet('share_page'); ?>

	</div>

<?php snippet_detect('footer'); ?>
