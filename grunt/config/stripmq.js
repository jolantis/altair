module.exports = function(grunt) {

	grunt.config('stripmq', {
		oldie: {
			options: {
				type: 'screen',
				width: '50em', // Only include 'medium' breakpoint
			},
			files: {
				'<%= project.styles_dev %>/oldie.dev.css': '<%= project.styles_dev %>/oldie.dev.css', // destination: source
			},
		},
	});

};
