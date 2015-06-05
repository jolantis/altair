<?php

// direct access protection
if(!defined('KIRBY')) die('Direct access is not allowed');

/* -----------------------------------------------------------------------------
Troubleshooting
--------------------------------------------------------------------------------

*/

c::set('troubleshoot', false);


/* -----------------------------------------------------------------------------
Debug
--------------------------------------------------------------------------------

*/

c::set('debug', true);


/* -----------------------------------------------------------------------------
Environment
--------------------------------------------------------------------------------

*/

c::set('environment', 'local');



/* -----------------------------------------------------------------------------
Timezone
--------------------------------------------------------------------------------

*/

c::set('timezone', 'UTC');


/* -----------------------------------------------------------------------------
Cache
--------------------------------------------------------------------------------

*/

c::set('cache', false);
c::set('cache.driver', 'file');                                                 // Valid values: file, memcached or apc


/* -----------------------------------------------------------------------------
Thumbs
--------------------------------------------------------------------------------

*/

c::set('thumbs.driver','im');                                                   // The thumbnail library which is being used by Kirby's thumb function/class ('gd' or 'im')
thumb::$defaults['bin'] = '/usr/local/bin/convert';                             // Path to the convert bin for 'im' thumb driver setting (see: http://j.mp/1LJ8n9E)


/* -----------------------------------------------------------------------------
Lazyload images
--------------------------------------------------------------------------------

Use `lazysizes.init()` in main.scripts.js and mobile.scripts.js

*/

c::set('lazyload', true);                                                       // Set to true to lazyload images


/* -----------------------------------------------------------------------------
Resrc setup
--------------------------------------------------------------------------------

Roxy:
Resrc is disabled in local environment by default, but can be enabled
by making use of roxy, a stand-alone proxy server for locally testing resrc
(see head.script.js for more information about how to enable and utilize roxy).

Use `lazysizes.init()` in main.scripts.js and mobile.scripts.js

*/

c::set('resrc', false);                                                         // set to true to use resrc for retina images


/* -----------------------------------------------------------------------------
Analytics, tracking, site stats
--------------------------------------------------------------------------------

*/

c::set('analytics.tool', false);
