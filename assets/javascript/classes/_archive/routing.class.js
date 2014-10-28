/**
 * Add Routing
 *
 * Some documentation
 */

var routing = {

	/**
	 * Set options used in routing
	 */
	opts: {
		hasPushstate: $('html').hasClass('history')
	},

	/**
	 * Handle the request on a routing match
	 * @param { section }
	 * @param { args } array
	 */
	onSectionMatch: function(section) {
		// TODO: set variable for this route, or something
		var url = '/' + 'blog' + '/' + section;
		routing.handlesectionLoad(url);
	},

	onSectionLeave: function() {
		window.location = document.location.href;
	},

	handlesectionLoad: function(sectionurl) {
		var url = sectionurl;
		var contentbox = $('article[role=main]');
		$.ajax({
			url: url,
			context: contentbox
		})
		.done(function(data) {
			var targetdata = $(data).find('.js-pageTransContent').children();
			routing.handleSectionTransition(targetdata);
		})
		.fail(function() {
			throw('uh oh... fetching of page did not work out. how about a cup of coffee?');
		});
	},

	handleSectionTransition: function(targetdata) {
		$('.js-pageTransTarget').html(targetdata).addClass('activate');
		$('.js-pageTransTarget').on('transitionend', function(){
			$('.js-pageTransContent').html('').removeClass('js-pageTransContent pageTrans__content').addClass('js-pageTransTarget pageTrans__target');
			$(this).removeClass('activate js-pageTransTarget pageTrans__target').addClass('js-pageTransContent pageTrans__content');
			$(this).off('transitionend');
		});
	},

	/**
	 * Initiate the routing
	 */
	init: function() {
		// Don't start routing and handling when pushState (in history API) is not enabled
		if(routing.opts.hasPushstate === false) {
			return;
		}

		// Add routes and matching handlers
		var sectionRoute = crossroads.addRoute('/blog/{article}');
		var indexRoute = crossroads.addRoute('/blog');
		sectionRoute.matched.add(routing.onSectionMatch);
		sectionRoute.switched.add(routing.onSectionLeave);

		// Match on click events
		$('.nav-sub a').on('click', function(){
			var url = $(this).attr('href');
			path = routing.stripDomain(url);
			crossroads.parse(path);
			// set pushstate, because the link is surpressed
			window.history.pushState({page: path}, $(this).text(), path);
			return false;
		});

		window.onpopstate = function() {
			var url = document.location.href;
			path = routing.stripDomain(url);
			if(sectionRoute.match(path) || indexRoute.match(path)) {
				crossroads.parse(path);
			}
		};
	},

	/**
	 * Use RegExp to strip domain from the path
	 */
	stripDomain: function(url) {
		return url.replace(/^.*\/\/[^\/]+/, '');
	}

};

