# Bgimage plugin

A plugin for [Kirby CMS](http://getkirby.com/) that generates a (lazyloaded) background image `div`.

## Installation

Put the `bgimage` folder in `/site/plugins` directory.

Update the contents of the included `/template/bgimage.php` template file to your likings and setup.

## How to use it

You can use this in a template file.

## Example usage

### Snippets

```php
<?php echo bgimage($page->images()->first(), array('class' => 'bg-image default-16by9')); ?>
```

or…

```<?php
<?php echo bgimage($page->images()->first(), array('width' => 1200, 'cropratio' => 2/3, 'class' => 'bg-image default-16by9')); ?>
```

### Options

Check out the `$defaults` array in `bgimage.php` for all options.

## Author

Jonathan van Wunnik, Marijn Tijhuis
<http://studiodumbar.com>
