# Kirby CMS Plugin: Filterstring

A plugin for [Kirby CMS](http://getkirby.com) to exclude files that contain a specific string easier.

## Installation

Add the `filterstring` folder to your `/site/plugins` directory.

## How to use it?

You can write this to include files that contain a specific string:

```php
$page->images()->filterBy('filename','*=','cover')->first();
```

But you have to write all of this to exclude files that contain a specific string:

```php
$page->images()->filterBy('filename', '!=', $page->images()->filterBy('filename','*=','cover')->first()->filename());
```

With this simple plugin you can also write this to exclude files that contain a specific string:

```php
$page->images()->filterBy('filename', '!*=', 'cover');
```

## Requirements

- Kirby 2.x (other versions untested)
- PHP 7.x (other versions untested)

## Author

This plugin is developed and (sometimes) maintained by Jonathan van Wunnik [artlantis.nl](https://artlantis.nl).

The code is baded on some code exmples from Nico Hoffmann ([distantnative.com](http://distantnative.com)) and Tobias Weh ([tobiw.de](http://tobiw.de)), posted in the [Kirby forum](https://forum.getkirby.com/t/filter-to-exclude-files-that-contain-specific-string-in-their-name/573).

## License

Code and contributions have '[MIT License](./license.md)'.
