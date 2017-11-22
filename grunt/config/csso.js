module.exports = function(grunt) {

	grunt.config('csso', {
		options: {
			restructure: true, // Set to false to turn off ‘structural optimizations’ (http://bem.info/tools/optimizers/csso/description/)
			banner: '<%= tag.banner_extended %>',
		},
		styles: {
			files: {
				'<%= project.styles %>/main.min.css': '<%= project.styles %>/main.css', // destination: source
				// '<%= project.styles %>/mobile.min.css': '<%= project.styles %>/mobile.css',
				'<%= project.styles %>/print.min.css': '<%= project.styles %>/print.css',
			},
		},
		criticalcss: {
			options: {
				banner: '<%= tag.banner_basic %>',
			},
			expand: true,
			cwd: '<%= project.styles_critical %>/',
			src: ['*.css'],
			dest: '<%= project.styles_critical %>/',
			ext: '.css',
		},
	});

};
