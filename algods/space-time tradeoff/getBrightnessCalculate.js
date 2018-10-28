// takes in three values for red, green, and blue respectively
// multiplies the values and returns the result
// cost: 3 float multiplications and 2 additions
function getBrightnessCalculate(red, green, blue) {
	return red*0.118+green*0.231+blue*0.043;
}
console.time('x');
for (var i = 0; i < 10; i++) {
	var red = Math.floor(Math.random()*255);
	var green = Math.floor(Math.random()*255);
	var blue = Math.floor(Math.random()*255);
	getBrightnessCalculate(red, green, blue);
}
console.timeEnd('x');