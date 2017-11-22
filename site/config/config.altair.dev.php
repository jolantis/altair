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

c::set('environment', 'local');


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
c::set('whoops', true);


/* -----------------------------------------------------------------------------
URL
--------------------------------------------------------------------------------

*/

c::set('url', false);
c::set('ssl', false);



/* -----------------------------------------------------------------------------
Timezone
--------------------------------------------------------------------------------

*/

c::set('timezone', 'UTC');


/* -----------------------------------------------------------------------------
Home folder
--------------------------------------------------------------------------------

*/

c::set('home', 'home');


/* -----------------------------------------------------------------------------
Cache
--------------------------------------------------------------------------------

*/

c::set('cache', false);
c::set('cache.driver', 'file');
// c::set('cache.options', array('prefix' => 'altair_'));


/* -----------------------------------------------------------------------------
Thumbs
--------------------------------------------------------------------------------

*/

c::set('thumbs.driver','im');
c::set('thumbs.bin', '/usr/local/bin/convert');                                 // Path to the convert bin for 'im' thumb driver setting (see: http://j.mp/1LJ8n9E)

/* -----------------------------------------------------------------------------
Fingerprint (assets files)
--------------------------------------------------------------------------------

*/

c::set('fingerprint', true);

/* -----------------------------------------------------------------------------
Analytics, tracking, site stats
--------------------------------------------------------------------------------

*/

c::set('google.analytics', false);
