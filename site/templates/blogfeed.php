<?php ///////////////////////////////////////////////////////
// ----------------------------------------------------------
// BLOG FEED
// ----------------------------------------------------------
/////////////////////////////////////////////////////////////

// echo page('blog')->children()->visible()->flip()->limit(20)->feed(array(
echo page('blog')->children()->visible()->flip()->feed(array(
	'channel'       => 'blog',
	'textfield'     => 'text',
	'excerpt'       => false,
	'excerptlimit'  => 'words',                                                 // Limit excerpts by the number of 'words' (default) or 'characters'
	'excerptlenght' => 40,                                                      // Excerpt lenght in words or characters (depends on `excerptlimit` setting)
	'excerptimage'  => true                                                     // Include one image (after excerpt); first available image in folder is used
));

?>
