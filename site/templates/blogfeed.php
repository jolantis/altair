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
	'excerptlenght' => 300,
	'images'        => true
));

?>
