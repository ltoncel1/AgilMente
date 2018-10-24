/* ==============================================
    MAP -->
    =============================================== */
// var map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById('googleMap'), {
//     center: {
//       lat: -72.8635696,
//       lng: 10.8872264
//     },
//     zoom: 4
//   });
// }

var locations = [
  [
    '<div class="infobox"><h3 class="title"><a href="https://www.google.com/maps/@10.8894961,-72.8662104,15z" target="_blank">ÁgilMente SAS ZOMAC</a></h3><span>Cra. 24 #17-36, Fonseca, La Guajira</span><span><br><i class="fal fa-phone"></i> +57 (300) 55 2803</span></div>',
    10.884066,
    -72.858055,
    2
  ]
];

function initMap() {
  var map = new google.maps.Map(document.getElementById('googleMap'), {
    zoom: 16,
    scrollwheel: false,
    navigationControl: true,
    mapTypeControl: false,
    scaleControl: false,
    draggable: true,
    styles: [{
      featureType: 'administrative',
      elementType: 'labels.text.fill',
      stylers: [{
        featureType: 'poi.business',
        elementType: 'geometry.fill',
        stylers: [{
          visibility: 'on'
        }]
      }]
    }],
    center: new google.maps.LatLng(10.884066, -72.858055),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var infowindow = new google.maps.InfoWindow();
  var marker, i;
  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map,
      icon: 'images/loaders/marker_AgilMente.png',
      label: infowindow.setContent(locations[i][0])
      // icon: 'images/loaders/pin-animate.gif'
    });
    infowindow.open(map, marker);
    google.maps.event.addListener(
      marker,
      'click',
      (function (marker, i) {
        return function () {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        };
      })(marker, i)
    );
  }
}