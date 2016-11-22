<?php snippet_detect('html-head', array(
	// 'criticalcss' => 'other_than_default',
)); ?>

	<?php snippet('banner'); ?>

	<main role="main" class="contain-padding space-trailer-l">

		<div class="copy">

			<h1><?php echo $page->title()->smartypants()->widont(); ?></h1>

			<?php echo $page->text()->kirbytext(); ?>

			<!-- Inline alert example -->
			<div class="alert alert--inline space-trailer-m js-dismissable">
				<div class="alert__message">
					<p>This is an inline alert example&hellip; you can close me!</p>
				</div>
				<button type="button" class="alert__close" data-dismiss="alert" aria-hidden="true" role="presentation">&times;</button>
			</div>

		</div>

		<?php // snippet('contactform'); // SENDMAIL OR POSTFIX NEEDS TO BE INSTALLED AND CONFIGURED TO MAKE USE OF THE CONTACT FORM!!! ?>

	</main>

	<h3 class="beta-heading contain">Leafletjs map</h3>
	<?php snippet('map-leafletjs'); ?>

	<h3 class="beta-heading contain space-leader-m">Google map</h3>
	<?php snippet('map-google'); ?>

<?php snippet_detect('footer'); ?>
