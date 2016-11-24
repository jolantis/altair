<?php

// direct access protection
if(!defined('KIRBY')) die('Direct access is not allowed');

/* -----------------------------------------------------------------------------
License
--------------------------------------------------------------------------------

To be able to add the site's code in public repository (e.g. on Github),
without exposing the Kirby license code, create a seperate `license.php` file
and add it to `site/config/` folder. In this file only add the following line:

<?php c::set('license', 'your-license-key-here');

The `license.php` file is ignored by git, and therefore needs to be uploaded
manually to the production server.

*/

if (file_exists(__DIR__ . DS . 'license.php')) include __DIR__ . DS . 'license.php';


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
Environment
--------------------------------------------------------------------------------

The environment this Kirby instance is running on (local, staging or production).

*/

c::set('environment', 'production');


/* -----------------------------------------------------------------------------
Timezone
--------------------------------------------------------------------------------

You can change the default timezone used for all date functions here.
It is set to UTC by default. Please read more about it here:

http://php.net/manual/en/function.date-default-timezone-set.php

*/

c::set('timezone', 'UTC');


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
URL / SSL
--------------------------------------------------------------------------------

To use root relative URLs:

c::set('url', '');

Or when in a subdirectory:

c::set('url', '/mysite');

To force SSL on every page, make sure to include https
in your url setup and set the sll setting to true:

c::set('url', 'https://yourdomain.com');

*/

c::set('url', '');
c::set('ssl', false);


/* -----------------------------------------------------------------------------
Content File Extension
--------------------------------------------------------------------------------

Change the default file extension for your content files here if you'd rather
use something else than txt. For example md or mdown.

*/

c::set('content.file.extension', 'md');


/* -----------------------------------------------------------------------------
Ignore Content Files
--------------------------------------------------------------------------------

Sometimes it's necessary to ignore particular content files/folders in all
content folders. Just add them to the array here. By default the following
files are being ignored:

array('.', '..', '.DS_Store', '.svn', '.git', '.htaccess');

... so you don't have to add them.

*/

c::set('content.file.ignore', array());


/* -----------------------------------------------------------------------------
Home + Error folders
--------------------------------------------------------------------------------

The name of the home and error page folders.

*/

c::set('home', 'home');
c::set('error', 'error');


/* -----------------------------------------------------------------------------
Cache
--------------------------------------------------------------------------------

Enable/disable Kirby's cache.

*/

c::set('cache', false);
c::set('cache.driver', 'file');                                                 // Valid values are: file, memcached and apc
// c::set('cache.root', '/var/cache');                                             // The cache directory location
c::set('cache.options', array('host' => 'localhost', 'port' => 11211));         // Change the default memcached driver host and port (the default is localhost and  11211)
c::set('cache.options', array('prefix' => 'altair_'));                          // Prefix memcached keys (prevent collision of caches when pages are named the same, acros sites in a multisite environment)
c::set('cache.ignore', array('sitemap', 'search'));                     // Wildcards can be used as well, e.g.: projects/*


/* -----------------------------------------------------------------------------
Routes
--------------------------------------------------------------------------------

Additional route setup for Kirby's internal router.

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
Language(s)
--------------------------------------------------------------------------------

Language definitions for (default) locale and/or multi-languages.

To enable multi-languages set `language.multi` to `true` and out-comment
the `languages` array.

The URL for the default language will not have the language code part, but the
other languages will (automatically) have the language code part added:

http://yourdomain.com/nl/blog

The `language.locale` variable is used to set among other things the lang
atribute on the html element. If multi-language is enabled (see previous point),
the `locale` key of the `languages` variable array is used instead,
while `language.locale` is further ignored.

More information about language codes, locales and multi-language sitemaps:
- https://support.google.com/webmasters/answer/189077?hl=en&topic=2370587&ctx=topic
- https://support.google.com/webmasters/answer/2620865
- http://googlewebmastercentral.blogspot.nl/2012/05/multilingual-and-multinational-site.html

*/

c::set('locale', 'en_US.UTF8');                                                 // Sets the global locale setting for PHP (e.g. format a local time/date according to locale settings)
c::set('language.multi', false);                                                // Enable multi-language support (also make sure to out-comment the `languages` variabel array below!)
c::set('language.locale', 'en');                                                // Variable to set (among other things) the lang atribute on the html element when multi-language is disabled
c::set('language.detect',false);                                                // Enables automatic language detection for multi-language sites

// c::set('languages', array(
// 	array(
// 		'default'   => true,
// 		'code'      => 'en',
// 		'name'      => 'English',
// 		'locale'    => 'en',                                                    // English content
// 		// 'locale'    => 'en_US',                                                 // English content, for US users
// 		// 'locale'    => 'en_GB',                                                 // English content, for United Kingdom users
// 		'url'       => '/',
// 		'direction' => 'ltr'
// 	),
// 	array(
// 		'code'      => 'nl',
// 		'name'      => 'Nederlands',
// 		'locale'    => 'nl_NL',                                                 // Dutch content
// 		// 'locale'    => 'nl_BE'                                                  // Dutch content, for Belgium user
// 		'url'       => '/nl',
// 		'direction' => 'ltr'
// 	),
// ));


