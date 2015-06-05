<?php snippet_detect('html_head', array(
	'criticalcss' => false,
	'prev_next' => true,
	'prerender' => true
)); ?>

	<?php snippet('banner'); ?>

	<main role="main" class="ContainPadding">

		<?php snippet('breadcrumb'); ?>

		<article class="Copy u-spaceLeaderM">

			<h1><?php echo $page->title()->smartypants()->widont(); ?></h1>

			<?php if($page->date($format=true)): ?>
				<p><small><?php snippet('datetime'); ?></small></p>
			<?php endif; ?>

			<?php echo $page->intro()->kirbytext(); ?>
			<?php echo $page->text()->kirbytext(); ?>

			<!-- start: load photos from folder -->
			<?php if($page->hasImages()) : ?>

				<h2>Photo(s) form page</h2>

				<?php foreach($page->images() as $image): ?>
					<?php $caption = $image->caption() == '' ? $image->title() : ''; ?>
					<?php echo figure($image, array('caption' => $caption)); ?>
				<?php endforeach; ?>

			<?php endif; ?>
			<!-- end -->

			<?php snippet('share_page'); ?>

		</article>

		<?php snippet('nav_sub'); ?>

	</main>

<?php snippet_detect('footer'); ?>
