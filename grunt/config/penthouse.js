module.exports = function(grunt) {

	grunt.config('penthouse', {
		home : {
			url: 'http://local.vanwunnik.com',
			outfile: '<%= project.styles_critical %>/home.css',
			css: '<%= project.styles_dev %>/main.dev.css',
			width: 1440,
			height: 900,
		},
		home_mobile : {
			url: 'http://local.vanwunnik.com',
			outfile: '<%= project.styles_critical %>/home_mobile.css',
			css: '<%= project.styles_dev %>/mobile.dev.css',
			width: 420, // iPhone 6 Plus is 414 points wide
			height: 960, //iPhone 6 Plus is 736 points high
		},
		information : {
			url: 'http://local.vanwunnik.com/information',
			outfile: '<%= project.styles_critical %>/information.css',
			css: '<%= project.styles_dev %>/main.dev.css',
			width: 1440,
			height: 900,
		},
		information_mobile : {
			url: 'http://local.vanwunnik.com/information',
			outfile: '<%= project.styles_critical %>/information_mobile.css',
			css: '<%= project.styles_dev %>/mobile.dev.css',
			width: 420, // iPhone 6 Plus is 414 points wide
			height: 960, //iPhone 6 Plus is 736 points high
		},
		work : {
			url: 'http://local.vanwunnik.com/work',
			outfile: '<%= project.styles_critical %>/work.css',
			css: '<%= project.styles_dev %>/main.dev.css',
			width: 1440,
			height: 900,
		},
		work_mobile : {
			url: 'http://local.vanwunnik.com/work',
			outfile: '<%= project.styles_critical %>/work_mobile.css',
			css:'<%= project.styles_dev %>/mobile.dev.css',
			width: 420, // iPhone 6 Plus is 414 points wide
			height: 960, //iPhone 6 Plus is 736 points high
		},
		painting : {
			url: 'http://local.vanwunnik.com/work/horizontal-vertical',
			outfile: '<%= project.styles_critical %>/painting.css',
			css: '<%= project.styles_dev %>/main.dev.css',
			width: 1440,
			height: 900,
		},
		painting_mobile : {
			url: 'http://local.vanwunnik.com/work/horizontal-vertical',
			outfile: '<%= project.styles_critical %>/painting_mobile.css',
			css:'<%= project.styles_dev %>/mobile.dev.css',
			width: 420, // iPhone 6 Plus is 414 points wide
			height: 960, //iPhone 6 Plus is 736 points high
		},
		journal : {
			url: 'http://local.vanwunnik.com/journal',
			outfile: '<%= project.styles_critical %>/journal.css',
			css: '<%= project.styles_dev %>/main.dev.css',
			width: 1440,
			height: 900,
		},
		journal_mobile : {
			url: 'http://local.vanwunnik.com/journal',
			outfile: '<%= project.styles_critical %>/journal_mobile.css',
			css:'<%= project.styles_dev %>/mobile.dev.css',
			width: 420, // iPhone 6 Plus is 414 points wide
			height: 960, //iPhone 6 Plus is 736 points high
		},
		exhibitions : {
			url: 'http://local.vanwunnik.com/exhibitions',
			outfile: '<%= project.styles_critical %>/exhibitions.css',
			css: '<%= project.styles_dev %>/main.dev.css',
			width: 1440,
			height: 900,
		},
		exhibitions_mobile : {
			url: 'http://local.vanwunnik.com/exhibitions',
			outfile: '<%= project.styles_critical %>/exhibitions_mobile.css',
			css:'<%= project.styles_dev %>/mobile.dev.css',
			width: 420, // iPhone 6 Plus is 414 points wide
			height: 960, //iPhone 6 Plus is 736 points high
		},
		contact : {
			url: 'http://local.vanwunnik.com/contact',
			outfile: '<%= project.styles_critical %>/contact.css',
			css: '<%= project.styles_dev %>/main.dev.css',
			width: 1440,
			height: 900,
		},
		contact_mobile : {
			url: 'http://local.vanwunnik.com/contact',
			outfile: '<%= project.styles_critical %>/contact_mobile.css',
			css:'<%= project.styles_dev %>/mobile.dev.css',
			width: 420, // iPhone 6 Plus is 414 points wide
			height: 960, //iPhone 6 Plus is 736 points high
		},
	});

};
