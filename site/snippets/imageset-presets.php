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
// Presets for page content
// ----------------------------------------------------------

imageset::presets([
  'default' => '200-1000,5',
  'small'   => '150-500',
  'square'  => '200x200-1000x1000,4',
]);

imageset::presets('save', 'content');
imageset::presets('reset');

// ----------------------------------------------------------
// Presets for sidebar
// ----------------------------------------------------------

imageset::presets([
  'default' => '200-500',
  'small'   => '100,150,200',
]);

imageset::presets('save', 'sidebar');
imageset::presets('reset');
