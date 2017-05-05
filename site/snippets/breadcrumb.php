<?php ///////////////////////////////////////////////////////
// ----------------------------------------------------------
// SNIPPET
// ----------------------------------------------------------
////////////////////////////////////////////////////////// ?>

<ul class="nav breadcrumb contain-padding">
	<?php foreach($site->breadcrumb() as $crumb): ?>
	<?php if ($crumb->isActive()): ?>
	<?php continue; else: ?>
		<li>
			<a href="<?php echo $crumb->url(); ?>" class="link link--no-history"><?php echo $crumb->title(); ?></a>
		</li>
	<?php endif; endforeach; ?>
</ul>
