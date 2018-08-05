<?php

/* -----------------------------------------------------------------------------
Cache
--------------------------------------------------------------------------------

Enable/disable Kirby's cache.

*/

c::set('cache', false);
c::set('cache.driver', 'file');                                                 // Valid values are: file, memcached and apc
// c::set('cache.root', '/var/cache');                                          // The cache directory location
c::set('cache.options', array('host' => 'localhost', 'port' => 11211));         // Change the default memcached driver host and port (the default is localhost and  11211)
c::set('cache.options', array('prefix' => 'artlantis_'));                       // Prefix memcached keys (prevent collision of caches when pages are named the same, acros sites in a multisite environment)
c::set('cache.ignore', array('sitemap', 'search'));                     // Wildcards can be used as well, e.g.: projects/*
