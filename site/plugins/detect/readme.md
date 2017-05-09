# Kirby CMS Plugin: Detect

A plugin for [Kirby CMS](http://getkirby.com) to load a device specific snippets based on the detected device class, e.g. mobile or desktop (tablet is possible too, but disabled by default).

## How to use it?

* First add the `detect` folder to your `/site/plugins` directory.
* Create device specific snippets by adding the `.desktop` postfix to snippets in the `/snippets` folder (e.g. html-head.desktop.php)
* Include the device-specific snippet:

```php
<?php snippet_detect('header'); ?>
```

* Or to display certain parts of a template to specific device classes (e.g. desktop or mobile):

```php
<?php if(s::get('device_class') == 'desktop'): ?>
  This is only displayed on desktop.
<?php endif; ?>

<?php if(s::get('device_class') == 'mobile'): ?>
  This is only displayed on mobile.
<?php endif; ?>
```

### Tablet device class detection

To enable tablet (besides mobile) device class detection, find and out-comment the following lines in the `detect.php` file:

```php
elseif($detect->isTablet()) {
  s::set('device_class', 'tablet');
}
```

Now make sure there are tablet device specific snippets by adding the `.tablet` postfix to the snippet file name (e.g. `html-head.tablet.php`).

## Requirements

- Kirby 2.x (other versions untested)
- PHP 7.x (other versions untested)

## Authors

This project is developed and (sometimes) maintained by Marijn Tijhuis [fatpixel.nl](https://fatpixel.nl) and Jonathan van Wunnik [artlantis.nl](https://artlantis.nl).

## License

Code and contributions have '[MIT License](./license.md)'.

## Credits

Credits go to [PHP Mobile Detect library](https://github.com/serbanghita/Mobile-Detect) by Browserstack.com -- without this script the Detect plugin wouldn't work.
