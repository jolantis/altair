module.exports = function(grunt) {

	grunt.config('sass', {
		options: {
			outputStyle: 'nested', // nested or compressed
			precision: 10, // number of digits to preserve after the dot (default is `10`)
			sourceComments: 'none', // none, normal or map
			sourceMap: false, // enable/disable source maps (when 'true' make sure sourceComments is set to 'map')
		},
		dist: {
			files: {
				'<%= project.styles_dev %>/main.concat.css': '<%= project.styles_scss %>/main.scss', // destination: source
				'<%= project.styles_dev %>/mobile.concat.css': '<%= project.styles_scss %>/mobile.scss',
				'<%= project.styles_dev %>/print.concat.css': '<%= project.styles_scss %>/print.scss',
			},
		},
		main: {
			options: {
				sourceComments: 'map', // none, normal or map
				sourceMap: false, // enable/disable source maps (when 'true' make sure sourceComments is set to 'map')
			},
			files: {
				'<%= project.styles_dev %>/main.concat.css': '<%= project.styles_scss %>/main.scss', // destination: source
			},
		},
		mobile: {
			files: {
				'<%= project.styles_dev %>/mobile.concat.css': '<%= project.styles_scss %>/mobile.scss', // destination: source
			},
		},
		print: {
			files: {
				'<%= project.styles_dev %>/print.concat.css': '<%= project.styles_scss %>/print.scss', // destination: source
			},
		},
	});

};
