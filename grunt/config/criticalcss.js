module.exports = function(grunt) {

	grunt.config('criticalcss', {
		home : {
			options: {
				url: 'http://local.altair',
				width: 1440,
				height: 900,
				outputfile: '<%= project.styles_critical %>/home.css',
				filename: '<%= project.styles_dev %>/main.dev.css',
				forceInclude: [], // An array of selectors that you want to guarantee will make it from the CSS file into your CriticalCSS output.
				buffer: 800*1024,
			},
		},
		home_mobile : {
			options: {
				url: 'http://local.altair',
				width: 420, // iPhone 6 Plus is 414 points wide
				height: 960, //iPhone 6 Plus is 736 points high
				outputfile: '<%= project.styles_critical %>/home_mobile.css',
				filename: '<%= project.styles_dev %>/mobile.dev.css',
				forceInclude: [], // An array of selectors that you want to guarantee will make it from the CSS file into your CriticalCSS output.
				buffer: 800*1024,
			},
		},
		base : {
			options: {
				url: 'http://local.altair/base',
				width: 1440,
				height: 900,
				outputfile: '<%= project.styles_critical %>/base.css',
				filename: '<%= project.styles_dev %>/main.dev.css',
				forceInclude: [], // An array of selectors that you want to guarantee will make it from the CSS file into your CriticalCSS output.
				buffer: 800*1024,
			},
		},
		base_mobile : {
			options: {
				url: 'http://local.altair/base',
				width: 420, // iPhone 6 Plus is 414 points wide
				height: 960, //iPhone 6 Plus is 736 points high
				outputfile: '<%= project.styles_critical %>/base_mobile.css',
				filename:'<%= project.styles_dev %>/mobile.dev.css',
				forceInclude: [], // An array of selectors that you want to guarantee will make it from the CSS file into your CriticalCSS output.
				buffer: 800*1024,
			},
		},
	});

};
