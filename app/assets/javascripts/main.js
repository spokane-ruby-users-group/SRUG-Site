window.onload = function(){
	var map = L.map('map', {zoomControl:false}).setView([47.652341, -117.411220], 13);
	map.dragging.disable();
	map.touchZoom.disable();
	map.doubleClickZoom.disable();
	map.scrollWheelZoom.disable();
	map.boxZoom.disable();
	map.keyboard.disable();
	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		attribution: 'Map data &copy;',
		maxZoom: 18
	}).addTo(map);

	L.marker([47.654811, -117.425147])
	.addTo(map)
	.bindPopup('906 W. 2nd Ave Suite 100 <br /> <a href="https://maps.google.com/maps?f=d&source=s_d&saddr=Current+Location&daddr=47.654811,+-117.425147&hl=en" target="_blank">Directions</a>');
}