/* -----------------------------------------------------------------------------
Date handler
--------------------------------------------------------------------------------

Change Kirby's default date handler date() function to strftime() by simply
out-commening the line below. This is especially relevant for non-english
websites, where you want to work with translated month names, which should
react to the locale settings

*/

// c::set('date.handler', 'strftime');


/* -----------------------------------------------------------------------------
Panel (install)
--------------------------------------------------------------------------------

For security reasons, the Panel installer can only be run on localhost.
If you want to run the installer on a remote server, you have to set
the `panel.install` option to true to be able to install.

*/

c::set('panel.install', false);


/* -----------------------------------------------------------------------------
Roles
--------------------------------------------------------------------------------

Available user roles which will be available in the panel when selecting
a role for a new user.

*/

c::set('roles', array(
	array(
		'id'      => 'admin',
		'name'    => 'Admin',
		'panel'   => true
	),
	array(
		'id'      => 'editor',
		'name'    => 'Editor',
		'default' => true,
		'panel'   => true
	),
	array(
		'id'      => 'client',
		'name'    => 'Client',
		'panel'   => false
	)
));


/* -----------------------------------------------------------------------------
Pagination
--------------------------------------------------------------------------------

The number of items on a list page, or no pagination (set to `false`)
*/

c::set('pagination.lists', 6);


/* -----------------------------------------------------------------------------
Tinyurl Setup
--------------------------------------------------------------------------------

KirbyCMS has built in tiny urls for every page. Tinyurls look like this:

http://yourdomain.com/x/asd2qd1c

The /x/ in the url is needed to detect tinyurls, you can
change the x to anything else but an existing page uri.

*/

c::set('tinyurl.enabled', false);
c::set('tinyurl.folder', 'x');


/* -----------------------------------------------------------------------------
Markdown Extra
--------------------------------------------------------------------------------

Enable/disable the Markdown extra parser with additional Markdown features
like footnotes and tables (http://michelf.com/projects/php-markdown/extra/).

And enable/disable automatic line breaks in Markdown like on Github. Otherwise
line breaks must be confirmed with three spaces at the end of the line.

*/

c::set('markdown.extra', true);
c::set('markdown.breaks', false);


/* -----------------------------------------------------------------------------
Smartypants
--------------------------------------------------------------------------------

Smartypants is a typography plugin, which helps to improve things like
quotes and ellipsises and all those nifty little typography details.

*/

c::set('smartypants', true);                                                    // Set to true to enable smartypants
c::set('smartypants.attr', 2);                                                  // Set to:  1 -> "--" for em-dashes; no en-dash support,  2 -> "---" for em-dashes; "--" for en-dashes,  3 -> "--" for em-dashes; "---" for en-dashes
c::set('smartypants.doublequote.open', '&#8220;');                              // Openning smart double-quotes.
c::set('smartypants.doublequote.close', '&#8221;');                             // Closing smart double-quotes.
c::get('smartypants.space.emdash', ' ');                                        // Space around em-dashes. "He_—_or she_—_should change that."
c::get('smartypants.space.endash', ' ');                                        // Space around en-dashes. "He_–_or she_–_should change that."
c::get('smartypants.space.colon', '&#160;');                                    // Space before a colon. "He said_: here it is."
c::get('smartypants.space.semicolon', '&#160;');                                // Space before a semicolon. "That's what I said_; that's what he said."
c::get('smartypants.space.marks', '&#160;');                                    // Space before a question mark and an exclamation mark: "¡_Holà_! What_?"
c::get('smartypants.space.frenchquote', '&#160;');                              // Space inside french quotes. "Voici la «_chose_» qui m'a attaqué."
c::get('smartypants.space.thousand', '&#160;');                                 // Space as thousand separator. "On compte 10_000 maisons sur cette liste."
c::get('smartypants.space.unit', '&#160;');                                     // Space before a unit abreviation. "This 12_kg of matter costs 10_$."
c::get('smartypants.skip', 'pre|code|kbd|script|style|math');                   // SmartyPants will not alter the content of these tags:


/* -----------------------------------------------------------------------------
Kirby text video
--------------------------------------------------------------------------------

*/

c::set('kirbytext.video.class', 'video');                                       // The default class which is being added to Youtube and Vimeo iframes
c::set('kirbytext.video.width', false);                                         // The default width which is being added to Youtube and Vimeo iframes (false = no width)
c::set('kirbytext.video.height', false);                                        // The default height which is being added to Youtube and Vimeo iframes (false = no height)


/* -----------------------------------------------------------------------------
Fluid video
--------------------------------------------------------------------------------

The default width and height which is being added to Vimeo and YouTube
videos embedded in Kirby text width the custom video tag, like this:

(video: 77383196 source: vimeo)
(video: hXU63NXzg5A source: youtube ratio: 16by9)

*/

c::set('video.width', 480);
c::set('video.height', 270);


/* -----------------------------------------------------------------------------
Thumbs
--------------------------------------------------------------------------------

*/

