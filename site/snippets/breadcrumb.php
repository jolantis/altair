<?php ///////////////////////////////////////////////////////
// ----------------------------------------------------------
// SNIPPET
// ----------------------------------------------------------
////////////////////////////////////////////////////////// ?>

<ul class="Nav Breadcrumb">
	<?php foreach($site->breadcrumb() as $crumb): ?>
	<?php if ($crumb->isActive()): ?>
	<?php continue; else: ?>
		<li>
			<a href="<?php echo $crumb->url(); ?>" class="Link Link--withNoHistory"><?php echo $crumb->title(); ?></a>
		</li>
	<?php endif; endforeach; ?>
</ul>
