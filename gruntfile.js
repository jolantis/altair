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
				// '<%= project.scripts_vendor %>/typekit.min.js',
				// '<%= project.scripts_vendor %>/webfont.min.js',
				'<%= project.scripts %>/head.scripts.js',
			],
			main: {
				checks: [
					'<%= project.scripts_vendor %>/modernizr.dev.js',
					// '<%= project.scripts_vendor %>/modernizr.min.js',
				],
				polyfills: [
					'<%= project.scripts_polyfills %>/classlist.js',
					'<%= project.scripts_polyfills %>/domready.js',
				],
				plugins: [
					// '<%= project.scripts_plugins %>/domdelegate.js',
					'<%= project.scripts_vendor %>/lazysizes.min.js',           // Out-comment when using lazyload!!!
					'<%= project.scripts_plugins %>/ls.rias.js',                // Out-comment when using lazyload + resrc!!!
					'<%= project.scripts_plugins %>/ls.bgset.js',               // Out-comment when using lazyload (+ resrc) + multiple background images with a width descriptor!!!
					// '<%= project.scripts_plugins %>/ls.unveilhooks.js',         // Out-comment when using lazyload + unveil/lazyload scripts/widgets, background images, styles and video/audio elements!!!
					'<%= project.scripts_plugins %>/ls.print.js',               // Out-comment when there's a need to be able to print lazyloaded images!!!
					'<%= project.scripts_plugins %>/transitionend.js',
					'<%= project.scripts_plugins %>/smooth-scroll.js',
					'<%= project.scripts_plugins %>/gumshoe.js',
				],
				utils: [
					'<%= project.scripts_utils %>/extend.util.js',
					'<%= project.scripts_utils %>/alerts.util.js',
					// '<%= project.scripts_utils %>/ajax.util.js',
					'<%= project.scripts_utils %>/cookie.util.js',
					'<%= project.scripts_utils %>/domparents.util.js',
				],
				other: [
				// Classes
					'<%= project.scripts_classes %>/expand.class.js',
					'<%= project.scripts_classes %>/lazysizes.class.js',
					'<%= project.scripts_classes %>/navmain.class.js',
					'<%= project.scripts_classes %>/popup.class.js',
				// Main
					'<%= project.scripts %>/main.scripts.js',
				],
			},
			mobile: {
				checks: [
					'<%= project.scripts_vendor %>/modernizr.dev.js',
					// '<%= project.scripts_vendor %>/modernizr.min.js',
				],
				polyfills: [
					'<%= project.scripts_polyfills %>/classlist.js',
					'<%= project.scripts_polyfills %>/domready.js',
				],
				plugins: [
					// '<%= project.scripts_plugins %>/domdelegate.js',
					'<%= project.scripts_vendor %>/lazysizes.min.js',           // Out-comment when using lazyload!!!
					'<%= project.scripts_plugins %>/ls.rias.js',                // Out-comment when using lazyload + resrc!!!
					'<%= project.scripts_plugins %>/ls.bgset.js',               // Out-comment when using lazyload (+ resrc) + multiple background images with a width descriptor!!!
					// '<%= project.scripts_plugins %>/ls.unveilhooks.js',         // Out-comment when using lazyload + unveil/lazyload scripts/widgets, background images, styles and video/audio elements!!!
					'<%= project.scripts_plugins %>/ls.print.js',               // Out-comment when there's a need to be able to print lazyloaded images!!!
					'<%= project.scripts_plugins %>/transitionend.js',
					'<%= project.scripts_plugins %>/smooth-scroll.js',
				],
				utils: [
					'<%= project.scripts_utils %>/extend.util.js',
					'<%= project.scripts_utils %>/alerts.util.js',
					// '<%= project.scripts_utils %>/ajax.util.js',
					'<%= project.scripts_utils %>/cookie.util.js',
					'<%= project.scripts_utils %>/domparents.util.js',
				],
				other: [
				// Classes
					'<%= project.scripts_classes %>/expand.class.js',
					'<%= project.scripts_classes %>/lazysizes.class.js',
					'<%= project.scripts_classes %>/navmain.class.js',
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
