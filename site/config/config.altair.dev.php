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
URL
--------------------------------------------------------------------------------

*/

c::set('url', '');                                                              // To use root relative URLs: c::set('url', '/');



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
c::set('cache.driver', 'file');                                                 // Valid values are: file, memcached and apc
// c::set('cache.options', array('prefix' => 'altair_'));                          // Prefix memcached keys (prevent collision of caches when pages are named the same, acros sites in a multisite environment)


/* -----------------------------------------------------------------------------
Thumbs
--------------------------------------------------------------------------------

*/

c::set('thumbs.driver','im');                                                   // The thumbnail library which is being used by Kirby's thumb function/class ('gd' or 'im')
c::set('thumbs.bin', '/usr/local/bin/convert');                                 // Path to the convert bin for 'im' thumb driver setting (see: http://j.mp/1LJ8n9E)


/* -----------------------------------------------------------------------------
Analytics, tracking, site stats
--------------------------------------------------------------------------------

*/

c::set('google.analytics', false);

