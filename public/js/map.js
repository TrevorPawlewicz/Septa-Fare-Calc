// set map options
var myLatLng = {lat: 39.95233, lng: -75.16379}; // philly
var mapOptions = {
    center: myLatLng,
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    // Snazzy Maps...
    styles: [{
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    { "saturation": -100 },
                    { "gamma": 0.5 }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    { "color": "#46bcec" },
                    { "visibility": "on" }
                ]
            }]
};

// create map:
var map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);

//create a DirectionsService object to use the route method and get a result for our request
var directionsService = new google.maps.DirectionsService();

//create a DirectionsRenderer object which we will use to display the route
var directionsDisplay = new google.maps.DirectionsRenderer();

//bind the DirectionsRenderer to the map
directionsDisplay.setMap(map);

//define calcRoute function
function calcRoute(){ //create request
    var request = {
        origin: document.getElementById("start").value,
        destination: document.getElementById("end").value,
        travelMode: google.maps.TravelMode.TRANSIT,
        //WALKING, BYCYCLING, DRIVING
        unitSystem: google.maps.UnitSystem.IMPERIAL
    };
    //pass the request to the route method
    directionsService.route(request, function(result, status){
        if(status == google.maps.DirectionsStatus.OK){
            //Get distance and time
            $("#output").html("<div class='alert-info'>From: " +
                document.getElementById("start").value + ".<br />To: " +
                document.getElementById("end").value + ".<br /> Travel distance: " +
                result.routes[0].legs[0].distance.text +
                ".<br />Duration: " +
                result.routes[0].legs[0].duration.text +
                ".</div>"
            );
            //display route
            directionsDisplay.setDirections(result);
        } else {
            //delete route from map
            directionsDisplay.setDirections({routes: []}); //center map in London map.setCenter(myLatLng);
            //show error message
            $("#output").html("<div class='alert-danger'>Could not retrieve travel distance.</div>");
        }
    });
};
//create autocomplete objects for all inputs
var options = {
    types: ['(cities)']
};
var input1 = document.getElementById("start");
var autocomplete1 = new google.maps.places.Autocomplete(input1, options);
var input2 = document.getElementById("end");
var autocomplete2 = new google.maps.places.Autocomplete(input2, options);
//-----------------------------------------------------------------------------

console.log("----> map.js loaded! <----");
//-----------------------------------------------------------------------------
