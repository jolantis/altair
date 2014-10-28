module.exports = function(grunt) {

	grunt.config('css_mqpacker', {
		options: {
			map: false, // enable/disable source maps
		},
		main: {
			src: '<%= project.styles_dev %>/main.dev.css',
			dest: '<%= project.styles_dev %>/main.dev.css',
		},
		mobile: {
			src: '<%= project.styles_dev %>/mobile.dev.css',
			dest: '<%= project.styles_dev %>/mobile.dev.css',
		},
	});

};
