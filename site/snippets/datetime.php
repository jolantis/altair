<?php ///////////////////////////////////////////////////////
// ----------------------------------------------------------
// SNIPPET
// ----------------------------------------------------------
// Add a date field to your content file like this:
// Date: dd/mm/YYYY or Date: YYYY-mm-dd
// more info here: http://bit.ly/I9yabi and http://bit.ly/I9y4k6
// ----------------------------------------------------------
////////////////////////////////////////////////////////// ?>

<?php if($page->date($format=true)): ?>
	<time datetime="<?php echo $page->date('c'); ?>" pubdate="Pubdate"><?php echo $page->date('Y-m-d'); ?></time>
<?php else: ?>
	<p>No (correct) date field defined in content file!</p>
<?php endif; ?>
