module.exports = function(grunt) {

	grunt.config('watch', {
		styles: {
			files: ['<%= project.styles_scss %>/**/*.scss'],
			tasks: ['styles'],
		},
		scripts: {
			files: [
				'<%= project.scripts %>/*.js',
				'<%= project.scripts_classes %>/*.js',
				'<%= project.scripts_polyfills %>/*.js',
				'<%= project.scripts_plugins %>/*.js',
				'<%= project.scripts_utils %>/*.js',
				'<%= project.scripts_vendor %>/*.js',
			],
			tasks: ['scripts'],
		},
		jshint: {
			files: ['<%= project.scripts_dev %>/*.js'],
			tasks: ['scripts-hint'],
		},
		livereload: {
			options: { livereload: true },
			files: [
				'<%= project.styles_dev %>/main.dev.css',
				'<%= project.scripts_dev %>/head.scripts.dev.js',
				'<%= project.scripts_dev %>/main.scripts.dev.js',
				'site/templates/*.php',
				'site/snippets/*.php',
				// 'content/**/*.md', // This results in a grunt error. If you want to use this, use command: $ launchctl limit maxfiles 2048 2048 to set a file limit. (source: http://superuser.com/questions/261023/how-to-change-default-ulimit-values-in-mac-os-x-10-6)
			],
		},
	});

};
