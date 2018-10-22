// takes in a number n and returns an array of binary strings of length n
// for example, if n=2, then it would return ['00', '01', '10', '11']
// this is a recursive function
console.time('x');
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
console.log(f(4));
console.timeEnd('x');