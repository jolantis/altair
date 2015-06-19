<?php snippet_detect('html_head', array(
	'criticalcss' => false,
	'prev_next' => false,
	'prerender' => false
)); ?>

	<?php snippet('banner'); ?>

	<main role="main" class="Contain u-spaceTrailerL">

		<div class="Copy">

			<h1><?php echo $page->title()->smartypants()->widont(); ?></h1>

			<?php echo $page->text()->kirbytext(); ?>

			<!-- Inline Alert example -->
			<div class="Alert Alert--inline u-spaceTrailerM js-dismissable">
				<div class="Alert-message">
					<p>This is an inline alert example&hellip; you can close me!</p>
				</div>
				<button type="button" class="Alert-close" data-dismiss="Alert" aria-hidden="true" role="presentation">&times;</button>
			</div>

		</div>

		<?php snippet('contactform'); ?>

	</main>

	<h3 class="BetaHeading Contain">Leafletjs map</h3>
	<?php snippet('map_leafletjs'); ?>

	<h3 class="BetaHeading Contain u-spaceLeaderM">Google map</h3>
	<?php snippet('map_google'); ?>

<?php snippet_detect('footer'); ?>
