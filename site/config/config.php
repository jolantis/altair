<?php

// direct access protection
if(!defined('KIRBY')) die('Direct access is not allowed');

/* -----------------------------------------------------------------------------
License Setup
--------------------------------------------------------------------------------

*/

c::set('license', 'your license key');


/* -----------------------------------------------------------------------------
URL Setup
--------------------------------------------------------------------------------

By default kirby tries to detect the correct url for your site if this is set
to false. If this should fail or you need to set it on your own, set it without
a trailing slash:

*/

c::set('url', false);


/* -----------------------------------------------------------------------------
Subfolder Setup
--------------------------------------------------------------------------------

Kirby will automatically try to detect the subfolder

i.e. http://yourdomain.com/subfolder

This might fail depending on your server setup. In such a case, please set
the correct subfolder here.

You must also set the right url then:

c::set('url', 'http://yoururl.com/subfolder');

if you are using the .htaccess file, make sure to set the right RewriteBase
there as well:

RewriteBase /subfolder

*/

c::set('subfolder', false);


/* -----------------------------------------------------------------------------
Rewrite URL Setup
--------------------------------------------------------------------------------

Kirby uses apache's mod_rewrite to build nice urls like
http://yourdomain.com/about by default. If you can't use mod_rewrite disable
rewriting here. Kirby will then switch to urls like this:

http://yourdomain.com/index.php/about

*/

c::set('rewrite', true);


/* -----------------------------------------------------------------------------
Timezone Setup
--------------------------------------------------------------------------------

You can change the default timezone used for all date functions here.
It is set to UTC by default. Please read more about it here:

http://php.net/manual/en/function.date-default-timezone-set.php

*/

c::set('timezone', 'UTC');


/* -----------------------------------------------------------------------------
Troubleshooting
--------------------------------------------------------------------------------

Kirby has a built-in troubleshooting screen with loads of information about
your setup. It's there to help you out when things don't work as expected.
Set it to true to activate it and go to your homepage to display it on refresh.

*/

c::set('troubleshoot', false);


/* -----------------------------------------------------------------------------
Debug
--------------------------------------------------------------------------------

Set this to true to enable php errors. Make sure to keep this disabled for your
production site, so you won't get nasty php errors there.

*/

c::set('debug', false);


/* -----------------------------------------------------------------------------
Routes
--------------------------------------------------------------------------------

*/

c::set('routes', array(
// 	array(                                                                      // Example route
// 		'pattern' => '(:num)/(:num)/(:num)/(:any)',
// 		'action'  => function($year, $month, $day, $uid) {
// 			// search for the article
// 			$page = page('blog/' . $uid);
// 			// redirect to the article or the error page
// 			go($page ? $page->url($language_code) : 'error');
// 		}
// 	),
	array(                                                                      // Internally route sitemap.xml to sitemap (template)
		'pattern' => 'sitemap.xml',
		'action'  => function() {
			return site()->visit('sitemap');
		}
	),
	array(                                                                      // Redirect sitemap to sitemap.xml
		'pattern' => 'sitemap',
		'action'  => function() {
			return go('sitemap.xml');
		}
	),
));


/* -----------------------------------------------------------------------------
Content File Extension
--------------------------------------------------------------------------------

Change the default file extension for your content files here if you'd rather
use something else than txt. For example md or mdown.

*/

c::set('content.file.extension', 'md');


/* -----------------------------------------------------------------------------
Homepage Setup
--------------------------------------------------------------------------------

By default the folder/uri for your homepage is "home". Sometimes it makes
sense to change that to make your blog your homepage for example.
Just change it here in that case.

*/

c::set('home', 'home');


/* -----------------------------------------------------------------------------
Force SSL
--------------------------------------------------------------------------------

If you want to make sure to force SSL on every page, just set this setting
to true. Also make sure to include https in your url setup:

c::set('url', 'https://yourdomain.com');

*/

c::set('ssl', false);


/* -----------------------------------------------------------------------------
Environment
--------------------------------------------------------------------------------

The environment this Kirby instance is running on (local, staging or production).

*/

