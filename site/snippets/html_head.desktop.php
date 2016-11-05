<?php ///////////////////////////////////////////////////////
// ----------------------------------------------------------
// PARTIAL :: DESKTOP
// ----------------------------------------------------------
/////////////////////////////////////////////////////////////

// Read assets json
$assets_css = f::read(server::get('document_root') . ((c::get('url') != '/') ? c::get('url') . '/' : c::get('url', '/')) . 'assets/stylesheets/min/hash.css.json');
$assets_js = f::read(server::get('document_root') . ((c::get('url') != '/') ? c::get('url') . '/' : c::get('url', '/')) . 'assets/javascript/min/hash.js.json');

// Set assets based on environment
if(c::get('environment') == 'local'):
	$env_suffix = 'dev';
	$main_css = 'main.dev';
	$print_css = 'print.dev';
	$head_js = 'head.scripts.dev';
	$main_js = 'main.scripts.dev';
	$photoswipe_js = 'photoswipe.scripts.dev';
else:
	$env_suffix = 'min';
	$main_css = json_decode($assets_css)->main;
	$print_css = json_decode($assets_css)->print;
	$head_js = json_decode($assets_js)->head;
	$main_js = json_decode($assets_js)->main;
	$photoswipe_js = json_decode($assets_js)->photoswipe;
endif;

// Language(s)
if(c::get('language.multi', false)): $language_locale = $site->language()->locale();
else: $language_locale = c::get('language.locale', 'en'); endif;

// Page title
if($page->isHomePage() && $site->descriptor()->isNotEmpty()): $pagetitle = $site->descriptor()->smartypants()->titlecase();
elseif($page->subtitle()->isNotEmpty()): $pagetitle = $page->subtitle()->smartypants()->titlecase();
else: $pagetitle = $page->title()->smartypants()->titlecase(); endif;

// Meta description
if($page->isHomePage()):
	if($site->meta_description()->isNotEmpty()): $meta_description = $site->meta_description()->smartypants();
	else: $meta_description = ''; endif;
else:
	if($page->meta_description()->isNotEmpty()): $meta_description = $page->meta_description()->smartypants();
	elseif($site->meta_description()->isNotEmpty()): $meta_description = $site->meta_description()->smartypants();
	else: $meta_description = ''; endif;
endif;

// Variable to set 'critical' css file name to link to on a template basis.
// By default the varibale is set to 'default'. To link to another 'critical'
// css file, add name of another file to the include snippet (at the top
// of the template), like this:
// `snippet_detect('html_head', array('criticalcss' => 'another_criticalss_file'));`
$criticalcss = (isset($criticalcss)) ? $criticalcss : 'default';

// Variable to set next and previous rel="next/prev" links (e.g. news item,
// project detail, blogpost, etc.). To enable add a 'prev_next' array to the
// include snippet (at top of the template), like this:
// 'snippet_detect('html_head', array('prev_next' => true));'
$prev_next = (isset($prev_next)) ? $prev_next : false;

// Variable to set page template name to html element for styling purpose.
$page_template = ($page->intendedTemplate()) ? ' template-' . $page->intendedTemplate() : '';

// Check for the presence of Font Face Observer cookie (e.g. `fonts-loaded`)
// and if so adds `fonts-loaded` class to html element, to avoid re-downloading
// web fonts over and over again.
$fontobserver = (isset($_COOKIE['fonts-loaded']) && $_COOKIE['fonts-loaded'] == 'true') ? ' fonts-loaded' : '';

////////////////////////////////////////////////////////// ?>

