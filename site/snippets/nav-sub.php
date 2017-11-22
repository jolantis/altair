<?php ///////////////////////////////////////////////////////
// ----------------------------------------------------------
// SNIPPET
// ----------------------------------------------------------
/////////////////////////////////////////////////////////////

// Find the open/active page on the first level
$open  = $pages->findOpen();
$pages = ($open) ? $open->children()->visible() : false;

////////////////////////////////////////////////////////// ?>

<?php if($pages && $pages->count()): ?>
	<nav role="navigation" class="copy copy--contain">
		<h2>Sub navigation</h2>
		<ul class="list list--links">
			<?php foreach($pages as $page): ?>
				<li class="list__item"<?php echo ($page->isOpen()) ? ' aria-current="page"' : ''; ?>><a href="<?php echo $page->url(); ?>"><?php echo $page->title()->smartypants(); ?></a></li>
			<?php endforeach; ?>
		</ul>
	</nav>
<?php endif; ?>
