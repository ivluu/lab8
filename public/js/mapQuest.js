function initMap() {
	L.mapquest.key = 'HxeH1wGlS4Bwpf8a3RgFALsez6ypAMUG';

  var map = L.mapquest.map('map', {
    center: [32.88, -117.236],
    layers: L.mapquest.tileLayer('map'),
    zoom: 12,
    zoomControl: false
  });

  L.marker([32.88, -117.236]).addTo(map);
}
