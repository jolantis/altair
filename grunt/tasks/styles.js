module.exports = function(grunt) {

	grunt.registerTask('sass-concat', [], function () {
		grunt.loadNpmTasks('grunt-sass');
		grunt.task.run(
			// 'sass:dist'
			'sass:main',
			// 'sass:mobile',
			'sass:print'
		);
	});

	grunt.registerTask('sass-prefix', [], function () {
		grunt.loadNpmTasks('grunt-autoprefixer');
		grunt.task.run(
			'autoprefixer:main',
			// 'autoprefixer:mobile',
			'autoprefixer:print'
		);
	});

	grunt.registerTask('styles', [], function () {
		grunt.loadNpmTasks('grunt-notify');
		grunt.task.run(
			'sass-concat',
			'sass-prefix',
			'notify:styles'
		);
	});

	grunt.registerTask('styles-minify', [], function () {
		grunt.loadNpmTasks('grunt-contrib-clean');
		grunt.loadNpmTasks('grunt-css-mqpacker');
		grunt.loadNpmTasks('grunt-csso');
		grunt.task.run(
			'clean:styles',
			'css_mqpacker:main',
			// 'css_mqpacker:mobile',
			'csso:styles'
		);
	});


};
