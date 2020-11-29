let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map1"), {
    center: { lat: 23.553118, lng: 121.0211024 },
    zoom: 5,
  });
}