<?php ///////////////////////////////////////////////////////
// ----------------------------------------------------------
// Search (results) settings
// ----------------------------------------------------------
/////////////////////////////////////////////////////////////

$search = new search(array(
	'searchfield'   => 'q',
	'ignore'        => array('search', 'error'),
	'mode'          => 'and',
	'words'         => true,
	'minlength'     => 3,
	'stopwords'     => array('the', 'or', 'in', 'and'),
	'score'         => array('title' => 4, 'text' => 2),
	'words'         => true,
	'paginate'      => 10
));

// Get the search results
$results = $search->results();

if(!empty($results)) {
	$pagination = $results->pagination();
}

////////////////////////////////////////////////////////// ?>

<?php snippet_detect('html-head', array(
	// 'criticalcss' => 'other_than_default',
)); ?>

	<?php snippet('banner'); ?>

	<main role="main" class="contain-padding copy">

		<h1>
			<?php
			if(!empty($results)) {
				echo $pagination->countItems()." searchresult(s) for <mark>".$search->query()."</mark>";
			} else {
				echo $page->title()->smartypants()->widont();
			}?>
		</h1>

		<form action="<?php echo $page-url(); ?>">
			<input type="text" placeholder="Type in your searchword…" name="q" value="<?php echo html($search->query()); ?>" class="TextInput" />
			<input type="submit" value="Search" class="Btn Btn--fancy" />
		</form>

		<div class="search-results">
			<?php if($results) : ?>

				<?php snippet('nav-pagination', array('pagination' => $pagination)); ?>

				<?php foreach($results as $result): ?>
					<article>
						<a href="<?php echo $result->url(); ?>">
							<h2 class="delta"><?php echo $result->title()->smartypants(); ?></h2>

							<!-- With sarch keyword highlighting -->
							<p><?php echo search_highlight(excerpt($result->text()), $search->query(), 10); ?></p>

							<!-- Without sarch keyword highlighting -->
							<!-- <p><?php echo excerpt($result->text()); ?></p> -->

							<p class="search-results__url"><?php echo html($result->url()); ?></p>
						</a>
					</article>
				<?php endforeach; ?>

				<?php snippet('nav-pagination', array('pagination' => $pagination)); ?>

			<?php elseif($search->query()): ?>
				<div class="SearchNoResults">No results for <strong><?php echo html($search->query()); ?></strong></div>
			<?php endif; ?>
		</div>

	</main>

<?php snippet_detect('footer'); ?>
