module.exports = function(grunt) {

	grunt.config('grunticon', {
		icons: {
			files: [{
				expand: true,
				cwd: '<%= project.design_assets %>/svg/min/', // source
				src: ['*.svg'], // source extension(s)
				dest: '<%= project.styles_scss %>/grunticon/', // destination
			}],
			options: {
				datasvgcss: '_grunticon.data-svg.scss',
				datapngcss: '_grunticon.data-png.scss',
				urlpngcss: '_grunticon.fallback-png.scss',
				previewhtml: 'preview.html',
				loadersnippet: 'grunticon.loader.js',
				pngfolder: 'tmp/',
				pngpath: '/<%= project.styles %>/img',
				cssprefix: '%grunt-',
				defaultWidth: '80px',
				defaultHeight: '80px',
				colors: { // Color vars that can be used in filenames, like foo.colors-hover.svg
					hover: "#141414"
				},
				// customselectors: {},
				// template: '',
				// previewTemplate: '',
			},
		},
	});

};
