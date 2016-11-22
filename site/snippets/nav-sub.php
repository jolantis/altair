<?php ///////////////////////////////////////////////////////
// ----------------------------------------------------------
// SNIPPET
// ----------------------------------------------------------
/////////////////////////////////////////////////////////////

// Find the open/active page on the first level
$open  = $pages->findOpen();
$items = ($open) ? $open->children()->visible() : false;

////////////////////////////////////////////////////////// ?>

<?php if($items && $items->count()): ?>
	<nav role="navigation" class="copy">
		<h2>Sub navigation</h2>
		<ul class="list list--links">
			<?php foreach($items as $item): ?>
				<li class="list__item<?php echo ($item->isOpen()) ? ' is-active' : ''; ?>"><a href="<?php echo $item->url(); ?>"><?php echo $item->title()->smartypants(); ?></a></li>
			<?php endforeach; ?>
		</ul>
	</nav>
<?php endif; ?>
