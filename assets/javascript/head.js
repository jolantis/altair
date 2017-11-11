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
		// this references a meta tag's name whose content attribute should define the path to the custom fonts file for the site (delivered to qualified browsers)
		// fontsKey = "fonts",
		// classes to be added to the HTML element in qualified browsers
		htmlClasses = [ "enhanced", "ctm" ],
		docClasses = htmlClasses;

	/* Some commonly used functions - delete anything you don't need! */

	// loadJS: load a JS file asynchronously. Included from https://github.com/filamentgroup/loadJS/
	var loadJS = enhance.loadJS = function( src ){
		var ref = doc.getElementsByTagName( "script" )[ 0 ];
		var script = doc.createElement( "script" );
		script.src = src;
		script.async = true;
		ref.parentNode.insertBefore( script, ref );
		return script;
	};

	// loadCSS: load a CSS file asynchronously. Included from https://github.com/filamentgroup/loadCSS/
	var loadCSS = enhance.loadCSS = function( href, before, media ){
		// Arguments explained:
		// `href` is the URL for your CSS file.
		// `before` optionally defines the element we'll use as a reference for injecting our <link>
		// By default, `before` uses the first <script> element in the page.
		// However, since the order in which stylesheets are referenced matters, you might need a more specific location in your document.
		// If so, pass a different reference element to the `before` argument and it'll insert before that instead
		// note: `insertBefore` is used instead of `appendChild`, for safety re: http://www.paulirish.com/2011/surefire-dom-element-insertion/
		var ss = doc.createElement( "link" );
		var ref = before || doc.getElementsByTagName( "script" )[ 0 ];
		var sheets = doc.styleSheets;
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
	};

	// getMeta function: get a meta tag by name
	// NOTE: meta tag must be in the HTML source before this script is included in order to guarantee it'll be found
	var getMeta = enhance.getMeta = function( metaname ){
		var metas = doc.getElementsByTagName( "meta" );
		var meta;
		for( var i = 0; i < metas.length; i ++ ){
			if( metas[ i ].name && metas[ i ].name === metaname ){
				meta = metas[ i ];
				break;
			}
		}
		return meta;
	};

	// cookie function from https://github.com/filamentgroup/cookie/
	var cookie = enhance.cookie = function( name, value, days ){
	var expires;
		// if value is undefined, get the cookie value
		if( value === undefined ){
			var cookiestring = "; " + doc.cookie;
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
			doc.cookie = name + "=" + value + expires + "; path=/";
		}
	};

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

	/* Enhancements for qualified browsers - "Cutting the Mustard"
		Add your qualifications for major browser experience divisions here.
		For example, you might choose to only enhance browsers that support document.querySelector (IE8+, etc).
		Use case will vary.
		*/
	if( !( "querySelector" in doc ) ){
		// basic browsers: last stop here!
		return;
	}

	// From here on we're dealing with qualified browsers.

	/* Load JavaScript enhancements in one request.
		Your DOM framework and dependent component scripts should be concatenated and minified into one file that we'll load dynamically (keep that file as small as possible!)
		A meta tag with a name matching the fullJSKey should have a content attribute referencing the path to this JavaScript file.
		*/
	var fullJS = getMeta( fullJSKey );
	// Add scoping classes to HTML element
	function addEnhanceClass(){
		docElem.className += " " + htmlClasses.join(" ");
	}

	function removeEnhanceClass(){
		docElem.className = docElem.className.replace( htmlClasses.join(" "), " " );
	}

	// Add scoping classes to HTML element: useful for upgrading the presentation of elements that will be enhanced with JS behavior
	addEnhanceClass();

	// load global js on any template
	if( fullJS ){
		var script = loadJS( fullJS.content );
		var fallback = setTimeout( removeEnhanceClass, 8000 );

		script.onload = function(){
			clearTimeout( fallback );
			// just in case it was removed already (we can't cancel this request so it might arrive any time)
			addEnhanceClass();
		};
	}

	///* Load custom fonts
	//	We prefer to load fonts asynchronously so that they do not block page rendering.
	//	To do this, a meta tag with a name matching the fontsWoffKey should have a content attribute referencing the path to this fonts file.
	//	NOTE: You may want to have logic here to choose between one of many font formats before loading it.
	//		For example, we often load WOFF, Truetype, or SVG. If so, just define meta tags for each
	//	*/
	// var fonts = getMeta( fontsKey );
	// if( fonts ){
	// 	loadCSS( fonts.content );
	// }

	// expose the 'enhance' object globally. Use it to expose anything in here that's useful to other parts of your application.
	if( !window.enchance ){
		window.enhance = enhance;
	}

}( this ));
/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-audio-backgroundsize-boxshadow-boxsizing-classlist-cssanimations-cssgradients-csstransforms-csstransforms3d-csstransitions-flexbox-fontface-inlinesvg-opacity-svg-svgasimg-textshadow-touchevents-setclasses-testprop-teststyles !*/
!function(e,t,n){function o(e,t){return typeof e===t}function r(){var e,t,n,r,s,i,a;for(var l in T)if(T.hasOwnProperty(l)){if(e=[],t=T[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=o(t.fn,"function")?t.fn():t.fn,s=0;s<e.length;s++)i=e[s],a=i.split("."),1===a.length?Modernizr[a[0]]=r:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=r),x.push((r?"":"no-")+a.join("-"))}}function s(e){var t=S.className,n=Modernizr._config.classPrefix||"";if(_&&(t=t.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(o,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),_?S.className.baseVal=t:S.className=t)}function i(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):_?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(e,t){return!!~(""+e).indexOf(t)}function l(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function u(){var e=t.body;return e||(e=i(_?"svg":"body"),e.fake=!0),e}function f(e,n,o,r){var s,a,l,f,c="modernizr",d=i("div"),p=u();if(parseInt(o,10))for(;o--;)l=i("div"),l.id=r?r[o]:c+(o+1),d.appendChild(l);return s=i("style"),s.type="text/css",s.id="s"+c,(p.fake?p:d).appendChild(s),p.appendChild(d),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(t.createTextNode(e)),d.id=c,p.fake&&(p.style.background="",p.style.overflow="hidden",f=S.style.overflow,S.style.overflow="hidden",S.appendChild(p)),a=n(d,e),p.fake?(p.parentNode.removeChild(p),S.style.overflow=f,S.offsetHeight):d.parentNode.removeChild(d),!!a}function c(e,t){if("object"==typeof e)for(var n in e)j(e,n)&&c(n,e[n]);else{e=e.toLowerCase();var o=e.split("."),r=Modernizr[o[0]];if(2==o.length&&(r=r[o[1]]),"undefined"!=typeof r)return Modernizr;t="function"==typeof t?t():t,1==o.length?Modernizr[o[0]]=t:(!Modernizr[o[0]]||Modernizr[o[0]]instanceof Boolean||(Modernizr[o[0]]=new Boolean(Modernizr[o[0]])),Modernizr[o[0]][o[1]]=t),s([(t&&0!=t?"":"no-")+o.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function d(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function p(t,n,o){var r;if("getComputedStyle"in e){r=getComputedStyle.call(e,t,n);var s=e.console;if(null!==r)o&&(r=r.getPropertyValue(o));else if(s){var i=s.error?"error":"log";s[i].call(s,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else r=!n&&t.currentStyle&&t.currentStyle[o];return r}function g(t,o){var r=t.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(d(t[r]),o))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];r--;)s.push("("+d(t[r])+":"+o+")");return s=s.join(" or "),f("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==p(e,null,"position")})}return n}function m(e,t,r,s){function u(){c&&(delete R.style,delete R.modElem)}if(s=o(s,"undefined")?!1:s,!o(r,"undefined")){var f=g(e,r);if(!o(f,"undefined"))return f}for(var c,d,p,m,h,v=["modernizr","tspan","samp"];!R.style&&v.length;)c=!0,R.modElem=i(v.shift()),R.style=R.modElem.style;for(p=e.length,d=0;p>d;d++)if(m=e[d],h=R.style[m],a(m,"-")&&(m=l(m)),R.style[m]!==n){if(s||o(r,"undefined"))return u(),"pfx"==t?m:!0;try{R.style[m]=r}catch(y){}if(R.style[m]!=h)return u(),"pfx"==t?m:!0}return u(),!1}function h(e,t){return function(){return e.apply(t,arguments)}}function v(e,t,n){var r;for(var s in e)if(e[s]in t)return n===!1?e[s]:(r=t[e[s]],o(r,"function")?h(r,n||t):r);return!1}function y(e,t,n,r,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+O.join(i+" ")+i).split(" ");return o(t,"string")||o(t,"undefined")?m(a,t,r,s):(a=(e+" "+L.join(i+" ")+i).split(" "),v(a,t,n))}function w(e,t,o){return y(e,n,n,t,o)}var x=[],T=[],b={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){T.push({name:e,fn:t,options:n})},addAsyncTest:function(e){T.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=b,Modernizr=new Modernizr,Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var S=t.documentElement;Modernizr.addTest("classlist","classList"in S);var _="svg"===S.nodeName.toLowerCase();Modernizr.addTest("audio",function(){var e=i("audio"),t=!1;try{t=!!e.canPlayType,t&&(t=new Boolean(t),t.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),t.mp3=e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),t.opus=e.canPlayType('audio/ogg; codecs="opus"')||e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,""),t.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),t.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(n){}return t}),Modernizr.addTest("inlinesvg",function(){var e=i("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)});var C=b._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];b._prefixes=C,Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",n="gradient(linear,left top,right bottom,from(#9f9),to(white));",o="",r=0,s=C.length-1;s>r;r++)e=0===r?"to ":"",o+=t+C[r]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(o+=t+"-webkit-"+n);var a=i("a"),l=a.style;return l.cssText=o,(""+l.backgroundImage).indexOf("gradient")>-1}),Modernizr.addTest("opacity",function(){var e=i("a").style;return e.cssText=C.join("opacity:.55;"),/^0.55$/.test(e.opacity)});var P="CSS"in e&&"supports"in e.CSS,z="supportsCSS"in e;Modernizr.addTest("supports",P||z);var k=b.testStyles=f;Modernizr.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var o=["@media (",C.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");k(o,function(e){n=9===e.offsetTop})}return n});var E=function(){var e=navigator.userAgent,t=e.match(/w(eb)?osbrowser/gi),n=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9;return t||n}();E?Modernizr.addTest("fontface",!1):k('@font-face {font-family:"font";src:url("https://")}',function(e,n){var o=t.getElementById("smodernizr"),r=o.sheet||o.styleSheet,s=r?r.cssRules&&r.cssRules[0]?r.cssRules[0].cssText:r.cssText||"":"",i=/src/i.test(s)&&0===s.indexOf(n.split(" ")[0]);Modernizr.addTest("fontface",i)});var j;!function(){var e={}.hasOwnProperty;j=o(e,"undefined")||o(e.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),b._l={},b.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},b._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,o;for(e=0;e<n.length;e++)(o=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){b.addTest=c}),Modernizr.addTest("svgasimg",t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"));var N={elem:i("modernizr")};Modernizr._q.push(function(){delete N.elem});var R={style:N.elem.style};Modernizr._q.unshift(function(){delete R.style});var $=b.testProp=function(e,t,o){return m([e],n,t,o)};Modernizr.addTest("textshadow",$("textShadow","1px 1px"));var A="Moz O ms Webkit",O=b._config.usePrefixes?A.split(" "):[];b._cssomPrefixes=O;var L=b._config.usePrefixes?A.toLowerCase().split(" "):[];b._domPrefixes=L,b.testAllProps=y,b.testAllProps=w,Modernizr.addTest("cssanimations",w("animationName","a",!0)),Modernizr.addTest("backgroundsize",w("backgroundSize","100%",!0)),Modernizr.addTest("boxshadow",w("boxShadow","1px 1px",!0)),Modernizr.addTest("boxsizing",w("boxSizing","border-box",!0)&&(t.documentMode===n||t.documentMode>7)),Modernizr.addTest("flexbox",w("flexBasis","1px",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&w("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){var e=!!w("perspective","1px",!0),t=Modernizr._config.usePrefixes;if(e&&(!t||"webkitPerspective"in S.style)){var n,o="#modernizr{width:0;height:0}";Modernizr.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",k(o+n,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),Modernizr.addTest("csstransitions",w("transition","all",!0)),r(),s(x),delete b.addTest,delete b.addAsyncTest;for(var B=0;B<Modernizr._q.length;B++)Modernizr._q[B]();e.Modernizr=Modernizr}(window,document);// Load respimage if <picture> element is not supported
if(!window.HTMLPictureElement) {
	document.createElement('picture');
	enhance.loadJS('/assets/javascript/lib/polyfills/respimage.min.js');
}
