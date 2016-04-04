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
else:
	$env_suffix = 'min';
	$main_css = json_decode($assets_css)->main;
	$print_css = json_decode($assets_css)->print;
	$head_js = json_decode($assets_js)->head;
	$main_js = json_decode($assets_js)->main;
endif;

// Page title
if($page->isHomePage() && $site->descriptor() != ''): $pagetitle = $site->descriptor()->smartypants()->titlecase();
elseif($page->subtitle() != ''): $pagetitle = $page->subtitle()->smartypants()->titlecase();
else: $pagetitle = $page->title()->smartypants()->titlecase(); endif;

// Meta description
if($page->isHomePage()):
	if($site->meta_description() != ''): $meta_description = $site->meta_description()->smartypants();
	else: $meta_description = ''; endif;
else:
	if($page->meta_description() != ''): $meta_description = $page->meta_description()->smartypants();
	elseif($site->meta_description() != ''): $meta_description = $site->meta_description()->smartypants();
	else: $meta_description = ''; endif;
endif;

// Variable to set 'critical' css file to link to on a template basis.
// To enable add array to 'snippet_detect('html_head');' at top of template:
// 'snippet_detect('html_head', array('criticalcss' => 'home'));'
// If no varibale is set for a template the critical css of the
// 'home' page is used as a 'fallback'.
if(!isset($criticalcss) || $criticalcss == false): $criticalcss = 'home'; endif;

// Variable to set next and previous rel="next/prev" links.
// To enable add array to 'snippet_detect('html_head');' at top of template:
// 'snippet_detect('html_head', array('prev_next' => true));'
if(!isset($prev_next)): $prev_next = false; endif;

// Variable to set next and previous rel="prerender" links.
// To enable add add array to 'snippet_detect('html_head');' at top of template:
// 'snippet_detect('html_head', array('prerender' => true));'
if(!isset($prerender)): $prerender = false; endif;

// Variable to set next and previous rel="prefetch" links.
// To enable add add array to 'snippet_detect('html_head');' at top of template:
// 'snippet_detect('html_head', array('prefetch' => true));'
if(!isset($prefetch)): $prefetch = false; endif;

// Check for the presence of Font Face Observer cookie (e.g. `fonts-loaded`)
// and if so adds `fonts-loaded` class to html element, to avoid re-downloading
// web fonts over and over again.
if(isset($_COOKIE['fonts-loaded']) && $_COOKIE['fonts-loaded'] == 'true'):
	$fontobserver = ' fonts-loaded';
endif;

////////////////////////////////////////////////////////// ?>

