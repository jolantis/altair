<?php ///////////////////////////////////////////////////////
// ----------------------------------------------------------
// SNIPPET
// ----------------------------------------------------------
////////////////////////////////////////////////////////// ?>

<!-- (Custom) styling -->

<link rel="stylesheet" property="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css" />

<!-- Container -->

<div id="leaflet-map" class="FluidEmbed FluidEmbed--16by9 u-spaceTrailerM"></div>

<!-- Scripts -->

<script src="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js"></script>
<script>
	// Init map
	var latlng = L.latLng(50.9736519, 5.978574);
	var map = L.map('leaflet-map', {
		attributionControl: false,
		minZoom: 2,
		maxZoom: 18
	}).setView(latlng, 15);

	// Map styles/labels (http://leaflet-extras.github.io/leaflet-providers/preview/)
	var stamen_toner_lite = L.tileLayer('http://{s}.tile.stamen.com/toner-lite/{z}/{x}/{y}.png');
	var stamen_toner_background = L.tileLayer('http://{s}.tile.stamen.com/toner-background/{z}/{x}/{y}.png');
	var stamen_watercolor = L.tileLayer('http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png');
	var acetate_labels = L.tileLayer('http://a{s}.acetate.geoiq.com/tiles/acetate-labels/{z}/{x}/{y}.png');
	var acetate_roads = L.tileLayer('http://a{s}.acetate.geoiq.com/tiles/acetate-roads/{z}/{x}/{y}.png');

	// Marker
	var marker = L.marker(latlng, {
		title: 'Title',
		alt: 'Alt',
		opacity: .88,
	});

	// Create (add to) map
	// stamen_toner_lite.addTo(map);
	// stamen_toner_background.addTo(map);
	stamen_watercolor.addTo(map);
	acetate_roads.addTo(map);
	acetate_labels.addTo(map);
	marker.addTo(map);
</script>
