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
				<figure>
					<?php if($image->caption()=='') {
						$imageAlt = $image->title();
					} else {
						$imageAlt = '';
					} ?>
					<?php echo thumb($image, array('width' => 450, 'height' => 450, 'hd' => false, 'crop' => true, 'alt' => $imageAlt)); ?>
					<!-- <img src="<?php echo $image->url(); ?>" alt="<?php echo $image->title(); ?>" /> -->
					<!-- <img src="http://photos.artlantis.nl/2012/<?php echo $image->title(); ?>.jpg" alt="<?php echo $image->title(); ?>" /> -->
					<?php if($image->caption()!='') : ?>
					<figcaption>
						<p><?php echo $image->caption(); ?></p>
					</figcaption>
					<?php endif; ?>
				</figure>
				<?php endforeach; ?>

			<?php endif; ?>
			<!-- end -->

			<?php snippet('share_page'); ?>

		</article>

		<?php snippet('nav_sub'); ?>

	</main>

<?php snippet_detect('footer'); ?>
