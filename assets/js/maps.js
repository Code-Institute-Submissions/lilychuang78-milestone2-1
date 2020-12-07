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
        {   /*image taken from https://www.pikrepo.com/nbyma/view-of-raohe-st-night-market-arch-with-kanji-texts-and-group-of-people*/
            "lat": 25.05693515585312,
            "lng": 121.57842433564831,
            "img": "assets/images/raohe_nightmarket.jpg",
            "name": "Raohe Street Night Market",
            "info": "Raohe Street Night Market is 600 meters length night market. There are various shops and typical Taiwanese stands. It presents Taiwanese characteristic and is must-go place to visit." 
        },
        {   /*image taken from https://commons.wikimedia.org/wiki/File:Chiang_Kai-shek_memorial_amk.jpg*/
            "lat": 25.037728675921908, 
            "lng": 121.49963176844233, 
            "img": "assets/images/memorial_hall.jpg", 
            "name": "Chiang Kai-Shek Memorial Hall", 
            "info": "The great building is the attraction most visited by foreign visitors. The colors of the architecture, blue, white and red represents the National Flag of Taiwan and of freedom, equality and brotherhood." 
        },
        {   /*image taken from https://commons.wikimedia.org/wiki/File:Taipei_Taiwan_National-Palace-Museum-02.jpg*/
            "lat": 25.102492849619917, 
            "lng": 121.54848912927098,
            "img": "assets/images/national_palace_museum.jpg", 
            "name": "National Palace Museum", 
            "info": "The National Palace Museum holds the world's largest collection of Chinese treasures and arts which spans 5000 year history. Most of the over 600,000 collections were the Chinese imperial collection, which started from Song dznasty 1000 years ago." 
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
        {   /*image taken from https://de.m.wikipedia.org/wiki/Datei:Tainan_Taiwan_Fort-Zeelandia-01.jpg*/
            "lat": 23.000049255860482,
            "lng": 120.15940953963586,
            "img": "assets/images/zeelandia.jpg", 
            "name": "Fort Zeelandia", 
            "info": "Anping Old Fort, also known as Relanzhe City, is a fortress that once existed in Tainan, Taiwan. Originally built in 1624, it was the earliest fortress building in Taiwan build by the Dutch colonizer." 
        },
        {   /*image taken from https://de.m.wikipedia.org/wiki/Datei:Kenting_Hengchun-Township_Taiwan_Beach-01.jpg*/
            "lat": 21.948317794460866, 
            "lng": 120.77927230741045, 
            "img": "assets/images/kengding.jpg", 
            "name": "Kengding Beach", 
            "info": "Taiwan’s first national park is also a seaside attraction with both beaches and hiking trails." 
        },
        {   /*image taken from https://cyberisland.teldap.tw/P/qHUgiNSuwis*/
            "lat": 21.908427699197684, 
            "lng": 120.85355878593714,
            "img": "assets/images/lighthouse.jpg", 
            "name": "Eluanbi Lighthouse", 
            "info": "This 19th-century lighthouse is housed in a fortress-like building with sea views and a museum." 
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