<!doctype html>
<!--[if lte IE 7]> <html class="no-js lt-ie9 lt-ie8<?php echo $page_template . $fontobserver ?>" lang="<?php echo $language_locale; ?>"><![endif]-->
<!--[if IE 8]> <html class="no-js lt-ie9<?php echo $page_template . $fontobserver ?>" lang="<?php echo $language_locale; ?>"><![endif]-->
<!--[if gt IE 8]><!--><html class="no-js<?php echo $page_template . $fontobserver; ?>" lang="<?php echo $language_locale; ?>"><!--<![endif]-->
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width,initial-scale=1">

	<?php // Prefetch DNS for external assets (Typekit, Google APIs, etc). ?>
	<link rel="dns-prefetch" href="https://use.typekit.net">
	<link rel="dns-prefetch" href="https://fonts.googleapis.com">
	<link rel="dns-prefetch" href="https://ajax.googleapis.com">
	<link rel="dns-prefetch" href="https://maps.googleapis.com">
	<link rel="dns-prefetch" href="https://www.google-analytics.com">

	<?php // Preload assets (fonts, stylesheets, etc.) ?>
	<link rel="preload" href="<?php $site->url(); ?>/assets/fonts/firasans/firasans-bold.woff2" as="font" type="font/woff2">

	<title><?php echo $site->title()->smartypants() . ': ' . $pagetitle; ?></title>

	<meta name="author" content="<?php echo $site->author()->smartypants(); ?>">
	<?php if($meta_description->isNotEmpty()): ?><meta name="description" content="<?php echo $meta_description->smartypants(); ?>"><?php endif; ?>
	<meta name="robots" content="<?php if(c::get('environment') == 'local' || c::get('environment') == 'stage'): echo 'noindex, nofollow'; else: echo 'index, follow'; endif; ?>">

	<link rel="home" href="<?php echo $site->url(); ?>">
	<?php if(page('sitemap')): ?><link rel="sitemap" type="application/xml" title="<?php echo page('sitemap')->title()->smartypants(); ?>" href="<?php echo (c::get('url') != '/') ? $site->url() . '/sitemap.xml' :  '/sitemap.xml'; ?>"><?php endif; ?>
	<?php if(page('blog/feed')): ?><link rel="alternate" type="application/rss+xml" title="<?php echo page('blog/feed')->title()->smartypants(); ?>" href="<?php echo (c::get('url') != '/') ? $site->url() . '/blog/feed' : '/blog/feed'; ?>"><?php endif; ?>
	<?php if($site->google_plus() != ''): ?><link rel="publisher" href="https://plus.google.com/xxxxxxxxxxxxxxxxxxxxx"><?php endif; ?>

	<?php // Next, previous and canonical rel links for all pages ?>
	<?php meta_prevnextcanonical_general($page); ?>

	<?php // Next and previous rel links on specific pages (to use set $prev_next varibale in template) ?>
	<?php if($prev_next): meta_prevnextcanonical_single($page); endif; ?>

	<?php // Alternate language rel link(s) for matching languages in config and available text files (e.g. blogarticle.md, blogarticle.en.md) ?>
	<?php if(c::get('language.multi', false)): foreach($site->languages() as $language): if($site->languages()->count() > 1 && $site->language() != $language && isset($page->inventory()['content'][$language->code()])): ?><link rel="alternate" href="<?php echo $page->url($language->code()); ?>" hreflang="<?php echo $language->locale(); ?>"><?php endif; endforeach; endif; ?>

	<?php // Shortlink (to use enable tinyurl in config.php) ?>
	<?php if(c::get('tinyurl.enabled') && !$page->isHomepage()): ?><link rel="shortlink" href="<?php echo $page->tinyurl(); ?>"><?php endif; ?>

	<?php // Favicons, MS tile and theme colors, App names, etc. ?>
	<?php snippet('icons'); ?>

	<?php // Enhance stylesheets and scripts (https://github.com/filamentgroup/enhance) ?>
	<meta name="fullcss" content="<?php echo url('/assets/stylesheets/' . $env_suffix . '/' . $main_css . '.css'); ?>">
	<meta name="fulljs" content="<?php echo url('/assets/javascript/'. $env_suffix .'/' . $main_js . '.js'); ?>">
	<meta name="photoswipejs" content="<?php echo url('/assets/javascript/'. $env_suffix .'/' . $photoswipe_js . '.js'); ?>">
	<script><?php include_once(server::get('document_root') . '/assets/javascript/'. $env_suffix .'/' . $head_js . '.js'); ?></script>
	<?php if(isset($_COOKIE['fullcss']) && $_COOKIE['fullcss'] == 'true'): ?>
		<link rel="stylesheet" href="<?php echo url('/assets/stylesheets/' . $env_suffix . '/' . $main_css . '.css'); ?>">
		<link rel="stylesheet" href="<?php echo url('/assets/stylesheets/' . $env_suffix . '/' . $print_css . '.css'); ?>" media="print">
	<?php else: ?>
		<style><?php if(c::get('environment') == 'local' || c::get('environment') == 'stage'): echo '/* ' . $criticalcss . ' css */' . "\n"; endif; include_once(server::get('document_root') . '/assets/stylesheets/critical/' . $criticalcss . '.css'); ?></style>
		<noscript><link rel="stylesheet" href="<?php echo url('/assets/stylesheets/' . $env_suffix . '/' . $main_css . '.css'); ?>"></noscript>
	<?php endif; ?>

	<!--[if (gte IE 7) & (lte IE 8)]>
	<script src="<?php echo url('/assets/javascript/lib/plugins/html5shiv/html5shiv.min.js'); ?>"></script>
	<script src="<?php echo url('/assets/javascript/lib/plugins/html5shiv/html5shiv-printshiv.min.js'); ?>"></script>
	<script src="<?php echo url('/assets/javascript/lib/plugins/nwmatcher/nwmatcher.min.js'); ?>"></script>
	<script src="<?php echo url('/assets/javascript/lib/plugins/selectivizr/selectivizr.min.js'); ?>"></script>
	<![endif]-->

	<?php // Initialize JS variables for use later on ?>
	<script>var push_message = [];</script>

</head>
<body>

	<?php snippet('oldie_message'); ?>
