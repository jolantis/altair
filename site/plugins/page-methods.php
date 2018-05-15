<?php

/**
 * Custom page methods
 *
 * @author      Jonathan van Wunnik <jonathan@artlantis.nl>
 *
 * @license     Code and contributions have 'MIT License'
 *
 * @link        https://getkirby.com/docs/developer-guide/objects/page
 *
 */

/**
 * Window title
 *
 * Field requirements:
 * - $site->title() *
 * - $site->tagline() *      ---> (part of) home page's title (and used to generate fallback for meta description)
 * - $page->long-title()     ---> page's title
 * - $page->title() *        ---> page's title, used to generate fallback for page's long title
 *
 * Fields marked with an asterisk (*) are required and need to be filled in to
 * make it work. If any of the other fields are missing it should still work.
 *
 * Include following line in HTML head:
 * `<title><?php echo $page->page_title(); ?></title>`
 */

page::$methods['window_title'] = function($page) {

	if($page->isHomePage()) {
		if(site()->tagline()->exists() && site()->tagline()->isNotEmpty()) {
			$page_title = site()->title()->smartypants()->titlecase() . ': ' . site()->tagline()->smartypants()->titlecase();
		}
		else {
			$page_title = site()->title()->smartypants()->titlecase();
		}
	}
	else {
		if($page->long_title()->exists() && $page->long_title()->isNotEmpty()) {
			$page_title = site()->title()->smartypants()->titlecase() . ': ' . $page->long_title()->smartypants()->titlecase();
		}
		else {
			$page_title = site()->title()->smartypants()->titlecase() . ': ' . $page->title()->smartypants()->titlecase();
		}
	}
	return $page_title;
};

/**
 * Meta description
 *
 * Field requirements:
 * - $page->description()    ---> page's meta description
 * - $page->intro()          ---> page's main text content, used to generate fallback for meta description
 * - $page->text()           ---> page's main text content, used to generate fallback for meta description
 * - $site->tagline() *      ---> (part of) home page's title, last resort fallback for meta description
 *
 * Fields marked with an asterisk (*) are required and need to be filled in to
 * make it work. If any of the other fields are missing it should still work.
 *
 * Include following line in HTML head:
 * `<meta name="description" content="<?php echo $page->meta_description(); ?>">`
 */

page::$methods['meta_description'] = function($page) {

	if($page->description()->exists() && $page->description()->isNotEmpty()) {
		$description = $page->description()->smartypants();
	}
	elseif($page->intro()->exists() && $page->intro()->isNotEmpty() ) {
		$description = $page->intro()->smartypants();
	}
	elseif($page->text()->exists() && $page->text()->isNotEmpty() ) {
		$description = $page->text()->smartypants();
	}
	else {
		$description = site()->tagline()->smartypants();
	}
	return $description->excerpt(155);
};

/**
 * Cononical link
 *
 * Include following line in HTML head:
 * `<link rel="canonical" href="<?php echo $page->rel_canonical($filter_value, $page_num); ?>">`
 */

page::$methods['rel_canonical'] = function($page, $filter_value, $page_num) {
	return $page->url() . (($page_num && $page_num != 1) ? '/page/' . $page_num : '');
};

/**
 * Next and previous links
 *
 * Include following line in HTML head:
 * `<?php echo $page->rel_prevnext($filter_key, $filter_value, $pagination, $page_num); ?>`
 */

page::$methods['rel_prevnext'] = function($page, $filter_key, $filter_value, $pagination, $page_num) {

	if($pagination && $pagination->hasPages()) {
		if($page_num == 1 and $pagination->hasNextPage()) {
			return '<link rel="next" href="' . url(kirby()->request()->path()->first() . (($filter_value) ? '/' . $filter_key . '/' . $filter_value : '') . '/page/2') . '">' . "\n";
		}
		if($page_num == 2 and $pagination->hasNextPage()) {
			return '<link rel="prev" href="' . url(kirby()->request()->path()->first() . (($filter_value) ? '/' . $filter_key . '/' . $filter_value : '')) . '">
					<link rel="next" href="' . url(kirby()->request()->path()->first() . (($filter_value) ? '/' . $filter_key . '/' . $filter_value : '') . '/page/' . ($page_num + 1)) . '">' . "\n";
		}
		if($pagination->hasPrevPage() and $pagination->hasNextPage()) {
			return '<link rel="prev" href="' . url(kirby()->request()->path()->first() . (($filter_value) ? '/' . $filter_key . '/' . $filter_value : '') . '/page/' . ($page_num - 1)) . '">
					<link rel="next" href="' . url(kirby()->request()->path()->first() . (($filter_value) ? '/' . $filter_key . '/' . $filter_value : '') . '/page/' . ($page_num + 1)) . '">' . "\n";
		}
		if($page_num == 2 and !$pagination->hasNextPage()) {
			return '<link rel="prev" href="' . url(kirby()->request()->path()->first() . (($filter_value) ? '/' . $filter_key . '/' . $filter_value : '')) . '">' . "\n";
		}
		if($pagination->hasPrevPage() and !$pagination->hasNextPage()) {
			return '<link rel="prev" href="' . url(kirby()->request()->path()->first() . (($filter_value) ? '/' . $filter_key . '/' . $filter_value : '') . '/page/' . ($page_num - 1)) . '">' . "\n";
		}
	}
};

/**
 * Alternate link(s) (for multiple languages)
 *
 * Usage example:
 * `<?php echo $page->rel_alternate(); ?>`
 */

page::$methods['rel_alternate'] = function($page) {

	if(c::get('language.multi', false)) {

		$alternate = '';

		foreach(site()->languages() as $language) {

			if(site()->languages()->count() > 1 && site()->language() != $language && isset($page->inventory()['content'][$language->code()])) {
				$alternate .= '<link rel="alternate" href="' . $page->url($language->code()) . '" hreflang="' . $language->locale() . '">'  . "\n";
			}
		}

		return $alternate;
	}
};

/**
 * Get next sibling
 *
 * Usage example:
 * `$page-next_sibling($page->siblings()->visible());`
 */

page::$methods['next_sibling'] = function($page, Children $siblings, $sort = array(), $visibility = 'visible') {

	if($sort) $siblings = call(array($siblings, 'sortBy'), $sort);

	$index = $siblings->indexOf($page);

	if($index === false) return null;

	if($visibility) {
		$siblings = $siblings->offset($index+1);
		$siblings = $siblings->{$visibility}();
		return $siblings->first();
	}
	else {
		return $siblings->nth($index + 1);
	}
};

/**
 * Get previous sibling
 *
 * Usage example:
 * `$page->prev_sibling($page->siblings()->visible());`
 */

page::$methods['prev_sibling'] = function($page, Children $siblings, $sort = array(), $visibility = 'visible') {

	if($sort) $siblings = call(array($siblings, 'sortBy'), $sort);

	$index = $siblings->indexOf($page);

	if($index === false or $index === 0) return null;

	if($visibility) {
		$siblings = $siblings->limit($index);
		$siblings = $siblings->{$visibility}();
		return $siblings->last();
	}
	else {
		return $siblings->nth($index - 1);
	}
};

?>
