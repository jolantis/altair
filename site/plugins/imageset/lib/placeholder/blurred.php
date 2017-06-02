<?php
/**
 * ImageSet - responsive, lazy-loading images for Kirby CMS
 * 
 * @copyright (c) 2016 Fabian Michael <https://fabianmichael.de>
 * @link https://github.com/fabianmichael/kirby-imageset
 */

namespace Kirby\Plugins\ImageSet\Placeholder;

use F;
use Html;
use Kirby\Plugins\ImageSet\Utils;


class Blurred extends Base {

  protected $alpha;

  protected function __construct($source, $options = [], $kirby = null) {
    $this->alpha     = utils::hasTransparency($source);
    $this->extension = $this->alpha ? 'png' : 'jpg';
    parent::__construct($source, $options, $kirby);
  }

  public function make() {
     $this->thumb = $this->source->thumb([
      'imagekit.lazy'            => false,
      'width'                    => 30,
      'quality'                  => 70,
      'blur'                     => true,
      'blurpx'                   => 1,
      'destination'              => [$this, 'destination'],
    ]);
  }

  public function html() {

    $attr = [
      'src'          => $this->thumb->url(),
      'class'        => $this->option('class'),
      'alt'          => ' ', // one space generates creates empty alt attribute 
      'aria-hidden'  => 'true',
    ];

    return '<img ' . html::attr($attr) . $this->trailingSlash() . '>';
  }
  
}
