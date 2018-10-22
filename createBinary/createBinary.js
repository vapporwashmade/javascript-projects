// takes in a number and returns an array
// creates binary combinations for that number
function f(n) {
	// base case
	if (n === 1) {
		return ['0', '1'];
	}
	// recursive case
	var binArray = [];
	var prebinArray = f(n - 1);
	for (var i = 0; i < prebinArray.length; i ++) {
		binArray.push(prebinArray[i] + '0', prebinArray[i] + '1');
	}
	return binArray;
}

console.log(f(8));