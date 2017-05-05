<?php

/* -----------------------------------------------------------------------------
Direct access protection
--------------------------------------------------------------------------------

*/

if(!defined('KIRBY')) die('Direct access is not allowed');


/* -----------------------------------------------------------------------------
Environment
--------------------------------------------------------------------------------

Add server-specific settings to this file that are needed for the environment
this Kirby instance is running on (e.g. local, staging or production).

*/

c::set('environment', 'production');


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
Timezone
--------------------------------------------------------------------------------

You can change the default timezone used for all date functions here.
It is set to UTC by default. Please read more about it here:

http://php.net/manual/en/function.date-default-timezone-set.php

*/

c::set('timezone', 'UTC');


/* -----------------------------------------------------------------------------
URL / SSL
--------------------------------------------------------------------------------

To use root relative urls:

c::set('url', '/');

Or when in a subdirectory:

c::set('url', '/mysite');

And when set to `false`, Kirby tries to auto-detects the correct url:

c::set('url', false);

---

To force **SSL** on every page, make sure to include https in the
url setup (also for stage) and set the **sll** setting to true:

c::set('url', 'https://yourdomain.com');
c::set('ssl', true);

*/

c::set('url', 'https://artlantis.nl');
c::set('ssl', true);


/* -----------------------------------------------------------------------------
Home + Error folders
--------------------------------------------------------------------------------

The name of the home and error page folders.

*/

c::set('home', 'home');
c::set('error', 'error');


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
License(s)
--------------------------------------------------------------------------------

To be able to add the site's code in public repository (e.g. Github), without
exposing the Kirby (and plugin) license code(s), create a seperate
`config.license.php` file and add it to the `site/config/` folder.

In this file only add (at least) the following code:

<?php

c::set('license', 'your-kirby-cms-license-code-here');

The `config.license.php` file is (should be) ignored by git, and therefore
needs to be uploaded manually to the production server.

*/

if (file_exists(__DIR__ . DS . 'config.license.php'))     include __DIR__ . DS . 'config.license.php';


/* -----------------------------------------------------------------------------
Project settings
--------------------------------------------------------------------------------

Project-wide settings like analytics, cache, language, markdown, routes, thumbs,
video, and panel options.

*/

if (file_exists(__DIR__ . DS . 'config.analytics.php'))   include __DIR__ . DS . 'config.analytics.php';
if (file_exists(__DIR__ . DS . 'config.cache.php'))       include __DIR__ . DS . 'config.cache.php';
if (file_exists(__DIR__ . DS . 'config.imagekit.php'))    include __DIR__ . DS . 'config.imagekit.php';
if (file_exists(__DIR__ . DS . 'config.imageset.php'))    include __DIR__ . DS . 'config.imageset.php';
if (file_exists(__DIR__ . DS . 'config.language.php'))    include __DIR__ . DS . 'config.language.php';
if (file_exists(__DIR__ . DS . 'config.markdown.php'))    include __DIR__ . DS . 'config.markdown.php';
if (file_exists(__DIR__ . DS . 'config.pagination.php'))  include __DIR__ . DS . 'config.pagination.php';
if (file_exists(__DIR__ . DS . 'config.panel.php'))       include __DIR__ . DS . 'config.panel.php';
if (file_exists(__DIR__ . DS . 'config.routes.php'))      include __DIR__ . DS . 'config.routes.php';
if (file_exists(__DIR__ . DS . 'config.thumbs.php'))      include __DIR__ . DS . 'config.thumbs.php';
if (file_exists(__DIR__ . DS . 'config.tinyurl.php'))     include __DIR__ . DS . 'config.tinyurl.php';
if (file_exists(__DIR__ . DS . 'config.video.php'))       include __DIR__ . DS . 'config.video.php';
if (file_exists(__DIR__ . DS . 'config.sitemap.php'))     include __DIR__ . DS . 'config.sitemap.php';
