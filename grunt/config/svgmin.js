module.exports = function(grunt) {

	grunt.config('svgmin', {
		options: {
			plugins: [{
				removeViewBox: false,
			}],
		},
		dist: {
			files: [{
				expand: true,
				cwd: '<%= project.design_assets %>/svg',
				src: ['*.svg'],
				dest: '<%= project.design_assets %>/svg/min/',
				ext: '.svg',
			}],
		},
	});

};
