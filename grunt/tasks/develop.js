module.exports = function(grunt) {

	grunt.registerTask('develop', [], function () {
		grunt.loadNpmTasks('grunt-contrib-watch');
		grunt.loadNpmTasks('grunt-browser-sync');
		grunt.loadNpmTasks('grunt-notify');
		grunt.task.run(
			'styles',
			'scripts',
			'notify:develop',
			'browserSync',
			'watch'
		);
	});

};
