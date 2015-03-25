module.exports = function(grunt) {

	grunt.registerTask('penthouse', [], function () {
		grunt.loadNpmTasks('grunt-sass');
		grunt.loadNpmTasks('grunt-autoprefixer');
		grunt.loadNpmTasks('grunt-css-mqpacker');
		grunt.loadNpmTasks('grunt-penthouse');
		grunt.loadNpmTasks('grunt-csso');
		grunt.loadNpmTasks('grunt-notify');
		grunt.task.run(
			'sass:main',
			'sass:mobile',
			'autoprefixer:main',
			'autoprefixer:mobile',
			'css_mqpacker:main',
			'css_mqpacker:mobile',
			'penthouse',
			'csso:criticalcss',
			'notify:criticalcss'
		);
	});

};
