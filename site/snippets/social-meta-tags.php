<?php ///////////////////////////////////////////////////////
// ----------------------------------------------------------
// SNIPPET
// ----------------------------------------------------------
/////////////////////////////////////////////////////////////
// Social meta tags, based eu-kirby-social-metatags snippet
// https://github.com/errorundefined/eu-kirby-social-metatags
//
// Field requirements:
// - $site->title() *
// - $site->tagline() *      ---> (site's) home page's title, plus used to generate fallback for meta description
// - $page->long-title()     ---> page's title
// - $page->title() *        ---> page's title, used to generate fallback for page's long title
// - $page->description()    ---> page's meta description
// - $page->intro()          ---> page's main text content, used to generate fallback for meta description
// - $page->text()           ---> page's main text content, used to generate fallback for meta description
// - $page->featured_image() ---> page's featured image
// - $site->featured_image() ---> site's featured image, used as fallback
// - $site->twitter() *      ---> publishers's twitter handle
// - $page->twitter_author() ---> authors's twitter handle
// - $site->facebook_admin() ---> facebook admin ID
//
// The above fields marked with an asterisk (*) need to be there
// and filled. If any of the other fields is missing, the snippet
// should still work, only with less rich meta tags output.
//
// Call the snippet within the <head>, probably in the
// header snippet, like so: snippet('social-meta-tags')
/////////////////////////////////////////////////////////////

// Get site tilte
$site_title = $site->title()->smartypants();

// Get page title
if($page->long_title()->exists() && $page->long_title()->isNotEmpty()) {
	$page_title = $page->long_title()->smartypants();
}
else {
	$page_title = $page->title()->smartypants();
}

// Get page url
$page_url = $page->url();

// Get page's root
if ($page->depth() > 1) {
	$page_root = $page->parents()->last()->title();
}
else {
	$page_root = false;
}

// Get page (meta) description
if($page->description()->exists() && $page->description()->isNotEmpty()) {
	$description = $page->description()->smartypants();
}
elseif($page->intro()->exists() && $page->intro()->isNotEmpty() ) {
	$description = $page->intro()->smartypants();
}
elseif($page->text()->exists() && $page->text()->isNotEmpty() ) {
	$description = $page->text()->smartypants();
}
else {
	$description = $site->tagline()->smartypants();
}

// Get the site's Google+ handle
if($site->google_plus()->exists() && $site->google_plus()->isNotEmpty()) {
	$google_plus = $site->google_plus();
}
else {
	$google_plus = false;
}

// Get the site's Twitter handle
if($site->twitter()->exists() && $site->twitter()->isNotEmpty()) {
	$twitter_publisher = $site->twitter();
}
else {
	$twitter_publisher = false;
}

// Get the authors's twitter handle + fall back to site's twitter handle
if($page->twitter_author()->exists() && $page->twitter_author()->isNotEmpty()) {
	$twitter_author = $page->twitter_author();
}
elseif($site->twitter()->exists() && $site->twitter_author()->isNotEmpty()) {
	$twitter_author = $site->twitter();
}
else {
	$twitter_author = false;
}

// Get the site's Facebook thingy
if($site->facebook()->exists() && $site->facebook()->isNotEmpty()) {
	$facebook_publisher = $site->facebook();
}
else {
	$facebook_publisher = false;
}

// Get the authors's Facebook thingy + fall back to site's Facebook thingy
if($page->facebook_author()->exists() && $page->facebook_author()->isNotEmpty()) {
	$facebook_author = $page->facebook_author();
}
elseif($site->facebook_author()->exists() && $site->facebook_author()->isNotEmpty()) {
	$facebook_author = $site->facebook();
}
else {
	$facebook_author = false;
}

// Get Facebook admin user id
if($site->facebook_admin()->exists() && $site->facebook_admin()->isNotEmpty()) {
	$facebook_admin = $site->facebook_admin();
}
else {
	$facebook_admin = false;
}

// Get page's publication date (or falls back to modified date)
if($page->date() != "") {
	$pub_date = $page->date('c');
	$mod_date = $page->modified('c');
}
else {
	$pub_date = $page->modified('c');
	$mod_date = false;
}

