module.exports = function(grunt) {

	grunt.config('uglify', {
		options: {
			mangle: false, // Set to false to prevent changes to your variable and function names
		},
		head: {
			options: {
				banner: '<%= tag.banner_basic %>',
			},
			files: {
				'<%= project.scripts %>/head.min.js': '<%= project.scripts %>/head.js', // destination: source
			},
		},
		main: {
			options: {
				banner: '<%= tag.banner_extended %>',
			},
			files: {
				'<%= project.scripts %>/main.min.js': '<%= project.scripts %>/main.js', // destination: source
				'<%= project.scripts %>/mobile.min.js': '<%= project.scripts %>/mobile.js',
			},
		},
	});

};
