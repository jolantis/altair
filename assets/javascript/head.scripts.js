/**
 * head.script.js
 *
 * Essential scripts, to be loaded in the head of the document
 * Use gruntfile.js to include script files
 */

/*
 * Developer only! Overrule the CTM check and set it true or false.
 *
 * Only out-comment when developing!
 *
 * These lines do the following:
 * - Cutsthemustard var to false for scripting purposes
 * - Replace the ctm class by no-ctm for styling purposes
 */

// cutsthemustard = false;
// document.documentElement.className = document.documentElement.className.replace(/\bctm\b/g, '') + ' no-ctm ';

/**
 * Cutting the mustard
 *
 * Check if the browser is an 'HTML4 or HTML5' browser.
 * Why? See: http://responsivenews.co.uk/post/18948466399/cutting-the-mustard
 *
 * Always enabled; it's added in the gruntfile.js in the jsfiles section.
 */

// "assets/javascript/vendor/ctm.js",

// or as part of enhance js:

// assets/javascript/vendor/enhance.js,

/**
 * Typekit
 *
 * Load Typekit fonts asynchronously with controlling the Flash of
 * Unstyled Text (FOUT) using Font Events (.wf-loading, etc.).
 *
 * Enable the use of Typekit font, by adding (out-commenting) it in the
 * gruntfile.js in the jsfiles section.
 *
 * Make sure to set the Typekit account id in typekit.min.js.
 */

// "assets/javascript/vendor/typekit.min.js",

/**
 * WebFont Loader
 *
 * Load custom, Google, Ascender, Fonts.com (Monotype), Fontdeck and/or
 * Typekit web fonts (or from multiple) with Google's WebFont Loader.
 * Version of webfont.min.js: 1.5.10 (check: http://j.mp/1475wC9).
 *
 * Enable the use of WebFont Loader, by adding (out-commenting) the correct
 * line in the gruntfile.js in the 'head' part of the 'Set js files and
 * order' section. Then out-comment the code snippet below and use the webfont
 * service of your choice or use custom (sef-hosted) web fonts!
 */

// "assets/javascript/vendor/webfont.min.js",

/* Call webfont loader */

//WebFont.load({
//	google: { families: ['Fontname1', 'Fontname2']},
//	ascender: { key:'xxxxxxx', families: ['Fontname:bold,bolditalic,italic,regular']},
//	monotype: { projectId: 'xxxxxxx'},
//	fontdeck: { id: 'xxxxx'},
//	typekit: { id: 'xxxxxxx'},
//	custom: {
//		families:['TeXGyreAdventor-Bold', 'TeXGyreAdventor-Regular'],
//		urls:['<?php echo url('/assets/webfonts/texgyreadventor/texgyreadventor.css'); ?>']
//	}
//});

/**
 * Resrc
 *
 * Resrc delivers responsive images on-demand, direct from the cloud.
 * The Resrc script is loaded asynchronously.
 * For more information see: http://www.resrc.it/docs/javascript/0.7
 *
 * Enable the use of Resrc, by adding (out-commenting) it in the
 * gruntfile.js in the jsfiles section.
 *
 * -----------------------------------------------------------------------------
 * HOW TO USE ROXY (FOR LOCAL RESRC TESTING)
 * -----------------------------------------------------------------------------
 *
 * Download the latest version of roxy:
 *
 * https://github.com/resrcit/roxy
 *
 * Extraxt and place roxy in your  ‘Sites' folder for inctance (it needs to be
 * able to run PHP).
 *
 * Now make sure local.roxy is declared in your /etc/hosts file by adding the
 * following line:
 *
 * 127.0.0.1 local.roxy
 *
 * The roxy (stand-alone proxy) server can now be started. In a terminal
 * window, navigate to the extracted roxy folder, and run:
 *
 * HOST=local.roxy PORT=8080 ./start "your-api-key"
 *
 * for the *.studiodumbar.com (sub)domein this is:
 *
 * HOST=local.roxy PORT=8080 ./start "ZG9tYWluXzEwNzI6Y2QxNjc1ODgtZWRkNy00OTBkLWIxNzctN2QxNmY1MjJmNjk3"
 *
 * This will start the roxy server! Enjoy testing resrc locally.
 *
 * For more info see: https://github.com/resrcit/roxy
 */

// "assets/javascript/vendor/resrc.min.js",
