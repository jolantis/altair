<?php snippet_detect('html_head', array(
	'criticalcss' => false
));

// Check if pagination is set
$pagination = (c::get('pagination.' . $page->intendedTemplate()) == false) ? false : true;
?>

	<?php snippet('banner'); ?>

	<main role="main" class="contain-padding">

		<div class="copy">

			<h1><?php echo $page->title()->smartypants()->widont(); ?></h1>

			<?php echo $page->intro()->kirbytext(); ?>

			<?php echo $page->text()->kirbytext(); ?>

			<?php $planets = ($pagination) ? $page->children()->visible()->paginate(c::get('pagination.' . $page->intendedTemplate())) : $page->children()->visible(); ?>
			<ul>
				<?php foreach($planets as $planet): ?>
					<li><a href="<?php echo url($planet->url()); ?>"><?php echo $planet->title()->smartypants(); ?></a></li>
				<?php endforeach; ?>
			</ul>

		</div>

		<?php if($pagination == true): ?>
			<?php snippet('nav_pagination', array('pagination' => $planets->pagination(), 'start_end' => true, 'range' => 3, 'mod_class' => 'pagination')); ?>
		<?php endif; ?>

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
