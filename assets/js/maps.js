/*---first map credit: Google Maps Platform https://developers.google.com/maps/documentation/javascript/overview---*/
/*---second map credit: code referred to tutorial of Eamonn Smyth "How to google maps"
https://code-institute-room.slack.com/files/UU5GBNS6M/F01DRAEPEH5/how_to_google_maps.pdf---*/

function initMap() {
    const myLatLng = { lat: 23.553118, lng: 121.0211024 };
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
    map = new google.maps.Map(document.getElementById("attractionMap"), {
        center: { lat: 23.68809365325875, lng: 120.8485944583739 },
        zoom: 8,
    });
    const myMarks = [
        {   /*image taken from https://commons.wikimedia.org/wiki/File:%E5%8F%B0%E5%8C%97101%E8%B7%A8%E5%B9%B4%E7%85%99%E7%81%AB_Taipei_101_New_Year_Firework_-_panoramio_(1).jpg*/
            "lat": 25.03419956532007,
            "lng": 121.56453889683536,
            "img": "assets/images/Taipei_101_firework.jpg",
            "name": "Taipei 101",
            "info": "The Taipei 101 was officially classified as the world's tallest from 2004 to 2010. Its elevators transports passengers from the 5th to 89th floor in 37 seconds. It is an icon of Taipei and a firework event displays on each year's New Year's Eve." 
        },
        {   /*image taken from https://commons.wikimedia.org/wiki/File:Taipei_Taiwan_National-Palace-Museum-02.jpg*/
            "lat": 25.102492849619917, 
            "lng": 121.54848912927098,
            "img": "assets/images/national_palace_museum.jpg", 
            "name": "National Palace Museum", 
            "info": "The National Palace Museum holds the world's largest collection of Chinese treasures and arts which spans 5000 year history. Most of the over 600,000 collections were the Chinese imperial collection, which started from Song dznasty 1000 years ago." 
        },
        {   /*image taken from https://commons.wikimedia.org/wiki/File:%E6%96%B0%E7%AB%B9%E7%81%AB%E8%BB%8A%E7%AB%99(%E5%B7%B4%E6%B4%9B%E5%85%8B%E9%A2%A8%E6%A0%BC).jpg*/
            "lat": 24.801568205538437,
            "lng": 120.97155611083635,
            "img": "assets/images/xingchu_station.jpg",
            "name": "Xingchu Train Station",
            "info": "The current station building was completed in 1913. The architectural style combines the Baroque style and the Gothic style. It is the oldest active station in Taiwan." 
        },
        {   /*image taken from https://commons.wikimedia.org/wiki/File:%E5%9C%8B%E5%AE%B6%E8%A1%A8%E6%BC%94%E8%97%9D%E8%A1%93%E4%B8%AD%E5%BF%83-%E8%87%BA%E4%B8%AD%E5%9C%8B%E5%AE%B6%E6%AD%8C%E5%8A%87%E9%99%A2%E5%A4%96%E8%A7%80.jpg*/
            "lat": 24.162786228241615, 
            "lng": 120.64024915315206,
            "img": "assets/images/opera_house.jpg", 
            "name": "Taichung Opera House", 
            "info": "The Opera House is based on the concept of a sound Cave, designed by world-class architect Toyohio Ito, and is considered the most difficult house in the world in the industry." 
        },
        {   /*image taken from https://commons.wikimedia.org/wiki/File:A-Mei_Tea_House_in_Jiufen.jpg*/
            "lat": 25.110269556941518, 
            "lng": 121.84513433614752,
            "img": "assets/images/jiufen.jpg", 
            "name": "Jiufen", 
            "info": "Jiufen is famous for its narrow streets, various food stalls and vast mountain and sea views." 
        },
        {   /*image taken from https://pixabay.com/zh/photos/nantou-sun-moon-lake-chaomu-harbour-1742620/*/
            "lat": 23.859209023779016, 
            "lng": 120.91527645460741,
            "img": "assets/images/sunmoon_lake.jpg", 
            "name": "Sun Moon Lake", 
            "info": "This wide lake is the largest lake in Taiwan and is famous for its scenery surrounded by mountains. It's beautiful nam" 
        },
        {   /*image taken from https://commons.wikimedia.org/wiki/File:Taroko_gorge-Shakadang_Trail-Taroko_National_Park.jpg*/
            "lat": 24.183811709099032, 
            "lng": 121.48253147037136,
            "img": "assets/images/taroko.jpg", 
            "name": "Taroko National Park", 
            "info": "Taroko National Park is characterized by canyons and cliffs, with steep cliffs and quiet scenery. The alpine zone in the park still retains many ice age animals." 
        },
        {   /*image taken from https://www.pikist.com/free-photo-slxco*/
            "lat": 23.511274508419273,
            "lng": 120.80371541265959,
            "img": "assets/images/alishan.jpg", 
            "name": "Alishan National Park", 
            "info": "The natural landscape in the area is extremely rich. Sunrise, sea of clouds, sunset, sacred trees and railway are listed as the Five Wonders of Alishan." 
        },
        {   /*image taken from https://cyberisland.teldap.tw/P/qHHGptZsytx*/
            "lat": 23.02123469220345, 
            "lng": 120.136158693622,
            "img": "assets/images/sicao.jpg", 
            "name": "Sicao Green Tunnel", 
            "info": "Sicao Green Tunnel is a mangrove forest reaches over the water to form a tunnel. The river surface reflects the green tunnel and makes a dream-like waterway." 
        },
        {   /*image taken from https://en.wikipedia.org/wiki/Lukang,_Changhua#/media/File:%E9%B9%BF%E6%B8%AF%E8%80%81%E8%A1%97%E5%B0%8F%E5%B7%B707.jpg*/
            "lat": 24.06003085163009,
            "lng": 120.4313499195485,
            "img": "assets/images/lukang.jpg", 
            "name": "Lukang Old Town", 
            "info": "Lugang is an important town where Han families migrated in the Qing Dynasty. It is one of the few ancient towns in Taiwan that retains complete Han customs, culture, cultural relics, and historic sites." 
        },
        {   /*image taken from https://de.m.wikipedia.org/wiki/Datei:Kenting_Hengchun-Township_Taiwan_Beach-01.jpg*/
            "lat": 21.948317794460866, 
            "lng": 120.77927230741045, 
            "img": "assets/images/kengding.jpg", 
            "name": "Kengding Beach", 
            "info": "Taiwan’s first national park is also a seaside attraction with both beaches and hiking trails." 
        },
        {   /*image taken from https://cyberisland.teldap.tw/P/qzwciydadGQ*/
            "lat": 22.680622167633427, 
            "lng": 120.29246232613674,
            "img": "assets/images/tiger_dragan_pagoda.jpg",
            "name": "Dragon and Tiger Pagoda", 
            "info": "The Dragon Tiger Pagoda was built in 1976. It uses the dragon and tiger as the entrance and the inner wall is a Jiaozhi pottery." 
        },
        {   /*image taken from https://commons.wikimedia.org/wiki/File:Lisong_Hot_Spring.jpg*/
            "lat": 23.198214388114735, 
            "lng": 121.03713332429709,
            "img": "assets/images/lisong.jpg", 
            "name": "Lisong Hot Spring", 
            "info": "Because calcium carbonate crystals are condensed on the mountain walls, and hot spring algae are attached to the calcium carbonate crystals, the rock walls are like jadeite." 
        },
        {   /*image taken from https://cyberisland.teldap.tw/P/qHQexkbdbox*/
            "lat": 23.129205802830686, 
            "lng": 121.42206601836156,
            "img": "assets/images/sanxiantai.jpg", 
            "name": "Sanxiantai", 
            "info": "It consists of offshore islands, coral reef coasts and gravel coasts, covering an area of about 22 hectares." 
        },
        {   /*image taken from https://cyberisland.teldap.tw/P/qzydShZtwyQ*/
            "lat": 24.831381671800447, 
            "lng": 121.77596698944622,
            "img": "assets/images/jiaoxi.jpg", 
            "name": "Jiaoxi Hot Spring", 
            "info": "Tens of thousands of years ago, after the eruption of a volcano, the remaining magma remained underground, giving Jiaoxi a natural hot spring." 
        },
    ];

    var InfoObj = [];

    for (i = 0; i < myMarks.length; i++) {
        let contentString =
            '<img src="' + myMarks[i].img + '">' + '</img>' +
            '<h5>' + myMarks[i].name + '</h5>' +
            '<p>' + myMarks[i].info + '</p>' +
            '<a href="https://eng.taiwan.net.tw/" target="_blank">' + 'check Taiwan - The Heart of Asia' + '</a>';


        const marker = new google.maps.Marker({
            position: new google.maps.LatLng(myMarks[i].lat, myMarks[i].lng),
            map: map,
            title: myMarks[i].name
        });
        
        
        const infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        marker.addListener("click", function () {
            infowindow.open(map, marker);
        });
    }
}



