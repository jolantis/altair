module.exports = function(grunt) {

	grunt.config('browserSync', {
		dev: {
			files: {
				src: [
					'<%= project.styles_dev %>/main.dev.css',
					'<%= project.scripts_dev %>/head.scripts.dev.js',
					'<%= project.scripts_dev %>/main.scripts.dev.js',
					'<%= project.scripts_dev %>/mobile.scripts.dev.js',
					'site/templates/*.php',
					'site/snippets/*.php',
				]
			},
			options: {
				watchTask: true,
				open: false, // 'external'
				host: 'altair.dev',
				proxy: 'altair.dev',
				port: 3000,
				// tunnel: 'altair',                                               // Attempt to use the URL "http://altair.localtunnel.me"
				// logConnections: true,
				logFileChanges: true,
				// open: false, // 'ui'
				browser: 'google chrome',
				// xip: true,
				reloadOnRestart: true,
				notify: false,
				ghostMode: {
					clicks: true,
					forms: true,
					scroll: true,
				},
			},
		},
	});

};
