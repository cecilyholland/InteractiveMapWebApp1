'use strict';

document.addEventListener('DOMContentLoaded', function () {
    var map = L.map('mapid').setView([35.0456, -85.3097], 15); // Adjust coordinates and zoom level as needed

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var imageUrl = 'C:\Users\signi\source\repos\InteractiveMapJavaScript\Images\map.png', // Path to the uploaded image
        imageBounds = [[35.044, -85.313], [35.047, -85.305]]; // Adjust these coordinates to fit the image on the map

    L.imageOverlay(imageUrl, imageBounds).addTo(map);
});
