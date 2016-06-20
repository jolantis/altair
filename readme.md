# Altair

Altair is a Sass- and Grunt-based front-end starter kit, built on top of file-based CMS Kirby.

## Kirby

Kirby is a file-based CMS, meaning no database is involved for storing (and retrieving) content. All content is stored in plain text files (located in the `/content` folder). For more information about Kirby CMS go here: [http://getkirby.com](http://getkirby.com).

### The panel

The Kirby [Panel](https://github.com/getkirby/panel) is not (yet) a part of Altair, but can easily be added.

## Installation

Altair (or for that matter Kirby) does not require a database, which makes it pretty straightforward to install.

### Server requirements

Altair runs on PHP 5.3+, Apache or Nginx.

### Dev requirements

* Node.js
* Grunt

### With Git

If you are familiar with Git, clone Altair’s repository from Github.

````
git clone --recursive https://github.com/studiodumbar/altair.git
````

The `--recursive` flag is necessary to initiate and pull the kirby and toolkit submodules.

1. Make sure that all folders and files within content are writable
2. Make sure the thumbs folder is writable
3. Rename both site/config/config.local.altair.php and site/config/config.altair.studiodumbar.com.php to reflect your own local and staging environments URL’s.
4. Make sure to update and/or check in site/config/config.php the following config variables:

````
c::set('license', 'your license key');
c::set('google.analytics.id', 'TRACKING ID IS NOT SET');
````

### Grunt

To run Altair locally, assets have to be generated:

1. In command: `sudo npm install`
2. To generate dev assets and starting watch task: `grunt develop` or just `grunt`
3. Other configured grunt tasks:  
	
	- `grunt styles` — generate dev styles only
	- `grunt scripts` — generate dev scripts only
	- `grunt criticalcss` — generate [criticalCSS](https://github.com/filamentgroup/criticalCSS) only
	- `grunt icons` — generate [grunticon](https://github.com/filamentgroup/grunticon) icon images (svg + png fallback) only
	- `grunt imageoptim` — optimize all jpg’s and png’s in content folder only

4. To deploy to staging and/or production environment: `grunt build` (version number is bumped from 0.0.2 to 0.0.3 and minified assets are generated)
5. To bump version number from 0.0.x to 0.1.0: `grunt release`

## Authors

[Jonathan van Wunnik](https://github.com/jolantis) ([Studio Dumbar](http://studiodumbar.com))  
[Marijn Tijhuis](https://github.com/fatpixelstudio) ([Fat Pixel Studio](http://www.fatpixel.nl))

## Website

[http://altair.studiodumbar.com](http://altair.studiodumbar.com)

## License

[MIT license](http://opensource.org/licenses/mit-license.php)






