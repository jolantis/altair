/*!
	* domready (c) Dustin Diaz 2014 - License MIT
	*/
!function (name, definition) {

	if (typeof module != 'undefined') module.exports = definition()
	else if (typeof define == 'function' && typeof define.amd == 'object') define(definition)
	else this[name] = definition()

}('domready', function () {

	var fns = [], listener
		, doc = typeof document === 'object' && document
		, hack = doc && doc.documentElement.doScroll
		, domContentLoaded = 'DOMContentLoaded'
		, loaded = doc && (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState)


	if (!loaded && doc)
	doc.addEventListener(domContentLoaded, listener = function () {
		doc.removeEventListener(domContentLoaded, listener)
		loaded = 1
		while (listener = fns.shift()) listener()
	})

	return function (fn) {
		loaded ? setTimeout(fn, 0) : fns.push(fn)
	}

});
(function(){'use strict';var f,g=[];function l(a){g.push(a);1==g.length&&f()}function m(){for(;g.length;)g[0](),g.shift()}f=function(){setTimeout(m)};function n(a){this.a=p;this.b=void 0;this.f=[];var b=this;try{a(function(a){q(b,a)},function(a){r(b,a)})}catch(c){r(b,c)}}var p=2;function t(a){return new n(function(b,c){c(a)})}function u(a){return new n(function(b){b(a)})}function q(a,b){if(a.a==p){if(b==a)throw new TypeError;var c=!1;try{var d=b&&b.then;if(null!=b&&"object"==typeof b&&"function"==typeof d){d.call(b,function(b){c||q(a,b);c=!0},function(b){c||r(a,b);c=!0});return}}catch(e){c||r(a,e);return}a.a=0;a.b=b;v(a)}}
function r(a,b){if(a.a==p){if(b==a)throw new TypeError;a.a=1;a.b=b;v(a)}}function v(a){l(function(){if(a.a!=p)for(;a.f.length;){var b=a.f.shift(),c=b[0],d=b[1],e=b[2],b=b[3];try{0==a.a?"function"==typeof c?e(c.call(void 0,a.b)):e(a.b):1==a.a&&("function"==typeof d?e(d.call(void 0,a.b)):b(a.b))}catch(h){b(h)}}})}n.prototype.g=function(a){return this.c(void 0,a)};n.prototype.c=function(a,b){var c=this;return new n(function(d,e){c.f.push([a,b,d,e]);v(c)})};
function w(a){return new n(function(b,c){function d(c){return function(d){h[c]=d;e+=1;e==a.length&&b(h)}}var e=0,h=[];0==a.length&&b(h);for(var k=0;k<a.length;k+=1)u(a[k]).c(d(k),c)})}function x(a){return new n(function(b,c){for(var d=0;d<a.length;d+=1)u(a[d]).c(b,c)})};window.Promise||(window.Promise=n,window.Promise.resolve=u,window.Promise.reject=t,window.Promise.race=x,window.Promise.all=w,window.Promise.prototype.then=n.prototype.c,window.Promise.prototype["catch"]=n.prototype.g);}());

(function(){function l(a,b){document.addEventListener?a.addEventListener("scroll",b,!1):a.attachEvent("scroll",b)}function m(a){document.body?a():document.addEventListener?document.addEventListener("DOMContentLoaded",function c(){document.removeEventListener("DOMContentLoaded",c);a()}):document.attachEvent("onreadystatechange",function k(){if("interactive"==document.readyState||"complete"==document.readyState)document.detachEvent("onreadystatechange",k),a()})};function r(a){this.a=document.createElement("div");this.a.setAttribute("aria-hidden","true");this.a.appendChild(document.createTextNode(a));this.b=document.createElement("span");this.c=document.createElement("span");this.h=document.createElement("span");this.f=document.createElement("span");this.g=-1;this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";this.b.appendChild(this.h);this.c.appendChild(this.f);this.a.appendChild(this.b);this.a.appendChild(this.c)}
function t(a,b){a.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+b+";"}function y(a){var b=a.a.offsetWidth,c=b+100;a.f.style.width=c+"px";a.c.scrollLeft=c;a.b.scrollLeft=a.b.scrollWidth+100;return a.g!==b?(a.g=b,!0):!1}function z(a,b){function c(){var a=k;y(a)&&a.a.parentNode&&b(a.g)}var k=a;l(a.b,c);l(a.c,c);y(a)};function A(a,b){var c=b||{};this.family=a;this.style=c.style||"normal";this.weight=c.weight||"normal";this.stretch=c.stretch||"normal"}var B=null,C=null,E=null,F=null;function G(){if(null===C)if(J()&&/Apple/.test(window.navigator.vendor)){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);C=!!a&&603>parseInt(a[1],10)}else C=!1;return C}function J(){null===F&&(F=!!document.fonts);return F}
function K(){if(null===E){var a=document.createElement("div");try{a.style.font="condensed 100px sans-serif"}catch(b){}E=""!==a.style.font}return E}function L(a,b){return[a.style,a.weight,K()?a.stretch:"","100px",b].join(" ")}
A.prototype.load=function(a,b){var c=this,k=a||"BESbswy",q=0,D=b||3E3,H=(new Date).getTime();return new Promise(function(a,b){if(J()&&!G()){var M=new Promise(function(a,b){function e(){(new Date).getTime()-H>=D?b():document.fonts.load(L(c,'"'+c.family+'"'),k).then(function(c){1<=c.length?a():setTimeout(e,25)},function(){b()})}e()}),N=new Promise(function(a,c){q=setTimeout(c,D)});Promise.race([N,M]).then(function(){clearTimeout(q);a(c)},function(){b(c)})}else m(function(){function u(){var b;if(b=-1!=
f&&-1!=g||-1!=f&&-1!=h||-1!=g&&-1!=h)(b=f!=g&&f!=h&&g!=h)||(null===B&&(b=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),B=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))),b=B&&(f==v&&g==v&&h==v||f==w&&g==w&&h==w||f==x&&g==x&&h==x)),b=!b;b&&(d.parentNode&&d.parentNode.removeChild(d),clearTimeout(q),a(c))}function I(){if((new Date).getTime()-H>=D)d.parentNode&&d.parentNode.removeChild(d),b(c);else{var a=document.hidden;if(!0===a||void 0===a)f=e.a.offsetWidth,
g=n.a.offsetWidth,h=p.a.offsetWidth,u();q=setTimeout(I,50)}}var e=new r(k),n=new r(k),p=new r(k),f=-1,g=-1,h=-1,v=-1,w=-1,x=-1,d=document.createElement("div");d.dir="ltr";t(e,L(c,"sans-serif"));t(n,L(c,"serif"));t(p,L(c,"monospace"));d.appendChild(e.a);d.appendChild(n.a);d.appendChild(p.a);document.body.appendChild(d);v=e.a.offsetWidth;w=n.a.offsetWidth;x=p.a.offsetWidth;I();z(e,function(a){f=a;u()});t(e,L(c,'"'+c.family+'",sans-serif'));z(n,function(a){g=a;u()});t(n,L(c,'"'+c.family+'",serif'));
z(p,function(a){h=a;u()});t(p,L(c,'"'+c.family+'",monospace'))})})};"object"===typeof module?module.exports=A:(window.FontFaceObserver=A,window.FontFaceObserver.prototype.load=A.prototype.load);}());
/*!
 * ImageSet (1.0.0-beta1)
 *
 * This script file is needed for lazyloading imagesets,
 * generated with ImageSet for Kirby and rendering placeholder
 * effeccts
 *
 * Copyright (c) 2016 Fabian Michael <hallo@fabianmichael.de>
 * @license SEE LICENSE IN license.md
 *
 * This script also includes:
 *
 *   StackBlur 0.6
 *   Copyright (c) 2010 Mario Klingemann <mario@quasimondo.com>
 *   https://github.com/Quasimondo/QuasimondoJS
 *
 *   lazysizes 2.0.7 (with "static-gecko-picture" plugin)
 *   Copyright (C) 2015 Alexander Farkas, released under MIT license
 *   https://github.com/aFarkas/lazysizes
 * 
 */

