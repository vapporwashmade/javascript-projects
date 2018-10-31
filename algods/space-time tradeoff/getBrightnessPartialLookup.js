// takes in three values for red, green, and blue respectively
// looks each of the three values up in an array and adds results together
// cost: 3 lookups and two additions
console.time('x');
var redValues = [];
var greenValues = [];
var blueValues = [];
for (var i = 0; i < 256; i++) {
	redValues.push(i*0.118);
}
for (i = 0; i < 256; i++) {
	greenValues.push(i*0.231);
}
for (i = 0; i < 256; i++) {
	blueValues.push(i*0.043);
}
function getBrightnessPartialLookup(red, green, blue) {
	return redValues[red]+greenValues[green]+blueValues[blue];
}
for (i = 0; i < 1000000; i++) {
	var red = Math.floor(Math.random()*255);
	var green = Math.floor(Math.random()*255);
	var blue = Math.floor(Math.random()*255);
	getBrightnessPartialLookup(red, green, blue);
}
console.timeEnd('x');