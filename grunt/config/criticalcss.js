module.exports = function(grunt) {

	grunt.config('criticalcss', {
		home : {
			options: {
				url: 'http://local.altair',
				filename: '<%= project.styles_dev %>/main.dev.css',
				// forceInclude: [], // An array of selectors that you want to guarantee will make it from the CSS file into your CriticalCSS output.
				width: 1440,
				height: 900,
				outputfile: '<%= project.styles_critical %>/home.css',
			},
		},
		home_mobile : {
			options: {
				url: 'http://local.altair',
				filename: '<%= project.styles_dev %>/main.dev.css',
				forceInclude: [], // An array of selectors that you want to guarantee will make it from the CSS file into your CriticalCSS output.
				width: 420, // iPhone 6 Plus is 414 points wide
				height: 960, //iPhone 6 Plus is 736 points high
				outputfile: '<%= project.styles_critical %>/home_mobile.css',
			},
		},
		base : {
			options: {
				url: 'http://local.altair/base',
				filename: '<%= project.styles_dev %>/main.dev.css',
				forceInclude: [], // An array of selectors that you want to guarantee will make it from the CSS file into your CriticalCSS output.
				width: 1440,
				height: 900,
				outputfile: '<%= project.styles_critical %>/base.css',
			},
		},
		base_mobile : {
			options: {
				url: 'http://local.altair/base',
				filename:'<%= project.styles_dev %>/main.dev.css',
				forceInclude: [], // An array of selectors that you want to guarantee will make it from the CSS file into your CriticalCSS output.
				width: 420, // iPhone 6 Plus is 414 points wide
				height: 960, //iPhone 6 Plus is 736 points high
				outputfile: '<%= project.styles_critical %>/base_mobile.css',
			},
		},
	});

};
