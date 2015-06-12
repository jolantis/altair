<?php ///////////////////////////////////////////////////////
// ----------------------------------------------------------
// SNIPPET
// ----------------------------------------------------------
// Favicons, apple touch, android, and pinned tab icons:
// - http://css-tricks.com/favicon-quiz
// - http://realfavicongenerator.net
// - https://mathiasbynens.be/notes/touch-icons
// - http://j.mp/1JNVn3h (more about pinned tab icon Safari)
// - https://developer.chrome.com/multidevice/android/installtohomescreen
// ----------------------------------------------------------
// Why use absolute paths?
// Some Firefox versions require absolute paths. Since all
// browsers support them, it's the simplest choice.
// https://github.com/audreyr/favicon-cheat-sheet
// ----------------------------------------------------------
// Make sure to set custom 'App name', 'Theme Color' (for Safari 9 pinned
// tab active color + Android Lollipop task bar collor in the switcher),
// and 'MS Tile Color' in the site.md file.
// ----------------------------------------------------------
// Make sure to also set correct app `name` in the
// `manifest.json` file for Android Chrome M39+.
// ----------------------------------------------------------
////////////////////////////////////////////////////////// ?>

<link rel="apple-touch-icon-precomposed" sizes="57x57" href="/assets/images/apple-touch-icon-57x57.png"> <?php // iPhone, iOS ≤ 6, @1x + Android 2.1+ devices ?>
<link rel="apple-touch-icon-precomposed" sizes="60x60" href="/assets/images/apple-touch-icon-60x60.png"> <?php // iPhone, iOS ≥ 7, @1x ?>
<link rel="apple-touch-icon-precomposed" sizes="72x72" href="/assets/images/apple-touch-icon-72x72.png"> <?php //  iPad, iOS ≤ 6, @1x ?>
<link rel="apple-touch-icon-precomposed" sizes="76x76" href="/assets/images/apple-touch-icon-76x76.png"> <?php //  iPad, iOS ≥ 7, @1x ?>
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="/assets/images/apple-touch-icon-114x114.png"> <?php // iPhone, iOS ≤ 6, @2x ?>
<link rel="apple-touch-icon-precomposed" sizes="120x120" href="/assets/images/apple-touch-icon-120x120.png"> <?php // iPhone, iOS ≥ 7, @2x and @3x ?>
<link rel="apple-touch-icon-precomposed" sizes="144x144" href="/assets/images/apple-touch-icon-144x144.png"> <?php // iPad, iOS ≤ 6, @2x ?>
<link rel="apple-touch-icon-precomposed" sizes="152x152" href="/assets/images/apple-touch-icon-152x152.png"> <?php // iPad, iOS ≥ 7, @2x ?>
<link rel="apple-touch-icon-precomposed" sizes="180x180" href="/assets/images/apple-touch-icon-180x180.png"> <?php // iPad, iOS 8, @2x ?>
<link rel="icon" type="image/svg+xml" href="/assets/images/pinned_icon.svg" sizes="any" mask> <?php // Safari 9 pinned tab ?>
<link rel="icon" type="image/png" href="/assets/images/favicon-32x32.png" sizes="32x32">
<link rel="icon" type="image/png" href="/assets/images/favicon-194x194.png" sizes="194x194">
<link rel="icon" type="image/png" href="/assets/images/favicon-96x96.png" sizes="96x96">
<link rel="icon" type="image/png" href="/assets/images/android-chrome-192x192.png" sizes="192x192">
<link rel="icon" type="image/png" href="/assets/images/favicon-16x16.png" sizes="16x16">
<link rel="manifest" href="/assets/images/manifest.json"> <?php // Android Chrome M39+ ?>

<meta name="msapplication-TileImage" content="/assets/images/mstile-144x144.png"> <?php // Microsoft Windows 8 ?>
<meta name="msapplication-TileColor" content="<?php echo ($site->ms_tile_color()->isNotEmpty()) ? $site->ms_tile_color() : '#141414' ; ?>"> <?php // Microsoft Windows 8/8.1 ?>
<?php /* <meta name="msapplication-config" content="/assets/images/browserconfig.xml"> */ ?>
<meta name="msapplication-square70x70logo" content="images/smalltile.png"> <?php // Microsoft Windows 8.1 ?>
<meta name="msapplication-square150x150logo" content="images/mediumtile.png"> <?php // Microsoft Windows 8.1 ?>
<meta name="msapplication-wide310x150logo" content="images/widetile.png"> <?php // Microsoft Windows 8.1 ?>
<meta name="msapplication-square310x310logo" content="images/largetile.png"> <?php // Microsoft Windows 8.1 ?>
<meta name="msapplication-config" content="none"> <?php // Microsoft Windows 8.1 ?>
<meta name="theme-color" content="<?php echo ($site->theme_color()->isNotEmpty()) ? $site->theme_color() : '#141414' ; ?>"> <?php // Safari 9 pinned tab active color (http://j.mp/1JNVn3h) + Android Lollipop task bar collor in the switcher (http://j.mp/1xVyGVc) ?>
<?php if($site->app_name()->isNotEmpty()): ?>
	<meta name="apple-mobile-web-app-title" content="<?php echo $site->app_name()->smartypants(); ?>"> <?php // Custom bookmarked page title on iOS ?>
	<meta name="application-name" content="<?php echo $site->app_name()->smartypants(); ?>"> <?php // Custom bookmarked page title on Windows 8 ?>
<?php endif; ?>
