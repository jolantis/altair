module.exports = function(grunt) {

	grunt.config('sass', {
		options: {
			outputStyle: 'nested', // nested or compressed
			precision: 10, // number of digits to preserve after the dot (default is `10`)
			sourceComments: false, // true enables additional debugging information in the output file as CSS comments
			sourceMap: false, // enable/disable source maps (when 'true' make sure sourceComments is set to 'map')
			sourceMapEmbed: false, // true embeds the source map as a data URI
			sourceMapContents: false, // true includes the contents in the source map information
		},
		dist: {
			files: {
				'<%= project.styles %>/main.css': '<%= project.styles_scss %>/main.styles.scss', // destination: source
				'<%= project.styles %>/mobile.css': '<%= project.styles_scss %>/mobile.styles.scss',
				'<%= project.styles %>/print.css': '<%= project.styles_scss %>/print.styles.scss',
			},
		},
		main: {
			options: {
				sourceComments: false, // enable/disable additional debugging information in the output file as CSS comments
				sourceMap: true, // enable/disable the outputting of a source map during render and renderSync
				sourceMapEmbed: false, // true embeds the source map as a data URI
				sourceMapContents: false, // true includes the contents in the source map information
			},
			files: {
				'<%= project.styles %>/main.css': '<%= project.styles_scss %>/main.styles.scss', // destination: source
			},
		},
		mobile: {
			files: {
				'<%= project.styles %>/mobile.css': '<%= project.styles_scss %>/mobile.styles.scss', // destination: source
			},
		},
		print: {
			files: {
				'<%= project.styles %>/print.css': '<%= project.styles_scss %>/print.styles.scss', // destination: source
			},
		},
	});

};
