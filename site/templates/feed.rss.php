<?php ///////////////////////////////////////////////////////
// ----------------------------------------------------------
// 1. Rename feed.rss.php to whatever feed you need (e.g. news.rss.php or
//    blog.rss.php), no corresponding text (.md) necessary
// 2. Replace '<your-feed-channel>' by the content channel of your choice
//    (e.g. news or blog)
// 3. Edit the options array below to suit your needs
// 4. More than 1 feed, then copy feed.rss.php and repeat step 1 to 3
// ----------------------------------------------------------
// More information: http://getkirby.com/downloads/plugins/feed
// ----------------------------------------------------------
/////////////////////////////////////////////////////////////

// echo page('<your-feed-channel>')->children()->visible()->flip()->limit(20)->feed(array(
echo page('<your-feed-channel>')->children()->visible()->flip()->feed(array(
	'channel'       => '<your-feed-channel>',
	'textfield'     => 'text',
	'image'         => false,                                                   // Include image (after excerpt); first available image in folder is used (set to false when kirbytext images are included in 'textfield' field, and excerpt is set to false — to prevent duplicate images!)
	'excerpt'       => false,
	'excerptlimit'  => 'words',                                                 // Limit excerpts by the number of 'words' (default) or 'characters'
	'excerptlenght' => 40,                                                      // Excerpt lenght in words or characters (depends on `excerptlimit` setting)
));

?>
