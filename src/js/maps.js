function initMap() {
    var Facebook = {lat: 42.378036, lng: -71.118340};

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: Facebook
    });

    var iconBase =
            'https://developers.google.com/maps/documentation/javascript/examples/full/images/';


    var contentString = '<h1> Facebook </h1>';
          
    var infowindow = new google.maps.InfoWindow({
    content: contentString
     }); 

    var marker = new google.maps.Marker({
      position: Facebook,
      map: map,
      icon: iconBase + 'info-i_maps.png',
      title: 'Facebook'
    });


    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });

  }