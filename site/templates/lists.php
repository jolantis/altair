<?php snippet_detect('html_head', array(
	'criticalcss' => false,
	'prev_next' => false,
	'prerender' => false
)); ?>

	<?php snippet('banner'); ?>

	<main role="main" class="contain-padding">

		<div class="copy">

			<h1><?php echo $page->title()->smartypants()->widont(); ?></h1>

			<?php echo $page->intro()->kirbytext(); ?>
			<?php echo $page->text()->kirbytext(); ?>

		</div>

		<?php /*

		<h2 class="beta-heading space-leader-m">Icons list</h2>
		<ul>
			<li>
				<span aria-hidden="true" class="icon icon--phone"></span>
				phone
			</li>
			<li>
				<span aria-hidden="true" class="icon icon--mobile"></span>
				smartphone
			</li>
			<li>
				<span aria-hidden="true" class="icon icon--mouse"></span>
				mouse
			</li>
			<li>
				<span aria-hidden="true" class="icon icon--address"></span>
				roadsign
			</li>
			<li>
				<span aria-hidden="true" class="icon icon--paper-plane"></span>
				mail (paper plane)
			</li>
			<li>
				<span aria-hidden="true" class="icon icon--pencil"></span>
				write
			</li>
			<li>
				<span aria-hidden="true" class="icon icon--attach"></span>
				attachment
			</li>
			<li>
				<span aria-hidden="true" class="icon icon--facebook"></span>
				facebook
			</li>
		</ul>

		<h2 class="beta-heading space-leader-m">Icons alone</h2>
		<a href="#" class="space-trailer-m">
			<span aria-hidden="true" class="Icon Icon--fixed-width Icon--facebook"></span>
			<span class="is-hidden-visually">Facebook</span>
		</a>
		<a href="#">
			<span aria-hidden="true" class="icon icon--fixed-width icon--paper-plane"></span>
			<span class="is-hidden-visually">Email</span>
		</a>
		<a href="#">
			<span aria-hidden="true" class="icon icon--fixed-width icon--phone"></span>
			<span class="is-hidden-visually">Smartphone</span>
		</a>
		<a href="#">
			<span aria-hidden="true" class="icon icon--fixed-width icon--pencil"></span>
			<span class="is-hidden-visually">Write</span>
		</a>
		<a href="#">
			<span aria-hidden="true" class="icon icon--fixed-width icon--mobile"></span>
			<span class="is-hidden-visually">Smartphone</span>
		</a>
		<a href="#">
			<span aria-hidden="true" class="icon icon--fixed-width icon--attach"></span>
			<span class="is-hidden-visually">Attachment</span>
		</a>

		*/ ?>

		<h2 class="beta-heading space-leader-m">Block link list</h2>
		<div class="block-link space-trailer-m">
			<h3><a href="<?php echo url('base.php'); ?>">Base</a></h3>
			<p>A long list of all base elements and their styling</p>
			<a href="<?php echo url('base.php'); ?>" class="block-link__anchor">Visit the Base page</a>
		</div>
		<div class="block-link space-trailer-m">
			<h3><a href="<?php echo url('grid.php'); ?>">Grid</a></h3>
			<p>Examples of the Altair grid system</p>
			<a href="<?php echo url('grid.php'); ?>" class="block-link__anchor">Visit the Grid page</a>
		</div>
		<div class="block-link space-trailer-m">
			<h3><a href="<?php echo url('javascript.php'); ?>">Javascript</a></h3>
			<p>Some nifty javascript magic</p>
			<a href="<?php echo url('javascript.php'); ?>" class="block-link__anchor">Visit the Javascript page</a>
		</div>

		<?php snippet('share_page'); ?>

	</main>

<?php snippet_detect('footer'); ?>
