module.exports = function(grunt) {

	grunt.registerTask('release', [], function () {
		grunt.loadNpmTasks('grunt-bump');
		grunt.loadNpmTasks('grunt-hashify');
		grunt.loadNpmTasks('grunt-notify');
		grunt.task.run(
			'bump-only:minor', // Version bumped from 0.0.x to 0.1.0
			'styles', // sass-concat',
			// 'oldie',
			'styles-minify',
			// 'criticalcss',
			'penthouse',
			'scripts-concat',
			'scripts-uglify',
			'hashify', // Generating an 'oldie' stylesheet? Make sure to enable the 'oldie' part in the hashify.js config!
			'notify:release'
		);
	});

};
