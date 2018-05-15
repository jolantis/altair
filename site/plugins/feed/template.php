<?php ///////////////////////////////////////////////////////
// ----------------------------------------------------------
// FEED TEMPLATE
// ----------------------------------------------------------
/////////////////////////////////////////////////////////////

// Set date format
$date_format = (c::get('date.handler') == 'strftime') ? '%a, %d %b %Y %H:%M:%S %z' : 'r';

// Dynamic imageset presets
snippet('imageset-presets');

////////////////////////////////////////////////////////// ?>

<!-- generator="<?php echo $generator ?>" -->
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:wfw="http://wellformedweb.org/CommentAPI/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom">
	<channel>
		<title><?php echo xml($title); ?></title>
		<link><?php echo url($channel); ?></link>
		<generator><?php echo c::get('feed.generator', 'Kirby'); ?></generator>
		<lastBuildDate><?php echo date('r', $modified) ?></lastBuildDate>
		<?php /* <lastBuildDate><?php echo $site->find($channel)->modified('r'); ?></lastBuildDate> */ ?>
		<atom:link href="<?php echo url($channel); ?>.rss" rel="self" type="application/rss+xml" />

		<?php if(!empty($description)): ?>
			<description><?php echo xml($description); ?></description>
		<?php endif; ?>

		<?php foreach($items as $item): ?>

			<?php $item_image = ($item->images()->filterBy('filename','*=','main')->first()) ? $item->images()->filterBy('filename','*=','main')->first() : $item->images()->sortBy('sort', 'asc')->first(); ?>
			<?php $caption = ($item_image->caption()->isNotEmpty()) ? $item_image->caption()->smartypants() : ''; ?>

			<item>
				<title><?php echo xml($item->title()->smartypants()); ?></title>
				<link><?php echo xml($item->url()); ?></link>
				<guid><?php echo xml($item->id()); ?></guid>
				<pubDate><?php echo $datefield == 'modified' ? $item->modified($date_format) : $item->date($date_format, $datefield); ?></pubDate>

				<?php if($excerpt == true): ?>

					<?php imageset::presets('load', 'rss-excerpt'); // Overrule imageset presets; ratio 3:2, croped; 1 image after excerpt ?>

					<description><![CDATA[
						<?php $excerptlimit = (isset($excerptlimit)) ? $excerptlimit : 'words';  ?>
						<?php $excerptlenght = (isset($excerptlenght)) ? $excerptlenght : 40;  ?>
						<?php echo $item->{$textfield}()->kirbytext()->excerpt($excerptlenght, $excerptlimit); ?>

						<?php if($image == true): ?>
							<figure>
								<?php echo $item_image->imageset(); ?>
								<?php if($caption): ?>
									<figcaption><?php echo $caption; ?></figcaption>
								<?php endif; ?>
							</figure>
						<?php endif; ?>
					]]></description>

				<?php else: ?>

					<?php imageset::presets('load', 'rss-full'); // Overrule imageset presets (again); keep original ratio; all images in 'kirbytext' field ?>

					<description><![CDATA[
						<?php if($textfield != 'intro' && $item->intro()->exists() && $item->intro()->isNotEmpty()): ?>
							<?php echo $item->intro()->kirbytext(); ?>
						<?php endif; ?>
						<?php echo $item->{$textfield}()->kirbytext(); ?>

						<?php if($image == true): ?>
							<figure>
								<?php echo $item_image->imageset(); ?>
								<?php if($caption): ?>
									<figcaption><?php echo $caption; ?></figcaption>
								<?php endif; ?>
							</figure>
						<?php endif; ?>
					]]></description>

				<?php endif; ?>
			</item>

		<?php endforeach ?>

	</channel>
</rss>

<?php imageset::presets('reset'); ?>
