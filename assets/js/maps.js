function initMap() {
    const myLatLng  = {lat: 23.553118, lng: 121.0211024};
    map1 = new google.maps.Map(document.getElementById('map1'), {
	    zoom: 4,
	    center: myLatLng,
    });
    const image =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
    new google.maps.Marker({
    position: myLatLng,
    map: map1,
    icon: image,
    title: "I am here!",
    });

//attraction maps
    map = new google.maps.Map(document.getElementById("northMap"), {
        center: {lat: 25.0577204893041, lng: 121.52858713569131},
        zoom: 11,
    });

    const myMarks = [
        {"lat":25.03419956532007,"lng":121.56453889683536,"name":"Taipei 101","info": "blablbalba"},
        {"lat":25.05693515585312,"lng":121.57842433564831,"name":"Taipei 101","info": "blablbalba"},
        {"lat":25.035629000000014,"lng":121.52177608690394,"name":"Taipei 101","info": "blablbalba"},
        {"lat":25.037728675921908,"lng":121.49963176844233,"name":"Taipei 101","info": "blablbalba"},
        {"lat":25.102492849619917,"lng":121.54848912927098,"name":"Taipei 101","info": "blablbalba"},
    ];

    var InfoObj=[];

    for(i=0; i<myMarks.length; i++){
        let contentString = 
            '<h3>'+myMarks[i].name+'</h3>'+
            '<p>'+myMarks[i].info+'</p>';


        const marker = new google.maps.Marker({
            position: new google.maps.LatLng(myMarks[i].lat, myMarks[i].lng),
            map: map,
            title: myMarks[i].name
        });

        const infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        marker.addListener("click",function(){
        infowindow.open(map,marker);
    });
}
}