c::set('environment', 'production');

/* -----------------------------------------------------------------------------
Ignore Content Files
--------------------------------------------------------------------------------

Sometimes it's necessary to ignore particular content files/folders in all
content folders. Just add them to the array here. By default the following
files are being ignored:

array('.', '..', '.DS_Store', '.svn', '.git', '.htaccess');

… so you don't have to add them.

*/

c::set('content.file.ignore', array());


/* -----------------------------------------------------------------------------
Markdown Setup
--------------------------------------------------------------------------------

You can globally switch Markdown parsing on or off here.

To disable automatic line breaks in markdown set markdown.breaks to false.

You can also switch between regular markdown or markdown extra:
http://michelf.com/projects/php-markdown/extra/

*/

c::set('markdown', true);
c::set('markdown.extra', true);
c::set('markdown.breaks', false);


/* -----------------------------------------------------------------------------
Smartypants Setup
--------------------------------------------------------------------------------

Smartypants is a typography plugin, which helps to improve things like
quotes and ellipsises and all those nifty little typography details.

Find out more about samartypants:

http://michelf.com/projects/php-smartypants/typographer/

Set in smartypants.php to 1, 2 or 3 (default 1):
1  ->  "--" for em-dashes; no en-dash support
2  ->  "---" for em-dashes; "--" for en-dashes
3  ->  "--" for em-dashes; "---" for en-dashes

*/

c::set('smartypants', true);


/* -----------------------------------------------------------------------------
Tinyurl Setup
--------------------------------------------------------------------------------

KirbyCMS has built in tiny urls for every page. Tinyurls look like this:

http://yourdomain.com/x/asd2qd1c

The /x/ in the url is needed to detect tinyurls, you can
change the x to anything else but an existing page uri.

If you don't want to use tiny urls for your site disable them here.

*/

c::set('tinyurl.enabled', false);
c::set('tinyurl.folder', 'x');


/* -----------------------------------------------------------------------------
Cache
--------------------------------------------------------------------------------

Enable or disable the cache. Caching is switched off by default.

With c::set('cache.ignore', array()); you can speficy an array of URIs which
should be skipped for caching. If you got a search page for example you might
not want to cache each search result so you can add the URI of your search
site to the ignore array like this:

c::set('cache.ignore', array('search', 'some/other/uri/to/ignore'));

*/

c::set('cache', false);
c::set('cache.driver', 'file');                                                 // valid values: file, memcached or apc
c::set('cache.root', '/site/cache');                                            // the default cache driver ('file') stores files in /site/cache; change this directory here (e.g. '/var/cache')
c::set('cache.options', array('host' => 'localhost', 'port' => 22122));         // by default the memcached driver uses the localhost and the port 11211; change with this cache.options variable
c::set('cache.ignore', array('sitemap' ,'feed', 'search'));


/* -----------------------------------------------------------------------------
Fluid video setup
--------------------------------------------------------------------------------

Set the default width and height for videos from Vimeo or YouTube embedded via
the (video: 77383196 host: vimeo) tag in text.

*/

c::set('video.width', 480);
c::set('video.height', 358);


/* -----------------------------------------------------------------------------
Thumb settings
--------------------------------------------------------------------------------

*/

c::set('thumb.cache.root', c::get('root') . '/thumbs');                         // thumb directory
c::set('thumb.cache.url',  c::get('url')  . '/thumbs');                         // thumb url
c::set('thumb.memory', '128M');                                                 // make enough memory available to scale big(ger) images; default is 128M
c::set('thumb.quality', 70);                                                    // default jpg compression (or quality setting) for thumb images (does not apply to Resrc images)
c::set('thumb.upscale', true);                                                  // set default upscale value for thumb images (does not apply to Resrc images)
c::set('thumb.dev.width', 800);                                                 // development env's only: arbitrary max-width for thumbs (set in figure), if not using resrc.


/* -----------------------------------------------------------------------------
Figureimage (layout grid) settings
--------------------------------------------------------------------------------

*/

