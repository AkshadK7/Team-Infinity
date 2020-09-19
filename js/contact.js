var x = document.getElementById("demo");
var l,i;
function getLocation() {
  if (navigator.geolocation) {             // (navigator.geolocation) whether ur device postion will be available or not.
    navigator.geolocation.getCurrentPosition(showPosition);      // (getCurrentPosition) gives ur current position and calls show position fxn.
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position)           // (position) is an object here.
 {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
   l=position.coords.latitude;
 i= position.coords.longitude;
 
initMap();
}





function initMap()        // initMap fxn has two works- 1st to make map visible and second to mark the position on map.
 {
  var mapOptions = {zoom: 14,center: { lat: 12.8231, lng: 80.0442 }};       // centre of map and its zoom size is stored in mapOptions variable.
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);    //in index3.js we have made a div=map for placing the map there.

  var marker = new google.maps.Marker({position: { lat:12.8231 , lng:80.0442 } ,  map: map });      //this sets the marker



  
  var infowindow = new google.maps.InfoWindow({content: "<p>Marker Location:" + marker.getPosition() + "</p>"});

  google.maps.event.addListener(marker, "click", function() {infowindow.open(map, marker);});     //event listner handles the click of button
}