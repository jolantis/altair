<?php

/* -----------------------------------------------------------------------------
Tinyurl Setup
--------------------------------------------------------------------------------

KirbyCMS has built in tiny urls for every page. Tinyurls look like this:

http://yourdomain.com/x/asd2qd1c

The /x/ in the url is needed to detect tinyurls, you can
change the x to anything else but an existing page uri.

*/

c::set('tinyurl.enabled', false);
c::set('tinyurl.folder', 'x');
