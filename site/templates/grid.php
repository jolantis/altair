<?php snippet_detect('html-head', array(
	// 'criticalcss' => 'other_than_default',
)); ?>

	<?php snippet('banner'); ?>

	<main role="main" class="space-trailer-l">

		<div class="copy copy--contain space-trailer-l">
			<h1><?php echo $page->title()->smartypants()->widont(); ?></h1>

			<?php echo $page->intro()->kirbytext(); ?>
			<?php echo $page->text()->kirbytext(); ?>
		</div>

		<section aria-labelledby="block-grid" class="contain-padding">
			<h2 id="block-grid" class="space-trailer-m">Block grid &lsquo;grid&rsquo;</h2>

			<div class="block-grid block-grid--gutter compact-2col medium-3to1 large-4col">

				<div class="block-grid__cell cell-1">

					<p class="space-trailer-m"><strong>BlockGrid column I</strong>: etiam commodo fermentum imperdiet. Aliquam non velit ac nisi sollicitudin suscipit id et eros. Cras sed erat eros, imperdiet cursus odio. Nunc et commodo.</p>

				</div>

				<div class="block-grid__cell cell-2">

					<p class="space-trailer-m"><strong>BlockGrid column II</strong>: nulla vestibulum magna quis eros accumsan in ultrices massa imperdiet. Curabitur at enim risus. Ut lacus nulla, tincidunt sit amet euismod eu, vehicula ut nisl. Duis a sapien.</p>

				</div>

				<div class="block-grid__cell cell-3">

					<p class="space-trailer-m"><strong>BlockGrid column III</strong>: nulla vestibulum magna quis eros accumsan in ultrices massa imperdiet. Curabitur at enim risus. Ut lacus nulla, tincidunt sit amet euismod eu, vehicula ut nisl. Duis a sapien.</p>

				</div>

				<div class="block-grid__cell cell-4">

					<p class="space-trailer-m"><strong>BlockGrid column IV</strong>: nulla vestibulum magna quis eros accumsan in ultrices massa imperdiet. Curabitur at enim risus. Ut lacus nulla, tincidunt sit amet euismod eu, vehicula ut nisl. Duis a sapien.</p>

				</div>

			</div>
		</section>

		<section aria-labelledby="grid-grid" class="contain-padding">
			<h2 id="grid-grid" class="space-trailer-m">Grid &lsquo;grid&rsquo;</h2>

			<div class="grid grid--gutter">

				<div class="grid__cell small-1of1 compact-1of2 medium-1of4 wide-2of6">

					<p class="space-trailer-m"><strong>Grid column I</strong>: etiam commodo fermentum imperdiet. Aliquam non velit ac nisi sollicitudin suscipit id et eros. Cras sed erat eros, imperdiet cursus odio. Nunc et commodo.</p>

				</div>

				<div class="grid__cell small-1of1 compact-1of2 medium-1of4 wide-2of6">

					<p class="space-trailer-m"><strong>Grid column II</strong>: nulla vestibulum magna quis eros accumsan in ultrices massa imperdiet. Curabitur at enim risus. Ut lacus nulla, tincidunt sit amet euismod eu, vehicula ut nisl. Duis a sapien.</p>

				</div>

				<div class="grid__cell small-1of1 compact-1of2 medium-1of4 wide-1of6">

					<p class="space-trailer-m"><strong>Grid column III</strong>: nulla vestibulum magna quis eros accumsan in ultrices massa imperdiet. Curabitur at enim risus. Ut lacus nulla, tincidunt sit amet euismod eu, vehicula ut nisl. Duis a sapien.</p>

				</div>

				<div class="grid__cell small-1of1 compact-1of2 medium-1of4 wide-1of6">

					<p class="space-trailer-m"><strong>Grid column IV</strong>: nulla vestibulum magna quis eros accumsan in ultrices massa imperdiet. Curabitur at enim risus. Ut lacus nulla, tincidunt sit amet euismod eu, vehicula ut nisl. Duis a sapien.</p>

				</div>

			</div>
		</section>

	</main>

	<?php snippet('share-page'); ?>

<?php snippet_detect('footer'); ?>
