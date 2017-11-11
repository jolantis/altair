module.exports = function(grunt) {

	grunt.config('css_mqpacker', {
		options: {
			map: false, // enable/disable source maps
			sort: true,
		},
		main: {
			src: '<%= project.styles %>/main.css',
			dest: '<%= project.styles %>/main.css',
		},
		mobile: {
			src: '<%= project.styles %>/mobile.css',
			dest: '<%= project.styles %>/mobile.css',
		},
	});

};
