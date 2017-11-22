module.exports = function(grunt) {

	grunt.config('concat', {
		options: {
			nonull: true,
			separator: '',
			stripBanners: true,
		},
		scripts: {
			files: {
				'<%= project.scripts %>/head.js': '<%= jsfiles.head %>', // destination: source
				'<%= project.scripts %>/main.js': ['<%= jsfiles.main.plugins %>', '<%= jsfiles.main.polyfills %>', '<%= jsfiles.main.utils %>', '<%= jsfiles.main.modules %>'],
				// '<%= project.scripts %>/mobile.js': ['<%= jsfiles.mobile.plugins %>', '<%= jsfiles.mobile.polyfills %>', '<%= jsfiles.main.utils %>', '<%= jsfiles.mobile.modules %>'],
			},
		},
		forhint: {
			options: {
				banner: '/**\n' +
						' * For JSHint only!\n' +
						' */\n'
			},
			files: {
				'<%= project.scripts_main %>/head.scripts.hint.js': '<%= project.scripts_main %>/head.scripts.js', // destination: source
				'<%= project.scripts_main %>/main.scripts.hint.js': '<%= jsfiles.main.modules %>',
				// '<%= project.scripts_main %>/mobile.scripts.hint.js': '<%= jsfiles.mobile.modules %>',
			},
		},
	});

};
