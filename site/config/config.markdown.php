<?php

/* -----------------------------------------------------------------------------
Content File Extension
--------------------------------------------------------------------------------

Change default file extension (txt) for content files here (e.g. md or mdown).

*/

c::set('content.file.extension', 'md');


/* -----------------------------------------------------------------------------
Markdown Extra
--------------------------------------------------------------------------------

Enable/disable the Markdown extra parser with additional Markdown features
like footnotes and tables (http://michelf.com/projects/php-markdown/extra/).

And enable/disable automatic line breaks in Markdown like on Github. If false
line breaks must be confirmed with three spaces at the end of the line.

*/

c::set('markdown.extra', true);
c::set('markdown.breaks', true);                                                 // Set to false to create line breaks (<br>'s) with **three** spaces at the end of a line


/* -----------------------------------------------------------------------------
Smartypants
--------------------------------------------------------------------------------

Smartypants is a typography plugin, which helps to improve things like
quotes and ellipsises and all those nifty little typography details.

*/

c::set('smartypants', true);                                                    // Set to true to enable smartypants
c::set('smartypants.attr', 2);                                                  // Set to:  1 -> "--" for em-dashes; no en-dash support,  2 -> "---" for em-dashes; "--" for en-dashes,  3 -> "--" for em-dashes; "---" for en-dashes
c::set('smartypants.doublequote.open', '&#8220;');                              // Openning smart double-quotes.
c::set('smartypants.doublequote.close', '&#8221;');                             // Closing smart double-quotes.
c::get('smartypants.space.emdash', ' ');                                        // Space around em-dashes. "He_—_or she_—_should change that."
c::get('smartypants.space.endash', ' ');                                        // Space around en-dashes. "He_–_or she_–_should change that."
c::get('smartypants.space.colon', '&#160;');                                    // Space before a colon. "He said_: here it is."
c::get('smartypants.space.semicolon', '&#160;');                                // Space before a semicolon. "That's what I said_; that's what he said."
c::get('smartypants.space.marks', '&#160;');                                    // Space before a question mark and an exclamation mark: "¡_Holà_! What_?"
c::get('smartypants.space.frenchquote', '&#160;');                              // Space inside french quotes. "Voici la «_chose_» qui m'a attaqué."
c::get('smartypants.space.thousand', '&#160;');                                 // Space as thousand separator. "On compte 10_000 maisons sur cette liste."
c::get('smartypants.space.unit', '&#160;');                                     // Space before a unit abreviation. "This 12_kg of matter costs 10_$."
c::get('smartypants.skip', 'pre|code|kbd|script|style|math');                   // SmartyPants will not alter the content of these tags...
