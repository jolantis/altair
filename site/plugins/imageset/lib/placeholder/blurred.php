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
// use Str;

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

    // $background = 'data:image/svg+xml;charset=utf-8,' . rawurlencode( str::template(
    //   '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"'
    //   . ' class="{class}" width="{width}" height="{height}" viewBox="0 0 {width} {height}">'
    //     . '<filter id="blur" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">'
    //       . '<feGaussianBlur stdDeviation="10 10" edgeMode="duplicate" />'
    //       . '{edgesFilter}'
    //     . '</filter>'
    //     . '<image filter="url(#blur)" xlink:href="{image}" x="0" y="0" height="100%" width="100%"/>'
    //   . '</svg>', [
    //     'class'       => $this->option('class'),
    //     'width'       => $this->thumb->width(),
    //     'height'      => $this->thumb->height(),
    //     'image'       => $this->thumb->dataUri(),
    //     'edgesFilter' => !$this->option('alpha') ? '<feComponentTransfer><feFuncA type="discrete" tableValues="1 1" /></feComponentTransfer>' : '',
    //   ]));
  }
  
}
