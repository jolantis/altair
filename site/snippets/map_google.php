<?php ///////////////////////////////////////////////////////
// ----------------------------------------------------------
// SNIPPET
// ----------------------------------------------------------
////////////////////////////////////////////////////////// ?>

<!-- (Custom) styling -->

<style>
	/* Hide map (branding) elements */
	div.gm-style-cc { display: none; }
	div.gm-style > div:nth-child(2) { display: none; }
	img { max-width: none; }
	img[src="https://maps.gstatic.com/mapfiles/api-3/images/google_white2.png"] { display: none; }
</style>

<!-- Container -->

<div id="google-map" class="FluidEmbed FluidEmbed--16by9"></div>
<?php /*
<noscript class="FluidEmbed FluidEmbed--16by9">
	<img src="http://maps.googleapis.com/maps/api/staticmap?center=Eindstraat+58,+Schinveld&amp;zoom=13&amp;scale=1&amp;size=600x300&amp;maptype=roadmap&amp;sensor=false&amp;format=png&amp;visual_refresh=true&amp;markers=size:mid%7Ccolor:red%7Clabel:%7CEindstraat+58,+Schinveld" alt="Google Map of Eindstraat 58, Schinveld">
</noscript>
*/ ?>

<!-- Scripts -->

<script src="https://maps.googleapis.com/maps/api/js"></script>
<script>
	google.maps.event.addDomListener(window, 'load', init);
	function init() {
		var mapElement = document.getElementById('google-map');
		var mapLatlng = new google.maps.LatLng(50.9736519, 5.978574);
		var mapOptions = {
			zoom: 15,
			center: mapLatlng,
			disableDefaultUI: true,
			panControl: false,
			scaleControl: false,
			zoomControl: true,
			zoomControlOptions: {
				style: google.maps.ZoomControlStyle.SMALL,
				position: google.maps.ControlPosition.LEFT_BOTTOM
			},
			// Styles from http://snazzymaps.com
			// styles: [{featureType:"administrative",stylers:[{visibility:"off"}]},{featureType:"poi",stylers:[{visibility:"simplified"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"simplified"}]},{featureType:"water",stylers:[{visibility:"simplified"}]},{featureType:"transit",stylers:[{visibility:"simplified"}]},{featureType:"landscape",stylers:[{visibility:"simplified"}]},{featureType:"road.highway",stylers:[{visibility:"off"}]},{featureType:"road.local",stylers:[{visibility:"on"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{visibility:"on"}]},{featureType:"water",stylers:[{color:"#84afa3"},{lightness:52}]},{stylers:[{saturation:-17},{gamma:0.36}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#3f518c"}]}]
			// styles: [{"stylers":[{"saturation":-100},{"gamma":0.8},{"lightness":4},{"visibility":"on"}]},{"featureType":"landscape.natural","stylers":[{"visibility":"on"},{"color":"#5dff00"},{"gamma":4.97},{"lightness":-5},{"saturation":100}]}]
			styles: [{featureType:"landscape",stylers:[{saturation:-100},{lightness:65},{visibility:"on"}]},{featureType:"poi",stylers:[{saturation:-100},{lightness:51},{visibility:"simplified"}]},{featureType:"road.highway",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"road.arterial",stylers:[{saturation:-100},{lightness:30},{visibility:"on"}]},{featureType:"road.local",stylers:[{saturation:-100},{lightness:40},{visibility:"on"}]},{featureType:"transit",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"administrative.province",stylers:[{visibility:"off"}]/**/},{featureType:"administrative.locality",stylers:[{visibility:"off"}]},{featureType:"administrative.neighborhood",stylers:[{visibility:"on"}]/**/},{featureType:"water",elementType:"labels",stylers:[{visibility:"on"},{lightness:-25},{saturation:-100}]},{featureType:"water",elementType:"geometry",stylers:[{hue:"#ffff00"},{lightness:-25},{saturation:-97}]}]
			// styles: [{featureType:'water',elementType:'all',stylers:[{hue:'#000000'},{saturation:-100},{lightness:-100},{visibility:'simplified'}]},{featureType:'landscape',elementType:'all',stylers:[{hue:'#FFFFFF'},{saturation:-100},{lightness:100},{visibility:'simplified'}]},{featureType:'landscape.man_made',elementType:'all',stylers:[]},{featureType:'landscape.natural',elementType:'all',stylers:[]},{featureType:'poi.park',elementType:'geometry',stylers:[{hue:'#ffffff'},{saturation:-100},{lightness:100},{visibility:'off'}]},{featureType:'road',elementType:'all',stylers:[{hue:'#333333'},{saturation:-100},{lightness:-69},{visibility:'simplified'}]},{featureType:'poi.attraction',elementType:'geometry',stylers:[{hue:'#ffffff'},{saturation:-100},{lightness:100},{visibility:'off'}]},{featureType:'administrative.locality',elementType:'geometry',stylers:[{hue:'#ffffff'},{saturation:0},{lightness:100},{visibility:'off'}]},{featureType:'poi.government',elementType:'geometry',stylers:[{hue:'#ffffff'},{saturation:-100},{lightness:100},{visibility:'off'}]}]
		};
		var map = new google.maps.Map(mapElement, mapOptions);
		var marker = new google.maps.Marker({
			position: mapLatlng,
			map: map,
			// icon: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png', // Different colored markers: https://sites.google.com/site/gmapsdevelopment/
			title: 'Hello World!'
		});
	}
</script>
