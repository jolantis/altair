module.exports = function(grunt) {

	grunt.config('concat', {
		options: {
			nonull: true,
			separator: '',
			stripBanners: true,
		},
		scripts: {
			files: {
				'<%= project.scripts_dev %>/head.scripts.dev.js': '<%= jsfiles.head %>', // destination: source
				'<%= project.scripts_dev %>/main.scripts.dev.js': ['<%= jsfiles.main.plugins %>', '<%= jsfiles.main.polyfills %>', '<%= jsfiles.main.utils %>', '<%= jsfiles.main.modules %>'],
				'<%= project.scripts_dev %>/mobile.scripts.dev.js': ['<%= jsfiles.mobile.plugins %>', '<%= jsfiles.mobile.polyfills %>', '<%= jsfiles.main.utils %>', '<%= jsfiles.mobile.modules %>'],
				'<%= project.scripts_dev %>/photoswipe.scripts.dev.js': ['<%= jsfiles.photoswipe.plugins %>', '<%= jsfiles.photoswipe.modules %>'],
			},
		},
		forhint: {
			options: {
				banner: '/**\n' +
						' * For JSHint only!\n' +
						' */\n'
			},
			files: {
				'<%= project.scripts_dev %>/head.scripts.hint.js': '<%= project.scripts %>/head.scripts.js', // destination: source
				'<%= project.scripts_dev %>/main.scripts.hint.js': '<%= jsfiles.main.modules %>',
				'<%= project.scripts_dev %>/mobile.scripts.hint.js': '<%= jsfiles.mobile.modules %>',
				'<%= project.scripts_dev %>/photoswipe.scripts.hint.js': '<%= jsfiles.photoswipe.modules %>',
			},
		},
	});

};
