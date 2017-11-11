module.exports = function(grunt) {

	grunt.config('clean', {
		options: {
			force: true, // overrides this task from blocking deletion of folders outside current working dir
		},
		styles: {
			src: [
				// '<%= project.styles %>/*.concat.css',
				'<%= project.styles %>/*.map',
				// '<%= project.styles %>/*.min.css',
			],
		},
		scripts: {
			src: [
				'<%= project.scripts_main %>/*.hint.js',
				// '<%= project.scripts %>/*.min.js',
			],
		},
		grunticon: {
			src: [
				'<%= project.styles_scss %>/grunticon/grunticon.loader.js',
				'<%= project.styles_scss %>/grunticon/preview.html',
				'<%= project.styles_scss %>/grunticon/tmp',
			],
		},
	});

};
