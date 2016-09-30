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
			scripts_modules: '<%= project.scripts %>/modules',
			scripts_plugins: '<%= project.scripts %>/lib/plugins',
			scripts_polyfills: '<%= project.scripts %>/lib/polyfills',
			scripts_utils: '<%= project.scripts %>/lib/utils',
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
				// '<%= project.scripts_plugins %>/modernizr/modernizr.min.js',               // ALWAYS use custom build modernizr in production!
				'<%= project.scripts %>/head.scripts.js',
			],
			main: {
				plugins: [
					// '<%= project.scripts_plugins %>/domdelegate/domdelegate.js',
					'<%= project.scripts_plugins %>/domready/domready.js',
					'<%= project.scripts_plugins %>/fontfaceobserver/fontfaceobserver.js',
					'<%= project.scripts_plugins %>/lazysizes/lazysizes.min.js',           // Out-comment when using lazyload
					// '<%= project.scripts_plugins %>/lazysizes/ls.respimg.js',             // Out-comment when using lazyload, and need to polyfill responsive images
					'<%= project.scripts_plugins %>/lazysizes/ls.bgset.js',               // Out-comment when using lazyload + multiple background images with a width descriptor, similar to how img[srcset] works
					'<%= project.scripts_plugins %>/lazysizes/ls.parent-fit.js',          // Out-comment when using lazyload + bgset, to calculate the right sizes for object-fit: contain|cover image elements
					// '<%= project.scripts_plugins %>/lazysizes/ls.unload.js',              // Out-comment when using lazyload, and want to unload not in view images to improve memory consumption and orientationchange/resize performance
					// '<%= project.scripts_plugins %>/lazysizes/ls.unveilhooks.js',         // Out-comment when using lazyload + unveil/lazyload scripts/widgets, background images, styles and video/audio elements
					'<%= project.scripts_plugins %>/lazysizes/ls.print.js',               // Out-comment when there's a need to be able to print lazyloaded images
					'<%= project.scripts_plugins %>/transitionend/transitionend.js',
					'<%= project.scripts_plugins %>/smooth-scroll/smooth-scroll.js',
					// '<%= project.scripts_plugins %>/gumshoe/gumshoe.js',
				],
				polyfills: [
					'<%= project.scripts_polyfills %>/classlist.js',
				],
				utils: [
					// '<%= project.scripts_utils %>/ajax.util.js',
					// '<%= project.scripts_utils %>/cookie.util.js',           // Out-comment when enhance (and thus enhance.cookie) is not used
					'<%= project.scripts_utils %>/domparents.util.js',
					'<%= project.scripts_utils %>/extend.util.js',
				],
				other: [
				// Modules
					'<%= project.scripts_modules %>/alerts.module.js',
					'<%= project.scripts_modules %>/expand.module.js',
					// '<%= project.scripts_modules %>/lazysizes.module.js',     // Out-comment when apply custom actions on lazysizes init (also out-comment `lazysizes.init();` in main and mobile scripts)
					'<%= project.scripts_modules %>/fontobserver.module.js',
					'<%= project.scripts_modules %>/navmain.module.js',
					'<%= project.scripts_modules %>/popup.module.js',
				// Main
					'<%= project.scripts %>/main.scripts.js',
				],
			},
			mobile: {
				plugins: [
					// '<%= project.scripts_plugins %>/domdelegate/domdelegate.js',
					'<%= project.scripts_plugins %>/domready/domready.js',
					'<%= project.scripts_plugins %>/fontfaceobserver/fontfaceobserver.js',
					'<%= project.scripts_plugins %>/lazysizes/lazysizes.min.js',           // Out-comment when using lazyload
					// '<%= project.scripts_plugins %>/lazysizes/ls.respimg.js',             // Out-comment when using lazyload, and need to polyfill responsive images
					'<%= project.scripts_plugins %>/lazysizes/ls.bgset.js',               // Out-comment when using lazyload + multiple background images with a width descriptor, similar to how img[srcset] works
					'<%= project.scripts_plugins %>/lazysizes/ls.parent-fit.js',          // Out-comment when using lazyload + bgset, to calculate the right sizes for object-fit: contain|cover image elements
					// '<%= project.scripts_plugins %>/lazysizes/ls.unload.js',              // Out-comment when using lazyload, and want to unload not in view images to improve memory consumption and orientationchange/resize performance
					// '<%= project.scripts_plugins %>/lazysizes/ls.unveilhooks.js',         // Out-comment when using lazyload + unveil/lazyload scripts/widgets, background images, styles and video/audio elements
					'<%= project.scripts_plugins %>/lazysizes/ls.print.js',               // Out-comment when there's a need to be able to print lazyloaded images
					'<%= project.scripts_plugins %>/transitionend/transitionend.js',
					'<%= project.scripts_plugins %>/smooth-scroll/smooth-scroll.js',
				],
				polyfills: [
					'<%= project.scripts_polyfills %>/classlist.js',
				],
				utils: [
					// '<%= project.scripts_utils %>/ajax.util.js',
					// '<%= project.scripts_utils %>/cookie.util.js',           // Out-comment when enhance (and thus enhance.cookie) is not used
					'<%= project.scripts_utils %>/domparents.util.js',
					'<%= project.scripts_utils %>/extend.util.js',
				],
				other: [
				// Modules
					'<%= project.scripts_modules %>/alerts.module.js',
					'<%= project.scripts_modules %>/expand.module.js',
					// '<%= project.scripts_modules %>/lazysizes.module.js',     // Out-comment when apply custom actions on lazysizes init (also out-comment `lazysizes.init();` in main and mobile scripts)
					'<%= project.scripts_modules %>/fontobserver.module.js',
					'<%= project.scripts_modules %>/navmain.module.js',
				// Main
					'<%= project.scripts %>/mobile.scripts.js',
				],
			},
			photoswipe: {
				plugins: [
					'<%= project.scripts_plugins %>/domready/domready.js',
					'<%= project.scripts_plugins %>/photoswipe/pswp.startfile.js',              // Photoswipe **required**, always first!
					'<%= project.scripts_plugins %>/photoswipe/pswp.framework-bridge.js',       // Photoswipe **required**
					'<%= project.scripts_plugins %>/photoswipe/pswp.core.js',                   // Photoswipe **required**
					'<%= project.scripts_plugins %>/photoswipe/pswp.gestures.js',               // Photoswipe **required**
					'<%= project.scripts_plugins %>/photoswipe/pswp.show-hide-transition.js',   // Photoswipe **required**
					'<%= project.scripts_plugins %>/photoswipe/pswp.items-controller.js',       // Photoswipe **required**
					'<%= project.scripts_plugins %>/photoswipe/pswp.tap.js',                    // Photoswipe optional
					'<%= project.scripts_plugins %>/photoswipe/pswp.history.js',                // Photoswipe optional
					'<%= project.scripts_plugins %>/photoswipe/pswp.endfile.js',                // Photoswipe **required**, always last!
					'<%= project.scripts_plugins %>/photoswipe/pswp.photoswipe-ui-default.js',  // Photoswipe UI **required**
				],
				other: [
				// Modules
					'<%= project.scripts_modules %>/photoswipe.module.js',
				// Main
					'<%= project.scripts %>/photoswipe.scripts.js',
				],
			}
		},
	});

	// Load per-task config from separate files
	grunt.loadTasks('grunt/config');

	// Register alias tasks from separate files
	grunt.loadTasks('grunt/tasks');

	// Register default task
	grunt.registerTask('default', ['develop']);

};
