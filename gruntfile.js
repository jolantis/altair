module.exports = function(grunt) {

	// Initialize config
	grunt.initConfig({

		// Load package.json
		pkg: require('./package.json'),

		// Project paths
		project: {
			assets: 'assets',
			design_assets: 'design/assets',
			styles: '<%= project.assets %>/stylesheets',
			styles_scss: '<%= project.styles %>/scss',
			styles_dev: '<%= project.styles %>/dev',
			styles_min: '<%= project.styles %>/min',
			styles_critical: '<%= project.styles %>/critical',
			scripts: '<%= project.assets %>/javascript',
			scripts_dev: '<%= project.scripts %>/dev',
			scripts_min: '<%= project.scripts %>/min',
			scripts_classes: '<%= project.scripts %>/classes',
			scripts_plugins: '<%= project.scripts %>/plugins',
			scripts_polyfills: '<%= project.scripts %>/polyfills',
			scripts_utils: '<%= project.scripts %>/utils',
			scripts_vendor: '<%= project.scripts %>/vendor',
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
				'<%= project.scripts_vendor %>/enhance.js',
				'<%= project.scripts_vendor %>/modernizr.dev.js',
				// '<%= project.scripts_vendor %>/modernizr.min.js',               // ALWAYS use custom build modernizr in production!
				'<%= project.scripts %>/head.scripts.js',
			],
			main: {
				polyfills: [
					'<%= project.scripts_polyfills %>/classlist.js',
					'<%= project.scripts_polyfills %>/domready.js',
				],
				plugins: [
					// '<%= project.scripts_plugins %>/domdelegate.js',
					'<%= project.scripts_vendor %>/fontfaceobserver.js',
					'<%= project.scripts_vendor %>/lazysizes.min.js',           // Out-comment when using lazyload
					// '<%= project.scripts_plugins %>/ls.respimg.js',             // Out-comment when using lazyload, and need to polyfill responsive images
					'<%= project.scripts_plugins %>/ls.bgset.js',               // Out-comment when using lazyload + multiple background images with a width descriptor, similar to how img[srcset] works
					'<%= project.scripts_plugins %>/ls.parent-fit.js',          // Out-comment when using lazyload + bgset, to calculate the right sizes for object-fit: contain|cover image elements
					// '<%= project.scripts_plugins %>/ls.unload.js',              // Out-comment when using lazyload, and want to unload not in view images to improve memory consumption and orientationchange/resize performance
					// '<%= project.scripts_plugins %>/ls.unveilhooks.js',         // Out-comment when using lazyload + unveil/lazyload scripts/widgets, background images, styles and video/audio elements
					'<%= project.scripts_plugins %>/ls.print.js',               // Out-comment when there's a need to be able to print lazyloaded images
					'<%= project.scripts_plugins %>/pswp.startfile.js',              // Photoswipe **required**, always first!
					'<%= project.scripts_plugins %>/pswp.framework-bridge.js',       // Photoswipe **required**
					'<%= project.scripts_plugins %>/pswp.core.js',                   // Photoswipe **required**
					'<%= project.scripts_plugins %>/pswp.gestures.js',               // Photoswipe **required**
					'<%= project.scripts_plugins %>/pswp.show-hide-transition.js',   // Photoswipe **required**
					'<%= project.scripts_plugins %>/pswp.items-controller.js',       // Photoswipe **required**
					'<%= project.scripts_plugins %>/pswp.desktop-zoom.js',           // Photoswipe optional
					'<%= project.scripts_plugins %>/pswp.tap.js',                    // Photoswipe optional
					'<%= project.scripts_plugins %>/pswp.history.js',                // Photoswipe optional
					'<%= project.scripts_plugins %>/pswp.endfile.js',                // Photoswipe **required**, always last!
					'<%= project.scripts_plugins %>/pswp.photoswipe-ui-default.js',  // Photoswipe UI **required**
					'<%= project.scripts_plugins %>/transitionend.js',
					'<%= project.scripts_plugins %>/smooth-scroll.js',
					// '<%= project.scripts_plugins %>/gumshoe.js',

				],
				utils: [
					'<%= project.scripts_utils %>/extend.util.js',
					'<%= project.scripts_utils %>/alerts.util.js',
					// '<%= project.scripts_utils %>/ajax.util.js',
					// '<%= project.scripts_utils %>/cookie.util.js',           // Out-comment when enhance (and thus enhance.cookie) is not used
					'<%= project.scripts_utils %>/domparents.util.js',
				],
				other: [
				// Classes
					'<%= project.scripts_classes %>/expand.class.js',
					// '<%= project.scripts_classes %>/lazysizes.class.js',     // Out-comment when apply custom actions on lazysizes init (also out-comment `lazysizes.init();` in main and mobile scripts)
					'<%= project.scripts_classes %>/fontobserver.class.js',
					'<%= project.scripts_classes %>/navmain.class.js',
					'<%= project.scripts_classes %>/photoswipe.class.js',
					'<%= project.scripts_classes %>/popup.class.js',
				// Main
					'<%= project.scripts %>/main.scripts.js',
				],
			},
			mobile: {
				polyfills: [
					'<%= project.scripts_polyfills %>/classlist.js',
					'<%= project.scripts_polyfills %>/domready.js',
				],
				plugins: [
					// '<%= project.scripts_plugins %>/domdelegate.js',
					'<%= project.scripts_vendor %>/fontfaceobserver.js',
					'<%= project.scripts_vendor %>/lazysizes.min.js',           // Out-comment when using lazyload
					// '<%= project.scripts_plugins %>/ls.respimg.js',             // Out-comment when using lazyload, and need to polyfill responsive images
					'<%= project.scripts_plugins %>/ls.bgset.js',               // Out-comment when using lazyload + multiple background images with a width descriptor, similar to how img[srcset] works
					'<%= project.scripts_plugins %>/ls.parent-fit.js',          // Out-comment when using lazyload + bgset, to calculate the right sizes for object-fit: contain|cover image elements
					// '<%= project.scripts_plugins %>/ls.unload.js',              // Out-comment when using lazyload, and want to unload not in view images to improve memory consumption and orientationchange/resize performance
					// '<%= project.scripts_plugins %>/ls.unveilhooks.js',         // Out-comment when using lazyload + unveil/lazyload scripts/widgets, background images, styles and video/audio elements
					'<%= project.scripts_plugins %>/ls.print.js',               // Out-comment when there's a need to be able to print lazyloaded images
					'<%= project.scripts_plugins %>/photoswipe.js',             // Photoswipe
					'<%= project.scripts_plugins %>/photoswipe-ui-default.js',  // Photoswipe UI
					'<%= project.scripts_plugins %>/transitionend.js',
					'<%= project.scripts_plugins %>/smooth-scroll.js',
				],
				utils: [
					'<%= project.scripts_utils %>/extend.util.js',
					'<%= project.scripts_utils %>/alerts.util.js',
					// '<%= project.scripts_utils %>/ajax.util.js',
					// '<%= project.scripts_utils %>/cookie.util.js',           // Out-comment when enhance (and thus enhance.cookie) is not used
					'<%= project.scripts_utils %>/domparents.util.js',
				],
				other: [
				// Classes
					'<%= project.scripts_classes %>/expand.class.js',
					'<%= project.scripts_classes %>/fontobserver.class.js',
					// '<%= project.scripts_classes %>/lazysizes.class.js',     // Out-comment when apply custom actions on lazysizes init (also out-comment `lazysizes.init();` in main and mobile scripts)
					'<%= project.scripts_classes %>/navmain.class.js',
					'<%= project.scripts_classes %>/photoswipe.class.js',
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
