module.exports = function(grunt) {

	grunt.registerTask('icons', [], function () {
		grunt.loadNpmTasks('grunt-svgmin');
		grunt.loadNpmTasks('grunt-grunticon');
		grunt.loadNpmTasks('grunt-contrib-copy');
		grunt.loadNpmTasks('grunt-contrib-clean');
		grunt.loadNpmTasks('grunt-notify');
		grunt.task.run(
			'svgmin',
			'grunticon',
			'copy:gruntpngs',
			'clean:grunticon',
			'notify:icons'
		);
	});

};