<!doctype html>
<!--[if lte IE 7]> <html class="no-js lt-ie9 lt-ie8<?php echo $fontobserver ?>" lang="<?php echo $site->language()->locale(); ?>"><![endif]-->
<!--[if IE 8]> <html class="no-js lt-ie9<?php echo $fontobserver ?>" lang="<?php echo $site->language()->locale(); ?>"><![endif]-->
<!--[if gt IE 8]><!--><html class="no-js<?php echo $fontobserver ?>" lang="<?php echo $site->language()->locale(); ?>"><!--<![endif]-->
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width,initial-scale=1">

	<?php // Prefetch DNS for external assets (Typekit, Google APIs, etc). ?>
	<link rel="dns-prefetch" href="https://use.typekit.net">
	<link rel="dns-prefetch" href="https://fonts.googleapis.com">
	<link rel="dns-prefetch" href="https://ajax.googleapis.com">
	<link rel="dns-prefetch" href="https://maps.googleapis.com">
	<link rel="dns-prefetch" href="https://www.google-analytics.com">

	<?php // Prefetch custom (web) fonts ?>
	<link rel="prefetch" href="<?php $site->url(); ?>/assets/fonts/firasans/FiraSans-Book.woff">
	<link rel="prefetch" href="<?php $site->url(); ?>/assets/fonts/firasans/FiraSans-Bold.woff">
	<link rel="prefetch" href="<?php $site->url(); ?>/assets/fonts/firasans/FiraSans-BookItalic.woff">

	<title><?php echo $site->title()->smartypants() . ': ' . $pagetitle; ?></title>

	<meta name="author" content="<?php echo $site->author()->smartypants(); ?>">
	<?php if($meta_description != ''): ?><meta name="description" content="<?php echo $meta_description->smartypants(); ?>"><?php endif; ?>
	<meta name="robots" content="<?php if(c::get('environment') == 'local' || c::get('environment') == 'stage'): echo 'noindex, nofollow'; else: echo 'index, follow'; endif; ?>">

	<link rel="home" href="<?php echo $site->url(); ?>">
	<?php if(page('sitemap')): ?><link rel="sitemap" type="application/xml" title="<?php echo page('sitemap')->title()->smartypants(); ?>" href="<?php echo (c::get('url') != '/') ? $site->url() . '/sitemap.xml' :  '/sitemap.xml'; ?>"><?php endif; ?>
	<?php if(page('blog/feed')): ?><link rel="alternate" type="application/rss+xml" title="<?php echo page('blog/feed')->title()->smartypants(); ?>" href="<?php echo (c::get('url') != '/') ? $site->url() . '/blog/feed' : '/blog/feed'; ?>"><?php endif; ?>
	<?php if($site->google_plus() != ''): ?><link rel="publisher" href="https://plus.google.com/xxxxxxxxxxxxxxxxxxxxx"><?php endif; ?>

	<?php // Canonical rel link on pages that can be dynamic (e.g. …/paramkey:paramvalue); by default the script checks if the 'tags' field is present; make sure to change or add field names based on project specifics! ?>
	<?php foreach($page->children()->visible() as $child_page): if($child_page->tags() != '' && (!param() || is_numeric(param(key(param()))))): ?><link rel="canonical" href="<?php if(is_numeric(param(key(param())))): echo $page->url() . '/page:' . param('page'); else: echo $page->url(); endif; ?>"><?php break; endif; endforeach; ?>
	<?php foreach($page->siblings($self=false)->visible() as $sibling_page): if($sibling_page->tags() != '' && !$page->isHomePage() && !param()): ?><link rel="canonical" href="<?php echo $page->url(); ?>"><?php break; endif; endforeach; ?>

	<?php // Alternate language rel link(s) for matching languages in config and available text files (e.g. blogarticle.md, blogarticle.en.md) ?>
	<?php foreach($site->languages() as $language): if($site->languages()->count() > 1 && $site->language() != $language && isset($page->inventory()['content'][$language->code()])): ?><link rel="alternate" href="<?php echo $page->url($language->code()); ?>" hreflang="<?php echo $language->locale(); ?>"><?php endif; endforeach; ?>

	<?php // Shortlink (to use enable tinyurl in config.php) ?>
	<?php if(c::get('tinyurl.enabled') && !$page->isHomepage()): ?><link rel="shortlink" href="<?php echo $page->tinyurl(); ?>"><?php endif; ?>

	<?php // Next and previous rel links (to use set $prev_next varibale in template) ?>
	<?php if($prev_next && $page->hasNextVisible()): ?><link rel="next" href="<?php echo $page->nextVisible()->url(); ?>" title="<?php echo $page->nextVisible()->title()->smartypants(); ?>"><?php endif; ?>
	<?php if($prev_next && $page->hasPrevVisible()): ?><link rel="prev" href="<?php echo $page->prevVisible()->url(); ?>" title="<?php echo $page->prevVisible()->title()->smartypants(); ?>"><?php endif; ?>

	<?php // Prerender next and previous pages (to use set $prerender varibale in template). Chrome only?! ?>
	<?php if($prerender): ?>
		<?php if($page->hasNextVisible()): ?><link rel="prerender" href="<?php echo $page->nextVisible()->url(); ?>"><?php endif; ?>
		<?php if($page->hasPrevVisible()): ?><link rel="prerender" href="<?php echo $page->prevVisible()->url(); ?>"><?php endif; ?>
	<?php endif; ?>

	<?php // Favicons, MS tile and theme colors, App names, etc. ?>
	<?php snippet('icons'); ?>

	<?php // Roxy (stand-alone proxy) variable for local resrc images testing ?>
	<?php /* if(c::get('environment') == 'local' && c::get('resrc') == true) : ?><script>var custom_resrc = { server : 'local.roxy:8080' };</script><?php endif; */ ?>

	<?php // Enhance stylesheets and scripts (https://github.com/filamentgroup/enhance) ?>
	<meta name="fullcss" content="<?php echo url('/assets/stylesheets/' . $env_suffix . '/' . $main_css . '.css'); ?>">
	<meta name="fulljs" content="<?php echo url('/assets/javascript/'. $env_suffix .'/' . $main_js . '.js'); ?>">
	<script><?php include_once(server::get('document_root') . '/assets/javascript/'. $env_suffix .'/' . $head_js . '.js'); ?></script>
	<?php if(isset($_COOKIE['fullcss']) && $_COOKIE['fullcss'] == 'true'): ?>
		<link rel="stylesheet" href="<?php echo url('/assets/stylesheets/' . $env_suffix . '/' . $main_css . '.css'); ?>">
		<link rel="stylesheet" href="<?php echo url('/assets/stylesheets/' . $env_suffix . '/' . $print_css . '.css'); ?>" media="print">
	<?php else: ?>
		<style><?php if(c::get('environment') == 'local' || c::get('environment') == 'stage'): echo '/* ' . $criticalcss . ' css */' . "\n"; endif; include_once(server::get('document_root') . '/assets/stylesheets/critical/' . $criticalcss . '.css'); ?></style>
		<noscript><link rel="stylesheet" href="<?php echo url('/assets/stylesheets/' . $env_suffix . '/' . $main_css . '.css'); ?>"></noscript>
	<?php endif; ?>

	<!--[if (gte IE 7) & (lte IE 8)]>
	<script src="<?php echo url('/assets/javascript/vendor/html5shiv.min.js'); ?>"></script>
	<script src="<?php echo url('/assets/javascript/vendor/html5shiv-printshiv.min.js'); ?>"></script>
	<script src="<?php echo url('/assets/javascript/vendor/nwmatcher.min.js'); ?>"></script>
	<script src="<?php echo url('/assets/javascript/vendor/selectivizr.min.js'); ?>"></script>
	<![endif]-->

	<?php // Initialize JS variables for use later on ?>
	<script>var push_message = [];</script>

</head>
<body>

	<?php snippet('oldie_message'); ?>
