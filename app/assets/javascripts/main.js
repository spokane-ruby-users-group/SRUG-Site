window.onload = function(){
	var map = L.map('map').setView([47.652341, -117.411220], 13);

	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		attribution: 'Map data &copy;',
		maxZoom: 18,
		zoomControl: false
	}).addTo(map);

	// L.marker([47.673341, -117.410271])
	// .addTo(map)
	// .bindPopup('123 W Nth St. @ The Old Arma Cell Building <br /> <a href="https://maps.google.com/maps?f=d&source=s_d&saddr=Current+Location&daddr=47.663509,+-117.421599&hl=en" target="_blank">Directions</a>');
}