module.exports = function(grunt) {

	grunt.registerTask('oldie', [], function () {
		grunt.loadNpmTasks('grunt-sass');
		grunt.loadNpmTasks('grunt-autoprefixer');
		grunt.loadNpmTasks('grunt-stripmq');
		grunt.loadNpmTasks('grunt-pixrem');
		grunt.loadNpmTasks('grunt-csso');
		grunt.loadNpmTasks('grunt-notify');
		grunt.task.run(
			'sass:main',
			'autoprefixer:oldie',
			'stripmq:oldie',
			'pixrem:oldie',
			'csso:oldie',
			'notify:oldie'
		);
	});

};
