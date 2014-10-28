module.exports = function(grunt) {

	grunt.registerTask('imageoptim', [], function () {
		grunt.loadNpmTasks('grunt-imageoptim');
		grunt.loadNpmTasks('grunt-notify');
		grunt.task.run(
			'imageoptim:jpgs',
			'imageoptim:pngs',
			'notify:imageoptim'
		);
	});

};
