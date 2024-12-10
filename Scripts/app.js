'use strict';

document.addEventListener('DOMContentLoaded', function () {
    // Initialize the map and set its view to UTC campus
    var map = L.map('mapid').setView([35.0456, -85.3097], 15);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add a marker at UTC campus
    L.marker([35.0505, -85.2991]).addTo(map)
        .bindPopup('UTC Campus')
        .openPopup();
});
