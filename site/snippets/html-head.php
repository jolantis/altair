<?php ///////////////////////////////////////////////////////
// ----------------------------------------------------------
// PARTIAL :: DESKTOP
// ----------------------------------------------------------
/////////////////////////////////////////////////////////////

// Set variable to get minified assets based on environment
$env_suffix = (c::get('environment', '.min') == 'local') ? '' : '.min';

// Variabel to set language locale on html element
$language_locale = (c::get('language.multi', false)) ? $site->language()->locale() : c::get('language.locale', 'en');

// Variable to set page template name to html element for styling purpose.
$page_template = ($page->intendedTemplate()) ? ' template-' . $page->intendedTemplate() : '';

// Check for the presence of Font Face Observer cookie (e.g. `fonts-loaded`)
// and if so adds `fonts-loaded` class to html element, to avoid re-downloading
// web fonts over and over again.
$fontobserver = (isset($_COOKIE['fonts-loaded']) && $_COOKIE['fonts-loaded'] == 'true') ? ' fonts-loaded' : '';

////////////////////////////////////////////////////////// ?>

<!doctype html>
<!--[if IE 8]> <html class="no-js lt-ie9<?php echo $page_template . $fontobserver ?>" lang="<?php echo $language_locale; ?>"><![endif;]-->
<!--[if gt IE 8]><!--><html class="no-js<?php echo $page_template . $fontobserver; ?>" lang="<?php echo $language_locale; ?>"><!--<![endif;]-->
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<?php // Prefetch DNS for external assets (Typekit, Google APIs, etc). ?>
	<link rel="dns-prefetch" href="https://use.typekit.net">
	<link rel="dns-prefetch" href="https://fonts.googleapis.com">
	<link rel="dns-prefetch" href="https://ajax.googleapis.com">
	<link rel="dns-prefetch" href="https://maps.googleapis.com">
	<link rel="dns-prefetch" href="https://www.google-analytics.com">

	<?php // Preload assets (fonts, stylesheets, etc.) ?>
	<link rel="preload" href="<?php echo $site->url(); ?>/assets/fonts/firasans/firasans-bold.woff2" as="font" type="font/woff2" crossorigin>

	<title><?php echo $page->window_title(); if(c::get('environment') == 'local'): echo ' [DEV]'; endif; ?></title>
	<meta name="description" content="<?php echo $page->meta_description(); ?>">

	<meta name="robots" content="<?php if(c::get('environment') == 'local' || c::get('environment') == 'stage'): echo 'noindex, nofollow'; else: echo 'index, follow'; endif; ?>">

	<link rel="home" href="<?php echo $site->url(); ?>">
	<?php if(c::get('tinyurl.enabled') && !$page->isHomepage()): ?><link rel="shortlink" href="<?php echo $page->tinyurl(); ?>"><?php endif; ?><?php // Enable shortlink/tinyurl in config.php ?>
	<link rel="author" href="<?php echo $site->url(); ?>humans.txt">
	<link rel="sitemap" type="application/xml" title="<?php echo $site->title()->smartypants(); ?>: Sitemap" href="<?php echo (c::get('url') != '/') ? $site->url() . '/sitemap.xml' :  '/sitemap.xml'; ?>">
	<?php if(page('blog')): ?><link rel="alternate" type="application/rss+xml" title="<?php echo $site->title()->smartypants(); ?>: <?php echo page('blog')->title()->smartypants(); ?> Feed" href="<?php echo (c::get('url') != '/') ? $site->url() . '/blog.rss' : '/blog.rss'; ?>"><?php endif; ?>

	<link rel="apple-touch-icon" href="<?php echo url('/assets/images/apple-touch-icon.png'); ?>"><?php // Touch icons, iOS and Android, 180x180 pixels in size (http://j.mp/2fnrQmw, http://j.mp/2gpJVVF) ?>
	<link rel="icon" href="<?php echo url('/assets/images/favicon.png'); ?>"><?php // For Firefox, Chrome, Safari, IE 11+ and Opera, 192x192 pixels in size ?>
	<link rel="mask-icon" href="<?php echo url('/assets/images/pinned-icon.svg'); ?>" color="<?php echo ($site->theme_color()->isNotEmpty()) ? $site->theme_color() : '#141414' ; ?>"><?php // For Safari 9+ pinned tab (http://j.mp/2gpNiw9) ?>

	<link rel="canonical" href="<?php echo $page->rel_canonical($filter_value, $page_num); ?>">
	<?php echo $page->rel_prevnext($filter_key, $filter_value, $pagination, $page_num); ?>
	<?php echo $page->rel_alternate(); ?>

	<?php // Social meta tags ?>
	<?php snippet('social-meta-tags') ?>

	<!-- Scripts and Stylesheets -->
	<meta name="fullcss" content="<?php echo asset('/assets/stylesheets/main' . $env_suffix . '.css'); ?>">
	<meta name="fulljs" content="<?php echo asset('/assets/javascript/main' . $env_suffix . '.js'); ?>">
	<script><?php include_once(server::get('document_root') . '/assets/javascript/head' . $env_suffix . '.js'); ?></script>
	<?php if(isset($_COOKIE['fullcss']) && $_COOKIE['fullcss'] == 'true'): ?>
		<link rel="stylesheet" href="<?php echo asset('/assets/stylesheets/main' . $env_suffix . '.css'); ?>">
		<link rel="stylesheet" href="<?php echo asset('/assets/stylesheets/print' . $env_suffix . '.css'); ?>" media="print">
	<?php else: ?>
		<style><?php if(c::get('environment') == 'local' || c::get('environment') == 'stage'): echo '/* ' . ((isset($criticalcss)) ? $criticalcss : 'default') . ' css */' . "\n"; endif; include_once(server::get('document_root') . '/assets/stylesheets/critical/' . ((isset($criticalcss)) ? $criticalcss : 'default') . '.css'); ?></style>
		<noscript><link rel="stylesheet" href="<?php echo asset('/assets/stylesheets/' . $env_suffix . '/main.css'); ?>"></noscript>
	<?php endif; ?>

	<?php // Initialize JS variables for use later on ?>
	<script>var push_message = [];</script>

</head>
<body>

	<?php // snippet('oldie-message'); ?>
