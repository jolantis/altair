module.exports = function(grunt) {

	grunt.config('clean', {
		options: {
			force: true,
		},
		styles: {
			src: [
				'<%= project.styles_dev %>/*.concat.css',
				'<%= project.styles_dev %>/*.map',
				'<%= project.styles_min %>/*.css',
			],
		},
		scripts: {
			src: [
				'<%= project.scripts_dev %>/*.hint.js',
				'<%= project.scripts_min %>/*.js',
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
