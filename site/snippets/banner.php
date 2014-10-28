<?php ///////////////////////////////////////////////////////
// ----------------------------------------------------------
// PARTIAL
// ----------------------------------------------------------
////////////////////////////////////////////////////////// ?>

<header role="banner" class="Banner">
	<?php if($page->isHomePage()): echo '<span'; else: echo '<a href="' . $site->url() . '" title="Return to the homepage" rel="home"'; endif; echo ' class="Masthead">'?>
		<img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Altair"/>
		<?php // echo $site->title(); ?>
	<?php if($page->isHomePage()): echo '</span>'; else: echo '</a>'; endif; ?>
	<a href="#NavMain" class="NavMainToggle NavMainToggle--open js-navMainShow">Jump to navigation</a>
</header>
