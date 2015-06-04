<?php ///////////////////////////////////////////////////////
// ----------------------------------------------------------
// 1. Rename feed.php to whatever feed you need (e.g. newsfeed.php or
//    blogfeed.php), same name as f.i. blogfeed.txt
// 2. Replace '<your-feed-channel>' by the content channel of your choice
//    (e.g. news or blog)
// 3. Edit the options array below to suit your needs
// 4. More than 1 feed, then copy feed.php and repeat step 1 and 3
// ----------------------------------------------------------
// More information: http://getkirby.com/downloads/plugins/feed
// ----------------------------------------------------------
/////////////////////////////////////////////////////////////

// echo page('<your-feed-channel>')->children()->visible()->flip()->limit(20)->feed(array(
echo page('<your-feed-channel>')->children()->visible()->flip()->feed(array(
	'channel'       => '<your-feed-channel>',
	'textfield'     => 'text',
	'excerpt'       => false,
	'excerptlenght' => 300,
	'images'        => false
));

?>
