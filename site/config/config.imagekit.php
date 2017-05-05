<?php

/* -----------------------------------------------------------------------------
Imagekit
--------------------------------------------------------------------------------

License code for Imagekit should be added to the `config.license.php` file.
For a more detailed description of the (basic) configuration, see:

https://github.com/fabianmichael/kirby-imagekit#5-basic-configuration

*/

// c::set('imagekit.driver', 'im');
c::set('imagekit.lazy', true);
c::set('imagekit.complain', true);
c::set('imagekit.widget', false);
c::set('imagekit.widget.step', 5);
c::set('imagekit.widget.discover', false);
