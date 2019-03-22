# Kirby CMS Plugin: Titlecase

A field method for [Kirby CMS](http://getkirby.com) to convert text to Title Case.

## How to use it?

Call from template:

```php
  <?php echo titlecase('Resulting in a Cool Title Case Title'); ?>
```

or

```php
  <?php echo $site->title()->smartypants()->titlecase(); ?>
```

## Requirements

- Kirby 2.x (other versions untested)
- PHP 7.x (other versions untested)

## Authors

This plugin is developed and (sometimes) maintained by Marijn Tijhuis [fatpixel.nl](https://fatpixel.nl) and Jonathan van Wunnik [jonathanvanwunnik.com](https://jonathanvanwunnik.com).

## License

Code and contributions have '[MIT License](./license.md)'.

## Credits

Credits go to Camen Design's [PHP Title Case script](http://camendesign.com/code/title-case) (what was originally a John Gruber Perl script).
