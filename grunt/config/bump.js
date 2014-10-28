module.exports = function(grunt) {

	grunt.config('bump', {
		options: {
			files: ['package.json'],
			updateConfigs: [],
			commit: true,
			commitMessage: 'Release v%VERSION%.',
			commitFiles: ['-a'], // '-a' for all files
			createTag: true,
			tagName: 'v%VERSION%',
			tagMessage: 'Version %VERSION%',
			push: false,
			pushTo: 'upstream',
			gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d' // options to use with '$ git describe'
		}
	});

};
