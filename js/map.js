/*
	Author: Tyson Haverkort
Testing storymap.js from KnightLab
*/
	
/*Initialize the map and set the view center and zoom level*/
// storymap_data can be an URL or a Javascript object
var storymap_data = './storymaps/demo.json';

// certain settings must be passed within a separate options object
var storymap_options = {};

var storymap = new VCO.StoryMap('map', storymap_data, storymap_options);
window.onresize = function(event) {
    storymap.updateDisplay(); // this isn't automatic
}