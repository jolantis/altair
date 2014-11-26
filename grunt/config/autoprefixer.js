module.exports = function(grunt) {

	grunt.config('autoprefixer', {
		options: {
			map: false, // enable/disable source maps
			cascade: true, // ‘cascade’ indentation
		},
		main: {
			options: {
				// browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1'], // disable to get Auoprefixer's default values; for other browsers see: https://github.com/postcss/autoprefixer#browsers
				map: true, // enable/disable source maps
			},
			src: '<%= project.styles_dev %>/main.concat.css',
			dest: '<%= project.styles_dev %>/main.dev.css',
		},
		mobile: {
			// options: {
			// 	browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1'],
			// },
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
