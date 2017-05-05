<?php

/* -----------------------------------------------------------------------------
Kirby text video
--------------------------------------------------------------------------------

*/

c::set('kirbytext.video.class', 'video');                                       // The default class which is being added to Youtube and Vimeo iframes
c::set('kirbytext.video.width', false);                                         // The default width which is being added to Youtube and Vimeo iframes (false = no width)
c::set('kirbytext.video.height', false);                                        // The default height which is being added to Youtube and Vimeo iframes (false = no height)


/* -----------------------------------------------------------------------------
Fluid video
--------------------------------------------------------------------------------

The default width and height which is being added to Vimeo and YouTube
videos embedded in Kirby text width the custom video tag, like this:

(video: 77383196 source: vimeo)
(video: hXU63NXzg5A source: youtube ratio: 16by9)

*/

c::set('video.width', 480);
c::set('video.height', 270);
