module.exports = function(grunt) {

	grunt.config('penthouse', {
		home : {
			url: 'http://local.altair',
			outfile: '<%= project.styles_critical %>/home.css',
			css: '<%= project.styles_dev %>/main.dev.css',
			width: 1440,
			height: 900,
		},
		home_mobile : {
			url: 'http://local.altair',
			outfile: '<%= project.styles_critical %>/home_mobile.css',
			css: '<%= project.styles_dev %>/mobile.dev.css',
			width: 420, // iPhone 6 Plus is 414 points wide
			height: 960, //iPhone 6 Plus is 736 points high
		},
		base : {
			url: 'http://local.altair/base',
			outfile: '<%= project.styles_critical %>/base.css',
			css: '<%= project.styles_dev %>/main.dev.css',
			width: 1440,
			height: 900,
		},
		base_mobile : {
			url: 'http://local.altair/base',
			outfile: '<%= project.styles_critical %>/base_mobile.css',
			css: '<%= project.styles_dev %>/mobile.dev.css',
			width: 420, // iPhone 6 Plus is 414 points wide
			height: 960, //iPhone 6 Plus is 736 points high
		},
		images : {
			url: 'http://local.altair/images',
			outfile: '<%= project.styles_critical %>/images.css',
			css: '<%= project.styles_dev %>/main.dev.css',
			width: 1440,
			height: 900,
		},
		images_mobile : {
			url: 'http://local.altair/images',
			outfile: '<%= project.styles_critical %>/images_mobile.css',
			css:'<%= project.styles_dev %>/mobile.dev.css',
			width: 420, // iPhone 6 Plus is 414 points wide
			height: 960, //iPhone 6 Plus is 736 points high
		},
	});

};
