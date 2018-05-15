<?php ///////////////////////////////////////////////////////
// ----------------------------------------------------------
// PARTIAL :: DESKTOP
// ----------------------------------------------------------
////////////////////////////////////////////////////////// ?>

	<?php snippet('nav-main'); ?>

	<div role="contentinfo" class="contentinfo contain-width">
		<footer>
			<p>&copy; <?php echo '2014&ndash;' . date("Y"); ?> <a href="<?php echo $site->url(); ?>"><?php echo $site->copyright()->smartypants(); ?></a>.</p>
			<p><small>All contents licensed under a <a rel="license" href="https://creativecommons.org/licenses/by-nc-nd/4.0/" title="Creative Commons Attribution-Non-Commercial-No-Derivs 4.0 International">CC BY-NC-ND license</a>.</small></p>
		</footer>
	</div>

	<?php snippet('google-analytics'); ?>
</body>
</html>
