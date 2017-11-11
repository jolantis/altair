module.exports = function(grunt) {

	grunt.config('autoprefixer', {
		options: {
			browsers: ['> 4%', 'last 2 versions', 'Firefox ESR'], // Default value is: > 1%, last 2 versions, Firefox ESR, Opera 12.1
			map: false, // enable/disable source maps
			cascade: true, // ‘cascade’ indentation
		},
		main: {
			options: {
				map: true, // enable/disable source maps
			},
			src: '<%= project.styles %>/main.css',
			dest: '<%= project.styles %>/main.css',
		},
		mobile: {
			// 	src: '<%= project.styles %>/mobile.css',
			// 	dest: '<%= project.styles %>/mobile.css',
		},
		print: {
			src: '<%= project.styles %>/print.css',
			dest: '<%= project.styles %>/print.css',
		},
	});

};
