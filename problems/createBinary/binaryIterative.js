// takes in a number and returns an array
// creates binary combinations for that number
console.time('x');
function f(n) {
	var binArray = ['0','1'];
	for (var i = 1; i < n; i++) {
		var newArray = [];
		for (var j = 0; j < binArray.length; j++) {
			newArray.push(binArray[j]+'0');
			newArray.push(binArray[j]+'1');
		}
		binArray = newArray;
	}
	return binArray;
}
console.log(f(4));
console.timeEnd('x');