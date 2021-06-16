function doFirst() {
    let area = document.getElementById("map");
    let position = new google.maps.LatLng(24.9774721, 121.1824813);
    let options = {
        zoom: 14,
        center: position,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    let map = google.maps.Map(area, options);
    let marker = new google.maps.Marker({
        position,    //position: position,
        map,         //map: map,
        // title: '這是哪裡？',
        // icon: '../../images/number/dgtp.gif',
    });
    marker.setTitle('我家附近');
    marker.setIcon('../../images/number/dgtp.gif','100px');
}

window.addEventListener("load", doFirst);