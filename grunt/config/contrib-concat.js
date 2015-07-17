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
				'<%= project.scripts_dev %>/main.scripts.dev.js': ['<%= jsfiles.main.polyfills %>', '<%= jsfiles.main.plugins %>', '<%= jsfiles.main.utils %>', '<%= jsfiles.main.other %>'],
				'<%= project.scripts_dev %>/mobile.scripts.dev.js': ['<%= jsfiles.mobile.polyfills %>', '<%= jsfiles.mobile.plugins %>', '<%= jsfiles.main.utils %>', '<%= jsfiles.mobile.other %>'],
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
				'<%= project.scripts_dev %>/main.scripts.hint.js': '<%= jsfiles.main.other %>',
				'<%= project.scripts_dev %>/mobile.scripts.hint.js': '<%= jsfiles.mobile.other %>',
			},
		},
	});

};