// Check if page or site has a featured image, and if so, get it
if($page->featured_image()->exists() && $page->featured_image()->isNotEmpty()) {
	$image = $page->featured_image()->toFile();
	if($image->dimension()->portrait()) {
		$image = $image->crop(880, 550);
	}
	$featured_image = $image->url();
}
elseif($site->featured_image()->exists() && $site->featured_image()->isNotEmpty()) {
	$image = $site->featured_image()->toFile();
	if($image->dimension()->portrait()) {
		$image = $image->crop(880, 550);
	}
	$featured_image = $image->url();
}
elseif($page->images()->first()) {
	$image = $page->images()->first();
	if($image->dimension()->portrait()) {
		$image = $image->crop(880, 550);
	}
	$featured_image = $image->url();
}
else {
	$featured_image = false;
}
?>

<!-- Google+ / Schema.org -->
<?php if($google_plus): ?><link rel="publisher" href="https://plus.google.com/+<?php echo $site->google_plus(); ?>"><?php endif; ?>
<meta itemprop="name" content="<?php echo $page_title ?>">
<meta itemprop="description" content="<?php echo $description->excerpt(300); ?>">
<?php if($featured_image): ?><meta itemprop="image" content="<?php echo $featured_image ?>">
<?php endif; ?>

<!--  Minimal Open Graph / Twitter Card Data -->
<?php if($featured_image): ?><meta name="twitter:card" content="summary_large_image">
<?php else: ?><meta name="twitter:card" content="summary">
<?php endif; ?>
<?php if($twitter_publisher): ?><meta name="twitter:site" content="@<?php echo $twitter_publisher ?>">
<?php endif; ?>
<?php if($twitter_author): ?><meta name="twitter:creator" content="@<?php echo $twitter_author ?>">
<?php endif; ?>
<?php if($page_url): ?><meta property="og:url" content="<?php echo $page_url ?>">
<?php endif; ?>
<meta property="og:title" content="<?php echo $page_title ?>">
<meta property="og:description" content="<?php echo $description->excerpt(200); ?>">
<?php if($featured_image): ?><meta property="og:image" content="<?php echo $featured_image ?>">
<?php endif; ?>

<?php /*
<!-- Open Graph Data Extended -->
<meta property="og:site_name" content="<?php echo $site_title ?>" />
<?php if($page_title): ?><meta property="og:title" content="<?php echo $page_title ?>" />
<?php endif; ?>
<meta property="og:description" content="<?php echo $description->excerpt(300); ?>" />
<?php if($page_url): ?><meta property="og:url" content="<?php echo $page_url ?>" />
<?php endif; ?>
<?php if($featured_image): ?><meta property="og:image" content="<?php echo $featured_image ?>">
<?php endif; ?>
<meta property="article:published_time" content="<?php echo $pub_date ?>" />
<?php if($mod_date): ?><meta property="article:modified_time" content="<?php echo $mod_date ?>" />
<meta property="og:updated_time" content="<?php echo $mod_date ?>" />
<?php endif; ?>
<?php if($page_root): ?><meta property="article:section" content="<?php echo $page_root ?>" />
<?php endif; ?>
<?php if($facebook_publisher): ?><meta property="article:publisher" content="<?php echo $facebook_publisher ?>" />
<?php endif; ?>
<?php if($facebook_author): ?><meta property="article:author" content="<?php echo $facebook_author ?>" />
<?php endif; ?>
<?php if($facebook_admin): ?>
<meta property="fb:admins" content="<?php echo $facebook_admin ?>" />
<?php endif; ?>
*/ ?>

<?php /*
<!-- Twitter Card Data Extended -->
<?php if($featured_image): ?><meta name="twitter:card" content="summary_large_image">
<?php else: ?><meta name="twitter:card" content="summary">
<?php endif; ?>
<?php if($twitter_publisher): ?><meta name="twitter:site" content="@<?php echo $twitter_publisher ?>">
<?php endif; ?>
<?php if($twitter_author): ?><meta name="twitter:creator" content="@<?php echo $twitter_author ?>">
<?php endif; ?>
<meta name="twitter:title" content="<?php echo $page_title ?>">
<meta name="twitter:description" content="<?php echo $description->excerpt(200); ?>">
<?php if($featured_image): ?><meta name="twitter:image" content="<?php echo $featured_image ?>">
<?php endif; ?>
*/ ?>
