/**
 * Altair — A Sass- and Grunt-based development front-end starter kit, running on file-based Kirby CMS
 *
 * @authors   Jonathan van Wunnik <jonathan@studiodumbar.com>, Marijn Tijhuis <marijn@studiodumbar.com>
 * @link      http://altair.studiodumbar.info
 * @version   0.2.26
 * @generated 2015-02-20:12:02
 * @copyright (c) 2015 Studio Dumbar
 * @license   http://www.opensource.org/licenses/mit-license.php MIT License
 */
function whichTransitionEvent(){var t,el=document.createElement("fakeelement"),transitions={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in transitions)if(void 0!==el.style[t])return transitions[t]}window.Modernizr=function(a,b,c){function C(a){j.cssText=a}function D(a,b){return C(n.join(a+";")+(b||""))}function E(a,b){return typeof a===b}function F(a,b){return!!~(""+a).indexOf(b)}function G(a,b){for(var d in a){var e=a[d];if(!F(e,"-")&&j[e]!==c)return"pfx"==b?e:!0}return!1}function H(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:E(f,"function")?f.bind(d||b):f}return!1}function I(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return E(b,"string")||E(b,"undefined")?G(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),H(e,b,c))}function J(){e.input=function(c){for(var d=0,e=c.length;e>d;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var e,f,h,d=0,i=a.length;i>d;d++)k.setAttribute("type",f=a[d]),e="text"!==k.type,e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&"textfield"!==h.getComputedStyle(k,null).WebkitAppearance&&0!==k.offsetHeight,g.removeChild(k)):/^(search|tel)$/.test(f)||(e=/^(url|email)$/.test(f)?k.checkValidity&&k.checkValidity()===!1:k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var x,B,d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))for(;d--;)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=E(e[d],"function"),E(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),A={}.hasOwnProperty;B=E(A,"undefined")||E(A.call,"undefined")?function(a,b){return b in a&&E(a.constructor.prototype[b],"undefined")}:function(a,b){return A.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if("function"!=typeof c)throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return I("flexWrap")},s.flexboxlegacy=function(){return I("boxDirection")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!E(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=9===a.offsetTop}),c},s.geolocation=function(){return"geolocation"in navigator},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!I("indexedDB",a)},s.hashchange=function(){return z("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return C("background-color:rgba(150,255,150,.5)"),F(j.backgroundColor,"rgba")},s.hsla=function(){return C("background-color:hsla(120,40%,100%,.5)"),F(j.backgroundColor,"rgba")||F(j.backgroundColor,"hsla")},s.multiplebgs=function(){return C("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return I("backgroundSize")},s.borderimage=function(){return I("borderImage")},s.borderradius=function(){return I("borderRadius")},s.boxshadow=function(){return I("boxShadow")},s.textshadow=function(){return""===b.createElement("div").style.textShadow},s.opacity=function(){return D("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return I("animationName")},s.csscolumns=function(){return I("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return C((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),F(j.backgroundImage,"gradient")},s.cssreflections=function(){return I("boxReflect")},s.csstransforms=function(){return!!I("transform")},s.csstransforms3d=function(){var a=!!I("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b){a=9===b.offsetLeft&&3===b.offsetHeight}),a},s.csstransitions=function(){return I("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&0===g.indexOf(d.split(" ")[0])}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{(c=!!a.canPlayType)&&(c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{(c=!!a.canPlayType)&&(c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var K in s)B(s,K)&&(x=K.toLowerCase(),e[x]=s[K](),v.push((e[x]?"":"no-")+x));return e.input||J(),e.addTest=function(a,b){if("object"==typeof a)for(var d in a)B(a,d)&&e.addTest(d,a[d]);else{if(a=a.toLowerCase(),e[a]!==c)return e;b="function"==typeof b?b():b,"undefined"!=typeof f&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},C(""),i=k=null,e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.hasEvent=z,e.testProp=function(a){return G([a])},e.testAllProps=I,e.testStyles=y,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return"string"==typeof a?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){if(c||(c=b),k)return c.createElement(a);d||(d=n(c));var g;return g=d.cache[a]?d.cache[a].cloneNode():f.test(a)?(d.cache[a]=d.createElem(a)).cloneNode():d.createElem(a),!g.canHaveChildren||e.test(a)||g.tagUrn?g:d.frag.appendChild(g)}function p(a,c){if(a||(a=b),k)return a.createDocumentFragment();c=c||n(a);for(var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;g>e;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}function w(a){for(var b,c=a.getElementsByTagName("*"),d=c.length,e=RegExp("^(?:"+m().join("|")+")$","i"),f=[];d--;)b=c[d],e.test(b.nodeName)&&f.push(b.applyElement(x(b)));return f}function x(a){for(var b,c=a.attributes,d=c.length,e=a.ownerDocument.createElement(u+":"+a.nodeName);d--;)b=c[d],b.specified&&e.setAttribute(b.nodeName,b.nodeValue);return e.style.cssText=a.style.cssText,e}function y(a){for(var b,c=a.split("{"),d=c.length,e=RegExp("(^|[\\s,>+~])("+m().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),f="$1"+u+"\\:$2";d--;)b=c[d]=c[d].split("}"),b[b.length-1]=b[b.length-1].replace(e,f),c[d]=b.join("}");return c.join("{")}function z(a){for(var b=a.length;b--;)a[b].removeNode()}function A(a){function g(){clearTimeout(d._removeSheetTimer),b&&b.removeNode(!0),b=null}var b,c,d=n(a),e=a.namespaces,f=a.parentWindow;return!v||a.printShived?a:("undefined"==typeof e[u]&&e.add(u),f.attachEvent("onbeforeprint",function(){g();for(var d,e,f,h=a.styleSheets,i=[],j=h.length,k=Array(j);j--;)k[j]=h[j];for(;f=k.pop();)if(!f.disabled&&t.test(f.media)){try{d=f.imports,e=d.length}catch(m){e=0}for(j=0;e>j;j++)k.push(d[j]);try{i.push(f.cssText)}catch(m){}}i=y(i.reverse().join("")),c=w(a),b=l(a,i)}),f.attachEvent("onafterprint",function(){z(c),clearTimeout(d._removeSheetTimer),d._removeSheetTimer=setTimeout(g,500)}),a.printShived=!0,a)}var g,k,c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",i=0,j={};!function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=1==a.childNodes.length||function(){b.createElement("a");var a=b.createDocumentFragment();return"undefined"==typeof a.cloneNode||"undefined"==typeof a.createDocumentFragment||"undefined"==typeof a.createElement}()}catch(c){g=!0,k=!0}}();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b);var t=/^$|\b(?:all|print)\b/,u="html5shiv",v=!k&&function(){var c=b.documentElement;return"undefined"!=typeof b.namespaces&&"undefined"!=typeof b.parentWindow&&"undefined"!=typeof c.applyElement&&"undefined"!=typeof c.removeNode&&"undefined"!=typeof a.attachEvent}();s.type+=" print",s.shivPrint=A,A(b)}(this,document),!function(a){"use strict";a.options=a.options||{};var b={server:"app.resrc.it",resrcClass:"resrc",resrcOnResize:!0,resrcOnResizeDown:!1,resrcOnPinch:!1,imageQuality:85,pixelRounding:10,ssl:!1},c=!1,d=200,e=0;Array.prototype.indexOf||(Array.prototype.indexOf=function(a){for(var b=0;b<this.length;b++)if(this[b]===a)return b;return-1}),String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});var f=function(a,b){if(a&&b)for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a},g=f(b,a.options),h=function(b){return f(g,b),a},i=function(a){if("undefined"!=typeof document.getElementsByClassName)return document.getElementsByClassName(a);for(var b=[],c=new RegExp("(^|\\s)"+a+"(\\s|$)"),d=document.getElementsByTagName("*"),e=0,f=d.length;f>e;e++)d[e].className.match(c)&&b.push(d[e]);return b},j=function(a){var b={key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/};a=a.replace(/@/g,"%40");for(var c=b.parser.exec(a),d={},e=14;e--;)d[b.key[e]]=c[e]||"";d[b.q.name]={},d[b.key[12]].replace(b.q.parser,function(a,c,e){c&&(d[b.q.name][c]=e)});var f=d.file.split(".");return d.filename=f[0],d.ext=f.length>1?f[f.length-1]:"",d},k=function(a){return a===!0?"https://":"http://"},l=function(a){var b,c,d,e,f=j(a);return b=f.url?f.path+"?"+f.query:f.path,c=/(https?):|(\/\/)/,d=b.search(c),e=b.substring(d),-1===e.indexOf("://")&&(e=e.replace("//",k(g.ssl))),"/"===e.charAt(0)&&(e=e.replace("/",k(g.ssl))),e},m=function(a){var b,c,d,e,f;return b=a,c="//",e=/\/(https?):/,d=b.lastIndexOf(c),f=b.slice(0,d).replace(e,"")},n=function(a,b){if(a.match(/\/\//g).length>1){var c=j(a);return c.authority!==b?a.replace(c.protocol+"://"+c.authority,k(g.ssl)+b):a}return k(g.ssl)+b+"/"+a},o=function(a){var b=/\((.*?)\)/g;return b.test(a)},p=function(a){for(var b,c=[],d=/\((.*?)\)/g;null!==(b=d.exec(a));)c.push(b[1].trim());return c.toString()},q=function(a,b){return Math.ceil(a/b)*b},r=function(){return/iPhone|iPod|iPad/i.test(navigator.userAgent)},s=function(a){return!isNaN(parseFloat(a))&&isFinite(a)},t=function(a,b){return o(b)?a+"="+p(b):a+"="+b},u=function(a,b){for(var c=a.length;c--;)if(""===b){if(""===a[c])return c}else{var d=new RegExp(b),e=d.exec(a[c]);if(null!==e)return c}return-1},v=function(){var a=Math.round(screen.width/window.innerWidth*10)/10;return 1>=a?1:a},w=function(a){var b=a.getAttribute("data-dpi"),c=window.devicePixelRatio?window.devicePixelRatio:1,d=s(b)===!0?parseFloat(b):c;return d%1!==0&&(d=d.toFixed(1)),d},x=function(a){return a.getAttribute("data-server")||g.server},y=function(a){return a.tagName.toLowerCase()},z=function(){return document.documentElement.clientWidth||document.body&&document.body.clientWidth||1024},A=function(){return document.documentElement.clientHeight||document.body&&document.body.clientHeight||768},B=function(a){return a.getAttribute("data-src")||a.getAttribute("src")},C=function(a){return a.split("=")[0]},D=function(a){return a.split("=")[1]},E=function(a){var b={};if(b.width=a.offsetWidth,b.height=a.offsetHeight,null===a.parentNode)return b.width=z(),b.height=A(),b;if(0!==b.width||0!==b.height)return a.alt&&!a.resrc?(a.resrc=!0,E(a.parentNode)):b;var c,d,e={},f={position:"absolute",visibility:"hidden",display:"block"};for(d in f)f.hasOwnProperty(d)&&(e[d]=a.style[d],a.style[d]=f[d]);c=b;for(d in f)f.hasOwnProperty(d)&&(a.style[d]=e[d]);return 0===c.width||0===c.height?E(a.parentNode):c},F=function(a,b){var c;return function(){var d=this,e=arguments,f=function(){c=null,a.apply(d,e)};clearTimeout(c),c=setTimeout(f,b)}},G=function(){N(this)},H=function(){e!==z()&&K()},I=function(a){a.addEventListener&&!a.eventListenerAdded&&(a.addEventListener("gestureend",G,!1),a.eventListenerAdded=!0)},J=function(){window.addEventListener?window.addEventListener("resize",H,!1):window.attachEvent&&window.attachEvent("onresize",H),c=!0},K=F(function(){O(),e=z()},d),L=function(a){function b(a){for(n=1;a=d.shift();)a()}var c,d=[],e=!1,f=document,g=f.documentElement,h=g.doScroll,i="DOMContentLoaded",j="addEventListener",k="onreadystatechange",l="readyState",m=h?/^loaded|^c/:/^loaded|c/,n=m.test(f[l]);return f[j]&&f[j](i,c=function(){f.removeEventListener(i,c,e),b()},e),h&&f.attachEvent(k,c=function(){/^c/.test(f[l])&&(f.detachEvent(k,c),b())}),a=h?function(b){self!==top?n?b():d.push(b):function(){try{g.doScroll("left")}catch(c){return setTimeout(function(){a(b)},50)}b()}()}:function(a){n?a():d.push(a)}}(),M=function(a){var b,c=[],d=w(a),e=g.pixelRounding,f=r()?v():1,h=E(a),i=q(h.width*f,e),o=q(h.height*f,e),p=x(a),s=n(B(a),p),y=m(s),z=j(y).directory.toLowerCase().substring(1),A=i>=o==1?t("s","w"+i+",pd"+d):t("s","h"+o+",pd"+d),F=l(s);if(z){c=z.split("/");for(var G=c.length;G--;)c[G]=t(C(c[G]),D(c[G]));var H=u(c,"o=.*"),I=u(c,"c=.*"),J=u(c,"s=.*");-1!==H?c.splice(H,1,c[H]):c.push(t("o",g.imageQuality)),-1!==J?-1!==I?c.splice(-1,0,A):c.splice(J,1,A):c.splice(-1,0,A)}else c.push(A),c.push(t("o",g.imageQuality));return z=c.join("/"),b=k(g.ssl)+p+"/"+z+"/"+F,{resrcImgPath:b,fallbackImgPath:F,width:i,height:o,params:z,server:p}},N=function(a){var b=M(a),c=b.resrcImgPath,d=b.fallbackImgPath,e=b.width;if(a.lastWidth=a.lastWidth||0,!(g.resrcOnResizeDown===!1&&a.lastWidth>=e)){if("img"===y(a))a.src=c,a.onerror=function(){this.src=d};else{var f=new Image;f.src=c,a.style.backgroundImage="url("+c+")",f.onerror=function(){a.style.backgroundImage="url("+d+")"}}a.lastWidth=e}},O=function(a){var b;if(null!==a){b=a?a.length?a:[a]:i(g.resrcClass);for(var d=0;d<b.length;d++){if(null===b[d])return;g.resrcOnPinch&&I(b[d]),N(b[d])}g.resrcOnResize&&!c&&J()}};a.ready=L,a.run=O,a.getResrcImageObject=M,a.getElementsByClassName=i,a.options=g,a.extend=f,a.configure=h}(window.resrc=window.resrc||{}),"document"in self&&!("classList"in document.createElement("_"))&&!function(view){"use strict";if("Element"in view){var classListProp="classList",protoProp="prototype",elemCtrProto=view.Element[protoProp],objCtr=Object,strTrim=String[protoProp].trim||function(){return this.replace(/^\s+|\s+$/g,"")},arrIndexOf=Array[protoProp].indexOf||function(item){for(var i=0,len=this.length;len>i;i++)if(i in this&&this[i]===item)return i;return-1},DOMEx=function(type,message){this.name=type,this.code=DOMException[type],this.message=message},checkTokenAndGetIndex=function(classList,token){if(""===token)throw new DOMEx("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(token))throw new DOMEx("INVALID_CHARACTER_ERR","String contains an invalid character");return arrIndexOf.call(classList,token)},ClassList=function(elem){for(var trimmedClasses=strTrim.call(elem.getAttribute("class")||""),classes=trimmedClasses?trimmedClasses.split(/\s+/):[],i=0,len=classes.length;len>i;i++)this.push(classes[i]);this._updateClassName=function(){elem.setAttribute("class",this.toString())}},classListProto=ClassList[protoProp]=[],classListGetter=function(){return new ClassList(this)};if(DOMEx[protoProp]=Error[protoProp],classListProto.item=function(i){return this[i]||null},classListProto.contains=function(token){return token+="",-1!==checkTokenAndGetIndex(this,token)},classListProto.add=function(){var token,tokens=arguments,i=0,l=tokens.length,updated=!1;do token=tokens[i]+"",-1===checkTokenAndGetIndex(this,token)&&(this.push(token),updated=!0);while(++i<l);updated&&this._updateClassName()},classListProto.remove=function(){var token,tokens=arguments,i=0,l=tokens.length,updated=!1;do{token=tokens[i]+"";var index=checkTokenAndGetIndex(this,token);-1!==index&&(this.splice(index,1),updated=!0)}while(++i<l);updated&&this._updateClassName()},classListProto.toggle=function(token,forse){token+="";var result=this.contains(token),method=result?forse!==!0&&"remove":forse!==!1&&"add";return method&&this[method](token),!result},classListProto.toString=function(){return this.join(" ")},objCtr.defineProperty){var classListPropDesc={get:classListGetter,enumerable:!0,configurable:!0};try{objCtr.defineProperty(elemCtrProto,classListProp,classListPropDesc)}catch(ex){-2146823252===ex.number&&(classListPropDesc.enumerable=!1,objCtr.defineProperty(elemCtrProto,classListProp,classListPropDesc))}}else objCtr[protoProp].__defineGetter__&&elemCtrProto.__defineGetter__(classListProp,classListGetter)}}(self),function(){for(var lastTime=0,vendors=["webkit","moz"],x=0;x<vendors.length&&!window.requestAnimationFrame;++x)window.requestAnimationFrame=window[vendors[x]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[vendors[x]+"CancelAnimationFrame"]||window[vendors[x]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(callback){var currTime=(new Date).getTime(),timeToCall=Math.max(0,16-(currTime-lastTime)),id=window.setTimeout(function(){callback(currTime+timeToCall)},timeToCall);return lastTime=currTime+timeToCall,id}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(id){clearTimeout(id)})}(),!function(name,definition){"undefined"!=typeof module?module.exports=definition():"function"==typeof define&&"object"==typeof define.amd?define(definition):this[name]=definition()}("domready",function(){var listener,fns=[],doc=document,hack=doc.documentElement.doScroll,domContentLoaded="DOMContentLoaded",loaded=(hack?/^loaded|^c/:/^loaded|^i|^c/).test(doc.readyState);return loaded||doc.addEventListener(domContentLoaded,listener=function(){for(doc.removeEventListener(domContentLoaded,listener),loaded=1;listener=fns.shift();)listener()}),function(fn){loaded?fn():fns.push(fn)}}),function(root,factory){"function"==typeof define&&define.amd?define(function(){return factory(root)}):"object"==typeof exports?module.exports=factory:root.echo=factory(root)}(this,function(root){"use strict";var offset,poll,delay,useDebounce,unload,selector,echo={},callback=function(){},inView=function(element,view){var box=element.getBoundingClientRect();return box.right>=view.l&&box.bottom>=view.t&&box.left<=view.r&&box.top<=view.b},debounceOrThrottle=function(){(useDebounce||!poll)&&(clearTimeout(poll),poll=setTimeout(function(){echo.render(),poll=null},delay))};return echo.init=function(opts){opts=opts||{};var offsetAll=opts.offset||0,offsetVertical=opts.offsetVertical||offsetAll,offsetHorizontal=opts.offsetHorizontal||offsetAll,optionToInt=function(opt,fallback){return parseInt(opt||fallback,10)};offset={t:optionToInt(opts.offsetTop,offsetVertical),b:optionToInt(opts.offsetBottom,offsetVertical),l:optionToInt(opts.offsetLeft,offsetHorizontal),r:optionToInt(opts.offsetRight,offsetHorizontal)},delay=optionToInt(opts.throttle,250),useDebounce=opts.debounce!==!1,unload=!!opts.unload,callback=opts.callback||callback,selector=opts.selector||"data-src",echo.render(),document.addEventListener?(root.addEventListener("scroll",debounceOrThrottle,!1),root.addEventListener("load",debounceOrThrottle,!1)):(root.attachEvent("onscroll",debounceOrThrottle),root.attachEvent("onload",debounceOrThrottle))},echo.render=function(){for(var src,elem,nodes=document.querySelectorAll("img["+selector+"], [data-src-background]"),length=nodes.length,view={l:0-offset.l,t:0-offset.t,b:(root.innerHeight||document.documentElement.clientHeight)+offset.b,r:(root.innerWidth||document.documentElement.clientWidth)+offset.r},i=0;length>i;i++)elem=nodes[i],inView(elem,view)?(unload&&elem.setAttribute(selector+"-placeholder",elem.src),null!==elem.getAttribute("data-src-background")?elem.style.backgroundImage="url("+elem.getAttribute("data-src-background")+")":elem.classList.contains("resrc-lazy")===!1&&(elem.src=elem.getAttribute("data-src")),unload||elem.classList.contains("resrc-lazy")===!1&&(elem.removeAttribute("data-src"),elem.removeAttribute("data-src-background")),callback(elem,"load")):unload&&(src=elem.getAttribute(selector+"-placeholder"))&&(null!==elem.getAttribute("data-src-background")?elem.style.backgroundImage="url("+src+")":elem.src=src,elem.classList.contains("resrc-lazy")===!1&&elem.removeAttribute(selector+"-placeholder"),callback(elem,"unload"));length||echo.detach()},echo.detach=function(){document.removeEventListener?root.removeEventListener("scroll",debounceOrThrottle):root.detachEvent("onscroll",debounceOrThrottle),clearTimeout(poll)},echo});var transitionEnd=whichTransitionEvent();window.smoothScroll=function(window,document){"use strict";if("querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach){for(var scrollToggles=document.querySelectorAll("[data-scroll]"),runSmoothScroll=function(anchor,duration,easing,url){var percentage,position,startLocation=window.pageYOffset,scrollHeader=document.querySelector("[data-scroll-header]"),headerHeight=null===scrollHeader?0:scrollHeader.offsetHeight,timeLapsed=0,easingPattern=function(type,time){return"easeInQuad"==type?time*time:"easeOutQuad"==type?time*(2-time):"easeInOutQuad"==type?.5>time?2*time*time:-1+(4-2*time)*time:"easeInCubic"==type?time*time*time:"easeOutCubic"==type?--time*time*time+1:"easeInOutCubic"==type?.5>time?4*time*time*time:(time-1)*(2*time-2)*(2*time-2)+1:"easeInQuart"==type?time*time*time*time:"easeOutQuart"==type?1- --time*time*time*time:"easeInOutQuart"==type?.5>time?8*time*time*time*time:1-8*--time*time*time*time:"easeInQuint"==type?time*time*time*time*time:"easeOutQuint"==type?1+--time*time*time*time*time:"easeInOutQuint"==type?.5>time?16*time*time*time*time*time:1+16*--time*time*time*time*time:time},updateURL=function(url,anchor){"true"===url&&history.pushState&&history.pushState({pos:anchor.id},"","#"+anchor.id)},getEndLocation=function(anchor){var location=0;if(anchor.offsetParent)do location+=anchor.offsetTop,anchor=anchor.offsetParent;while(anchor);return location-=headerHeight,location>=0?location:0},endLocation=getEndLocation(anchor),distance=endLocation-startLocation,stopAnimation=function(){var currentLocation=window.pageYOffset;(currentLocation==endLocation||window.innerHeight+currentLocation>=document.body.scrollHeight)&&clearInterval(runAnimation)},animateScroll=function(){timeLapsed+=16,percentage=timeLapsed/duration,percentage=percentage>1?1:percentage,position=startLocation+distance*easingPattern(easing,percentage),window.scrollTo(0,position),stopAnimation()};updateURL(url,anchor);var runAnimation=setInterval(animateScroll,16)},handleToggleClick=function(event){var dataID=this.getAttribute("href"),dataTarget=document.querySelector(dataID),dataSpeed=this.getAttribute("data-speed"),dataEasing=this.getAttribute("data-easing"),dataURL=this.getAttribute("data-url");event.preventDefault(),dataTarget&&runSmoothScroll(dataTarget,dataSpeed||500,dataEasing||"easeInOutCubic",dataURL||"false")},i=scrollToggles.length;i--;){var toggle=scrollToggles[i];toggle.addEventListener("click",handleToggleClick,!1)}window.onpopstate=function(event){null===event.state&&""===window.location.hash&&window.scrollTo(0,0)}}}(window,document);var extend={object:function(out){out=out||{};for(var i=1;i<arguments.length;i++)if(arguments[i])for(var key in arguments[i])arguments[i].hasOwnProperty(key)&&(out[key]=arguments[i][key]);return out}},alerts={settings:{dismiss:"Dismiss"},options:{type:"bar"},init:function(push_message){if("undefined"!=typeof LANG_MESSAGE_DISMISS&&(this.settings.dismiss=LANG_MESSAGE_DISMISS),"undefined"!=typeof push_message)for(var i=0;i<push_message.length;i++)alerts.addMessage({status:push_message[i].status,content:push_message[i].text,timeout:push_message[i].timeout,type:push_message[i].type});var dismissbutton=document.querySelectorAll("[data-dismiss]");null!==dismissbutton&&Array.prototype.forEach.call(dismissbutton,function(el){el.addEventListener("click",alerts.hideNotification,!1)})},addMessage:function(options){var message_element;extend.object(alerts.options,options),message_element=document.createElement("div"),"bar"===alerts.options.type&&(message_element.className="Alert Alert--bar Alert--"+alerts.options.status+" js-alert",message_element.setAttribute("data-element-type","bar"),message_element.innerHTML='<div class="Alert-message">'+alerts.options.content+'</div><button type="button" class="Alert-close" data-dismiss="Alert" aria-hidden="true" role="presentation">&times;</button>',document.body.insertBefore(message_element,document.body.firstChild)),"modal"===alerts.options.type&&(backdrop_element=document.createElement("div"),backdrop_element.className="Backdrop js-backdrop",message_element.className="Alert Alert--modal Alert--"+alerts.options.status+" js-alert",message_element.setAttribute("data-element-type","modal"),message_element.innerHTML='<div class="Alert-message">'+alerts.options.content+'</div><button class="Button Button--primary" data-dismiss="Alert">'+this.settings.dismiss+"</button>",document.body.appendChild(backdrop_element),document.body.appendChild(message_element)),this.showNotification(message_element),"undefined"!=typeof alerts.options.timeout&&0!==alerts.options.timeout&&setTimeout(function(){alerts.onTimeoutNotification(message_element)},alerts.options.timeout)},showNotification:function(element){var notification=element;if(setTimeout(function(){notification.classList.add("is-visible")},10),"modal"===alerts.options.type){var backdrops=document.querySelectorAll(".Backdrop");Array.prototype.forEach.call(backdrops,function(el){el.classList.add("is-visible")})}},hideNotification:function(event){var notification=event.target.parentNode;if(notification.classList.remove("is-visible"),notification.classList.remove("is-hidden"),"modal"===alerts.options.type){var backdrop=document.querySelector(".Backdrop");backdrop.classList.remove("is-visible"),backdrop.classList.add("is-hiding")}var notificationHasTransformSet=null,notificationHasWebkitTransformSet=null;return window.getComputedStyle&&(notificationHasTransformSet=window.getComputedStyle(notification,null).getPropertyValue("transform"),notificationHasWebkitTransformSet=window.getComputedStyle(notification,null).getPropertyValue("-webkit-transform")),Modernizr.csstransitions&&"none"!==notificationHasTransformSet&&"none"!==notificationHasWebkitTransformSet?notification.addEventListener(transitionEnd,function(){alerts.removeNotificationElements(this)},!1):alerts.removeNotificationElements(notification),!1},removeNotificationElements:function(element){var elementtype=element.getAttribute("data-element-type");if(element.parentNode.removeChild(element),"modal"===elementtype){var backdrop=document.querySelector(".Backdrop");backdrop.parentNode.removeChild(backdrop)}},onTimeoutNotification:function(element){var dismiss=element.querySelector("[data-dismiss]");clickevent=document.createEvent("HTMLEvents"),clickevent.initEvent("click",!0,!1),dismiss.dispatchEvent(clickevent)}},cookie={set:function(name,value,days){var expires;if(days){var date=new Date;date.setTime(date.getTime()+24*days*60*60*1e3),expires="; expires="+date.toGMTString()}else expires="";document.cookie=name+"="+value+expires+"; path=/"},erase:function(name){cookie.set(name,"",-1)},get:function(name){for(var nameEQ=name+"=",ca=document.cookie.split(";"),i=0;i<ca.length;i++){for(var c=ca[i];" "===c.charAt(0);)c=c.substring(1,c.length);
if(0===c.indexOf(nameEQ))return c.substring(nameEQ.length,c.length)}return null}},domparents={findAncestorByClass:function(el,cls){for(;(el=el.parentElement)&&!el.classList.contains(cls););return el},findAncestorByElement:function(el,elname){for(;el=el.parentElement;)if(el.nodeName.toLowerCase()==elname.toLowerCase())return el;throw"no ancestor found with that element type. Try checking your DOM tree!"}},expand={init:function(){var expanders=document.querySelectorAll(".js-expandtarget");for(i=0;i<expanders.length;i++){var expanderid=expanders[i].getAttribute("id");cookie.get(expanderid)?(expanders[i].parentNode.classList.add("is-open"),expanders[i].parentNode.querySelector(".js-expandbutton").classList.add("is-active")):expanders[i].parentNode.classList.add("is-closed")}var expandbuttons=document.querySelectorAll(".js-expandbutton");for(i=0;i<expandbuttons.length;i++)expandbuttons[i].addEventListener("click",expand.toggle,!1)},toggle:function(event){event.preventDefault();var button=event.target,targetid=button.getAttribute("href"),cookieid=targetid.substring(1),target=document.querySelector(targetid),expandparent=target.parentNode;expandparent.classList.contains("is-closed")?(button.classList.add("is-active"),expandparent.classList.remove("is-closed"),expandparent.classList.add("is-open"),cookie.set(cookieid,"open")):(button.classList.remove("is-active"),expandparent.classList.remove("is-open"),expandparent.classList.add("is-closed"),cookie.erase(cookieid))}},lazyload={init:function(){lazyload.bindResrcToWindow();for(var lazyimages=document.querySelectorAll("img[data-src]"),i=0;i<lazyimages.length;i++)lazyimages[i].classList.contains("js-resrcNotLazy")===!0?lazyload.runResrcNonLazy(lazyimages[i]):lazyload.elementLoading(lazyimages[i]);echo.init({offset:88,throttle:250,debounce:!1,unload:!1,selector:"data-src",callback:function(element){element.classList.contains("js-resrcIsLazy")===!0&&"undefined"!=typeof window.resrc.run&&window.resrc.run(element),lazyload.elementLoaded(element)}})},bindResrcToWindow:function(){"undefined"==typeof resrc&&(resrc=!1),window.resrc=resrc},runResrcNonLazy:function(element){"undefined"!=typeof window.resrc.run&&(path=window.resrc.getResrcImageObject(element).resrcImgPath,element.setAttribute("src",path),element.removeAttribute("data-src"))},elementLoading:function(element){var parent=domparents.findAncestorByClass(element,"FigureImage");parent.classList.add("is-loading")},elementLoaded:function(element){var parent=domparents.findAncestorByClass(element,"FigureImage");parent.classList.remove("is-loading"),parent.classList.add("is-loaded")},initDeferVideos:function(){for(var deferredvideos=document.querySelectorAll("iframe[data-deferred-src]"),i=0;i<deferredvideos.length;i++)lazyload.deferVideo(deferredvideos[i])},deferVideo:function(element){var src=element.getAttribute("data-deferred-src");element.setAttribute("src",src)}},navMain={elements:{banner:document.querySelector(".Banner"),html:document.querySelector("html"),navEl:document.querySelector(".js-navMain")},init:function(){var navMainShow=document.querySelector(".js-navMainShow"),navMainHide=document.querySelector(".js-navMainHide");navMain.elements.navEl=document.querySelector(".js-navMain"),"undefined"!=typeof navMain.elements.navEl&&null!==navMain.elements.navEl&&(navMainShow.addEventListener("click",navMain.open,!1),navMainHide.addEventListener("click",navMain.close,!1))},setNavHandlers:function(){document.addEventListener("keyup",navMain.handleNavClick,!1)},unsetNavHandlers:function(){document.removeEventListener("keyup",navMain.handleNavClick,!1)},handleNavClick:function(event){var target=event.target;(target.classList.contains("js-navMain")||27===event.keyCode)&&navMain.close(event)},open:function(event){event.preventDefault(),navMain.elements.html.classList.add("is-openMainNav"),navMain.setNavHandlers()},close:function(event){event.preventDefault(),navMain.elements.navEl.addEventListener(transitionEnd,function endTransitionNavClose(){navMain.elements.html.classList.remove("is-closingMainNav"),navMain.elements.html.classList.remove("is-openMainNav"),this.removeEventListener(transitionEnd,endTransitionNavClose,!1)},!1),navMain.elements.html.classList.add("is-closingMainNav"),navMain.unsetNavHandlers()}};domready(function(){"undefined"==typeof custom_resrc?resrc.run():resrc.configure(custom_resrc).run(),alerts.init(push_message),expand.init(),navMain.init(),lazyload.init()});