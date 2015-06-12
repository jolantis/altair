<ul class="teaser">
<?php foreach ($calendar->getEvents() as $event): ?>
	<?php if (--$items < 0) break; ?>
	<li><strong><?php echo $event->getBeginHtml(); ?></strong>
		<?php foreach ($fields as $key => $value): ?>
			<?php echo ' '.$event->getField($key); ?>
		<?php endforeach; ?>
	</li>
<?php endforeach; ?>
</ul>
