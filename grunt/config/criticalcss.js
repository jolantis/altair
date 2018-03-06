module.exports = function(grunt) {

	grunt.config('criticalcss', {
		default : {
			options: {
				url: 'http://altair.test',
				width: 1440,
				height: 900,
				outputfile: '<%= project.styles_critical %>/default.css',
				filename: '<%= project.styles %>/main.css',
				forceInclude: [], // An array of selectors that you want to guarantee will make it from the CSS file into your CriticalCSS output.
				buffer: 800*1024,
			},
		},
		// default_mobile : {
		// 	options: {
		// 		url: 'http://altair.test',
		// 		width: 420, // iPhone 6 Plus is 414 points wide
		// 		height: 960, //iPhone 6 Plus is 736 points high
		// 		outputfile: '<%= project.styles_critical %>/default_mobile.css',
		// 		filename: '<%= project.styles %>/main.css',
		// 		forceInclude: [], // An array of selectors that you want to guarantee will make it from the CSS file into your CriticalCSS output.
		// 		buffer: 800*1024,
		// 	},
		// },
		home : {
			options: {
				url: 'http://altair.test',
				width: 1440,
				height: 900,
				outputfile: '<%= project.styles_critical %>/home.css',
				filename: '<%= project.styles %>/main.css',
				forceInclude: [], // An array of selectors that you want to guarantee will make it from the CSS file into your CriticalCSS output.
				buffer: 800*1024,
			},
		},
		base : {
			options: {
				url: 'http://altair.test/base',
				width: 1440,
				height: 900,
				outputfile: '<%= project.styles_critical %>/base.css',
				filename: '<%= project.styles %>/main.css',
				forceInclude: [], // An array of selectors that you want to guarantee will make it from the CSS file into your CriticalCSS output.
				buffer: 800*1024,
			},
		},
		images : {
			options: {
				url: 'http://altair.test/images',
				width: 1440,
				height: 900,
				outputfile: '<%= project.styles_critical %>/images.css',
				filename: '<%= project.styles %>/main.css',
				forceInclude: [], // An array of selectors that you want to guarantee will make it from the CSS file into your CriticalCSS output.
				buffer: 800*1024,
			},
		},
	});

};
