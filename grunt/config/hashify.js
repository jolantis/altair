module.exports = function(grunt) {

	grunt.config('hashify', {
		options: {
			basedir: '', // hashmap and dest path will be relative to this dir
			copy: false, // keep originals
		},
		styles: {
			options: {
				hashmap: '<%= project.styles_min %>/hash.css.json', // location to put hashmap
			},
			files: [
				{
					src: '<%= project.styles_min %>/main.min.css', // md5 of the contents goes in hashmap
					dest: '<%= project.styles_min %>/{{hash}}.css', // {{hash}} will be replaced with md5 of the contents of the source
					key: 'main', // key to use in the hashmap
				},
				{
					src: '<%= project.styles_min %>/mobile.min.css',
					dest: '<%= project.styles_min %>/{{hash}}.css',
					key: 'mobile',
				},
				// {
				// 	src: '<%= project.styles_min %>/oldie.min.css',
				// 	dest: '<%= project.styles_min %>/{{hash}}.css',
				// 	key: 'oldie',
				// },
				{
					src: '<%= project.styles_min %>/print.min.css',
					dest: '<%= project.styles_min %>/{{hash}}.css',
					key: 'print',
				},
			],
		},
		scripts: {
			options: {
				hashmap: '<%= project.scripts_min %>/hash.js.json', // location to put hashmap
			},
			files: [
				{
					src: '<%= project.scripts_min %>/head.scripts.min.js',
					dest: '<%= project.scripts_min %>/{{hash}}.js',
					key: 'head',
				},
				{
					src: '<%= project.scripts_min %>/main.scripts.min.js',
					dest: '<%= project.scripts_min %>/{{hash}}.js',
					key: 'main',
				},
				{
					src: '<%= project.scripts_min %>/mobile.scripts.min.js',
					dest: '<%= project.scripts_min %>/{{hash}}.js',
					key: 'mobile',
				},
			],
		},
	});

};
