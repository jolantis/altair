# Kirby CMS Plugin: Textbeautifier

This is a small plugin that beautifies [Kirbytext](https://getkirby.com/docs/developer-guide/kirbytext) with a [Kirbytext filter](https://getkirby.com/docs/developer-guide/kirbytext/filters).

It works with Markdown and Kirbytext.

## Supported Beautifiers

1. `—` em-dash: Wraps an em-dash that has no whitespace around with a hair-space.
2. `–`em-dash: Wraps an en-dash that has no whitespace around with a hair-space.

## Installation

### Using the [Kirby CLI](https://github.com/getkirby/cli#kirby-plugininstall)

    $ kirby plugin:install anselmh/kirby-textbeautifier

### Install manually

1. [Download Kirby textbeautifier](https://github.com/anselmh/kirby-textbeautifier/archive/master.zip) from Github
2. Copy the patterns folder into `/site/plugins` (Create the plugins folder if it does not exist yet)

## Requirements

- Kirby 2.x (other versions untested)
- PHP 7.x (other versions untested)

## Author

This plugin is developed and maintained by [Anselm Hannemann](https://helloanselm.com/).

## LICENSE

Code and contributions have '[MIT License](./license.md)'.
