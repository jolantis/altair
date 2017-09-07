<?php ///////////////////////////////////////////////////////
// ----------------------------------------------------------
// SNIPPET
// ----------------------------------------------------------
/////////////////////////////////////////////////////////////
// Field requirements:
// - $site->title() *
// - $site->tagline() *      ---> (site's) home page's title, plus used to generate fallback for meta description
// - $page->long-title()     ---> page's title
// - $page->title() *        ---> page's title, used to generate fallback for page's long title
// - $page->description()    ---> page's meta description
// - $page->intro()          ---> page's main text content, used to generate fallback for meta description
// - $page->text()           ---> page's main text content, used to generate fallback for meta description
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
if($page->isHomePage()) {
	if($site->tagline()->exits() && $site->tagline()->isNotEmpty()) {
		$page_title = $site_title . ': ' . $site->tagline()->smartypants();
	}
	else {
		$page_title = $site_title;
	}
}
else {
	if($page->long_title()->exits() && $page->long_title()->isNotEmpty()) {
		$page_title = $site_title . ': ' . $page->long_title()->smartypants();
	}
	else {
		$page_title = $site_title . ': ' . $page->title()->smartypants();
	}
}

// Get page (meta) description
if($page->description()->exits() && $page->description()->isNotEmpty()) {
	$description = $page->description()->smartypants();
}
elseif($page->intro()->exits() && $page->intro()->isNotEmpty() ) {
	$description = $page->intro()->smartypants();
}
elseif($page->text()->exits() && $page->text()->isNotEmpty() ) {
	$description = $page->text()->smartypants();
}
else {
	$description = $site->tagline()->smartypants();
}
?>

<title><?php echo $page_title; ?></title>
<meta name="description" content="<?php echo $description->excerpt(155); ?>">
