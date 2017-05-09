# Kirby CMS Plugin: Tagunslug

A plugin for [Kirby CMS](http://getkirby.com) to convert a tag slug (see *tagslug* plugin) string to a human readable tag name (e.g. convert *interactive-and-web* to *Interactive & Web*).

## How to use it?

Call from template:

```php
<?php
  $key = key(param());
  $tag = tagunslug(param(key(param())));
  $products = $page->children()->visible()->filterBy($key, ($tag), ',')->flip()->paginate(24);
?>

<?php foreach($paintings as $painting):	?>
  ...
<?php endforeach; ?>
```

## Requirements

- Kirby 2.x (other versions untested)
- PHP 7.x (other versions untested)

## Authors

This plugin is developed and (sometimes) maintained by Marijn Tijhuis [fatpixel.nl](https://fatpixel.nl) and Jonathan van Wunnik [artlantis.nl](https://artlantis.nl).

## License

Code and contributions have '[MIT License](./license.md)'.