c::set('figureimage.break', 'compact');                                         // set the default 'breakpoint' for `.FigureImage` items in a layout grid; the 'breakpoint' defines where to switch from linear to inline items; options are 'compact' and 'medium' (make sure the corresponding grid sizes are set and/or added in `_layout.grid.scss`!)
c::set('figureimage.gutter', 'default');                                        // set the gutter unit for `.FigureImage` items in a layout grid; options are 'default' (rhythm unit) and 'percentage'


/* -----------------------------------------------------------------------------
Lazyload images
--------------------------------------------------------------------------------

Set to true to lazyload (echo.js) all images with a
`data-src="image.jpg` attribute.

Use `lazyload.init` in main.scripts.js

*/

c::set('lazyload', true);                                                       // set to true to lazyload images


/* --------------------------------------------------------------------------------
Resrc setup
--------------------------------------------------------------------------------

If you want to use Resrc's responsive images solution, enable it here,
and make sure to set the right configuration.

When enabled make sure to set the correct staging and production domain URL
parameters (resrc.domain) below and in the local and staging config files!

Roxy:
Resrc is always disabled in local environment by default, but can be enabled
by making use of roxy, a stand-alone proxy server for locally testing resrc
(see head.script.js for more information about how to enable and utilize roxy).

Use `lazyload.init` in main.scripts.js

*/

c::set('resrc', true);                                                          // set to true to use resrc for retina images
c::set('resrc.plan', 'app.resrc.it');                                           // set to true to use resrc for retina images
c::set('resrc.params', 's=w280/o=60(80)');                                      // params (options) Resrc will use generating the image. Without starting and trailing slash! See http://www.resrc.it/docs/resize for sizes and more


/* -----------------------------------------------------------------------------
Multi-language support setup
--------------------------------------------------------------------------------

To run the site with multiple languages, just out-comment or add more
language variables to the languages array.

The URL for the default language will not have the language code part, but the
other languages will (automatically) have the language code part added:

http://yourdomain.com/nl/blog

Even if only one (default) language is set — basically not enabling
multi-language — this one default lanuage is used to set among other things
the lang atribute on the html element, .

More information about language codes, locales and multi-language sitemaps:
- https://support.google.com/webmasters/answer/189077?hl=en&topic=2370587&ctx=topic
- https://support.google.com/webmasters/answer/2620865
- http://googlewebmastercentral.blogspot.nl/2012/05/multilingual-and-multinational-site.html

*/

c::set('languages', array(
	array(
		'default' => true,
		'code'    => 'en',
		'name'    => 'English',
		'locale'  => 'en',                                                      // English content
		// 'locale'  => 'en_US',                                                   // English content, for US users
		// 'locale'  => 'en_GB',                                                   // English content, for United Kingdom users
		'url'     => '/',
	),
	// array(
	// 	'code'    => 'nl',
	// 	'name'    => 'Nederlands',
	// 	'locale'  => 'nl_NL',                                                   // Dutch content
	// 	// 'locale'  => 'nl_BE'                                                 // Dutch content, for Belgium user
	// 	'url'     => '/nl',
	// ),
));


/* -----------------------------------------------------------------------------
Twitter
--------------------------------------------------------------------------------

Public and private keys, used by the Twitter API (from v1.1 and up).

*/

c::set('twitter.key','your api key');
c::set('twitter.secret','your api secret');


/* -----------------------------------------------------------------------------
Analytics, tracking, site stats
--------------------------------------------------------------------------------

Set analytics method first [1] (ga-classic, ga-universal, gosquared or
segment-io) and then make sure the associated tracking ID/API KEY [2] is set
to start tracking/measuring for production environment only (tracking is
disabled for local and staging environments as long as no tracking code is
added to these environment specific config files!).

*/

c::set('analytics.tool', 'ga-universal');                                       // [1] set tracking method
c::set('google.analytics.id', 'TRACKING ID IS NOT SET');                        // [2] Google Analytics ID
c::set('gosquared.id', 'TRACKING ID IS NOT SET');                               // [2] GoSquared ID
c::set('segment.io.api.key', 'TRACKING API KEY IS NOT SET');                    // [2] Segment.io API Key
