module.exports = function(grunt) {

	// Initialize config
	grunt.initConfig({

		// Load package.json
		pkg: require('./package.json'),

		// Project paths
		project: {
			assets: 'assets',
			styles: '<%= project.assets %>/stylesheets',
			styles_scss: '<%= project.styles %>/scss',
			styles_dev: '<%= project.styles %>/dev',
			styles_min: '<%= project.styles %>/min',
			styles_critical: '<%= project.styles %>/critical',
			scripts: '<%= project.assets %>/javascript',
			scripts_dev: '<%= project.scripts %>/dev',
			scripts_min: '<%= project.scripts %>/min',
			scripts_modules: '<%= project.scripts %>/modules',
			scripts_plugins: '<%= project.scripts %>/lib/plugins',
			scripts_polyfills: '<%= project.scripts %>/lib/polyfills',
			scripts_utils: '<%= project.scripts %>/lib/utils',
			design_assets: 'design/assets',
		},

		// Project banner
		tag: {
			banner_basic: '/**\n' +
					' * <%= pkg.description %> — v<%= pkg.version %> — <%= grunt.template.today("yyyy-mm-dd") %>\n' +
					' * <%= pkg.url %>\n' +
					' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.copyright %>\n' +
					' */\n',
			banner_extended: '/**\n' +
					' * <%= pkg.description %>\n' +
					' *\n' +
					' * @authors   <%= pkg.author %>\n' +
					' * @link      <%= pkg.url %>\n' +
					' * @version   <%= pkg.version %>\n' +
					' * @generated <%= grunt.template.today("yyyy-mm-dd:hh:mm") %>\n' +
					' * @copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.copyright %>\n' +
					' * @license   <%= pkg.license %>\n' +
					' */\n'
		},

		// JS files and order
		jsfiles: {
			head: [
				'<%= project.scripts_plugins %>/enhance/enhance.js',
				'<%= project.scripts_plugins %>/modernizr/modernizr.dev.js',
				// '<%= project.scripts_plugins %>/modernizr/modernizr.min.js',    // ALWAYS use custom build modernizr in production!
				'<%= project.scripts %>/head.scripts.js',
			],
			main: {
				plugins: [
					// '<%= project.scripts_plugins %>/debounce/debounce.js',
					'<%= project.scripts_plugins %>/domready/domready.js',      // ALWAYS out-comment. It is used in the `main` and `mobile` scripts files!
					'<%= project.scripts_plugins %>/fontfaceobserver/fontfaceobserver.js', // Out-comment when loading fonts
					// '<%= project.scripts_plugins %>/gumshoe/gumshoe.js',
					'<%= project.scripts_plugins %>/imageset/imageset.js',      // Out-comment when using imageset's lazyload
					// '<%= project.scripts_plugins %>/imageset/ls.bgset.js',      // Out-comment when using imageset's lazyload + background images with a width descriptor, similar to how `srcset` works (e.g. for Safari 10.x)
					// '<%= project.scripts_plugins %>/imageset/ls.parent-fit.js', // Out-comment when using imageset's lazyload + background images; when `bgset` plugin (background images) is used in combination with data-sizes="auto" and `background-size: cover|contain` (e.g. for Edge, IE11 and older, iOS 9, etc.)
					'<%= project.scripts_plugins %>/transitionend/transitionend.js', // Out-comment when using alerts or navmain module!
					'<%= project.scripts_plugins %>/smooth-scroll/smooth-scroll.js',
					// '<%= project.scripts_plugins %>/debounce/throttle.js',
				],
				polyfills: [
					'<%= project.scripts_polyfills %>/classlist.js',            // Adds cross-browser full `element.classList` support (IE11)
					// '<%= project.scripts_polyfills %>/promise.js',
					// '<%= project.scripts_polyfills %>/ls.respimg.js',           // Only partial `respimage` polyfill (see: https://github.com/aFarkas/lazysizes/tree/gh-pages/plugins/respimg); out-comment when not conditionally loading `respimage.min.js` in `head.scripts.js`
					// '<%= project.scripts_polyfills %>/svg4everybody.js',        // Adds external spritemaps support to otherwise svg-capable browsers (e.g. IE11)
				],
				utils: [
					// '<%= project.scripts_utils %>/ajax.util.js',
					// '<%= project.scripts_utils %>/cookie.util.js',              // Out-comment when enhance (and thus enhance.cookie) is not used
					// '<%= project.scripts_utils %>/domparents.util.js',
					'<%= project.scripts_utils %>/extend.util.js',              // Out-comment when using alerts module!
					// '<%= project.scripts_utils %>/isvisible.util.js',
				],
				modules: [
					'<%= project.scripts_modules %>/alerts.module.js',
					'<%= project.scripts_modules %>/expand.module.js',
					'<%= project.scripts_modules %>/fontobserver.module.js',
					'<%= project.scripts_modules %>/navmain.module.js',
					'<%= project.scripts_modules %>/popup.module.js',
				// Main
					'<%= project.scripts %>/main.scripts.js',
				],
			},
			mobile: {
				plugins: [
					// '<%= project.scripts_plugins %>/debounce/debounce.js',
					'<%= project.scripts_plugins %>/domready/domready.js',      // ALWAYS out-comment! It is used in the `main` and `mobile` scripts files!
					'<%= project.scripts_plugins %>/fontfaceobserver/fontfaceobserver.js', // Out-comment when loading fonts
					'<%= project.scripts_plugins %>/imageset/imageset.js',      // Out-comment when using imageset's lazyload
					// '<%= project.scripts_plugins %>/imageset/ls.bgset.js',      // Out-comment when using imageset's lazyload + background images with a width descriptor, similar to how `srcset` works (e.g. for Safari 10.x)
					// '<%= project.scripts_plugins %>/imageset/ls.parent-fit.js', // Out-comment when using imageset's lazyload + background images; when `bgset` plugin (background images) is used in combination with data-sizes="auto" and `background-size: cover|contain` (e.g. for Edge, IE11 and older, iOS 9, etc.)
					'<%= project.scripts_plugins %>/transitionend/transitionend.js', // Out-comment when using alerts or navmain module!
					'<%= project.scripts_plugins %>/smooth-scroll/smooth-scroll.js',
					// '<%= project.scripts_plugins %>/debounce/throttle.js',
				],
				polyfills: [
					'<%= project.scripts_polyfills %>/classlist.js',            // Adds cross-browser full `element.classList` support (IE11)
					// '<%= project.scripts_polyfills %>/promise.js',
					// '<%= project.scripts_polyfills %>/ls.respimg.js',           // Only partial `respimage` polyfill (see: https://github.com/aFarkas/lazysizes/tree/gh-pages/plugins/respimg); out-comment when not conditionally loading `respimage.min.js` in `head.scripts.js`
					// '<%= project.scripts_polyfills %>/svg4everybody.js',        // Adds external spritemaps support to otherwise svg-capable browsers (e.g. IE11)
				],
				utils: [
					// '<%= project.scripts_utils %>/ajax.util.js',
					// '<%= project.scripts_utils %>/cookie.util.js',              // Out-comment when enhance (and thus enhance.cookie) is not used
					// '<%= project.scripts_utils %>/domparents.util.js',
					'<%= project.scripts_utils %>/extend.util.js',              // Out-comment when using alerts module!
					// '<%= project.scripts_utils %>/isvisible.util.js',
				],
				modules: [
					'<%= project.scripts_modules %>/alerts.module.js',
					'<%= project.scripts_modules %>/expand.module.js',
					'<%= project.scripts_modules %>/fontobserver.module.js',
					'<%= project.scripts_modules %>/navmain.module.js',
				// Main
					'<%= project.scripts %>/mobile.scripts.js',
				],
			},
		},
	});

	// Load per-task config from separate files
	grunt.loadTasks('grunt/config');

	// Register alias tasks from separate files
	grunt.loadTasks('grunt/tasks');

	// Register default task
	grunt.registerTask('default', ['develop']);

};
