# Kirby CMS Plugin: Tagslug

A plugin for [Kirby CMS](http://getkirby.com) to convert a tag name to a slug (url) string (e.g. convert *Interactive & Web* to *interactive-and-web*).

## How to use it?

Call from template:

```php
<?php foreach(str::split($page->tags(),',') as $tag): ?>
  <a href="<?php echo $page->parent()->url().'/tag:'.tagslug($tag); ?>">
    <?php echo $tag; ?>
  </a><?php if($i < (count($tags) -1)): echo ', '; endif; ?>
<?php endforeach; ?>
```

## Requirements

- Kirby 2.x (other versions untested)
- PHP 7.x (other versions untested)

## Authors

This plugin is developed and (sometimes) maintained by Marijn Tijhuis [fatpixel.nl](https://fatpixel.nl) and Jonathan van Wunnik [artlantis.nl](https://artlantis.nl).

## License

Code and contributions have '[MIT License](./license.md)'.
