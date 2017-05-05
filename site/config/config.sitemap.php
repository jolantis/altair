<?php

/* -----------------------------------------------------------------------------
Sitemap
--------------------------------------------------------------------------------

Configuration for XML Sitemap plugin.

https://github.com/pedroborges/kirby-xml-sitemap

*/

c::set('sitemap.images.license', null);                                         // License URL for your site's images
c::set('sitemap.include.images', true);                                         // Enable/disable adding images to XML Sitemap
c::set('sitemap.include.invisible', false);                                     // Add/remove invisible pages
c::set('sitemap.frequency', false);                                             // Show/hide change frequency attribute
c::set('sitemap.priority', true);                                               // Show/hide priority attribute
c::set('sitemap.ignored.pages', []);                                            // URI of pages to remove
c::set('sitemap.ignored.templates', []);                                        // Templates names to remove
