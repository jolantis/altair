/**
 * head.script.js
 *
 * Essential scripts, to be loaded in the head of the document
 * Use gruntfile.js to include the necessary script files.
 */

/**
 * Enhance
 *
 * Check if the browser cuts-the-mustard (is an 'HTML4 or HTML5' browser),
 * and can therefore be progressively enhanced.
 * See:
 * - http://responsivenews.co.uk/post/18948466399/cutting-the-mustard
 * - https://github.com/filamentgroup/enhance
 *
 * Always enabled; it's added in the gruntfile.js in the jsfiles section.
 */

// assets/javascript/vendor/enhance.js,

/**
 * Font Face Observer
 *
 * Font Face Observer is a small @font-face loader and monitor compatible with
 * any web font service (Google Fonts, Typekit, and Webtype or be self-hosted).
 *
 * It will monitor when a web font is applied to the page and notify you.
 * It does not limit you in any way in where, when, or how you load your web
 * fonts. Unlike the Web Font Loader Font Face Observer uses scroll events to
 * detect font loads efficiently and with minimum overhead.
 *
 * Enable the use of Font Face Observer, by adding (out-commenting) the correct
 * line in the gruntfile.js in the 'plugins' part of the 'JS files and
 * order' section for both main and mobile scripts, plus add (out-commenting)
 * the Font Face Observer class in the `others` section.
 *
 * Add the (local) font files to be used to the `/assets/fonts` directory,
 * update the corrrespoding stylesheet (`/assets/fonts/<fontname>/<fontname>.css`),
 * and import the stylesheet in the `main.scss` file. Last but ot least, update
 * the font stacks in `settings.typohraphy.scss` and among others, add/incldue
 * the fonts to the base (html element) and headings Sass partials.
 */

// assets/javascript/vendor/fontfaceobserver.js',
