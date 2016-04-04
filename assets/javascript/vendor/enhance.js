/*! EnhanceJS: a progressive enhancement boilerplate. Copyright 2014 @scottjehl, Filament Group, Inc. Licensed MIT */
(function( window, undefined ) {

	// Enable JS strict mode
	"use strict";

	var setTimeout = window.setTimeout;

	var enhance = {};

	// Define some variables to be used throughout this file
	var doc = window.document,
		docElem = doc.documentElement,
		head = doc.head || doc.getElementsByTagName( "head" )[ 0 ],
		// this references a meta tag's name whose content attribute should define the path to the full CSS file for the site
		fullCSSKey = "fullcss",
		// this references a meta tag's name whose content attribute should define the path to the enhanced JS file for the site (delivered to qualified browsers)
		fullJSKey = "fulljs",
		// classes to be added to the HTML element in qualified browsers
		htmlClasses = [ "enhanced", "ctm" ];

	/* Some commonly used functions - delete anything you don't need! */

	// loadJS: load a JS file asynchronously. Included from https://github.com/filamentgroup/loadJS/
	function loadJS( src ){
		var ref = window.document.getElementsByTagName( "script" )[ 0 ];
		var script = window.document.createElement( "script" );
		script.src = src;
		script.async = true;
		ref.parentNode.insertBefore( script, ref );
		return script;
	}

	// expose it
	enhance.loadJS = loadJS;

	// loadCSS: load a CSS file asynchronously. Included from https://github.com/filamentgroup/loadCSS/
	function loadCSS( href, before, media ){
		// Arguments explained:
		// `href` is the URL for your CSS file.
		// `before` optionally defines the element we'll use as a reference for injecting our <link>
		// By default, `before` uses the first <script> element in the page.
		// However, since the order in which stylesheets are referenced matters, you might need a more specific location in your document.
		// If so, pass a different reference element to the `before` argument and it'll insert before that instead
		// note: `insertBefore` is used instead of `appendChild`, for safety re: http://www.paulirish.com/2011/surefire-dom-element-insertion/
		var ss = window.document.createElement( "link" );
		var ref = before || window.document.getElementsByTagName( "script" )[ 0 ];
		var sheets = window.document.styleSheets;
		ss.rel = "stylesheet";
		ss.href = href;
		// temporarily, set media to something non-matching to ensure it'll fetch without blocking render
		ss.media = "only x";
		// inject link
		ref.parentNode.insertBefore( ss, ref );
		// This function sets the link's media back to `all` so that the stylesheet applies once it loads
		// It is designed to poll until document.styleSheets includes the new sheet.
		function toggleMedia(){
			var defined;
			for( var i = 0; i < sheets.length; i++ ){
				if( sheets[ i ].href && sheets[ i ].href.indexOf( href ) > -1 ){
					defined = true;
				}
			}
			if( defined ){
				ss.media = media || "all";
			}
			else {
				setTimeout( toggleMedia );
			}
		}

		toggleMedia();
		return ss;
	}

	// expose it
	enhance.loadCSS = loadCSS;

	// getMeta function: get a meta tag by name
	// NOTE: meta tag must be in the HTML source before this script is included in order to guarantee it'll be found
	function getMeta( metaname ){
		var metas = window.document.getElementsByTagName( "meta" );
		var meta;
		for( var i = 0; i < metas.length; i ++ ){
			if( metas[ i ].name && metas[ i ].name === metaname ){
				meta = metas[ i ];
				break;
			}
		}
		return meta;
	}

	// expose it
	enhance.getMeta = getMeta;

	// cookie function from https://github.com/filamentgroup/cookie/
	function cookie( name, value, days ){
		var expires;
		// if value is undefined, get the cookie value
		if( value === undefined ){
			var cookiestring = "; " + window.document.cookie;
			var cookies = cookiestring.split( "; " + name + "=" );
			if ( cookies.length == 2 ){
				return cookies.pop().split( ";" ).shift();
			}
			return null;
		}
		else {
			// if value is a false boolean, we'll treat that as a delete
			if( value === false ){
				days = -1;
			}
			if ( days ) {
				var date = new Date();
				date.setTime( date.getTime() + ( days * 24 * 60 * 60 * 1000 ) );
				expires = "; expires="+date.toGMTString();
			}
			else {
				expires = "";
			}
			window.document.cookie = name + "=" + value + expires + "; path=/";
		}
	}

	// expose it
	enhance.cookie = cookie;

	/* Enhancements for all browsers - qualified or not */

	/* Load non-critical CSS async on first visit:
		On first visit to the site, the critical CSS for each template should be inlined in the head, while the full CSS for the site should be requested async and cached for later use.
		A meta tag with a name matching the fullCSSKey should have a content attribute referencing the path to the full CSS file for the site.
		If no cookie is set to specify that the full CSS has already been fetched, load it asynchronously and set the cookie.
		Once the cookie is set, the full CSS is assumed to be in cache, and the server-side templates should reference the full CSS directly from the head of the page with a link element, in place of inline critical styles.
		*/
	var fullCSS = getMeta( fullCSSKey );
	if( fullCSS && !cookie( fullCSSKey ) ){
		loadCSS( fullCSS.content );
		// set cookie to mark this file fetched
		cookie( fullCSSKey, "true", 7 );
	}

	/* Enhancements for qualified browsers - “Cutting the Mustard”
		Add your qualifications for major browser experience divisions here.
		For example, you might choose to only enhance browsers that support document.querySelector (IE8+, etc).
		Or you might choose to enhance browsers that support document.querySelector, localStorage and addEventListener (IE9+, etc).
		Use case will vary. More about BBC's ctm concpet here: http://responsivenews.co.uk/post/18948466399/cutting-the-mustard
		*/
	function ctm() {
		if("querySelector" in doc && "localStorage" in window && "addEventListener" in window ) {
			return true;
		}
		else {
			return false;
		}
	}

	// expose it
	enhance.ctm = ctm;

	if( !( ctm() ) ){
		// basic browsers: last stop here!
		window.enhance = enhance; // expose enhance to window, to use in older browsers
		return;
	}

	// From here on we're dealing with qualified browsers.

	// Add scoping classes to HTML element: useful for upgrading the presentation of elements that will be enhanced with JS behavior
	docElem.className += " " + htmlClasses.join(" ");

	/* Load JavaScript enhancements in one request.
		Your DOM framework and dependent component scripts should be concatenated and minified into one file that we'll load dynamically (keep that file as small as possible!)
		A meta tag with a name matching the fullJSKey should have a content attribute referencing the path to this JavaScript file.
		*/
	var fullJS = getMeta( fullJSKey );
	if( fullJS ){
		loadJS( fullJS.content );
	}

	// expose the 'enhance' object globally. Use it to expose anything in here that's useful to other parts of your application.
	window.enhance = enhance;

}( this ));
