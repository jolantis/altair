module.exports = function(grunt) {

	grunt.config('autoprefixer', {
		options: {
			browsers: ['> 3%', 'last 2 versions', 'Firefox ESR'], // Default value is: > 1%, last 2 versions, Firefox ESR, Opera 12.1
			map: false, // enable/disable source maps
			cascade: true, // ‘cascade’ indentation
		},
		main: {
			options: {
				map: true, // enable/disable source maps
			},
			src: '<%= project.styles_dev %>/main.concat.css',
			dest: '<%= project.styles_dev %>/main.dev.css',
		},
		mobile: {
			src: '<%= project.styles_dev %>/mobile.concat.css',
			dest: '<%= project.styles_dev %>/mobile.dev.css',
		},
		print: {
			src: '<%= project.styles_dev %>/print.concat.css',
			dest: '<%= project.styles_dev %>/print.dev.css',
		},
		oldie: {
			options: {
				browsers: ['ie 8'],
			},
			src: '<%= project.styles_dev %>/main.concat.css',
			dest: '<%= project.styles_dev %>/oldie.dev.css',
		},
	});

};
