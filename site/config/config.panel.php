<?php

/* -----------------------------------------------------------------------------
Panel (install)
--------------------------------------------------------------------------------

For security reasons, the Panel installer can only be run on localhost.
If you want to run the installer on a remote server, you have to set
the `panel.install` option to true to be able to install.

*/

c::set('panel.install', false);


/* -----------------------------------------------------------------------------
Roles
--------------------------------------------------------------------------------

Available user roles which will be available in the panel when selecting
a role for a new user.

*/

c::set('roles', array(
	array(
		'id'      => 'admin',
		'name'    => 'Admin',
		'panel'   => true
	),
	array(
		'id'      => 'editor',
		'name'    => 'Editor',
		'default' => true,
		'panel'   => true
	),
	array(
		'id'      => 'client',
		'name'    => 'Client',
		'panel'   => false
	)
));
