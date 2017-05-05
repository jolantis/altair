<?php ///////////////////////////////////////////////////////
// ----------------------------------------------------------
// PARTIAL
// ----------------------------------------------------------
////////////////////////////////////////////////////////// ?>

<header role="banner" id="page-top" class="banner contain-padding">
	<?php if($page->isHomePage()): echo '<span'; else: echo '<a href="' . $site->url() . '" title="Return to the homepage" rel="home"'; endif; echo ' class="masthead">'?>
		<img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="Altair"/>
		<?php // echo $site->title(); ?>
	<?php if($page->isHomePage()): echo '</span>'; else: echo '</a>'; endif; ?>
	<a href="#nav-main" class="nav-main-toggle nav-main-toggle--open js-nav-main-show">Jump to navigation</a>
</header>
