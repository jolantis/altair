<?php

/* -----------------------------------------------------------------------------
Cache
--------------------------------------------------------------------------------

Enable/disable Kirby's cache.

*/

c::set('cache', false);
c::set('cache.driver', 'memcached');                                            // Valid values are: file, memcached and apc
c::set('cache.autoupdate', true);                                               // Set to true to scan the content folder for updates and refresh the cache automatically

c::set('cache.options', array(
			'root' => '/var/cache',                                             // The cache directory location
			'host' => 'localhost', 'port' => 11211,                             // Change the default memcached driver host and port (the default is localhost and 11211)
			'prefix' => 'altair_'                                               // Prefix memcached keys (prevent collision of caches when pages are named the same, acros sites in a multisite environment)
));

c::set('cache.ignore', array(
			'sitemap',                                                          // Wildcards can be used as well, e.g.: projects/*
			'sitemap.xml',
			'search'
));
