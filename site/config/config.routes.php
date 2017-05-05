<?php

/* -----------------------------------------------------------------------------
Routes
--------------------------------------------------------------------------------

Additional route setup for Kirby's internal router.

*/

c::set('routes', array(
	// array(                                                                      // Example route
	// 	'pattern' => '(:num)/(:num)/(:num)/(:any)',
	// 	'action'  => function($year, $month, $day, $uid) {
	// 		// search for the article
	// 		$page = page('blog/' . $uid);
	// 		// redirect to the article or the error page
	// 		go($page ? $page->url($language_code) : 'error');
	// 	}
	// ),
	// array(                                                                      // Internally route sitemap.xml to sitemap (template)
	// 	'pattern' => 'sitemap.xml',
	// 	'action'  => function() {
	// 		return site()->visit('sitemap');
	// 	}
	// ),
	array(                                                                      // Redirect sitemap to sitemap.xml
		'pattern' => 'sitemap',
		'action'  => function() {
			return go('sitemap.xml');
		}
	),
));
