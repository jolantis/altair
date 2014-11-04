<?php snippet_detect('html_head', array(
	'criticalcss' => false,
	'prev_next' => false,
	'prerender' => false
)); ?>

	<?php snippet('banner'); ?>

	<main role="main" class="ContainPadding">

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

<?php snippet_detect('footer'); ?>
