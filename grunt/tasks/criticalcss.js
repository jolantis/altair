module.exports = function(grunt) {

	grunt.registerTask('criticalcss', [], function () {
		grunt.loadNpmTasks('grunt-sass');
		grunt.loadNpmTasks('grunt-autoprefixer');
		grunt.loadNpmTasks('grunt-css-mqpacker');
		grunt.loadNpmTasks('grunt-criticalcss');
		grunt.loadNpmTasks('grunt-csso');
		grunt.loadNpmTasks('grunt-notify');
		grunt.task.run(
			'sass:main',
			'autoprefixer:main',
			'css_mqpacker:main',
			'criticalcss',
			'csso:criticalcss',
			'notify:criticalcss'
		);
	});

};
