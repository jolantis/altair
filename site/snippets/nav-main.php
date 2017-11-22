<?php ///////////////////////////////////////////////////////
// ----------------------------------------------------------
// SNIPPET
// ----------------------------------------------------------
////////////////////////////////////////////////////////// ?>

<nav role="navigation" id="nav-main" class="nav-main js-nav-main">
	<h2 class="is-hidden-visually">Main navigation</h2>
	<ul class="nav-main__list">

		<li class="nav-main__item"<?php echo (page() == 'home' && !str::contains(kirby()->request()->path(), 'tag')) ? ' aria-current="page"' : ''; ?>><a rel="home" href="<?php echo $site->url(); ?>">Home</a></li>

		<?php foreach($pages->visible()->not() as $page): ?>
			<?php /* if($filter_key && $filter_value && $page == 'blog' && ($site->url() . '/' . kirby()->request()->path() != site()->errorPage()->url())): */ ?>
			<?php if($filter_key && $filter_value && $page == 'blog' && ($site->url() . '/' . kirby()->request()->path() != site()->errorPage()->url())): ?>
				<li class="nav-main__item"<?php echo (str::contains(kirby()->request()->path(), 'tag')) ? ' aria-current="page"' : ''; ?>><a href="<?php echo url($page->url() . '/' . (($filter_key == 'tags') ? 'tag' : $filter_key) . '/' . $filter_value); ?>"><?php echo $page->title()->smartypants(); ?></a></li>
			<?php else: ?>
				<li class="nav-main__item"<?php echo ($page->isOpen() && !kirby()->request()->path()->nth(1)) ? ' aria-current="page"' : ''; ?>><a href="<?php echo $page->url(); ?>"><?php echo $page->title()->smartypants(); ?></a></li>
			<?php endif; ?>
		<?php endforeach; ?>

	</ul>
	<a href="#page-top" class="nav-main-toggle nav-main-toggle--close js-nav-main-hide">Back to top</a>
</nav>