;(function(window, document, undefined){
	'use strict';

	// var mul_table = [
	//         512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,
	//         454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,
	//         482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,
	//         437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,
	//         497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,
	//         320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,
	//         446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,
	//         329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,
	//         505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,
	//         399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,
	//         324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,
	//         268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,
	//         451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,
	//         385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,
	//         332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,
	//         289,287,285,282,280,278,275,273,271,269,267,265,263,261,259];
	        //'light' => 512, (7) / 15
	        // 'strong' => 512, / 17
	        
	   
	// var shg_table = [
	// 	     9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 
	// 		17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 
	// 		19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20,
	// 		20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21,
	// 		21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
	// 		21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 
	// 		22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
	// 		22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 
	// 		23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
	// 		23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
	// 		23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 
	// 		23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 
	// 		24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
	// 		24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
	// 		24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
	// 		24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24 ];

	// function stackBlurImage( imageIDOrElement, canvasIDOrElement, radius, blurAlphaChannel )
	// {
				
	// 	var img = stackBlurGetElement( imageIDOrElement );
	// 	var w = img.naturalWidth;
	// 	var h = img.naturalHeight;
	       
	// 	var canvas = stackBlurGetElement( canvasIDOrElement );
	      
	//     canvas.style.width  = w + "px";
	//     canvas.style.height = h + "px";
	//     canvas.width = w;
	//     canvas.height = h;
	    
	//     var context = canvas.getContext("2d");
	//     context.clearRect( 0, 0, w, h );
	//     context.drawImage( img, 0, 0 );

	// 	if ( isNaN(radius) || radius < 1 ) return;
		
	// 	if ( blurAlphaChannel )
	// 		stackBlurCanvasRGBA( canvasIDOrElement, 0, 0, w, h, radius );
	// 	else 
	// 		stackBlurCanvasRGB( canvasIDOrElement, 0, 0, w, h, radius );
	// }


	function stackBlurCanvasRGBA( canvas, top_x, top_y, width, height, radius, mul_sum, shg_sum )
	{
		//var canvas    = stackBlurGetElement( canvasIDOrElement );
		var context   = canvas.getContext("2d");
		var imageData = context.getImageData( top_x, top_y, width, height );
		
		// try {
		//   try {
		// 	imageData = context.getImageData( top_x, top_y, width, height );
		//   } catch(e) {
		  
		// 	// NOTE: this part is supposedly only needed if you want to work with local files
		// 	// so it might be okay to remove the whole try/catch block and just use
		// 	// imageData = context.getImageData( top_x, top_y, width, height );
		// 	try {
		// 		netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
		// 		imageData = context.getImageData( top_x, top_y, width, height );
		// 	} catch(e) {
		// 		alert("Cannot access local image");
		// 		throw new Error("unable to access local image data: " + e);
		// 		return;
		// 	}
		//   }
		// } catch(e) {
		//   alert("Cannot access image");
		//   throw new Error("unable to access image data: " + e);
		// }
	  
		imageData = stackBlurImageDataRGBA( imageData, radius, mul_sum, shg_sum );
		context.putImageData( imageData, top_x, top_y );
	}


	function stackBlurImageDataRGBA( imageData, radius, mul_sum, shg_sum )
	{
		// if ( isNaN(radius) || radius < 1 ) return;
		// radius |= 0;
				
		var pixels = imageData.data,
				width  = imageData.width,
				height = imageData.height;
				
		var x, y, i, p, yp, yi, yw, r_sum, g_sum, b_sum, a_sum, 
				r_out_sum, g_out_sum, b_out_sum, a_out_sum,
				r_in_sum, g_in_sum, b_in_sum, a_in_sum, 
				pr, pg, pb, pa, rbs;
				
		var div 				 = radius + radius + 1,
				w4  				 = width << 2,
				widthMinus1  = width - 1,
				heightMinus1 = height - 1,
				radiusPlus1  = radius + 1,
				sumFactor    = radiusPlus1 * (radiusPlus1 + 1) / 2;
		
		var stackStart = new BlurStack();
		var stackEnd;
		var stack = stackStart;
		for ( i = 1; i < div; i++ )
		{
			stack = stack.next = new BlurStack();
			if ( i == radiusPlus1 ) stackEnd = stack;
		}
		stack.next = stackStart;
		var stackIn = null;
		var stackOut = null;
		
		yw = yi = 0;
		
		// var mul_sum = mul_table[radius];
		// var shg_sum = shg_table[radius];
		
		for ( y = 0; y < height; y++ )
		{
			r_in_sum = g_in_sum = b_in_sum = a_in_sum = r_sum = g_sum = b_sum = a_sum = 0;
			
			r_out_sum = radiusPlus1 * ( pr = pixels[yi] );
			g_out_sum = radiusPlus1 * ( pg = pixels[yi+1] );
			b_out_sum = radiusPlus1 * ( pb = pixels[yi+2] );
			a_out_sum = radiusPlus1 * ( pa = pixels[yi+3] );
			
			r_sum += sumFactor * pr;
			g_sum += sumFactor * pg;
			b_sum += sumFactor * pb;
			a_sum += sumFactor * pa;
			
			stack = stackStart;
			
			for( i = 0; i < radiusPlus1; i++ )
			{
				stack.r = pr;
				stack.g = pg;
				stack.b = pb;
				stack.a = pa;
				stack = stack.next;
			}
			
			for( i = 1; i < radiusPlus1; i++ )
			{
				p = yi + (( widthMinus1 < i ? widthMinus1 : i ) << 2 );
				r_sum += ( stack.r = ( pr = pixels[p])) * ( rbs = radiusPlus1 - i );
				g_sum += ( stack.g = ( pg = pixels[p+1])) * rbs;
				b_sum += ( stack.b = ( pb = pixels[p+2])) * rbs;
				a_sum += ( stack.a = ( pa = pixels[p+3])) * rbs;
				
				r_in_sum += pr;
				g_in_sum += pg;
				b_in_sum += pb;
				a_in_sum += pa;
				
				stack = stack.next;
			}
			
			
			stackIn = stackStart;
			stackOut = stackEnd;
			for ( x = 0; x < width; x++ )
			{
				pixels[yi]   = (r_sum * mul_sum) >> shg_sum;
				pixels[yi+1] = (g_sum * mul_sum) >> shg_sum;
				pixels[yi+2] = (b_sum * mul_sum) >> shg_sum;
				pixels[yi+3] = (a_sum * mul_sum) >> shg_sum;
				
				r_sum -= r_out_sum;
				g_sum -= g_out_sum;
				b_sum -= b_out_sum;
				a_sum -= a_out_sum;
				
				r_out_sum -= stackIn.r;
				g_out_sum -= stackIn.g;
				b_out_sum -= stackIn.b;
				a_out_sum -= stackIn.a;
				
				p =  ( yw + ( ( p = x + radius + 1 ) < widthMinus1 ? p : widthMinus1 ) ) << 2;
				
				r_in_sum += ( stackIn.r = pixels[p]);
				g_in_sum += ( stackIn.g = pixels[p+1]);
				b_in_sum += ( stackIn.b = pixels[p+2]);
				a_in_sum += ( stackIn.a = pixels[p+3]);
				
				r_sum += r_in_sum;
				g_sum += g_in_sum;
				b_sum += b_in_sum;
				a_sum += a_in_sum;
				
				stackIn = stackIn.next;
				
				r_out_sum += ( pr = stackOut.r );
				g_out_sum += ( pg = stackOut.g );
				b_out_sum += ( pb = stackOut.b );
				a_out_sum += ( pa = stackOut.a );
				
				r_in_sum -= pr;
				g_in_sum -= pg;
				b_in_sum -= pb;
				a_in_sum -= pa;
				
				stackOut = stackOut.next;

				yi += 4;
			}
			yw += width;
		}

		
		for ( x = 0; x < width; x++ )
		{
			g_in_sum = b_in_sum = a_in_sum = r_in_sum = g_sum = b_sum = a_sum = r_sum = 0;
			
			yi = x << 2;
			r_out_sum = radiusPlus1 * ( pr = pixels[yi]);
			g_out_sum = radiusPlus1 * ( pg = pixels[yi+1]);
			b_out_sum = radiusPlus1 * ( pb = pixels[yi+2]);
			a_out_sum = radiusPlus1 * ( pa = pixels[yi+3]);
			
			r_sum += sumFactor * pr;
			g_sum += sumFactor * pg;
			b_sum += sumFactor * pb;
			a_sum += sumFactor * pa;
			
			stack = stackStart;
			
			for( i = 0; i < radiusPlus1; i++ )
			{
				stack.r = pr;
				stack.g = pg;
				stack.b = pb;
				stack.a = pa;
				stack = stack.next;
			}
			
			yp = width;
			
			for( i = 1; i <= radius; i++ )
			{
				yi = ( yp + x ) << 2;
				
				r_sum += ( stack.r = ( pr = pixels[yi])) * ( rbs = radiusPlus1 - i );
				g_sum += ( stack.g = ( pg = pixels[yi+1])) * rbs;
				b_sum += ( stack.b = ( pb = pixels[yi+2])) * rbs;
				a_sum += ( stack.a = ( pa = pixels[yi+3])) * rbs;
			   
				r_in_sum += pr;
				g_in_sum += pg;
				b_in_sum += pb;
				a_in_sum += pa;
				
				stack = stack.next;
			
				if( i < heightMinus1 )
				{
					yp += width;
				}
			}
			
			yi = x;
			stackIn = stackStart;
			stackOut = stackEnd;
			for ( y = 0; y < height; y++ )
			{
				p = yi << 2;
				pixels[p+3] = pa = (a_sum * mul_sum) >> shg_sum;
				if ( pa > 0 )
				{
					pa = 255 / pa;
					pixels[p]   = ((r_sum * mul_sum) >> shg_sum ) * pa;
					pixels[p+1] = ((g_sum * mul_sum) >> shg_sum ) * pa;
					pixels[p+2] = ((b_sum * mul_sum) >> shg_sum ) * pa;
				} else {
					pixels[p] = pixels[p+1] = pixels[p+2] = 0;
				}
				
				r_sum -= r_out_sum;
				g_sum -= g_out_sum;
				b_sum -= b_out_sum;
				a_sum -= a_out_sum;
			   
				r_out_sum -= stackIn.r;
				g_out_sum -= stackIn.g;
				b_out_sum -= stackIn.b;
				a_out_sum -= stackIn.a;
				
				p = ( x + (( ( p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1 ) * width )) << 2;
				
				r_sum += ( r_in_sum += ( stackIn.r = pixels[p]));
				g_sum += ( g_in_sum += ( stackIn.g = pixels[p+1]));
				b_sum += ( b_in_sum += ( stackIn.b = pixels[p+2]));
				a_sum += ( a_in_sum += ( stackIn.a = pixels[p+3]));
			   
				stackIn = stackIn.next;
				
				r_out_sum += ( pr = stackOut.r );
				g_out_sum += ( pg = stackOut.g );
				b_out_sum += ( pb = stackOut.b );
				a_out_sum += ( pa = stackOut.a );
				
				r_in_sum -= pr;
				g_in_sum -= pg;
				b_in_sum -= pb;
				a_in_sum -= pa;
				
				stackOut = stackOut.next;
				
				yi += width;
			}
		}
		
		return imageData;
		
	}


	function stackBlurCanvasRGB( canvas, top_x, top_y, width, height, radius, mul_sum, shg_sum )
	{
		// if ( isNaN(radius) || radius < 1 ) return;
		// radius |= 0;
		
		//var canvas    = stackBlurGetElement( canvasIDOrElement );
		var context   = canvas.getContext("2d");
		var imageData = context.getImageData( top_x, top_y, width, height );
		
		// try {
		//   try {
		// 	imageData = context.getImageData( top_x, top_y, width, height );
		//   } catch(e) {
		  
		// 	// NOTE: this part is supposedly only needed if you want to work with local files
		// 	// so it might be okay to remove the whole try/catch block and just use
		// 	// imageData = context.getImageData( top_x, top_y, width, height );
		// 	try {
		// 		netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
		// 		imageData = context.getImageData( top_x, top_y, width, height );
		// 	} catch(e) {
		// 		alert("Cannot access local image");
		// 		throw new Error("unable to access local image data: " + e);
		// 		return;
		// 	}
		//   }
		// } catch(e) {
		//   alert("Cannot access image");
		//   throw new Error("unable to access image data: " + e);
		// }
				
		var pixels = imageData.data;
				
		var x, y, i, p, yp, yi, yw, r_sum, g_sum, b_sum,
		r_out_sum, g_out_sum, b_out_sum,
		r_in_sum, g_in_sum, b_in_sum,
		pr, pg, pb, rbs;
				
		var div = radius + radius + 1;
		var w4 = width << 2;
		var widthMinus1  = width - 1;
		var heightMinus1 = height - 1;
		var radiusPlus1  = radius + 1;
		var sumFactor = radiusPlus1 * ( radiusPlus1 + 1 ) / 2;
		
		var stackStart = new BlurStack();
		var stackEnd;
		var stack = stackStart;
		for ( i = 1; i < div; i++ )
		{
			stack = stack.next = new BlurStack();
			if ( i == radiusPlus1 ) stackEnd = stack;
		}
		stack.next = stackStart;
		var stackIn = null;
		var stackOut = null;
		
		yw = yi = 0;
		
		// var mul_sum = mul_table[radius];
		// var shg_sum = shg_table[radius];
		
		for ( y = 0; y < height; y++ )
		{
			r_in_sum = g_in_sum = b_in_sum = r_sum = g_sum = b_sum = 0;
			
			r_out_sum = radiusPlus1 * ( pr = pixels[yi] );
			g_out_sum = radiusPlus1 * ( pg = pixels[yi+1] );
			b_out_sum = radiusPlus1 * ( pb = pixels[yi+2] );
			
			r_sum += sumFactor * pr;
			g_sum += sumFactor * pg;
			b_sum += sumFactor * pb;
			
			stack = stackStart;
			
			for( i = 0; i < radiusPlus1; i++ )
			{
				stack.r = pr;
				stack.g = pg;
				stack.b = pb;
				stack = stack.next;
			}
			
			for( i = 1; i < radiusPlus1; i++ )
			{
				p = yi + (( widthMinus1 < i ? widthMinus1 : i ) << 2 );
				r_sum += ( stack.r = ( pr = pixels[p])) * ( rbs = radiusPlus1 - i );
				g_sum += ( stack.g = ( pg = pixels[p+1])) * rbs;
				b_sum += ( stack.b = ( pb = pixels[p+2])) * rbs;
				
				r_in_sum += pr;
				g_in_sum += pg;
				b_in_sum += pb;
				
				stack = stack.next;
			}
			
			
			stackIn = stackStart;
			stackOut = stackEnd;
			for ( x = 0; x < width; x++ )
			{
				pixels[yi]   = (r_sum * mul_sum) >> shg_sum;
				pixels[yi+1] = (g_sum * mul_sum) >> shg_sum;
				pixels[yi+2] = (b_sum * mul_sum) >> shg_sum;
				
				r_sum -= r_out_sum;
				g_sum -= g_out_sum;
				b_sum -= b_out_sum;
				
				r_out_sum -= stackIn.r;
				g_out_sum -= stackIn.g;
				b_out_sum -= stackIn.b;
				
				p =  ( yw + ( ( p = x + radius + 1 ) < widthMinus1 ? p : widthMinus1 ) ) << 2;
				
				r_in_sum += ( stackIn.r = pixels[p]);
				g_in_sum += ( stackIn.g = pixels[p+1]);
				b_in_sum += ( stackIn.b = pixels[p+2]);
				
				r_sum += r_in_sum;
				g_sum += g_in_sum;
				b_sum += b_in_sum;
				
				stackIn = stackIn.next;
				
				r_out_sum += ( pr = stackOut.r );
				g_out_sum += ( pg = stackOut.g );
				b_out_sum += ( pb = stackOut.b );
				
				r_in_sum -= pr;
				g_in_sum -= pg;
				b_in_sum -= pb;
				
				stackOut = stackOut.next;

				yi += 4;
			}
			yw += width;
		}

		
		for ( x = 0; x < width; x++ )
		{
			g_in_sum = b_in_sum = r_in_sum = g_sum = b_sum = r_sum = 0;
			
			yi = x << 2;
			r_out_sum = radiusPlus1 * ( pr = pixels[yi]);
			g_out_sum = radiusPlus1 * ( pg = pixels[yi+1]);
			b_out_sum = radiusPlus1 * ( pb = pixels[yi+2]);
			
			r_sum += sumFactor * pr;
			g_sum += sumFactor * pg;
			b_sum += sumFactor * pb;
			
			stack = stackStart;
			
			for( i = 0; i < radiusPlus1; i++ )
			{
				stack.r = pr;
				stack.g = pg;
				stack.b = pb;
				stack = stack.next;
			}
			
			yp = width;
			
			for( i = 1; i <= radius; i++ )
			{
				yi = ( yp + x ) << 2;
				
				r_sum += ( stack.r = ( pr = pixels[yi])) * ( rbs = radiusPlus1 - i );
				g_sum += ( stack.g = ( pg = pixels[yi+1])) * rbs;
				b_sum += ( stack.b = ( pb = pixels[yi+2])) * rbs;
				
				r_in_sum += pr;
				g_in_sum += pg;
				b_in_sum += pb;
				
				stack = stack.next;
			
				if( i < heightMinus1 )
				{
					yp += width;
				}
			}
			
			yi = x;
			stackIn = stackStart;
			stackOut = stackEnd;
			for ( y = 0; y < height; y++ )
			{
				p = yi << 2;
				pixels[p]   = (r_sum * mul_sum) >> shg_sum;
				pixels[p+1] = (g_sum * mul_sum) >> shg_sum;
				pixels[p+2] = (b_sum * mul_sum) >> shg_sum;
				
				r_sum -= r_out_sum;
				g_sum -= g_out_sum;
				b_sum -= b_out_sum;
				
				r_out_sum -= stackIn.r;
				g_out_sum -= stackIn.g;
				b_out_sum -= stackIn.b;
				
				p = ( x + (( ( p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1 ) * width )) << 2;
				
				r_sum += ( r_in_sum += ( stackIn.r = pixels[p]));
				g_sum += ( g_in_sum += ( stackIn.g = pixels[p+1]));
				b_sum += ( b_in_sum += ( stackIn.b = pixels[p+2]));
				
				stackIn = stackIn.next;
				
				r_out_sum += ( pr = stackOut.r );
				g_out_sum += ( pg = stackOut.g );
				b_out_sum += ( pb = stackOut.b );
				
				r_in_sum -= pr;
				g_in_sum -= pg;
				b_in_sum -= pb;
				
				stackOut = stackOut.next;
				
				yi += width;
			}
		}
		
		context.putImageData( imageData, top_x, top_y );
		
	}

	function BlurStack()
	{
		this.r = 0;
		this.g = 0;
		this.b = 0;
		this.a = 0;
		this.next = null;
	}

	// function stackBlurGetElement( elementOrID )
	// {
	// 	if ( elementOrID.nodeType == 1 )
	// 		return elementOrID;

	// 	return document.getElementById( elementOrID );
	// }


	window.stackBlur = {
		canvasRGB:  stackBlurCanvasRGB,
		canvasRGBA: stackBlurCanvasRGBA,
	};

})(window, document);


;(function(window, document, Math, Date, undefined) {
  'use strict';

  var _getElementsByClassName = 'getElementsByClassName';

  if(!document[_getElementsByClassName]){ return; }  

  /* =====  Configuration  ================================================== */

  var prefix = 'imageset';

  var __wrapperClass                    = 'imageset',
      __wrapperLazyloadClass            = __wrapperClass + '  -lazyload',
      __wrapperLoadedClass              = 'is-loaded',
      __wrapperPlaceholderClass         = __wrapperClass + ' -placeholder',
      __wrapperPlaceholderStyleClass    = '-placeholder:',
      __wrapperAlphaClass               = '-alpha',
      __wrapperPlaceholderRenderedClass = 'is-placeholder-rendered',
      __imageElementClass               = __wrapperClass + '-element',
      __placeholderElementClass         = __wrapperClass + '-placeholder',
      __operaMiniClass                  = 'operamini';

  /* =====  Variable Shortcuts  ============================================= */

  var docElement               = document.documentElement;

  var ua                       = navigator.userAgent;

  /* =====  Utilities & Helper Functions  =================================== */
  
  /* -----  Polyfills &  ---------------------------------------------------- */
      
  // Shim layer with setTimeout fallback. Look only for unprefixed
  // requestAnimationFrame, because all modern browsern already removed the
  // prefix.
  var rAF = window.requestAnimationFrame || function(fn) { setTimeout(fn, 1000/60); };

  /* -----  Utilities  ------------------------------------------------------ */

  function ready(fn) {
    if(document.readyState != 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  // Extend an object with another one
  function extend(base, obj) {
    for(var i in obj) {
      if(obj.hasOwnProperty(i)) {
        base[i] = obj[i];
      }
    }
    return base;
  }

  function debounce(fn, delay) {
    var timer = null;
    return function () {
      var context = this, args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    };
  }

  function imageLoaded(img, fn) {
    if(!img.complete || (typeof img.naturalWidth === "undefined") || img.naturalWidth === 0) {
      img.addEventListener("load", fn);
    } else {
      fn();
    }
  }


  var RenderQueue = (function() {
    var queue       = [],
        inProgress  = false;

    function add(callback) {
      queue.push(callback);
      run();
    }

    function loop() {
      var callback = queue.shift();
      callback();

      if(!queue.length) {
        inProgress = false;
      } else {
        rAF(loop);
      }
    }

    function run() {
      if(inProgress) return;
      inProgress = true;
      rAF(loop);
    }

    return {
      add: add,
    };
  })();

  // Class utilities using `classList` API if available.
  // Fallbacks inspired by: https://gist.github.com/devongovett/1381839
  var hasClass = (function() {
    return docElement.classList ?
      function(el, cls) { return el.classList.contains(cls); } :
      function(el, cls) { return !!~el.className.split(/\s+/).indexOf(cls); };
  })();

  var addClass = (function() {
    return docElement.classList ?
      function(el, cls) { el.classList.add(cls); } :
      function(el, cls) {
        var classes = el.className.split(/\s+/);
        if(!~classes.indexOf(cls)) {
          classes.push(cls);
          el.className = classes.join(" ");
        }
      };
  })();

  var removeClass = (function() {
    return docElement.classList ?
      function(el, cls) { return el.classList.remove(cls); } :
      function(el, cls) {
        var tokens = el.className.split(/\s+/),
            index  = tokens.indexOf(cls);
        if(!!~index) {
          tokens.splice(index, 1);
          el.className = tokens.join(" ");
        }
      };
  })();

  function fixCanvasResolution(canvas, ctx) {
    // Adjustments for HiDPI/Retina screens
    var devicePixelRatio  = window.devicePixelRatio || 1,
        backingStoreRatio = ctx.webkitBackingStorePixelRatio || 1, // Compatibility with (older?) Safari
        pixelRatio        = devicePixelRatio / backingStoreRatio;

    if(devicePixelRatio !== backingStoreRatio) {
      var oldWidth        = canvas.width,
          oldHeight       = canvas.height;
      canvas.width        = oldWidth  * pixelRatio;
      canvas.height       = oldHeight * pixelRatio;
      //canvas.style.width  = oldWidth  + 'px';
      //canvas.style.height = oldHeight + 'px';
      ctx.scale(pixelRatio, pixelRatio);
    }

    return pixelRatio;
  }


  /* =====  ImageSets & Placeholders  ======================================= */

  /* -----  Special Initialization for Opera Mini  -------------------------- */

  var isOperaMini = (Object.prototype.toString.call(window.operamini) === "[object OperaMini]");

  if(isOperaMini) {
    // Opera Mini has limited DOM Event support and does not
    // work with lazysizes. So we shortcut the loading process
    // of lazy-loading and disable lazysizes.
    window.lazySizesConfig      = window.lazySizesConfig || {};
    window.lazySizesConfig.init = false;

    addClass(docElement, __operaMiniClass);

    var loadImageSetForOperaMini = function(el) {
        
      var sources = el.getElementsByTagName("source"),
          img     = el[_getElementsByClassName](__imageElementClass)[0];
    
      // Wrapper should be loaded to trigger css hook like
      // on other browsers.
      addClass(el, __wrapperLoadedClass);

      if(window.HTMLPictureElement) {
        // As of December 2016, Opera Mini does not support
        // the picture element. However, we consider this
        // here for possible implementations in the future.
        for(var i = 0, l = sources.length; i < l; i++) {
          var s = sources[i];
          if(s.hasAttribute('data-srcset')) s.srcset = s.getAttribute('data-srcset');
          if(s.hasAttribute('data-src'))    s.src    = s.getAttribute('data-src');
        }

        if(img.hasAttribute('data-srcset')) img.srcset = img.getAttribute('data-srcset');
        if(img.hasAttribute('data-src'))    img.src    = img.getAttribute('data-src');

      } else {
        
        var fallbackSource = sources.length > 0 ? sources[sources.length - 1] : img,
            candidates     = fallbackSource.getAttribute('data-srcset').split(/,\s+/);

        while(sources.length > 0) {
          // Delete sources elements 
          sources[0].parentNode.removeChild(sources[0]);
        }

        img.src = candidates.pop().replace(/\s+\d+[wx]$/, '');
      }
    };

    ready(function() {
      var imagesets = document[_getElementsByClassName](__wrapperClass);
      for(var i = 0, l = imagesets.length; i < l; i++) {
        loadImageSetForOperaMini(imagesets[i]);
      }
    });


    return; // Abort Initialization here
  }

  /* ===== Regular Initialization  ========================================== */

  /* ----- Global Variables Setup  ------------------------------------------ */
 
  /* ·····  ImageSet-specific Helper functions  ····························· */

  var placeholderRegexp = new RegExp(__wrapperPlaceholderStyleClass + '([a-z0-9_-]+)\\s*', 'i');

  function getPlaceholderStyle(wrapper) {
    var result = wrapper.className.match(placeholderRegexp);
    return result ? result[1] : false;
  }

  var placeholderRenderer = {};

  /* -----  Placeholder Render Functions  ----------------------------------- */

  if(!!window.CanvasRenderingContext2D) {
    // only register placeholder rendering functions, if
    // canvas is supported by the browser.

    /* ···  Mosaic  ························································· */

    var isSafari                    = (ua.indexOf("Safari") !== -1 && ua.indexOf("Chrome") === -1);
    var supportsPixelatedImages     = ('imageRendering' in docElement.style || 'msInterpolationMode' in docElement.style);

    if(!supportsPixelatedImages || isSafari) {

      placeholderRenderer.mosaic = function(el) {

        var canvas      = document.createElement("canvas"),
            ctx         = canvas.getContext("2d"),
            source      = el[_getElementsByClassName](__placeholderElementClass)[0];

        var process = function() {

          fixCanvasResolution(canvas, ctx);

          var width        = source.naturalWidth,
              height       = source.naturalHeight,
              scaledWidth  = el.offsetWidth,
              scaledHeight = (el.offsetWidth / width * height + 0.5) | 0;

          canvas.width  = scaledWidth;
          canvas.height = scaledHeight;

          ctx.mozImageSmoothingEnabled = false;
          ctx.webkitImageSmoothingEnabled = false;
          ctx.msImageSmoothingEnabled = false;
          ctx.imageSmoothingEnabled = false;
          
          canvas.setAttribute("aria-hidden", true);
          canvas.className = source.className;
          
          RenderQueue.add(function(){
            ctx.drawImage(source, 0, 0, scaledWidth, scaledHeight);
            source.parentNode.replaceChild(canvas, source);
          });
        };

        imageLoaded(source, process);
      };
    }

    /* ···  Blurred & LQIP  ················································· */

    var applyPlaceholderBlur = function(el, radius, mul_sum, shg_sum) {

      var source = el[_getElementsByClassName](__placeholderElementClass)[0];

      var process = function() {
        var width        = source.naturalWidth,
            height       = source.naturalHeight,
            scaledWidth  = el.offsetWidth,
            scaledHeight = (el.offsetWidth / width * height + 0.5) | 0,
            
            canvas       = document.createElement("canvas"),
            ctx          = canvas.getContext("2d"),
            alpha        = hasClass(el, __wrapperAlphaClass);

        canvas.width  = scaledWidth;
        canvas.height = scaledHeight;

        if(!alpha && 'mozOpaque' in canvas) {
          canvas.mozOpaque = true;
        }
        
        canvas.setAttribute("aria-hidden", true);
        canvas.className = source.className;
        
        RenderQueue.add(function(){
          ctx.drawImage(source, 0, 0, scaledWidth, scaledHeight);
          stackBlur[alpha ? 'canvasRGBA' : 'canvasRGB'](canvas, 0, 0, scaledWidth, scaledHeight, radius, mul_sum, shg_sum);
          source.parentNode.replaceChild(canvas, source);
        });
      };

      imageLoaded(source, function() { process(); });

    };

    placeholderRenderer.blurred = function(el) { applyPlaceholderBlur(el, 15, 512, 17); };
    placeholderRenderer.lqip    = function(el) { applyPlaceholderBlur(el,  7, 512, 15); };

    /* ···  Triangles  ······················································ */

    var triangleMosaicFilter = function(canvas, side, alpha) {
        
      alpha = !!alpha;

      // Canvas Properties
      var ctx             = canvas.getContext('2d'),
          imageData       = ctx.getImageData(0, 0, canvas.width, canvas.height),
          pixels          = imageData.data,
          imageDataWidth  = imageData.width,
          imageDataHeight = imageData.height,
          xMax            = imageDataWidth  - 1,
          yMax            = imageDataHeight - 1;
          
      // Triangle Properties
      var height         = Math.round(side * (Math.sqrt(3)/2)), // Triangle height ((side * Math.sqrt(3) / 2) + 0.5) | 0, // 
          halfHeight     = height / 2,
          halfSide       = side   / 2;   

      //Update canvas if needed (HiDPI/Retina screens)
      fixCanvasResolution(canvas, ctx);
      
      // Utility functions
      var drawTriangle  = function(x, y, stroke, directionRight) {
        directionRight = directionRight || false;
        var xBase = x + (directionRight ? 0 : height);
        ctx.beginPath();
        ctx.moveTo(xBase, y + 0);
        ctx.lineTo(x + (directionRight ? height : 0),  y + halfSide);
        ctx.lineTo(xBase, y + side);
        ctx.fill();
        ctx.closePath();
      };

      // Utility functions
      var pickColor = function(x, y) {
        var colorOffset = y * imageDataWidth * 4 + x * 4;
        return [
          // Our dear friend IE does not support `slice()` on typed arrays,
          // falling back to doing it the hard way 🙄
          pixels[colorOffset],
          pixels[colorOffset + 1],
          pixels[colorOffset + 2],
          pixels[colorOffset + 3],
        ];
      };

      var getAlpha = function(x, y) {
        return pixels[y * imageDataWidth * 4 + x * 4 + 3];
      };

      var getAverageAlphaFromPoints = function(points) {
        var alpha = 0, i = 0, len = points.length;
        for(; i < len; i++) alpha += getAlpha(points[i][0], points[i][1]);
        return alpha / len;
      };

      var rgb = function(color) {
        return "rgb(" + color.slice(0, 3).join(",") + ")";
      };
      
      var rgba = function(color) {
        color[3] /= 255;
        return "rgba(" + color.join(",") + ")";
      };
      
      var sanitizeX = function(x) {
        return Math.max(0, Math.min(Math.round(x), xMax));
        // return Math.max(0, Math.min((x + 0.5) | 0, xMax));
      };
      
      var sanitizeY = function(y) {
        return Math.max(0, Math.min(Math.round(y), yMax));
        // return Math.max(0, Math.min((y + 0.5) | 0, yMax));
      };

      var stepX, xSteps = Math.ceil(imageDataWidth  / height) + 1, // make sure, that canvas is
          stepY, ySteps = Math.ceil(imageDataHeight / side)   + 1, // completely filled.
          posX, posY, sanitizedPosX, sanitizedPosY,
          rectColor,
          rectColorPosY,
          trianglePosY,
          triangleBaseX,
          triangleTipX,
          triangleColor,
          triangleColorPosY,
          triangleColorPosX,
          sanitizedTriangleCenterX,
          sanitizedTriangleCenterY,
          trianglePointsRight,
          points,
          averageAlpha,
          i;

      if(alpha) {
        // Generate Alpha Mask
        for(stepY = 0; stepY < ySteps; stepY++) {
          posY               = stepY * side;
          rectColorPosY      = sanitizeY(posY + halfSide);
          trianglePosY       = posY - halfSide;
          triangleColorPosY  = sanitizeY(posY);   
          
          for(stepX = 0; stepX < xSteps; stepX++) {
            posX = stepX * height;
            trianglePointsRight = stepX % 2 !== 0;
            sanitizedPosX       = sanitizeX(posX);
            sanitizedPosY       = sanitizeY(posY);
            
            // Get average alpha for rect and draw it
            triangleTipX             = sanitizeX(trianglePointsRight ? posX + height - 1 : posX);
            triangleBaseX            = sanitizeX(trianglePointsRight ? posX : posX + height - 1);
            sanitizedTriangleCenterX = sanitizeX(posX + halfHeight);
            sanitizedTriangleCenterY = sanitizeY(posY + halfSide);

            // For calculating alpha transparency, we’re using
            // the average color of the area covered by
            // triangles and rects. Although it’s slower than
            // picking the color value of a single pixel,
            // results are way better.
            points = [
              [ triangleBaseX            , sanitizedPosY              ],
              [ triangleTipX             , sanitizedTriangleCenterY   ],
              [ triangleBaseX            , sanitizeY(posY + side - 1) ],
              [ sanitizedTriangleCenterX , sanitizedTriangleCenterY   ],
              [ sanitizedTriangleCenterX , sanitizedTriangleCenterY   ],
            ];

            averageAlpha  = (getAverageAlphaFromPoints(points) + 0.5) | 0;
            ctx.fillStyle = rgba([averageAlpha, 0, 0, 255]);
            ctx.fillRect(posX, posY, height, side);

            // Get average alpha for triangle and draw it
            points = [
              [ triangleBaseX            , sanitizeY(posY - halfSide)     ],
              [ triangleTipX             , sanitizedPosY                  ],
              [ triangleBaseX            , sanitizeY(posY + halfSide - 1) ],
              [ sanitizedTriangleCenterX , sanitizedPosY                  ],
              [ sanitizedTriangleCenterX , sanitizedPosY                  ],
            ];

            averageAlpha  = (getAverageAlphaFromPoints(points) + 0.5) | 0;
            ctx.fillStyle = rgba([averageAlpha, 0, 0, 255]);
            drawTriangle(posX, trianglePosY, false, trianglePointsRight);
          }
        }

        // Move red channel to alpha channel
        var alphaImageData  = ctx.getImageData(0, 0, canvas.width, canvas.height),
            alphaData       = alphaImageData.data,
            alphaDataLength = alphaData.length;

        for(i = 0; i < alphaDataLength; i += 4) {
          alphaData[i + 3] = alphaData[i];
        }

        ctx.putImageData(alphaImageData, 0, 0);

        // Causes new pixels to be drawn only where the
        // 
        ctx.globalCompositeOperation = "source-atop";
      }

      // Draw the final triangle mosaic
      for(stepY = 0; stepY < ySteps; stepY++) {
        posY               = stepY * side;
        rectColorPosY      = sanitizeY(posY + halfSide);
        trianglePosY       = posY - halfSide;
        triangleColorPosY  = sanitizeY(posY);   
        for(stepX = 0; stepX < xSteps; stepX++) {
          // It’s faster and produces better looking results,
          // i.e. eliminates artifacts at the edges of triangles
          // when drawing a rect first and then draw a
          // triangle that if shifted upwards by half of it’s
          // height.
          posX                = stepX * height;
          triangleColorPosX   = sanitizeX(posX + halfHeight);
          trianglePointsRight = (stepX % 2 !== 0);

          // For the final layer, only one color is picked
          // for the rect and the triangle. This is way faster
          // than the method used to calculate the alpha mask,
          // but results are sufficient for a decent quality
          // of the result.
          ctx.fillStyle = rgb(pickColor(triangleColorPosX, rectColorPosY));
          ctx.fillRect(posX, posY, height, side);
          
          ctx.fillStyle = rgb(pickColor(triangleColorPosX, triangleColorPosY));
          drawTriangle(posX, trianglePosY, false, trianglePointsRight);
        }
      }

      if(alpha) {
        // Reset composite operation, in case that other
        // scripts want to manipulate the canvas further.
        ctx.globalCompositeOperation = "source-over";
      }
    };

    placeholderRenderer.triangles = function(el) {

      var source   = el[_getElementsByClassName](__placeholderElementClass)[0];

      var process = function() {
        var width        = source.naturalWidth,
            height       = source.naturalHeight,
            scaledWidth  = el.offsetWidth,
            scaledHeight = Math.round(el.offsetWidth / width * height), // (scaledWidth / width * height + 0.5) | 0, // faster Math.round() hack // same as: 
            canvas       = document.createElement("canvas"),
            ctx          = canvas.getContext("2d"),
            alpha        = hasClass(el, __wrapperAlphaClass);

        canvas.width  = scaledWidth;
        canvas.height = scaledHeight;

        if(!alpha && 'mozOpaque' in canvas) {
          canvas.mozOpaque = true;
        }
        
        canvas.setAttribute("aria-hidden", true);
        canvas.className = source.className;
        
        RenderQueue.add(function(){
          ctx.drawImage(source, 0, 0, scaledWidth, scaledHeight);
          triangleMosaicFilter(canvas, 40, alpha);
          source.parentNode.replaceChild(canvas, source);
        });
      };

      imageLoaded(source, function() { process(); });
    };

  }

  /* =====  ImageSet  ======================================================= */

  var imageset = (function() {
    
    var imagesetElements;
    
    function checkImagesets() {
      var style, wrapper;

      for(var i = 0, l = imagesetElements.length; i < l; i++) {
        if(!imagesetElements[i]) continue;

        wrapper = imagesetElements[i];

        if(hasClass(wrapper, __wrapperPlaceholderRenderedClass)) continue;

        style = getPlaceholderStyle(wrapper);
        
        if(style && placeholderRenderer[style]) {
          // Render placeholder, if a renderer for given
          // imageset exists.
          addClass(wrapper, __wrapperPlaceholderRenderedClass);
          placeholderRenderer[style](wrapper);
        }
      }
    }

    var debouncedCheckImagesets = debounce(checkImagesets);

    function init() {

      document.addEventListener('lazybeforeunveil', function (e) {

        var element = e.target,
            wrapper = element.parentNode;

        if(!hasClass(element, __imageElementClass)) return;

        while(!hasClass(wrapper, __wrapperClass)) {
          // Get imageset container element by traversing up the DOM tree
          wrapper = wrapper.parentNode;
        }

        // Define a callback function which gets invoked, after an image has
        // finally loaded.
        var cb = function () {
          element.removeEventListener("load", cb);
          rAF(function () {
            // Asynchronously add loaded class
            addClass(wrapper, __wrapperLoadedClass);
          });
        };

        element.addEventListener("load", cb);
      });

      imagesetElements = document[_getElementsByClassName](__wrapperPlaceholderClass);

      if(!!window.MutationObserver) {
        // Use MutationObserver to check for new elements,
        // if supported.
        new window.MutationObserver( debouncedCheckImagesets ).observe( docElement, {childList: true, subtree: true, attributes: false, characterData: false } );
      } else {
        // Otherwise, fallback to Mutation Events and add
        // a setInterval for as a safety fallback.
        docElement.addEventListener('DOMNodeInserted', debouncedCheckImagesets, true);
        docElement.addEventListener('DOMAttrModified', debouncedCheckImagesets, true);
        setInterval(debouncedCheckImagesets, 999);
      }

      window.addEventListener('hashchange', debouncedCheckImagesets, true);

      debouncedCheckImagesets();
    }


    return {
      init: init,
    };

  })();

  imageset.init();
  //ready(imageset.init);

})(window, document, Math, Date);

/**
 * FF's first picture implementation is static and does not react to viewport changes, this tiny script fixes this.
 */
(function(window) {
	/*jshint eqnull:true */
	var ua = navigator.userAgent;

	if ( window.HTMLPictureElement && ((/ecko/).test(ua) && ua.match(/rv\:(\d+)/) && RegExp.$1 < 41) ) {
		addEventListener("resize", (function() {
			var timer;

			var dummySrc = document.createElement("source");

			var fixRespimg = function(img) {
				var source, sizes;
				var picture = img.parentNode;

				if (picture.nodeName.toUpperCase() === "PICTURE") {
					source = dummySrc.cloneNode();

					picture.insertBefore(source, picture.firstElementChild);
					setTimeout(function() {
						picture.removeChild(source);
					});
				} else if (!img._pfLastSize || img.offsetWidth > img._pfLastSize) {
					img._pfLastSize = img.offsetWidth;
					sizes = img.sizes;
					img.sizes += ",100vw";
					setTimeout(function() {
						img.sizes = sizes;
					});
				}
			};

			var findPictureImgs = function() {
				var i;
				var imgs = document.querySelectorAll("picture > img, img[srcset][sizes]");
				for (i = 0; i < imgs.length; i++) {
					fixRespimg(imgs[i]);
				}
			};
			var onResize = function() {
				clearTimeout(timer);
				timer = setTimeout(findPictureImgs, 99);
			};
			var mq = window.matchMedia && matchMedia("(orientation: landscape)");
			var init = function() {
				onResize();

				if (mq && mq.addListener) {
					mq.addListener(onResize);
				}
			};

			dummySrc.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

			if (/^[c|i]|d$/.test(document.readyState || "")) {
				init();
			} else {
				document.addEventListener("DOMContentLoaded", init);
			}

			return onResize;
		})());
	}
})(window);

/*
This lazySizes extension adds better support for print.
In case the user starts to print lazysizes will load all images.
*/
(function(window){
	/*jshint eqnull:true */
	'use strict';
	var config, elements, onprint, printMedia;
	// see also: http://tjvantoll.com/2012/06/15/detecting-print-requests-with-javascript/
	if(window.addEventListener){
		config = (window.lazySizes && lazySizes.cfg) || window.lazySizesConfig || {};
		elements = config.lazyClass || 'lazyload';
		onprint = function(){
			var i, len;
			if(typeof elements == 'string'){
				elements = document.getElementsByClassName(elements);
			}

			if(window.lazySizes){
				for(i = 0, len = elements.length; i < len; i++){
					lazySizes.loader.unveil(elements[i]);
				}
			}
		};

		addEventListener('beforeprint', onprint, false);

		if(!('onbeforeprint' in window) && window.matchMedia && (printMedia = matchMedia('print')) && printMedia.addListener){
			printMedia.addListener(function(){
				if(printMedia.matches){
					onprint();
				}
			});
		}
	}
})(window);

(function(window, factory) {
	var lazySizes = factory(window, window.document);
	window.lazySizes = lazySizes;
	if(typeof module == 'object' && module.exports){
		module.exports = lazySizes;
	}
}(window, function l(window, document) {
	'use strict';
	/*jshint eqnull:true */
	if(!document.getElementsByClassName){return;}

	var lazySizesConfig;

	var docElem = document.documentElement;

	var Date = window.Date;

	var supportPicture = window.HTMLPictureElement;

	var _addEventListener = 'addEventListener';

	var _getAttribute = 'getAttribute';

	var addEventListener = window[_addEventListener];

	var setTimeout = window.setTimeout;

	var requestAnimationFrame = window.requestAnimationFrame || setTimeout;

	var requestIdleCallback = window.requestIdleCallback;

	var regPicture = /^picture$/i;

	var loadEvents = ['load', 'error', 'lazyincluded', '_lazyloaded'];

	var regClassCache = {};

	var forEach = Array.prototype.forEach;

	var hasClass = function(ele, cls) {
		if(!regClassCache[cls]){
			regClassCache[cls] = new RegExp('(\\s|^)'+cls+'(\\s|$)');
		}
		return regClassCache[cls].test(ele[_getAttribute]('class') || '') && regClassCache[cls];
	};

	var addClass = function(ele, cls) {
		if (!hasClass(ele, cls)){
			ele.setAttribute('class', (ele[_getAttribute]('class') || '').trim() + ' ' + cls);
		}
	};

	var removeClass = function(ele, cls) {
		var reg;
		if ((reg = hasClass(ele,cls))) {
			ele.setAttribute('class', (ele[_getAttribute]('class') || '').replace(reg, ' '));
		}
	};

	var addRemoveLoadEvents = function(dom, fn, add){
		var action = add ? _addEventListener : 'removeEventListener';
		if(add){
			addRemoveLoadEvents(dom, fn);
		}
		loadEvents.forEach(function(evt){
			dom[action](evt, fn);
		});
	};

	var triggerEvent = function(elem, name, detail, noBubbles, noCancelable){
		var event = document.createEvent('CustomEvent');

		event.initCustomEvent(name, !noBubbles, !noCancelable, detail || {});

		elem.dispatchEvent(event);
		return event;
	};

	var updatePolyfill = function (el, full){
		var polyfill;
		if( !supportPicture && ( polyfill = (window.picturefill || lazySizesConfig.pf) ) ){
			polyfill({reevaluate: true, elements: [el]});
		} else if(full && full.src){
			el.src = full.src;
		}
	};

	var getCSS = function (elem, style){
		return (getComputedStyle(elem, null) || {})[style];
	};

	var getWidth = function(elem, parent, width){
		width = width || elem.offsetWidth;

		while(width < lazySizesConfig.minSize && parent && !elem._lazysizesWidth){
			width =  parent.offsetWidth;
			parent = parent.parentNode;
		}

		return width;
	};

	var rAF = (function(){
		var running, waiting;
		var fns = [];

		var run = function(){
			var fn;
			running = true;
			waiting = false;
			while(fns.length){
				fn = fns.shift();
				fn[0].apply(fn[1], fn[2]);
			}
			running = false;
		};

		var rafBatch = function(fn){
			if(running){
				fn.apply(this, arguments);
			} else {
				fns.push([fn, this, arguments]);

				if(!waiting){
					waiting = true;
					(document.hidden ? setTimeout : requestAnimationFrame)(run);
				}
			}
		};

		rafBatch._lsFlush = run;

		return rafBatch;
	})();

	var rAFIt = function(fn, simple){
		return simple ?
			function() {
				rAF(fn);
			} :
			function(){
				var that = this;
				var args = arguments;
				rAF(function(){
					fn.apply(that, args);
				});
			}
		;
	};

	var throttle = function(fn){
		var running;
		var lastTime = 0;
		var gDelay = 125;
		var RIC_DEFAULT_TIMEOUT = 666;
		var rICTimeout = RIC_DEFAULT_TIMEOUT;
		var run = function(){
			running = false;
			lastTime = Date.now();
			fn();
		};
		var idleCallback = requestIdleCallback ?
			function(){
				requestIdleCallback(run, {timeout: rICTimeout});
				if(rICTimeout !== RIC_DEFAULT_TIMEOUT){
					rICTimeout = RIC_DEFAULT_TIMEOUT;
				}
			}:
			rAFIt(function(){
				setTimeout(run);
			}, true)
		;

		return function(isPriority){
			var delay;
			if((isPriority = isPriority === true)){
				rICTimeout = 44;
			}

			if(running){
				return;
			}

			running =  true;

			delay = gDelay - (Date.now() - lastTime);

			if(delay < 0){
				delay = 0;
			}

			if(isPriority || (delay < 9 && requestIdleCallback)){
				idleCallback();
			} else {
				setTimeout(idleCallback, delay);
			}
		};
	};

	//based on http://modernjavascript.blogspot.de/2013/08/building-better-debounce.html
	var debounce = function(func) {
		var timeout, timestamp;
		var wait = 99;
		var run = function(){
			timeout = null;
			func();
		};
		var later = function() {
			var last = Date.now() - timestamp;

			if (last < wait) {
				setTimeout(later, wait - last);
			} else {
				(requestIdleCallback || run)(run);
			}
		};

		return function() {
			timestamp = Date.now();

			if (!timeout) {
				timeout = setTimeout(later, wait);
			}
		};
	};


	var loader = (function(){
		var lazyloadElems, preloadElems, isCompleted, resetPreloadingTimer, loadMode, started;

		var eLvW, elvH, eLtop, eLleft, eLright, eLbottom;

		var defaultExpand, preloadExpand, hFac;

		var regImg = /^img$/i;
		var regIframe = /^iframe$/i;

		var supportScroll = ('onscroll' in window) && !(/glebot/.test(navigator.userAgent));

		var shrinkExpand = 0;
		var currentExpand = 0;

		var isLoading = 0;
		var lowRuns = -1;

		var resetPreloading = function(e){
			isLoading--;
			if(e && e.target){
				addRemoveLoadEvents(e.target, resetPreloading);
			}

			if(!e || isLoading < 0 || !e.target){
				isLoading = 0;
			}
		};

		var isNestedVisible = function(elem, elemExpand){
			var outerRect;
			var parent = elem;
			var visible = getCSS(document.body, 'visibility') == 'hidden' || getCSS(elem, 'visibility') != 'hidden';

			eLtop -= elemExpand;
			eLbottom += elemExpand;
			eLleft -= elemExpand;
			eLright += elemExpand;

			while(visible && (parent = parent.offsetParent) && parent != document.body && parent != docElem){
				visible = ((getCSS(parent, 'opacity') || 1) > 0);

				if(visible && getCSS(parent, 'overflow') != 'visible'){
					outerRect = parent.getBoundingClientRect();
					visible = eLright > outerRect.left &&
						eLleft < outerRect.right &&
						eLbottom > outerRect.top - 1 &&
						eLtop < outerRect.bottom + 1
					;
				}
			}

			return visible;
		};

		var checkElements = function() {
			var eLlen, i, rect, autoLoadElem, loadedSomething, elemExpand, elemNegativeExpand, elemExpandVal, beforeExpandVal;

			if((loadMode = lazySizesConfig.loadMode) && isLoading < 8 && (eLlen = lazyloadElems.length)){

				i = 0;

				lowRuns++;

				if(preloadExpand == null){
					if(!('expand' in lazySizesConfig)){
						lazySizesConfig.expand = docElem.clientHeight > 500 && docElem.clientWidth > 500 ? 500 : 370;
					}

					defaultExpand = lazySizesConfig.expand;
					preloadExpand = defaultExpand * lazySizesConfig.expFactor;
				}

				if(currentExpand < preloadExpand && isLoading < 1 && lowRuns > 2 && loadMode > 2 && !document.hidden){
					currentExpand = preloadExpand;
					lowRuns = 0;
				} else if(loadMode > 1 && lowRuns > 1 && isLoading < 6){
					currentExpand = defaultExpand;
				} else {
					currentExpand = shrinkExpand;
				}

				for(; i < eLlen; i++){

					if(!lazyloadElems[i] || lazyloadElems[i]._lazyRace){continue;}

					if(!supportScroll){unveilElement(lazyloadElems[i]);continue;}

					if(!(elemExpandVal = lazyloadElems[i][_getAttribute]('data-expand')) || !(elemExpand = elemExpandVal * 1)){
						elemExpand = currentExpand;
					}

					if(beforeExpandVal !== elemExpand){
						eLvW = innerWidth + (elemExpand * hFac);
						elvH = innerHeight + elemExpand;
						elemNegativeExpand = elemExpand * -1;
						beforeExpandVal = elemExpand;
					}

					rect = lazyloadElems[i].getBoundingClientRect();

					if ((eLbottom = rect.bottom) >= elemNegativeExpand &&
						(eLtop = rect.top) <= elvH &&
						(eLright = rect.right) >= elemNegativeExpand * hFac &&
						(eLleft = rect.left) <= eLvW &&
						(eLbottom || eLright || eLleft || eLtop) &&
						((isCompleted && isLoading < 3 && !elemExpandVal && (loadMode < 3 || lowRuns < 4)) || isNestedVisible(lazyloadElems[i], elemExpand))){
						unveilElement(lazyloadElems[i]);
						loadedSomething = true;
						if(isLoading > 9){break;}
					} else if(!loadedSomething && isCompleted && !autoLoadElem &&
						isLoading < 4 && lowRuns < 4 && loadMode > 2 &&
						(preloadElems[0] || lazySizesConfig.preloadAfterLoad) &&
						(preloadElems[0] || (!elemExpandVal && ((eLbottom || eLright || eLleft || eLtop) || lazyloadElems[i][_getAttribute](lazySizesConfig.sizesAttr) != 'auto')))){
						autoLoadElem = preloadElems[0] || lazyloadElems[i];
					}
				}

				if(autoLoadElem && !loadedSomething){
					unveilElement(autoLoadElem);
				}
			}
		};

		var throttledCheckElements = throttle(checkElements);

		var switchLoadingClass = function(e){
			addClass(e.target, lazySizesConfig.loadedClass);
			removeClass(e.target, lazySizesConfig.loadingClass);
			addRemoveLoadEvents(e.target, rafSwitchLoadingClass);
		};
		var rafedSwitchLoadingClass = rAFIt(switchLoadingClass);
		var rafSwitchLoadingClass = function(e){
			rafedSwitchLoadingClass({target: e.target});
		};

		var changeIframeSrc = function(elem, src){
			try {
				elem.contentWindow.location.replace(src);
			} catch(e){
				elem.src = src;
			}
		};

		var handleSources = function(source){
			var customMedia, parent;

			var sourceSrcset = source[_getAttribute](lazySizesConfig.srcsetAttr);

			if( (customMedia = lazySizesConfig.customMedia[source[_getAttribute]('data-media') || source[_getAttribute]('media')]) ){
				source.setAttribute('media', customMedia);
			}

			if(sourceSrcset){
				source.setAttribute('srcset', sourceSrcset);
			}

			//https://bugzilla.mozilla.org/show_bug.cgi?id=1170572
			if(customMedia){
				parent = source.parentNode;
				parent.insertBefore(source.cloneNode(), source);
				parent.removeChild(source);
			}
		};

		var lazyUnveil = rAFIt(function (elem, detail, isAuto, sizes, isImg){
			var src, srcset, parent, isPicture, event, firesLoad;

			if(!(event = triggerEvent(elem, 'lazybeforeunveil', detail)).defaultPrevented){

				if(sizes){
					if(isAuto){
						addClass(elem, lazySizesConfig.autosizesClass);
					} else {
						elem.setAttribute('sizes', sizes);
					}
				}

				srcset = elem[_getAttribute](lazySizesConfig.srcsetAttr);
				src = elem[_getAttribute](lazySizesConfig.srcAttr);

				if(isImg) {
					parent = elem.parentNode;
					isPicture = parent && regPicture.test(parent.nodeName || '');
				}

				firesLoad = detail.firesLoad || (('src' in elem) && (srcset || src || isPicture));

				event = {target: elem};

				if(firesLoad){
					addRemoveLoadEvents(elem, resetPreloading, true);
					clearTimeout(resetPreloadingTimer);
					resetPreloadingTimer = setTimeout(resetPreloading, 2500);

					addClass(elem, lazySizesConfig.loadingClass);
					addRemoveLoadEvents(elem, rafSwitchLoadingClass, true);
				}

				if(isPicture){
					forEach.call(parent.getElementsByTagName('source'), handleSources);
				}

				if(srcset){
					elem.setAttribute('srcset', srcset);
				} else if(src && !isPicture){
					if(regIframe.test(elem.nodeName)){
						changeIframeSrc(elem, src);
					} else {
						elem.src = src;
					}
				}

				if(srcset || isPicture){
					updatePolyfill(elem, {src: src});
				}
			}

			rAF(function(){
				if(elem._lazyRace){
					delete elem._lazyRace;
				}
				removeClass(elem, lazySizesConfig.lazyClass);

				if( !firesLoad || elem.complete ){
					if(firesLoad){
						resetPreloading(event);
					} else {
						isLoading--;
					}
					switchLoadingClass(event);
				}
			});
		});

		var unveilElement = function (elem){
			var detail;

			var isImg = regImg.test(elem.nodeName);

			//allow using sizes="auto", but don't use. it's invalid. Use data-sizes="auto" or a valid value for sizes instead (i.e.: sizes="80vw")
			var sizes = isImg && (elem[_getAttribute](lazySizesConfig.sizesAttr) || elem[_getAttribute]('sizes'));
			var isAuto = sizes == 'auto';

			if( (isAuto || !isCompleted) && isImg && (elem.src || elem.srcset) && !elem.complete && !hasClass(elem, lazySizesConfig.errorClass)){return;}

			detail = triggerEvent(elem, 'lazyunveilread').detail;

			if(isAuto){
				 autoSizer.updateElem(elem, true, elem.offsetWidth);
			}

			elem._lazyRace = true;
			isLoading++;

			lazyUnveil(elem, detail, isAuto, sizes, isImg);
		};

		var onload = function(){
			if(isCompleted){return;}
			if(Date.now() - started < 999){
				setTimeout(onload, 999);
				return;
			}
			var afterScroll = debounce(function(){
				lazySizesConfig.loadMode = 3;
				throttledCheckElements();
			});

			isCompleted = true;

			lazySizesConfig.loadMode = 3;

			throttledCheckElements();

			addEventListener('scroll', function(){
				if(lazySizesConfig.loadMode == 3){
					lazySizesConfig.loadMode = 2;
				}
				afterScroll();
			}, true);
		};

		return {
			_: function(){
				started = Date.now();

				lazyloadElems = document.getElementsByClassName(lazySizesConfig.lazyClass);
				preloadElems = document.getElementsByClassName(lazySizesConfig.lazyClass + ' ' + lazySizesConfig.preloadClass);
				hFac = lazySizesConfig.hFac;

				addEventListener('scroll', throttledCheckElements, true);

				addEventListener('resize', throttledCheckElements, true);

				if(window.MutationObserver){
					new MutationObserver( throttledCheckElements ).observe( docElem, {childList: true, subtree: true, attributes: true} );
				} else {
					docElem[_addEventListener]('DOMNodeInserted', throttledCheckElements, true);
					docElem[_addEventListener]('DOMAttrModified', throttledCheckElements, true);
					setInterval(throttledCheckElements, 999);
				}

				addEventListener('hashchange', throttledCheckElements, true);

				//, 'fullscreenchange'
				['focus', 'mouseover', 'click', 'load', 'transitionend', 'animationend', 'webkitAnimationEnd'].forEach(function(name){
					document[_addEventListener](name, throttledCheckElements, true);
				});

				if((/d$|^c/.test(document.readyState))){
					onload();
				} else {
					addEventListener('load', onload);
					document[_addEventListener]('DOMContentLoaded', throttledCheckElements);
					setTimeout(onload, 20000);
				}

				if(lazyloadElems.length){
					checkElements();
				} else {
					throttledCheckElements();
				}
			},
			checkElems: throttledCheckElements,
			unveil: unveilElement
		};
	})();


	var autoSizer = (function(){
		var autosizesElems;

		var sizeElement = rAFIt(function(elem, parent, event, width){
			var sources, i, len;
			elem._lazysizesWidth = width;
			width += 'px';

			elem.setAttribute('sizes', width);

			if(regPicture.test(parent.nodeName || '')){
				sources = parent.getElementsByTagName('source');
				for(i = 0, len = sources.length; i < len; i++){
					sources[i].setAttribute('sizes', width);
				}
			}

			if(!event.detail.dataAttr){
				updatePolyfill(elem, event.detail);
			}
		});
		var getSizeElement = function (elem, dataAttr, width){
			var event;
			var parent = elem.parentNode;

			if(parent){
				width = getWidth(elem, parent, width);
				event = triggerEvent(elem, 'lazybeforesizes', {width: width, dataAttr: !!dataAttr});

				if(!event.defaultPrevented){
					width = event.detail.width;

					if(width && width !== elem._lazysizesWidth){
						sizeElement(elem, parent, event, width);
					}
				}
			}
		};

		var updateElementsSizes = function(){
			var i;
			var len = autosizesElems.length;
			if(len){
				i = 0;

				for(; i < len; i++){
					getSizeElement(autosizesElems[i]);
				}
			}
		};

		var debouncedUpdateElementsSizes = debounce(updateElementsSizes);

		return {
			_: function(){
				autosizesElems = document.getElementsByClassName(lazySizesConfig.autosizesClass);
				addEventListener('resize', debouncedUpdateElementsSizes);
			},
			checkElems: debouncedUpdateElementsSizes,
			updateElem: getSizeElement
		};
	})();

	var init = function(){
		if(!init.i){
			init.i = true;
			autoSizer._();
			loader._();
		}
	};

	(function(){
		var prop;

		var lazySizesDefaults = {
			lazyClass: 'lazyload',
			loadedClass: 'lazyloaded',
			loadingClass: 'lazyloading',
			preloadClass: 'lazypreload',
			errorClass: 'lazyerror',
			//strictClass: 'lazystrict',
			autosizesClass: 'lazyautosizes',
			srcAttr: 'data-src',
			srcsetAttr: 'data-srcset',
			sizesAttr: 'data-sizes',
			//preloadAfterLoad: false,
			minSize: 40,
			customMedia: {},
			init: true,
			expFactor: 1.5,
			hFac: 0.8,
			loadMode: 2
		};

		lazySizesConfig = window.lazySizesConfig || window.lazysizesConfig || {};

		for(prop in lazySizesDefaults){
			if(!(prop in lazySizesConfig)){
				lazySizesConfig[prop] = lazySizesDefaults[prop];
			}
		}

		window.lazySizesConfig = lazySizesConfig;

		setTimeout(function(){
			if(lazySizesConfig.init){
				init();
			}
		});
	})();

	return {
		cfg: lazySizesConfig,
		autoSizer: autoSizer,
		loader: loader,
		init: init,
		uP: updatePolyfill,
		aC: addClass,
		rC: removeClass,
		hC: hasClass,
		fire: triggerEvent,
		gW: getWidth,
		rAF: rAF,
	};
}
));

function whichTransitionEvent(){
	var t;
	var el = document.createElement('fakeelement');
	var transitions = {
		'transition':'transitionend',
		'OTransition':'oTransitionEnd',
		'MozTransition':'transitionend',
		'WebkitTransition':'webkitTransitionEnd'
	};

	for(t in transitions){
		if( el.style[t] !== undefined ){
			return transitions[t];
		}
	}
}

var transitionEnd = whichTransitionEvent();
/*!
 * smooth-scroll v9.1.2: Animate scrolling to anchor links
 * (c) 2016 Chris Ferdinandi
 * MIT License
 * http://github.com/cferdinandi/smooth-scroll
 */

(function (root, factory) {
	if ( typeof define === 'function' && define.amd ) {
		define([], factory(root));
	} else if ( typeof exports === 'object' ) {
		module.exports = factory(root);
	} else {
		root.smoothScroll = factory(root);
	}
})(typeof global !== 'undefined' ? global : this.window || this.global, function (root) {

	'use strict';

	//
	// Variables
	//

	var smoothScroll = {}; // Object for public APIs
	var supports = 'querySelector' in document && 'addEventListener' in root; // Feature test
	var settings, eventTimeout, fixedHeader, headerHeight, animationInterval;

	// Default settings
	var defaults = {
		selector: '[data-scroll]',
		selectorHeader: '[data-scroll-header]',
		speed: 500,
		easing: 'easeInOutCubic',
		offset: 0,
		updateURL: true,
		callback: function () {}
	};


	//
	// Methods
	//

	/**
	 * Merge two or more objects. Returns a new object.
	 * @private
	 * @param {Boolean}  deep     If true, do a deep (or recursive) merge [optional]
	 * @param {Object}   objects  The objects to merge together
	 * @returns {Object}          Merged values of defaults and options
	 */
	var extend = function () {

		// Variables
		var extended = {};
		var deep = false;
		var i = 0;
		var length = arguments.length;

		// Check if a deep merge
		if ( Object.prototype.toString.call( arguments[0] ) === '[object Boolean]' ) {
			deep = arguments[0];
			i++;
		}

		// Merge the object into the extended object
		var merge = function (obj) {
			for ( var prop in obj ) {
				if ( Object.prototype.hasOwnProperty.call( obj, prop ) ) {
					// If deep merge and property is an object, merge properties
					if ( deep && Object.prototype.toString.call(obj[prop]) === '[object Object]' ) {
						extended[prop] = extend( true, extended[prop], obj[prop] );
					} else {
						extended[prop] = obj[prop];
					}
				}
			}
		};

		// Loop through each object and conduct a merge
		for ( ; i < length; i++ ) {
			var obj = arguments[i];
			merge(obj);
		}

		return extended;

	};

	/**
	 * Get the height of an element.
	 * @private
	 * @param  {Node} elem The element to get the height of
	 * @return {Number}    The element's height in pixels
	 */
	var getHeight = function ( elem ) {
		return Math.max( elem.scrollHeight, elem.offsetHeight, elem.clientHeight );
	};

	/**
	 * Get the closest matching element up the DOM tree.
	 * @private
	 * @param  {Element} elem     Starting element
	 * @param  {String}  selector Selector to match against (class, ID, data attribute, or tag)
	 * @return {Boolean|Element}  Returns null if not match found
	 */
	var getClosest = function ( elem, selector ) {

		// Variables
		var firstChar = selector.charAt(0);
		var supports = 'classList' in document.documentElement;
		var attribute, value;

		// If selector is a data attribute, split attribute from value
		if ( firstChar === '[' ) {
			selector = selector.substr(1, selector.length - 2);
			attribute = selector.split( '=' );

			if ( attribute.length > 1 ) {
				value = true;
				attribute[1] = attribute[1].replace( /"/g, '' ).replace( /'/g, '' );
			}
		}

		// Get closest match
		for ( ; elem && elem !== document; elem = elem.parentNode ) {

			// If selector is a class
			if ( firstChar === '.' ) {
				if ( supports ) {
					if ( elem.classList.contains( selector.substr(1) ) ) {
						return elem;
					}
				} else {
					if ( new RegExp('(^|\\s)' + selector.substr(1) + '(\\s|$)').test( elem.className ) ) {
						return elem;
					}
				}
			}

			// If selector is an ID
			if ( firstChar === '#' ) {
				if ( elem.id === selector.substr(1) ) {
					return elem;
				}
			}

			// If selector is a data attribute
			if ( firstChar === '[' ) {
				if ( elem.hasAttribute( attribute[0] ) ) {
					if ( value ) {
						if ( elem.getAttribute( attribute[0] ) === attribute[1] ) {
							return elem;
						}
					} else {
						return elem;
					}
				}
			}

			// If selector is a tag
			if ( elem.tagName.toLowerCase() === selector ) {
				return elem;
			}

		}

		return null;

	};

	/**
	 * Escape special characters for use with querySelector
	 * @public
	 * @param {String} id The anchor ID to escape
	 * @author Mathias Bynens
	 * @link https://github.com/mathiasbynens/CSS.escape
	 */
	smoothScroll.escapeCharacters = function ( id ) {

		// Remove leading hash
		if ( id.charAt(0) === '#' ) {
			id = id.substr(1);
		}

		var string = String(id);
		var length = string.length;
		var index = -1;
		var codeUnit;
		var result = '';
		var firstCodeUnit = string.charCodeAt(0);
		while (++index < length) {
			codeUnit = string.charCodeAt(index);
			// Note: there’s no need to special-case astral symbols, surrogate
			// pairs, or lone surrogates.

			// If the character is NULL (U+0000), then throw an
			// `InvalidCharacterError` exception and terminate these steps.
			if (codeUnit === 0x0000) {
				throw new InvalidCharacterError(
					'Invalid character: the input contains U+0000.'
				);
			}

			if (
				// If the character is in the range [\1-\1F] (U+0001 to U+001F) or is
				// U+007F, […]
				(codeUnit >= 0x0001 && codeUnit <= 0x001F) || codeUnit == 0x007F ||
				// If the character is the first character and is in the range [0-9]
				// (U+0030 to U+0039), […]
				(index === 0 && codeUnit >= 0x0030 && codeUnit <= 0x0039) ||
				// If the character is the second character and is in the range [0-9]
				// (U+0030 to U+0039) and the first character is a `-` (U+002D), […]
				(
					index === 1 &&
					codeUnit >= 0x0030 && codeUnit <= 0x0039 &&
					firstCodeUnit === 0x002D
				)
			) {
				// http://dev.w3.org/csswg/cssom/#escape-a-character-as-code-point
				result += '\\' + codeUnit.toString(16) + ' ';
				continue;
			}

			// If the character is not handled by one of the above rules and is
			// greater than or equal to U+0080, is `-` (U+002D) or `_` (U+005F), or
			// is in one of the ranges [0-9] (U+0030 to U+0039), [A-Z] (U+0041 to
			// U+005A), or [a-z] (U+0061 to U+007A), […]
			if (
				codeUnit >= 0x0080 ||
				codeUnit === 0x002D ||
				codeUnit === 0x005F ||
				codeUnit >= 0x0030 && codeUnit <= 0x0039 ||
				codeUnit >= 0x0041 && codeUnit <= 0x005A ||
				codeUnit >= 0x0061 && codeUnit <= 0x007A
			) {
				// the character itself
				result += string.charAt(index);
				continue;
			}

			// Otherwise, the escaped character.
			// http://dev.w3.org/csswg/cssom/#escape-a-character
			result += '\\' + string.charAt(index);

		}

		return '#' + result;

	};

	/**
	 * Calculate the easing pattern
	 * @private
	 * @link https://gist.github.com/gre/1650294
	 * @param {String} type Easing pattern
	 * @param {Number} time Time animation should take to complete
	 * @returns {Number}
	 */
	var easingPattern = function ( type, time ) {
		var pattern;
		if ( type === 'easeInQuad' ) pattern = time * time; // accelerating from zero velocity
		if ( type === 'easeOutQuad' ) pattern = time * (2 - time); // decelerating to zero velocity
		if ( type === 'easeInOutQuad' ) pattern = time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time; // acceleration until halfway, then deceleration
		if ( type === 'easeInCubic' ) pattern = time * time * time; // accelerating from zero velocity
		if ( type === 'easeOutCubic' ) pattern = (--time) * time * time + 1; // decelerating to zero velocity
		if ( type === 'easeInOutCubic' ) pattern = time < 0.5 ? 4 * time * time * time : (time - 1) * (2 * time - 2) * (2 * time - 2) + 1; // acceleration until halfway, then deceleration
		if ( type === 'easeInQuart' ) pattern = time * time * time * time; // accelerating from zero velocity
		if ( type === 'easeOutQuart' ) pattern = 1 - (--time) * time * time * time; // decelerating to zero velocity
		if ( type === 'easeInOutQuart' ) pattern = time < 0.5 ? 8 * time * time * time * time : 1 - 8 * (--time) * time * time * time; // acceleration until halfway, then deceleration
		if ( type === 'easeInQuint' ) pattern = time * time * time * time * time; // accelerating from zero velocity
		if ( type === 'easeOutQuint' ) pattern = 1 + (--time) * time * time * time * time; // decelerating to zero velocity
		if ( type === 'easeInOutQuint' ) pattern = time < 0.5 ? 16 * time * time * time * time * time : 1 + 16 * (--time) * time * time * time * time; // acceleration until halfway, then deceleration
		return pattern || time; // no easing, no acceleration
	};

	/**
	 * Calculate how far to scroll
	 * @private
	 * @param {Element} anchor The anchor element to scroll to
	 * @param {Number} headerHeight Height of a fixed header, if any
	 * @param {Number} offset Number of pixels by which to offset scroll
	 * @returns {Number}
	 */
	var getEndLocation = function ( anchor, headerHeight, offset ) {
		var location = 0;
		if (anchor.offsetParent) {
			do {
				location += anchor.offsetTop;
				anchor = anchor.offsetParent;
			} while (anchor);
		}
		location = location - headerHeight - offset;
		return location >= 0 ? location : 0;
	};

	/**
	 * Determine the document's height
	 * @private
	 * @returns {Number}
	 */
	var getDocumentHeight = function () {
		return Math.max(
			root.document.body.scrollHeight, root.document.documentElement.scrollHeight,
			root.document.body.offsetHeight, root.document.documentElement.offsetHeight,
			root.document.body.clientHeight, root.document.documentElement.clientHeight
		);
	};

	/**
	 * Convert data-options attribute into an object of key/value pairs
	 * @private
	 * @param {String} options Link-specific options as a data attribute string
	 * @returns {Object}
	 */
	var getDataOptions = function ( options ) {
		return !options || !(typeof JSON === 'object' && typeof JSON.parse === 'function') ? {} : JSON.parse( options );
	};

	/**
	 * Update the URL
	 * @private
	 * @param {Element} anchor The element to scroll to
	 * @param {Boolean} url Whether or not to update the URL history
	 */
	var updateUrl = function ( anchor, url ) {
		if ( root.history.pushState && (url || url === 'true') && root.location.protocol !== 'file:' ) {
			root.history.pushState( null, null, [root.location.protocol, '//', root.location.host, root.location.pathname, root.location.search, anchor].join('') );
		}
	};

	var getHeaderHeight = function ( header ) {
		return header === null ? 0 : ( getHeight( header ) + header.offsetTop );
	};

	/**
	 * Start/stop the scrolling animation
	 * @public
	 * @param {Element} anchor The element to scroll to
	 * @param {Element} toggle The element that toggled the scroll event
	 * @param {Object} options
	 */
	smoothScroll.animateScroll = function ( anchor, toggle, options ) {

		// Options and overrides
		var overrides = getDataOptions( toggle ? toggle.getAttribute('data-options') : null );
		var animateSettings = extend( settings || defaults, options || {}, overrides ); // Merge user options with defaults

		// Selectors and variables
		var isNum = Object.prototype.toString.call( anchor ) === '[object Number]' ? true : false;
		var anchorElem = isNum ? null : ( anchor === '#' ? root.document.documentElement : root.document.querySelector(anchor) );
		if ( !isNum && !anchorElem ) return;
		var startLocation = root.pageYOffset; // Current location on the page
		if ( !fixedHeader ) { fixedHeader = root.document.querySelector( animateSettings.selectorHeader ); }  // Get the fixed header if not already set
		if ( !headerHeight ) { headerHeight = getHeaderHeight( fixedHeader ); } // Get the height of a fixed header if one exists and not already set
		var endLocation = isNum ? anchor : getEndLocation( anchorElem, headerHeight, parseInt(animateSettings.offset, 10) ); // Location to scroll to
		var distance = endLocation - startLocation; // distance to travel
		var documentHeight = getDocumentHeight();
		var timeLapsed = 0;
		var percentage, position;

		// Update URL
		if ( !isNum ) {
			updateUrl(anchor, animateSettings.updateURL);
		}

		/**
		 * Stop the scroll animation when it reaches its target (or the bottom/top of page)
		 * @private
		 * @param {Number} position Current position on the page
		 * @param {Number} endLocation Scroll to location
		 * @param {Number} animationInterval How much to scroll on this loop
		 */
		var stopAnimateScroll = function (position, endLocation, animationInterval) {
			var currentLocation = root.pageYOffset;
			if ( position == endLocation || currentLocation == endLocation || ( (root.innerHeight + currentLocation) >= documentHeight ) ) {
				clearInterval(animationInterval);
				if ( !isNum ) {
					anchorElem.focus();
				}
				animateSettings.callback( anchor, toggle ); // Run callbacks after animation complete
			}
		};

		/**
		 * Loop scrolling animation
		 * @private
		 */
		var loopAnimateScroll = function () {
			timeLapsed += 16;
			percentage = ( timeLapsed / parseInt(animateSettings.speed, 10) );
			percentage = ( percentage > 1 ) ? 1 : percentage;
			position = startLocation + ( distance * easingPattern(animateSettings.easing, percentage) );
			root.scrollTo( 0, Math.floor(position) );
			stopAnimateScroll(position, endLocation, animationInterval);
		};

		/**
		 * Set interval timer
		 * @private
		 */
		var startAnimateScroll = function () {
			clearInterval(animationInterval);
			animationInterval = setInterval(loopAnimateScroll, 16);
		};

		/**
		 * Reset position to fix weird iOS bug
		 * @link https://github.com/cferdinandi/smooth-scroll/issues/45
		 */
		if ( root.pageYOffset === 0 ) {
			root.scrollTo( 0, 0 );
		}

		// Start scrolling animation
		startAnimateScroll();

	};

	/**
	 * If smooth scroll element clicked, animate scroll
	 * @private
	 */
	var eventHandler = function (event) {

		// Don't run if right-click or command/control + click
		if ( event.button !== 0 || event.metaKey || event.ctrlKey ) return;

		// If a smooth scroll link, animate it
		var toggle = getClosest( event.target, settings.selector );
		if ( toggle && toggle.tagName.toLowerCase() === 'a' ) {
			event.preventDefault(); // Prevent default click event
			var hash = smoothScroll.escapeCharacters( toggle.hash ); // Escape hash characters
			smoothScroll.animateScroll( hash, toggle, settings); // Animate scroll
		}

	};

	/**
	 * On window scroll and resize, only run events at a rate of 15fps for better performance
	 * @private
	 * @param  {Function} eventTimeout Timeout function
	 * @param  {Object} settings
	 */
	var eventThrottler = function (event) {
		if ( !eventTimeout ) {
			eventTimeout = setTimeout(function() {
				eventTimeout = null; // Reset timeout
				headerHeight = getHeaderHeight( fixedHeader ); // Get the height of a fixed header if one exists
			}, 66);
		}
	};

	/**
	 * Destroy the current initialization.
	 * @public
	 */
	smoothScroll.destroy = function () {

		// If plugin isn't already initialized, stop
		if ( !settings ) return;

		// Remove event listeners
		root.document.removeEventListener( 'click', eventHandler, false );
		root.removeEventListener( 'resize', eventThrottler, false );

		// Reset varaibles
		settings = null;
		eventTimeout = null;
		fixedHeader = null;
		headerHeight = null;
		animationInterval = null;
	};

	/**
	 * Initialize Smooth Scroll
	 * @public
	 * @param {Object} options User settings
	 */
	smoothScroll.init = function ( options ) {

		// feature test
		if ( !supports ) return;

		// Destroy any existing initializations
		smoothScroll.destroy();

		// Selectors and variables
		settings = extend( defaults, options || {} ); // Merge user options with defaults
		fixedHeader = root.document.querySelector( settings.selectorHeader ); // Get the fixed header
		headerHeight = getHeaderHeight( fixedHeader );

		// When a toggle is clicked, run the click handler
		root.document.addEventListener('click', eventHandler, false );
		if ( fixedHeader ) { root.addEventListener( 'resize', eventThrottler, false ); }

	};


	//
	// Public APIs
	//

	return smoothScroll;

});/*global self, document, DOMException */

/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */

if ("document" in self) {

// Full polyfill for browsers with no classList support
// Including IE < Edge missing SVGElement.classList
if (!("classList" in document.createElement("_"))
	|| document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg","g"))) {

(function (view) {

"use strict";

if (!('Element' in view)) return;

var
	  classListProp = "classList"
	, protoProp = "prototype"
	, elemCtrProto = view.Element[protoProp]
	, objCtr = Object
	, strTrim = String[protoProp].trim || function () {
		return this.replace(/^\s+|\s+$/g, "");
	}
	, arrIndexOf = Array[protoProp].indexOf || function (item) {
		var
			  i = 0
			, len = this.length
		;
		for (; i < len; i++) {
			if (i in this && this[i] === item) {
				return i;
			}
		}
		return -1;
	}
	// Vendors: please allow content code to instantiate DOMExceptions
	, DOMEx = function (type, message) {
		this.name = type;
		this.code = DOMException[type];
		this.message = message;
	}
	, checkTokenAndGetIndex = function (classList, token) {
		if (token === "") {
			throw new DOMEx(
				  "SYNTAX_ERR"
				, "An invalid or illegal string was specified"
			);
		}
		if (/\s/.test(token)) {
			throw new DOMEx(
				  "INVALID_CHARACTER_ERR"
				, "String contains an invalid character"
			);
		}
		return arrIndexOf.call(classList, token);
	}
	, ClassList = function (elem) {
		var
			  trimmedClasses = strTrim.call(elem.getAttribute("class") || "")
			, classes = trimmedClasses ? trimmedClasses.split(/\s+/) : []
			, i = 0
			, len = classes.length
		;
		for (; i < len; i++) {
			this.push(classes[i]);
		}
		this._updateClassName = function () {
			elem.setAttribute("class", this.toString());
		};
	}
	, classListProto = ClassList[protoProp] = []
	, classListGetter = function () {
		return new ClassList(this);
	}
;
// Most DOMException implementations don't allow calling DOMException's toString()
// on non-DOMExceptions. Error's toString() is sufficient here.
DOMEx[protoProp] = Error[protoProp];
classListProto.item = function (i) {
	return this[i] || null;
};
classListProto.contains = function (token) {
	token += "";
	return checkTokenAndGetIndex(this, token) !== -1;
};
classListProto.add = function () {
	var
		  tokens = arguments
		, i = 0
		, l = tokens.length
		, token
		, updated = false
	;
	do {
		token = tokens[i] + "";
		if (checkTokenAndGetIndex(this, token) === -1) {
			this.push(token);
			updated = true;
		}
	}
	while (++i < l);

	if (updated) {
		this._updateClassName();
	}
};
classListProto.remove = function () {
	var
		  tokens = arguments
		, i = 0
		, l = tokens.length
		, token
		, updated = false
		, index
	;
	do {
		token = tokens[i] + "";
		index = checkTokenAndGetIndex(this, token);
		while (index !== -1) {
			this.splice(index, 1);
			updated = true;
			index = checkTokenAndGetIndex(this, token);
		}
	}
	while (++i < l);

	if (updated) {
		this._updateClassName();
	}
};
classListProto.toggle = function (token, force) {
	token += "";

	var
		  result = this.contains(token)
		, method = result ?
			force !== true && "remove"
		:
			force !== false && "add"
	;

	if (method) {
		this[method](token);
	}

	if (force === true || force === false) {
		return force;
	} else {
		return !result;
	}
};
classListProto.toString = function () {
	return this.join(" ");
};

if (objCtr.defineProperty) {
	var classListPropDesc = {
		  get: classListGetter
		, enumerable: true
		, configurable: true
	};
	try {
		objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
	} catch (ex) { // IE 8 doesn't support enumerable:true
		// adding undefined to fight this issue https://github.com/eligrey/classList.js/issues/36
		// modernie IE8-MSW7 machine has IE8 8.0.6001.18702 and is affected
		if (ex.number === undefined || ex.number === -0x7FF5EC54) {
			classListPropDesc.enumerable = false;
			objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
		}
	}
} else if (objCtr[protoProp].__defineGetter__) {
	elemCtrProto.__defineGetter__(classListProp, classListGetter);
}

}(self));

}

// There is full or partial native classList support, so just check if we need
// to normalize the add/remove and toggle APIs.

(function () {
	"use strict";

	var testElement = document.createElement("_");

	testElement.classList.add("c1", "c2");

	// Polyfill for IE 10/11 and Firefox <26, where classList.add and
	// classList.remove exist but support only one argument at a time.
	if (!testElement.classList.contains("c2")) {
		var createMethod = function(method) {
			var original = DOMTokenList.prototype[method];

			DOMTokenList.prototype[method] = function(token) {
				var i, len = arguments.length;

				for (i = 0; i < len; i++) {
					token = arguments[i];
					original.call(this, token);
				}
			};
		};
		createMethod('add');
		createMethod('remove');
	}

	testElement.classList.toggle("c3", false);

	// Polyfill for IE 10 and Firefox <24, where classList.toggle does not
	// support the second argument.
	if (testElement.classList.contains("c3")) {
		var _toggle = DOMTokenList.prototype.toggle;

		DOMTokenList.prototype.toggle = function(token, force) {
			if (1 in arguments && !this.contains(token) === !force) {
				return force;
			} else {
				return _toggle.call(this, token);
			}
		};

	}

	testElement = null;
}());

}
var extend = {

	object: function(out) {
		out = out || {};

		for (var i = 1; i < arguments.length; i++) {
			if (!arguments[i]) {
				continue;
			}

			for (var key in arguments[i]) {
				if (arguments[i].hasOwnProperty(key)) {
					out[key] = arguments[i][key];
				}
			}
		}

		return out;
	}
};
var Alerts = (function () {

	/**
	 * Privates
	 */

	/**
	 * Define some basic variable settings for the 'dismiss' button label (and hidden close/cross text)
	 */
	var alertsettings = {
		dismiss : 'Dismiss'
	};

	/**
	 * Define the basic options the init of the messages
	 */
	var alertoptions = {
		type: 'bar'
	};

	function onTimeoutNotification(element) {
		var dismiss = element.querySelector('[data-dismiss]');
		// Fire off a click on the dismiss button
		clickevent = document.createEvent('HTMLEvents');
		clickevent.initEvent('click', true, false);
		dismiss.dispatchEvent(clickevent);
	}

	/**
	* Initiate the messages function
	*/
	function init(push_message) {
		// are there language variables set?
		if (typeof LANG_MESSAGE_DISMISS !== 'undefined'){
			alertsettings.dismiss = LANG_MESSAGE_DISMISS;
		}

		// are there generated messages from the page?
		if (typeof push_message !== 'undefined'){
			// loop trough the messages array
			for(var i=0; i<push_message.length; i++){
				// show these messages
				Alerts.addMessage({status: push_message[i].status, content: push_message[i].text, timeout: push_message[i].timeout, type: push_message[i].type});
			}
		}

		// Close messages when cliked on .bar__dismiss
		var dismissbutton = document.querySelectorAll('[data-dismiss]');
		if(dismissbutton !== null) {
			Array.prototype.forEach.call(dismissbutton, function(el, i){
				el.addEventListener('click', Alerts.hideNotification, false);
			});
		}
	}

	/**
	* Method for adding message to DOM body
	* @param {user_options} object with settings for the messages
	* @object user_options {status} a string with the status for the messages (error, info, success, warning)
	* @object user_options {content} a string with the content of the messages
	* @object user_options {timeout} a string with timeout time for the messages (Can be empty)
	* @object user_options {type} a string to determine what type of box/bar we want (bar, modal) (Can be empty)
	*/
	function addMessage(options) {

		// TODO: check if alerts are accessible without JS, for IE8 and other old fucks.

		var message_element;

		extend.object(alertoptions, options);

		message_element = document.createElement('div');

		if(alertoptions.type === 'bar' || typeof alertoptions.type === 'undefined'){
			// Create message DOM element
			message_element.className = 'alert alert--bar alert--' + alertoptions.status + ' js-alert';
			message_element.setAttribute('data-element-type','bar');
			message_element.innerHTML = '<div class="alert__message">' + alertoptions.content + '</div><button type="button" class="alert__close" data-dismiss="alert" aria-hidden="true" role="presentation">&times;</button>';
			document.body.insertBefore(message_element, document.body.firstChild);
		}
		if(alertoptions.type === 'modal'){
			// Create backdrop DOM element
			backdrop_element = document.createElement('div');
			backdrop_element.className = 'backdrop js-backdrop';
			// Create message DOM element
			message_element.className = 'alert alert--modal alert--' + alertoptions.status + ' js-alert';
			message_element.setAttribute('data-element-type','modal');
			message_element.innerHTML = '<div class="alert__message">' + alertoptions.content + '</div><button class="button button--primary" data-dismiss="alert">'+ alertsettings.dismiss +'</button>';
			document.body.appendChild(backdrop_element);
			document.body.appendChild(message_element);
		}

		this.showNotification(message_element);

		// if there is no timeout set in addMessage, or timeout = 0, don't set timeout
		if((typeof alertoptions.timeout === 'undefined')||alertoptions.timeout === 0){
			return;
		} else {
			setTimeout(function(){
				onTimeoutNotification(message_element);
			},alertoptions.timeout);
		}
	}

	/**
	* Method for showing the messages
	*/
	function showNotification(element) {

		var notification = element;

		// Use a short timeout, to make sure the transition runs
		setTimeout(function(){
			notification.classList.add('is-visible');
		},10);

		// notification.classList.add('is-visible');
		if(alertoptions.type === 'modal'){
			var backdrops = document.querySelectorAll('.backdrop');
			Array.prototype.forEach.call(backdrops, function(el, i){
				el.classList.add('is-visible');
			});
		}
	}

	/**
	* Method for hiding the message
	*/
	function hideNotification(event) {

		var notification = event.target.parentNode;

		// remove and set classes for css animation
		notification.classList.remove('is-visible');
		notification.classList.remove('is-hidden');
		if(alertoptions.type === 'modal'){
			var backdrop = document.querySelector('.backdrop');
			backdrop.classList.remove('is-visible');
			backdrop.classList.add('is-hiding');
		}

		var notificationHasTransformSet = null;
		var notificationHasWebkitTransformSet = null;

		// Get the transform of an element via getComputedStyle (if the browser supports this..)
		if (window.getComputedStyle) {
			notificationHasTransformSet = window.getComputedStyle(notification, null).getPropertyValue('transform');
			notificationHasWebkitTransformSet = window.getComputedStyle(notification, null).getPropertyValue('-webkit-transform');
		}

		// If browser doesn't support transitions or there is no transform (or -webkit-transform...) set
		if(!Modernizr.csstransitions || notificationHasTransformSet === 'none' || notificationHasWebkitTransformSet === 'none'){
			Alerts.removeNotificationElements(notification);
		}
		else {
			// Wait for transition to end, makes use of transitionend.js plugin!
			notification.addEventListener(transitionEnd, function(){
				Alerts.removeNotificationElements(this);
			}, false);
		}

		return false;
	}

	function removeNotificationElements(element) {
		var elementtype = element.getAttribute('data-element-type');
		element.parentNode.removeChild(element);
		if(elementtype === 'modal'){
			var backdrop = document.querySelector('.backdrop');
			backdrop.parentNode.removeChild(backdrop);
		}
	}

	/**
	 * Return public methods
	 */
	return {

		addMessage: addMessage,
		showNotification: showNotification,
		hideNotification: hideNotification,
		removeNotificationElements: removeNotificationElements,
		init: init

	};
})();
var Expand = (function () {

	function toggle(event) {
		event.preventDefault();
		var button = event.target;
		var targetid = button.getAttribute('href');
		var cookieid = targetid.substring(1);
		var target = document.querySelector(targetid);
		var expandparent = target.parentNode;

		if(expandparent.classList.contains('is-closed')) {
			button.classList.add('is-active');
			expandparent.classList.remove('is-closed');
			expandparent.classList.add('is-open');
			// cookie.set(cookieid,'open');                                     // When using `cookie.util.js` (not enhance)
			enhance.cookie(cookieid, 'open');                                   // When using enhance (and thus enhance.cookie)
		}
		else {
			button.classList.remove('is-active');
			expandparent.classList.remove('is-open');
			expandparent.classList.add('is-closed');
			// cookie.erase(cookieid);                                          // When using `cookie.util.js` (not enhance)
			enhance.cookie(cookieid, false);                                    // When using enhance (and thus enhance.cookie)
		}
	}

	function init() {
		var expanders = document.querySelectorAll('.js-expandtarget');
		for (i = 0; i < expanders.length; i++) {
			var expanderid = expanders[i].getAttribute('id');
			// if(cookie.get(expanderid)) {                                     // When using `cookie.util.js` (not enhance)
			if(enhance.cookie(expanderid)) {                                    // When using enhance (and thus enhance.cookie)
				expanders[i].parentNode.classList.add('is-open');
				expanders[i].parentNode.querySelector('.js-expandbutton').classList.add('is-active');
				// console.log(expanders[i]);
			}
			else {
				expanders[i].parentNode.classList.add('is-closed');
			}
		}

		var expandbuttons = document.querySelectorAll('.js-expandbutton');
		for (i = 0; i < expandbuttons.length; i++) {
			expandbuttons[i].addEventListener('click', Expand.toggle, false);
		}
	}

	/**
	 * Return public methods
	 */
	return {
		toggle: toggle,
		init: init
	};
})();

var FontObserverHandler = (function () {

	function init(){

		// If the class `fonts-loaded` is already set, we're good
		if(document.documentElement.className.indexOf('fonts-loaded') > -1 ) {
			return;
		}

		// Define the fonts and font variants to observed
		var fontObservers = [];
		var fontFamilies = {
			'Fira Sans': [
				{
					weight: 400,
				},
				{
					weight: 400,
					style: 'italic'
				},
				{
					weight: 700
				},
			],
			// 'Another Font': [
			// 	{
			// 		weight: 400,
			// 		font-variant: small-caps;
			// 	},
			// 	{
			// 		weight: 600
			// 	},
			// ],
		};

		// Init the observer on the defined font settings
		Object.keys(fontFamilies).forEach(function(family) {
			fontObservers.push(fontFamilies[family].map(function(config) {
				return new FontFaceObserver(family, config).load();
			}));
		});

		// Set the `fonts-loaded` class and avoid re-downloading the web fonts
		// over and over again (and do not run the fontobserver script when the
		// font is already available from cache) by setting a cookie
		Promise
			.all(fontObservers)
			.then(function() {
				// document.documentElement.classList.add('fonts-loaded');
				document.documentElement.className += ' fonts-loaded';
				enhance.cookie('fonts-loaded', 'true', 7);
				// cookie.set('fonts-loaded', 'true', 7);
			}, function() {
				console.info('Web fonts could not be loaded in time. Falling back to system fonts.');
			});

	}

	/**
	 * Return public methods
	 */
	return {
		init: init
	};
})();
var NavMain = (function () {

	/**
	 * Privates
	 */
	var navelements = {
		banner: document.querySelector('.banner'),
		html: document.querySelector('html'),
		navEl: document.querySelector('.js-nav-main')
	};

	function handleNavClick(event) {
		var target = event.target;
		if((target.classList.contains('js-nav-main')) || (event.keyCode === 27)) {
			NavMain.closeNav(event);
		}
	}

	function setNavHandlers() {
		// var navMainEl =  document.querySelector('.js-navMain');
		// navMainEl.addEventListener('click', handleNavClick, false); // Only do this if navheight != windowheight
		document.addEventListener('keyup', handleNavClick, false);
	}

	function unsetNavHandlers() {
		// var navMainEl =  document.querySelector('.js-navMain');
		// navMainEl.removeEventListener('click', handleNavClick, false); // Only do this if navheight != windowheight
		document.removeEventListener('keyup', handleNavClick, false);
	}

	function openNav(event) {
		if(typeof event !== 'undefined'){
			event.preventDefault();
		}
		navelements.html.classList.add('is-open-main-nav');
		setNavHandlers(true);
	}

	function closeNav(event) {
		if(typeof event !== 'undefined'){
			event.preventDefault();
		}

		navelements.navEl.addEventListener(transitionEnd, function endTransitionNavClose(){
			navelements.html.classList.remove('is-closing-main-nav');
			navelements.html.classList.remove('is-open-main-nav');
			this.removeEventListener(transitionEnd, endTransitionNavClose, false);
		},false);

		navelements.html.classList.add('is-closing-main-nav');

		unsetNavHandlers();
	}

	function init() {
		var navMainShow = document.querySelector('.js-nav-main-show');
		var navMainHide = document.querySelector('.js-nav-main-hide');

		navelements.navEl = document.querySelector('.js-nav-main');

		// Check if nav-main, and nav-main-show DOM navelements exist
		if (typeof(navelements.navEl) !== 'undefined' && navelements.navEl !== null && typeof(navMainShow) !== 'undefined' && navMainShow !== null) {
			// Set the event listeners
			navMainShow.addEventListener('click', openNav, false);
			navMainHide.addEventListener('click', closeNav, false);
		}
	}

	/**
	 * Return public methods
	 */
	return {
		openNav: openNav,
		closeNav: closeNav,
		init: init
	};
})();
var Popup = (function () {

	function init() {
		var popuplinks = document.querySelectorAll('.js-popup');
		for (var i = 0; i < popuplinks.length; i++) {
			if (popuplinks[i] !== null) {
				popuplinks[i].addEventListener('click', Popup.openWindow, false);
			}
		}

	}

	function openWindow(event){
		var url = event.currentTarget.getAttribute('href');
		window.open(url, 'popupwin', 'height=400,width=650,resizable=1,toolbar=0,menubar=0,status=0,location=0,scrollbars=1');
		event.preventDefault();
	}

	/**
	 * Return public methods
	 */
	return {
		openWindow: openWindow,
		init: init
	};
})();
// Executed on DOM ready
domready(function () {

	// Invoke modules
	Alerts.init(push_message);                                                  // Init alerts
	Expand.init();                                                              // Init expand / collapse
	FontObserverHandler.init();                                                 // Init font(face)observer
	NavMain.init();                                                             // Init main navigation
	// Popup.init();                                                               // Init popup

	// Invoke plugins
	// gumshoe.init();                                                             // Init gumshoe (scrollspy)
	smoothScroll.init();                                                        // Init smoothscroll

	// Run svg4everybody polyfill (e.g. for IE11)
	// svg4everybody({
	// 	nosvg: false,                                                           // Shiv <svg> and <use> elements and use image fallbacks
	// 	polyfill: true                                                          // Polyfill <use> elements for external content
	// });

});
