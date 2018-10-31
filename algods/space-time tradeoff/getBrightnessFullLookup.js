// takes in three values for red, green, and blue respectively
// multiplies them together and looks the result up
// cost: two multiplications and one lookup
console.time('x');
var rgbValues = [];
for (var i = 0; i < 256; i++) {
	for (var j = 0; j < 256; j++) {
		for (var k = 0; k < 256; k++) {
			rgbValues.push(i*0.118+j*0.231+k*0.043);
		}
	}
}
function getBrightnessFullLookup(red, green, blue) {
	return rgbValues[red*green*blue];
}
for (i = 0; i < 1000000; i++) {
	var red = Math.floor(Math.random()*255);
	var green = Math.floor(Math.random()*255);
	var blue = Math.floor(Math.random()*255);
	getBrightnessFullLookup(red, green, blue);
}
console.timeEnd('x');