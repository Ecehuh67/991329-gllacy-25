function initMap()
{
    var element = document.getElementById('map');
    var options = {
        zoom: 17,
        center: {lat: 59.938862, lng: 30.323037}
    };

    var myMap = new google.maps.Map(element, options);

    var marker = new google.maps.Marker({
        position: {lat: 59.938862, lng: 30.323037},
        map: myMap,
        icon: "img/map-point.png"
    });
}
