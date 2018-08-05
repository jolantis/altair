<?php ///////////////////////////////////////////////////////
// ----------------------------------------------------------
// PARTIAL
// ----------------------------------------------------------
////////////////////////////////////////////////////////// ?>

<?php snippet('nav-main'); ?>

<div role="contentinfo" class="contentinfo">
	<div class="copy copy--contain beta-heading space-trailer-m">
		<?php echo $site->footer_text()->kirbytext(); ?>
	</div>

	<footer class="medium-aligner contain-padding">
		<p>&copy; <?php echo '2002&ndash;' . date("Y"); ?> <a href="https://jonathanvanwunnik.com" rel="me"><?php echo $site->copyright()->smartypants(); ?></a></p>
		<p class="medium-aligner__item--right">All contents licensed under a <a rel="license" href="https://creativecommons.org/licenses/by-nc-nd/4.0/" title="Creative Commons Attribution-Non-Commercial-No-Derivs 4.0 International">CC BY-NC-ND license</a></p>
	</footer>
</div>
