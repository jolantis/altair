<?php ///////////////////////////////////////////////////////
// ----------------------------------------------------------
// FEED TEMPLATE
// ----------------------------------------------------------
/////////////////////////////////////////////////////////////

// Set date format
$date_format = (c::get('date.handler') == 'strftime') ? '%a, %d %b %Y %H:%M:%S %z' : 'r';

// Reset class(es) set on imageset figure (wrapper)
$kirby->set('option', 'imageset.tags.image.class', '');

// Generate plain markup for imagesets
imageset::outputStyle('plain');

// Overrule imageset presets for rss feed
imageset::presets([
	'default' => '300-1600,3',
	'1of2'    => '300-1600,3',
	'1of3'    => '300-1600,3',
]);

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
			<item>
				<title><?php echo xml($item->title()); ?></title>
				<link><?php echo xml($item->url()); ?></link>
				<guid><?php echo xml($item->id()); ?></guid>
				<pubDate><?php echo $datefield == 'modified' ? $item->modified($date_format) : $item->date($date_format, $datefield); ?></pubDate>

				<?php if($excerpt == true): ?>
					<?php $excerptlimit = (isset($excerptlimit)) ? $excerptlimit : 'words';  ?>
					<?php $excerptlenght = (isset($excerptlenght)) ? $excerptlenght : 40;  ?>
					<description><![CDATA[
						<?php echo $item->{$textfield}()->kirbytext()->excerpt($excerptlenght, $excerptlimit); ?>
						<?php if($image == true): ?>
							<?php foreach($item->images()->limit(1) as $item_image): ?>
								<?php $caption = ($item_image->caption()->isNotEmpty()) ? $item_image->caption()->smartypants() : ''; ?>
								<figure>
									<?php echo $item_image->imageset(); ?>
									<?php if($caption): ?>
										<figcaption><?php echo $caption; ?></figcaption>
									<?php endif; ?>
								</figure>
							<?php endforeach; ?>
						<?php endif; ?>
					]]></description>
				<?php else: ?>
					<description><![CDATA[
						<?php echo $item->{$textfield}()->kirbytext(); ?>
						<?php if($image == true): ?>
							<?php foreach($item->images() as $item_image): ?>
								<?php $caption = ($item_image->caption()->isNotEmpty()) ? $item_image->caption()->smartypants() : ''; ?>
								<figure>
									<?php echo $item_image->imageset(); ?>
									<?php if($caption): ?>
										<figcaption><?php echo $caption; ?></figcaption>
									<?php endif; ?>
								</figure>
							<?php endforeach; ?>
						<?php endif; ?>
					]]></description>
				<?php endif; ?>
			</item>
		<?php endforeach ?>

	</channel>
</rss>

<?php imageset::presets('reset'); ?>
