<?php

// direct access protection
if(!defined('KIRBY')) die('Direct access is not allowed');

/* -----------------------------------------------------------------------------
License Setup
--------------------------------------------------------------------------------

*/

c::set('license', 'your license key');


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
Force SSL
--------------------------------------------------------------------------------

If you want to make sure to force SSL on every page, just set this setting
to true. Also make sure to include https in your url setup:

c::set('url', 'https://yourdomain.com');

*/

c::set('ssl', false);


/* -----------------------------------------------------------------------------
Locale
--------------------------------------------------------------------------------

Sets the global locale setting for PHP.

*/

c::set('locale', 'en_US.UTF8');


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

… so you don't have to add them.

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
c::set('cache.options', array('host' => 'localhost', 'port' => 11211));         // Change the default memcached driver host and port (the default is localhost and  11211)
c::set('cache.options', array('prefix' => 'mycustomprefix_'));                  // Prefix memcached keys (prevent collision of caches when pages are named the same, acros sites in a multisite environment)
c::set('cache.ignore', array('sitemap' ,'feed', 'search'));                     // Wildcards can be used as well, e.g.: projects/*


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
Languages
--------------------------------------------------------------------------------

Language definition for multi-language sites.

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
		'default'   => true,
		'code'      => 'en',
		'name'      => 'English',
		'locale'    => 'en.utf-8',                                              // English content
		// 'locale'    => 'en_US.utf-8',                                           // English content, for US users
		// 'locale'    => 'en_GB.utf-8',                                           // English content, for United Kingdom users
		'url'       => '/',
		'direction' => 'ltr'
	),
	// array(
	// 	'code'      => 'nl',
	// 	'name'      => 'Nederlands',
	// 	'locale'    => 'nl_NL.utf-8',                                           // Dutch content
	// 	// 'locale'    => 'nl_BE.utf-8'                                            // Dutch content, for Belgium user
	// 	'url'       => '/nl',
	// 	'direction' => 'ltr'
	// ),
));


/* -----------------------------------------------------------------------------
Language detect
--------------------------------------------------------------------------------

Enable/disable automatic language detection for multi-language sites.

*/

c::set('language.detect', false);


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
c::set('video.height', 358);


/* -----------------------------------------------------------------------------
Thumbs
--------------------------------------------------------------------------------

*/

c::set('thumbs.driver', 'gd');                                                  // The thumbnail library which is being used by Kirby's thumb function/class ('gd' or 'im')
c::set('thumbs.filename', '{safeName}-{hash}.{extension}');                     // The naming scheme for thumb files (default is: {safeName}-{hash}.{extension})
c::set('thumbs.quality', 70);                                                   // The default jpg compression (or quality setting) for thumbs (figure plugin and tag); is always set to 100% for resrc (see 'resrc.params' to set compression quality for resrc)
c::set('thumbs.small.width', 352);                                              // An arbitrary *small* width for thumbs (figure plugin and tag), when not using resrc (e.g. local dev)
c::set('thumbs.medium.width', 800);                                             // An arbitrary *medium* width for thumbs (figure plugin and tag), when not using resrc (e.g. local dev)
c::set('thumbs.large.width', 1200);                                             // An arbitrary *large* width for thumbs (figure plugin and tag), when not using resrc (e.g. local dev)
c::set('thumbs.feed.width', 1600);                                              // An arbitrary width for thumbs used in feeds (via figure tag)


/* -----------------------------------------------------------------------------
Figureimage (layout grid) settings
--------------------------------------------------------------------------------

*/

c::set('figureimage.break', 'compact');                                         // The default 'breakpoint' for `.FigureImage` items in a layout grid; the 'breakpoint' defines where to switch from linear to inline items; options are 'compact' and 'medium' (make sure the corresponding grid sizes are set and/or added in `_layout.grid.scss`!)
c::set('figureimage.gutter', 'default');                                        // The gutter unit for `.FigureImage` items in a layout grid; options are 'default' (rhythm unit) and 'percentage'


/* -----------------------------------------------------------------------------
Lazyload images
--------------------------------------------------------------------------------

Use `lazyload.init` in main.scripts.js

*/

c::set('lazyload', true);                                                       // Set to true to lazyload images


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

Lazyload:
If both resrc and layzload (above) are set to true,
use `lazyload.init` in main.scripts.js

*/

c::set('resrc', true);                                                          // Set to true to use resrc
c::set('resrc.plan', 'app.resrc.it');                                           // Set to 'trial.resrc.it' while using a resrc trail plan, otherwise set to 'app.resrc.it'
c::set('resrc.params', 's=w300/o=80');                                          // Resrc params (options) used to generate images; see http://www.resrc.it/docs for more parameters


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

c::set('analytics.tool', 'ga-universal');                                       // [1] Set tracking method
c::set('google.analytics.id', 'TRACKING ID IS NOT SET');                        // [2] Google Analytics ID
c::set('gosquared.id', 'TRACKING ID IS NOT SET');                               // [2] GoSquared ID
c::set('segment.io.api.key', 'TRACKING API KEY IS NOT SET');                    // [2] Segment.io API Key
