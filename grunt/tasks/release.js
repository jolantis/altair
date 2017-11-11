module.exports = function(grunt) {

	grunt.registerTask('release', [], function () {
		grunt.loadNpmTasks('grunt-bump');
		grunt.loadNpmTasks('grunt-notify');
		grunt.task.run(
			'bump-only:minor', // Version bumped from 0.0.x to 0.1.0
			'styles',
			'styles-minify',
			'criticalcss',
			'scripts',
			'scripts-minify',
			'notify:release'
		);
	});

};
