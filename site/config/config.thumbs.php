<?php

/* -----------------------------------------------------------------------------
Thumbs
--------------------------------------------------------------------------------

*/

c::set('thumbs.driver', 'im');                                                  // The thumbnail library which is being used by Kirby's thumb function/class ('gd' or 'im')
c::set('thumbs.quality', 82);                                                   // The default jpg compression (or quality setting) for thumbs
c::set('thumbs.interlace', false);                                              // Save thumb to use progressive (interlace line) rendering, meaning the image is delivered and rendered in stages


/* -----------------------------------------------------------------------------
ICC profile and meta data
--------------------------------------------------------------------------------

Only works when `thumb.driver` is set to `im` (ImageMagick) and
the 'colorprofile' plugin is installed in the plugin folder.

The `meta.data` config trumps `icc.profile`, meaning if `meta.data` is set
to `true` the color profile is preserved, even when 'icc.profile` is set
to `false`.

*/

c::set('thumbs.icc.profile', true);                                             // Only preserve embedded color (or icc) profile in generated thumb, while any other profile and meta-data is removed
c::set('thumbs.meta.data', false);                                              // Preserve all embedded meta data in generated thumb (e.g. EXIF, IPTC, color profile, etc.)
