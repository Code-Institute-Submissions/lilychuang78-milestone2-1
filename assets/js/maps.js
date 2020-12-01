function initMap() {
    var map1 = new google.maps.Map(document.getElementById("map1"), {
        center: {lat: 23.553118, lng: 121.0211024},
        zoom: 5,
    });



    //attraction maps
    var map = new google.maps.Map(document.getElementById("northMap"), {
        center: {lat: 25.0577204893041, lng: 121.52858713569131},
        zoom: 11,
    });
    var labels = "1234567";
    var locations = [
        {lat: 25.03419956532007, lng: 121.56453889683536}, //101
        {lat: 25.05693515585312, lng: 121.57842433564831}, //饒河夜市
        {lat: 25.035629000000014, lng: 121.52177608690394}, //中正紀念堂
        {lat: 25.037728675921908, lng: 121.49963176844233}, //龍山寺
        {lat: 25.102492849619917, lng: 121.54848912927098} //故宮
    ];

    var infoWindowContent=[

    ]
    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

}

