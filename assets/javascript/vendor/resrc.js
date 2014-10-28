/**
 * resrc.js
 * --------------------------------------------------------
 * Load the Resrc script asynchronously (http://www.resrc.it/docs/javascript)
 */

(function () {
	var d = false;
	var r = document.createElement("script");
	r.src = "//use.resrc.it/0.9";
	r.type = "text/javascript";
	r.async = "true";
	r.onload = r.onreadystatechange = function () {
		var rs = this.readyState;
		if (d || rs && rs != "complete" && rs != "loaded") return;
		d = true;
		try {
			resrc.ready(function () {
				if(typeof custom_resrc === 'undefined') {
					resrc.run();
				}
				else {
					resrc.configure(custom_resrc).run();
				}
			});
		} catch (e) {}
	};
	var s = document.getElementsByTagName("script")[0];
	s.parentNode.insertBefore(r, s);
})();
