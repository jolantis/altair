module.exports = function(grunt) {

	grunt.config('csso', {
		options: {
			restructure: true, // Set to false to turn off ‘structural optimizations’ (http://bem.info/tools/optimizers/csso/description/)
			banner: '<%= tag.banner_extended %>',
		},
		styles: {
			files: {
				'<%= project.styles_min %>/main.min.css': '<%= project.styles_dev %>/main.dev.css', // destination: source
				'<%= project.styles_min %>/mobile.min.css': '<%= project.styles_dev %>/mobile.dev.css',
				'<%= project.styles_min %>/print.min.css': '<%= project.styles_dev %>/print.dev.css',
			},
		},
		oldie: {
			files: {
				'<%= project.styles_min %>/oldie.min.css': '<%= project.styles_dev %>/oldie.dev.css', // destination: source
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
