<?php ///////////////////////////////////////////////////////
// ----------------------------------------------------------
// SNIPPET
// ----------------------------------------------------------
// Imageset dynamic presets
// ----------------------------------------------------------
// In more complex scenarios, use different size presets
// depending on the current template, snippet or content area.
// For more information see:
// https://github.com/fabianmichael/kirby-imageset#442-dynamic-presets-api
// ----------------------------------------------------------
// This functionality is part of the Imageset plugin.
// ----------------------------------------------------------
/////////////////////////////////////////////////////////////

// ----------------------------------------------------------
// Presets for rss feed excerpt
// ----------------------------------------------------------

imageset::presets([
	'default' => '300x200-1620x1080,3',
	'1of2'    => '300x200-1620x1080,3',
	'1of3'    => '300x200-1620x1080,3',
	'2of3'    => '300x200-1620x1080,3',
]);

imageset::outputStyle('plain');
imageset::presets('save', 'rss-excerpt');
imageset::presets('reset');

// ----------------------------------------------------------
// Presets for rss feed full
// ----------------------------------------------------------

imageset::presets([
	'default' => '300-1620,3',
	'1of2'    => '300-1620,3',
	'1of3'    => '300-1620,3',
	'2of3'    => '300-1620,3',
]);

imageset::outputStyle('plain');
imageset::presets('save', 'rss-full');
imageset::presets('reset');
