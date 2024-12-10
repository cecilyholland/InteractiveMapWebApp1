'use strict';

document.addEventListener('DOMContentLoaded', function () {
    // Initialize the map
    var map = L.map('mapid').setView([35.0456, -85.3097], 15); // UTC campus coordinates

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add image overlay
    var imageUrl = 'Images/map.png', // Adjust path to your image
       // imageBounds = [[35.044, -85.313], [35.047, -85.305]]; // Adjust bounds to your image dimensions

    L.imageOverlay(imageUrl, imageBounds).addTo(map);
});
