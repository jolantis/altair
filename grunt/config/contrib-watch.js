module.exports = function(grunt) {

	grunt.config('watch', {
		styles: {
			files: [
				'<%= project.styles_scss %>/**/*.scss',
			],
			tasks: ['styles'],
		},
		scripts: {
			files: [
				'gruntfile.js',
				'<%= project.scripts_main %>/head.js',
				'<%= project.scripts_main %>/main.js',
				'<%= project.scripts_modules %>/*.js',
				'<%= project.scripts_polyfills %>/*.js',
				'<%= project.scripts_plugins %>/*.js',
				'<%= project.scripts_utils %>/*.js',
			],
			tasks: ['scripts'],
		},
		jshint: {
			files: [
				'<%= project.scripts %>/*.js',
				'<%= project.scripts_main %>/*.js'
			],
			tasks: ['scripts-hint'],
		},
		livereload: {
			options: { livereload: false },
			files: [
				'<%= project.styles %>/main.css',
				'<%= project.scripts %>/head.js',
				'<%= project.scripts %>/main.js',
				'<%= project.scripts_main %>/head.scipts.js',
				'<%= project.scripts_main %>/main.scipts.js',
				// 'site/plugins/*/*.php',
				'site/templates/*.php',
				'site/snippets/*.php',
				// 'content/**/*.md', // This results in a grunt error. If you want to use this, use command: $ launchctl limit maxfiles 2048 2048 to set a file limit. (source: http://superuser.com/questions/261023/how-to-change-default-ulimit-values-in-mac-os-x-10-6)
			],
		},
	});

};