c::set('thumbs.driver', 'im');                                                  // The thumbnail library which is being used by Kirby's thumb function/class ('gd' or 'im')
c::set('thumbs.quality', 78);                                                   // The default jpg compression (or quality setting) for thumbs (figure plugin and tag);
c::set('thumbs.interlace', false);                                              // Save thumb to use progressive (interlace line) rendering, meaning the image is delivered and rendered in stages


/* -----------------------------------------------------------------------------
Figureimage (layout grid) settings
--------------------------------------------------------------------------------

*/

c::set('figureimage.gutter', 'percentage');                                     // The gutter unit for `.figure-image` items in a layout grid; options are 'default' (rhythm unit) and 'percentage'


/* -----------------------------------------------------------------------------
Lazyload images
--------------------------------------------------------------------------------

Enable `lazysizes` and it's related plugin in gruntfile.js.

*/

c::set('lazyload', true);                                                       // Set to true to lazyload images


/* -----------------------------------------------------------------------------
[1] Responsive images (sources)
--------------------------------------------------------------------------------

By default, thumbnails that are 320, 700, 900, 1280, 1600, 1920 and (max) 2880
pixels wide will be generated.

Overwrite these source widths to your liking. Out-comment unused widths and/or
change tyeh values of others.

Add `array('width' => 900, 'grayscale' => true)` for better debugging images.

*/

c::set('responsiveimage.sources', array(
	'small'    => array('width' => 320),
	'compact'  => array('width' => 700),
	'medium'   => array('width' => 900),
	'large'    => array('width' => 1280),
	'wide'     => array('width' => 1600),
	'huge'     => array('width' => 1920),
	'max'      => array('width' => 2880),                                       // The maximum thumb size (as default)
));


/* -----------------------------------------------------------------------------
[2] Responsive images (defaults)
--------------------------------------------------------------------------------

Set default and feed images width.

To keep the number of generated images within limits, a size (e.g. `compact`,
`wide`) from the responsive images sources array (above) has to selected.

*/

c::set('responsiveimage.default', 'compact');                                   // The default thumb size used/displayed in browsers that do not suppert `srcset`
c::set('responsiveimage.feed', 'wide');                                         // An arbitrary (maximum) width for generated thumbs used in feeds (via `figure` tag)


/* -----------------------------------------------------------------------------
[3] Responsive images (sizes)
--------------------------------------------------------------------------------

To control the sizes attribute media queries can be used. Add for every width
attribute used in figure images (e.g. `1of2`, `1of3`, `3of4`, etc.) a
corresponding sizes array, with the classnames to match

*/

c::set('vw_width', '88');                                                       // 100 - 2 * `$contain-percentage`

c::set('responsiveimage.sizes', array(
	'default' => array(                                                         // The default sizes, for full width images
		'all' => array(
			'size_value' => c::get('vw_width') . 'vw'
		)
	),
	'1of2' => array(                                                            // 50% wide images
		'small' => array(
			'mq_value'   => '20em',                                             // Same as compact breakpoint value from `$breakpoints` Sass list
			'mq_name'    => 'min-width',
			'size_value' => c::get('vw_width') / 2 . 'vw'
		),
		'compact' => array(
			'mq_value'   => '30em',                                             // Same as compact breakpoint value from `$breakpoints` Sass list
			'mq_name'    => 'min-width',
			'size_value' => c::get('vw_width') / 2 . 'vw'
		)
	),
	'1of3' => array(                                                            // 33% wide images
		'compact' => array(
			'mq_value'   => '30em',
			'mq_name'    => 'min-width',
			'size_value' => c::get('vw_width') / 3 . 'vw'
		)
	),
	'2of3' => array(                                                            // 66% wide images
		'compact' => array(
			'mq_value'   => '30em',
			'mq_name'    => 'min-width',
			'size_value' => c::get('vw_width') / 3 * 2 . 'vw'
		)
	),
));


/* -----------------------------------------------------------------------------
Photoswipe
--------------------------------------------------------------------------------

Enable Photoswipe for images. This will enable it on all images provided by the
figure plugin/tag.

Do not forget to enable the Javascript and Stylesheet assets when enabling!

*/

c::set('photoswipe', true);
c::set('photoswipe.pages', array('images', 'blog/*'));                          // Include in these pages. Wildcards can be used as well, e.g.: blog/*
c::set('photoswipe.exclude', array());                                          // Exclude these specific pages from photoswipe.pages. Wildcards can be used as well, e.g.: blog/archive/*
c::set('photoswipe.mobile', 'wide');                                            // Enlarged image size for mobile, defined by one of the `responsiveimage.sources` identifier
c::set('photoswipe.desktop', 'max');                                            // Enlarged image size for desktop, defined by one of the `responsiveimage.sources` identifier


/* -----------------------------------------------------------------------------
Analytics, tracking, site stats
--------------------------------------------------------------------------------

First make sure to set the right Google analytics tracking ID/API KEY for your
website [2], before enabling analytics tracking [1] for production environment.
Tracking is disabled by default for local and staging environments.

*/

c::set('google.analytics', false);                                              // [1] Set tracking method
c::set('google.analytics.id', 'TRACKING ID IS NOT SET');                        // [2] Google Analytics ID
