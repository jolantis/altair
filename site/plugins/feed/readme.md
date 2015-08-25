# Feed plugin

A RSS feed plugin for [Kirby CMS](http://getkirby.com) that generates RSS feeds for any set of pages.

## Installation

Put the `feed` folder in `/site/plugins`.

## How to use it

You can use this in a template for a dedicated feed page or in a template controller.

## Example usage

```php
<?php
	echo page('blog')->children()->visible()->limit(10)->feed(array(
		'channel'     => 'blog',
		'textfield'   => 'text',
		'excerpt'     => false,
		…
	));
?>
```

Check out the `$defaults` array in *feed.php* for more options.

## Author

Bastian Allgeier
<http://getkirby.com>
