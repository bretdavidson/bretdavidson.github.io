function drawMap () {
  var map = L.map('map').setView([39.946951, -75.143720], 13);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var hotelIcon = L.icon({
      iconUrl: 'lib/leaflet/images/marker-icon-red.png'
    });

    // Add hotel marker
    L.marker([39.947329, -75.143741], {icon: hotelIcon}).addTo(map).bindPopup('Sheraton Society Hill');

    // Add brewery markers
    _.each(clean_beer_data, function(beer) {
      var tpl = _.template('<%= name %> <br/> <%= street_address %> <br /> <%= phone %> <br \> <%= website %>');
      L.marker([beer.lat, beer.long]).addTo(map).bindPopup(tpl(beer));
    });
}
