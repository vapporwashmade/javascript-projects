// takes in an array a
// returns an array with all the subsets and prints the number of subsets
function f(a) {
	var subsets = [];
	// base case
	if (a.length === 0) {
		subsets = [[]];
		return subsets;
	}
	// recursive case
	var last = a.pop();
	var presubs = f(a);
	for (var i = 0; i < presubs.length; i++) {
		subsets.push(presubs[i].slice());
	}
	for (i = 0; i < presubs.length; i++) {
		presubs[i].push(last);
		subsets.push(presubs[i]);
	}
	return subsets;
}
var a = [9, 84, 89, 2, 1, 5, 7];
var n = a.length;
console.log(f(a));
console.log('number of subsets: '+ (2 ** n));