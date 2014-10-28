module.exports = function(grunt) {

	grunt.config('pixrem', {
		options: {
			rootvalue: '16px',
			replace: true,
		},
		oldie: {
			src: '<%= project.styles_dev %>/oldie.dev.css',
			dest: '<%= project.styles_dev %>/oldie.dev.css',
		},
	});

};
