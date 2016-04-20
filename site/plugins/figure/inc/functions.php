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

/**
 *  Returns the sizes attribute value for a given Kirby file
 *
 *  @param   File  $file
 *  @param   int  $width  Optional. Use when you want to force image to a certain width (retina/high-PPi usecase)
 *  @uses   figure_get_sizes_array()
 *
 *  @return  string
 */
function figure_get_sizes( $file, $width = null, $imgclass = array() ) {

    $sizes = '';
    $sizes_arr = figure_get_sizes_array( $file, $width );

    foreach ( $sizes_arr as $key => $size ) {

        // skip if the size should only be applied to a given class
        if (is_string($key) && ! empty($imgclass) && ! in_array($key, $imgclass)) {
            continue;
        }

        // Use 100vw as the size value unless something else is specified.
        $size_value = ( $size['size_value'] ) ? $size['size_value'] : '100vw';
        // If a media length is specified, build the media query.
        if ( ! empty( $size['mq_value'] ) ) {
            $media_length = $size['mq_value'];
            // Use max-width as the media condition unless min-width is specified.
            $media_condition = ( ! empty( $size['mq_name'] ) ) ? $size['mq_name'] : 'max-width';
            // If a media_length was set, create the media query.
            $media_query = '(' . $media_condition . ": " . $media_length . ') ';
        } else {
            // If not meda length was set, $media_query is blank.
            $media_query = '';
        }
        // Add to the source size list string.
        $sizes .= $media_query . $size_value . ', ';
    }
    // Remove the trailing comma and space from the end of the string.
    $sizes = substr( $sizes, 0, -2 );

    return $sizes;
}

/**
 *  Returns the sizes for a given Kirby file
 *
 *  Uses 'responsiveimages.sizes' option to let site owners overwrite the defaults
 *
 *  @param   File  $file
 *  @param   int  $width  Optional. Use when you want to force image to a certain width (retina/high-PPi usecase)
 *
 *  @return  array
 */
function figure_get_sizes_array( $file, $width = null ) {

    // let users overwrite the sizes via config
    $sizes_arr = kirby()->option('responsiveimages.sizes');

    $widthname = (is_null($width)) ? 'default' : $width;
    $sizes_arr = $sizes_arr[$widthname];

    // let users overwrite the native image size via attribute
    $img_width = $file->width() . 'px';

    // default to the image width
    if (empty($sizes_arr)) {
        $sizes_arr = array(
            array(
                'size_value' => '100vw',
                'mq_value'   => $img_width,
                'mq_name'    => 'max-width'
            ),
            array(
                'size_value' => $img_width
            ),
        );
    } else {
        $sizes_arr = array_map(function($value) use ($img_width) {
            // allow config rules relative to native image size
            return str_replace( '$img_width', $img_width, $value );
        }, $sizes_arr);
    }

    return $sizes_arr;
}

?>