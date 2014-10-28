module.exports = function(grunt) {

	grunt.config('imageoptim', {
		options: {
			quitAfter: false,
		},
		jpgs: {
			options: {
				jpegMini: true,
				imageAlpha: false,
			},
			src: [
				// '<%= project.assets %>/images/*.jpg',
				// '<%= project.styles %>/img/*.jpg',
				'content/**/*.jpg'
			],
		},
		pngs: {
			options: {
				jpegMini: false,
				imageAlpha: true,
			},
			src: [
				// '<%= project.assets %>/images/*.png',
				// '<%= project.styles %>/img/*.png',
				'content/**/*.png'
			],
		},
	});

};
