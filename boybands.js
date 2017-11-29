

var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];
var multiArr = [bands, vegetables];
// The number of loops to perform (what if the array changes?)
var bandCount = bands.length;
var vegCount = vegetables.length;
// Keep track of which band we're on in the loop
var currentBand = "";
// Keep track of which veggie we're on in the loop
var currentVeggie = "";
// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById('bands');
// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById('vegetables');
// Start looping
for (var i = 0; i < bandCount; i += 1) {
bandElement.innerHTML += "<p>" + bands[i] + "</p>";
}
for (var i = 0; i < vegCount; i += 1) {
veggieElement.innerHTML += "<p>" + vegetables[i] + "</p>";
}