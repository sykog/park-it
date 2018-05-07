function initMap() {
    var mapDiv = new google.maps.Map(document.getElementById("map"), {
        center: {lat: 47.313582, lng: -122.1800072},
        zoom: 6
    });
}

$("#park").click(function(){
    alert("Set parking location");
});


$("#retrieve").click(function(){
    alert("Get parking location");
});

$("#gotIt").click(function(){
    $("#instructions").hide();
});