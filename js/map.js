/*
	Author: Tyson Haverkort
	Date: June 15, 2015
	Class: Comp1850 
	Due: June 23, 2015. 
	Description: This javascript file uses the leaflet library to load source data from
				OpenStreetMaps, and overlay some points (current location of the boat)
				and polylines (routes of trips)
*/
	
/*Initialize the map and set the view center and zoom level*/
var map = L.map('map').setView([49.276040, -123.14], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// add a marker in the given location, attach some popup content to it and open the popup
L.marker([49.275880, -123.139200]).addTo(map)
    .bindPopup('Our Boat!')
    .openPopup();