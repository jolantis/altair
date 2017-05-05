<?php

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
