# Kirby CMS Plugin: Smartify

A small plugin for [Kirby CMS](http://getkirby.com) to beautify (or smartify) text.

Supported beautifiers:

1. em-dash: Wraps an em-dash that has no whitespace around with a hair-space.
2. em-dash: Wraps an en-dash that has no whitespace around with a hair-space.

## Installation

Copy the `smartify` into `/site/plugins`. (Create the plugins folder if it does not
exist yet).

## How to use it?

First make sure to add no (white)spaces around your en- and em-dashes in your (Markdown)
content files, otherwise no hair-spaces will be added (and it wouldn't make a lot of
sense to add them when there is already a whitespace!).

Depending on your Smartypants settings (config) use 2 or 3 dashes for m-dashes
(e.g. `---`, and when enabled 2 for n-dashes (e.g. `--`). The plugin makes sure

By just calling kirbytext from template:

```php
  <?php echo $page->text()->kirbytext(); ?>
```

or smartypants:

```php
  <?php echo $page->title()->smartypants(); ?>
```

Smartify piggybacks onto smartypants.

If you don't want to use Smartify anymore, then just remove the plugin folder, and
everything should just keep working (with just Smartypanst)!

## Requirements

- Kirby 2.x (other versions untested)
- PHP 7.x (other versions untested)

## Authors

This plugin is developed and (sometimes) maintained by Jonathan van Wunnik [jonathanvanwunnik.com](https://jonathanvanwunnik.com).

## License

Code and contributions have '[MIT License](./license.md)'.
