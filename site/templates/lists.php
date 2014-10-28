<?php snippet_detect('html_head', array(
	'criticalcss' => false,
	'prev_next' => false,
	'prerender' => false
)); ?>

	<?php snippet('banner'); ?>

	<main role="main" class="Container">

		<div class="Copy">

			<h1><?php echo $page->title()->smartypants()->widont(); ?></h1>

			<?php echo $page->intro()->kirbytext(); ?>
			<?php echo $page->text()->kirbytext(); ?>

		</div>

		<h2 class="BetaHeading u-spaceLeaderM">Icons list</h2>
		<ul class="IconList">
			<li>
				<span aria-hidden="true" class="Icon Icon--phone"></span>
				phone
			</li>
			<li>
				<span aria-hidden="true" class="Icon Icon--mobile"></span>
				smartphone
			</li>
			<li>
				<span aria-hidden="true" class="Icon Icon--mouse"></span>
				mouse
			</li>
			<li>
				<span aria-hidden="true" class="Icon Icon--address"></span>
				roadsign
			</li>
			<li>
				<span aria-hidden="true" class="Icon Icon--paper-plane"></span>
				mail (paper plane)
			</li>
			<li>
				<span aria-hidden="true" class="Icon Icon--pencil"></span>
				write
			</li>
			<li>
				<span aria-hidden="true" class="Icon Icon--attach"></span>
				attachment
			</li>
			<li>
				<span aria-hidden="true" class="Icon Icon--facebook"></span>
				facebook
			</li>
		</ul>

		<h2 class="BetaHeading u-spaceLeaderM">Icons alone</h2>
		<a href="#" class="IconAlone u-spaceTrailerM">
			<span aria-hidden="true" class="Icon Icon--fixedWidth Icon--facebook"></span>
			<span class="is-hiddenVisually">Facebook</span>
		</a>
		<a href="#" class="IconAlone">
			<span aria-hidden="true" class="Icon Icon--fixedWidth Icon--paper-plane"></span>
			<span class="is-hiddenVisually">Email</span>
		</a>
		<a href="#" class="IconAlone">
			<span aria-hidden="true" class="Icon Icon--fixedWidth Icon--phone"></span>
			<span class="is-hiddenVisually">Smartphone</span>
		</a>
		<a href="#" class="IconAlone">
			<span aria-hidden="true" class="Icon Icon--fixedWidth Icon--pencil"></span>
			<span class="is-hiddenVisually">Write</span>
		</a>
		<a href="#" class="IconAlone">
			<span aria-hidden="true" class="Icon Icon--fixedWidth Icon--mobile"></span>
			<span class="is-hiddenVisually">Smartphone</span>
		</a>
		<a href="#" class="IconAlone">
			<span aria-hidden="true" class="Icon Icon--fixedWidth Icon--attach"></span>
			<span class="is-hiddenVisually">Attachment</span>
		</a>

		<h2 class="BetaHeading u-spaceLeaderM">Block link list</h2>
		<div class="BlockLink u-spaceTrailerM">
			<h3><a href="<?php echo url('base.php'); ?>">Base</a></h3>
			<p>A long list of all base elements and their styling</p>
			<a href="<?php echo url('base.php'); ?>" class="BlockLink-nestedLink">Visit the Base page</a>
		</div>
		<div class="BlockLink u-spaceTrailerM">
			<h3><a href="<?php echo url('grid.php'); ?>">Grid</a></h3>
			<p>Examples of the Altair grid system</p>
			<a href="<?php echo url('grid.php'); ?>" class="BlockLink-nestedLink">Visit the Grid page</a>
		</div>
		<div class="BlockLink u-spaceTrailerM">
			<h3><a href="<?php echo url('javascript.php'); ?>">Javascript</a></h3>
			<p>Some nifty javascript magic</p>
			<a href="<?php echo url('javascript.php'); ?>" class="BlockLink-nestedLink">Visit the Javascript page</a>
		</div>

		<?php snippet('share_page'); ?>

	</main>

<?php snippet_detect('footer'); ?>
