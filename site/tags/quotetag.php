<?php
/**
 * Quotetag
 * Implements inline quotation with language locale, by wrapping a text string
 * in a <q> tag, with class `quote` and a (default) language attribute.
 *
 * Syntax:
 * (quote: This is an English inline quote)
 * (quote: This is an English inline quote lang: en)
 *
 * Copyright: Marijn Tijhuis (fatpixel.nl), Jonathan van Wunnik (artlantis.nl)
 * License: http://www.gnu.org/licenses/gpl-3.0.txt GPLv3 License
 */

kirbytext::$tags['quote'] = array(
	'attr' => array(
		'lang'
		),
	'html' => function($tag) {

		$text = $tag->attr('quote');

		if($tag->attr('lang')) {
			$language_locale = $tag->attr('lang');
		}
		else {
			$language_locale = site()->language()->locale(); // Fallback default language locale if no  one is explicitly passed, e.g. 'en, nl_NL', 'de_DE', ect.
		}

		return '<q class="quote" lang="' . $language_locale . '">' . $text . '</q>';

	}
);
