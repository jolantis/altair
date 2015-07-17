module.exports = function(grunt) {

	grunt.config('remfallback', {
		options: {
			log: true,
			replace: false, // Replace rem values by the px values, handy for generating seperate stylesheets
			ignoreUnsupported: true, // Ignore rem values that are for properties that are unsupported by lt IE 9
			mediaQuery: true, // Ignore rem values within media queries
			round: true, // Round fallback values
		},
		main: {
			files: {
				'<%= project.styles_dev %>/main.dev.css': '<%= project.styles_dev %>/main.dev.css', // destination: source
			},
		},
		mobile: {
			files: {
				'<%= project.styles_dev %>/mobile.dev.css': '<%= project.styles_dev %>/mobile.dev.css', // destination: source
			},
		},
	});

};
