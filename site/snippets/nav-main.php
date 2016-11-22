<?php ///////////////////////////////////////////////////////
// ----------------------------------------------------------
// SNIPPET
// ----------------------------------------------------------
////////////////////////////////////////////////////////// ?>

<nav role="navigation" id="nav-main" class="nav-main js-nav-main">
	<h2 class="is-hidden-visually">Main navigation</h2>
	<ul class="nav-main__list">
		<li class="nav-main__item"><a rel="home" href="<?php echo $site->url(); ?>">Home</a></li>
		<?php foreach($pages->visible() as $page): ?>
			<li class="nav-main__item<?php echo ($page->isOpen()) ? ' is-active' : ''; ?>"><a href="<?php echo $page->url(); ?>"><?php echo $page->title()->smartypants(); ?></a></li>
		<?php endforeach; ?>
	</ul>
	<a href="#page-top" class="nav-main-toggle nav-main-toggle--close js-nav-main-hide">Back to top</a>
</nav>
