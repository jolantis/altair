# Alphabetise Plugin

## What is it?

The Alphabetise plugin will alphabetise a given [Kirby CMS](http://getkirby.com/) *page* array or *tag* array and return it for further processing/display as an alphabetised array.

*The array whose key your are trying to sort on should of course only contain letters of the alphabet, if not problems may occur.*

*Also the code (explode) uses a '~' tilde, if you use this in your key, especially at the beginning of the string, then you could run into sorting problems. You could of course manually change it if required.*

## Installation

Put all the files into your **site/plugins/alphabetise** folderor use the [Kirby CLI](https://github.com/getkirby/cli): In your project folder, from the command line, enter:
```kirby plugin:install shoesforindustry/kirby-plugins-alphabetise```
To update the plugin use:
```kirby plugin:update shoesforindustry/kirby-plugins-alphabetise```

## How to use it?

####Example 1: Alphabetical list of child pages using page title as the key:
#####A
+ Aa page
+ Ab page

---

#####B
+ Ba page
+ Bb page

---

In your template call, it like this:
```php
<?php $alphabetise = alphabetise($page->children()->visible()->sortby('title'), array('key' => 'title')); ?>
```
The first argument you pass is the sorted **page** array you want to *alphabetise*. The second array **key** argument is so you can set what you want to *alphabetise* by. It should be a string like a page 'title'. The 'sortby' and the 'key' should usually be the same.

You then want to loop through the returned results and display them for example:
```php
<?php foreach($alphabetise as $letter => $items): ?>
  <h4><?php echo strtoupper($letter) ?></h4>
  <ul>
    <?php foreach($items as $item): ?>
      <li>
        <a href="<?php echo $item->url()?>">
          <?php echo $item->title()?>
        </a>
      </li>
    <?php endforeach ?>
  </ul>
  <hr/>
<?php endforeach ?>
```

####Example2: Alphabetical list of tags using tag name as the key

#####A
+ Aa tag
+ Ab tag

---

#####B
+ Ba tag
+ Bb tag

**You require the tag plugin for this bit to work!** and *'pages'* in this example are the *pages* you want to get *tags* for.
(See the [taglcoud plugin documentation](https://github.com/bastianallgeier/kirbycms-extensions/blob/master/plugins/tagcloud/tagcloud.php) for more information.)

In your template call it like this:
```php
<?php $alphabetise = alphabetise(tagcloud(($pages->find('pages')), array('sort' => 'name','sortdir'  => 'asc')), array('key' => 'name')); ?>
```

The first argument you pass is the **tagcloud** array you want to *alphabetise*. The second array **key** argument is so you can set what you want to *alphabetise* by. It should be a string like a tag 'name'.

You then want to loop through the returned results and display, note we are using **$item->name** not *item->title* as tags don't have titles, for example:

```php
<?php foreach($alphabetise as $letter => $items): ?>
  <h4><?php echo strtoupper($letter) ?></h4>
  <ul>
    <?php foreach($items as $item): ?>
      <li>
        <a href="<?php echo $item->url()?>">
          <?php echo $item->name()?>
        </a>
      </li>
    <?php endforeach ?>
  </ul>
  <hr/>
<?php endforeach ?>
```

You can use any valid array element, so for tags you can use also add **$item->results()** for example, which is the number of items with that tag:
```php
<li>
  <a href="<?php echo $item->url()?>">
    <?php echo $item->name().' ('.($item->results()).')'?>
  </a>
</li>
```

## Author
Russ Baldwin
[shoesforindustry.net](shoesforindustry.net)
