module.exports = function(grunt) {

	grunt.registerTask('scripts-concat', [], function () {
		grunt.loadNpmTasks('grunt-contrib-concat');
		grunt.loadNpmTasks('grunt-notify');
		grunt.task.run(
			'concat:scripts',
			'notify:scripts'
		);
	});

	grunt.registerTask('scripts-hint', [], function () {
		grunt.loadNpmTasks('grunt-contrib-concat');
		grunt.loadNpmTasks('grunt-contrib-jshint');
		grunt.task.run(
			'concat:forhint',
			'jshint:dist'
		);
	});

	grunt.registerTask('scripts', [], function () {
		grunt.loadNpmTasks('grunt-contrib-concat');
		grunt.loadNpmTasks('grunt-contrib-jshint');
		grunt.task.run(
			'scripts-concat',
			'scripts-hint'
		);
	});

	grunt.registerTask('scripts-minify', [], function () {
		grunt.loadNpmTasks('grunt-contrib-clean');
		grunt.loadNpmTasks('grunt-contrib-uglify');
		grunt.task.run(
			'clean:scripts',
			'uglify:head',
			'uglify:main'
		);
	});

};
