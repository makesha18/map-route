;
(function() {
    'use strict';

    // Initialize and add the map
    function initBaMap() {
        let directionsService = new google.maps.DirectionsService();
        let directionsRenderer = new google.maps.DirectionsRenderer();

        let mapCenter = {
            lat: 50.4512964,
            lng: 30.523115,
        }

        let mapEl = document.getElementById('map');

        let mapOptions = {
            zoom: 6,
            center: mapCenter,
            styles: [{
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#242f3e"
                    }]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#746855"
                    }]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "color": "#242f3e"
                    }]
                },
                {
                    "featureType": "administrative.locality",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#d59563"
                    }]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#d59563"
                    }]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#263c3f"
                    }]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#6b9a76"
                    }]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#38414e"
                    }]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#212a37"
                    }]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#9ca5b3"
                    }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#746855"
                    }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#1f2835"
                    }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#f3d19c"
                    }]
                },
                {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#2f3948"
                    }]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#d59563"
                    }]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#17263c"
                    }]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#515c6d"
                    }]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "color": "#17263c"
                    }]
                }
            ]
        };

        let baMap = new google.maps.Map(mapEl, mapOptions);

        directionsRenderer.setMap(baMap);

        let onChangeHandler = function() {
            calculateAndDisplayRoute(directionsService, directionsRenderer);
        };

        document.getElementById('search').addEventListener('submit', function(e) {
            e.preventDefault();
        });
        document.getElementById('search').addEventListener('submit', onChangeHandler);

        function calculateAndDisplayRoute(directionsService, directionsRenderer) {
            directionsService.route({
                    origin: document.getElementById('start').value,
                    destination: document.getElementById('finish').value,
                    travelMode: 'DRIVING'
                },
                function(response, status) {
                    if (status === 'OK') {
                        directionsRenderer.setDirections(response);
                    } else {
                        window.alert('Маршрут не найден ' + status);
                    }
                });
        }
    }
    window.addEventListener('load', initBaMap);

})();