<?php

/**
 *  Returns the srcset attribute value for a given Kirby file
 *  Generates thumbnails on the fly
 *
 *  @param   File  $file
 *  @param   Int   $quality
 *  @param   Bool  $crop
 *
 *  @uses   figure_get_srcset_array
 *  @uses   thumb
 *
 *  @return  string
 */

function figure_get_srcset( $file, $quality, $crop, $cropratio ) {

    if(isset($cropratio) && isset($crop)) {
        $maxthumbheight = figure_height_by_cropratio( $cropratio, kirby()->option('responsiveimages.sources')['max']['width'] );
    }
    else {
        $maxthumbheight = null;
    }

    $maxthumb = thumb($file, array(
        'width' => kirby()->option('responsiveimages.sources')['max']['width'],
        'quality' => $quality,
        'crop' => $crop,
        'height' => $maxthumbheight,
    ));
    $srcset = $maxthumb->url() .' '. $maxthumb->width() .'w';
    $sources_arr = figure_get_srcset_array( $file );

    foreach ($sources_arr as $source) {
        $source['quality'] = $quality;
        $source['crop'] = $crop;

        if(isset($cropratio) && isset($crop)) {
            $source['height'] = figure_height_by_cropratio( $cropratio, $source['width'] );
        }

        $thumb = thumb($file, $source);
        $srcset .= ', '. $thumb->url() .' '. $thumb->width() .'w';
    }
    return $srcset;
}

/**
 *  Returns the image sources for a given Kirby file
 *
 *  @param   File  $file
 *
 *  @return  array
 */
function figure_get_srcset_array( $file ) {
    $sources_arr = kirby()->option('responsiveimages.sources');

    // set some arbitrary defaults
    if (empty($sources_arr)) {
        $sources_arr = array(
            'small'  => array('width' => 480),
            'medium' => array('width' => 768),
            'large'  => array('width' => 1200),
        );
    }
    return $sources_arr;
}

/**
 * Returns the height for a given cropratio and width
 *
 * @param   String    $cropratio
 * @param   Int       $width
 *
 * @uses    figure_convert_cropratio
 *
 * @return  String
 */

function figure_height_by_cropratio( $cropratio, $width ) {
    // calculate new thumb height based on cropratio
    return round($width * figure_convert_cropratio($cropratio));
}

/**
 * Convert the cropratio to a decimal string if needed
 * Checks if the provided ratio is a fraction string
 *
 * @param   String    $cropratio
 *
 * @return  Int
 */

function figure_convert_cropratio( $cropratio ) {
    // if cropratio is a fraction string (e.g. 1/2)
    if(strpos($cropratio, '/') !== false) {
        list($numerator, $denominator) = str::split($cropratio, '/');
        // convert to decimal
        $cropratio = $numerator / $denominator;
    }
    return $cropratio;
}

?>