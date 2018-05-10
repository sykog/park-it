var storage;

$("document").ready(init);

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

function init() {
    // third parameter has to do with event bubbling
    document.addEventListener("deviceready", onDeviceReady, false);
    storage = window.localStorage;
}

function onDeviceReady() {
    // load the correct stylesheet, depending on device
    var node = document.createElement("link");
    node.setAttribute("rel", "stylesheet");
    node.setAttribute("type", "text/css");

    if (cordova.platformid == "ios") {
        node.setAttribute("href", "css/park-it-ios.css");

        // prevent status bar from overlaying web view
        window.StatusBar.overlaysWebView(false);
        window.StatusBar.styleDefault();
    } else {
        node.setAttribute("href", "css/park-it-android.css");

        // prevent status bar from overlaying web view
        window.StatusBar.backgroundColorByHexString("#1565C0");
    }

    // adds link to correct stylesheet in the head
    $('head').appendChild(node);
}