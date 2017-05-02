function initMap(searchResult) {
   console.log("searchResult");
   console.log(searchResult);
        var uluru = {lat:35.340545, lng: -80.779269};
        var map = new google.maps.Map(document.getElementById('mapprop'), {
          zoom: 14,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
        google.maps.event.addDomListener(window, "load", initMap);

      }