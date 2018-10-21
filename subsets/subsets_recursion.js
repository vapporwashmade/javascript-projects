// takes in an array a
// returns an array with all the subsets and the length
function f(a) {
	var subsets = [];
	// base case
	if (a.length === 0) {
		subsets = [[]];
		return subsets;
	}
	// recursive case
	var lElement = a.pop();
	var presubs = f(a);
	for (var i = 0; i < presubs.length; i++) {
		subsets.push(presubs[i].slice());
	}
	for (i = 0; i < presubs.length; i++) {
		presubs[i].push(lElement);
		subsets.push(presubs[i]);
	}
	return subsets;
}
var a = [1,2,3,4,5,6,7];
var n = a.length;
console.log(f(a));
console.log('number of subsets: '+ (2 ** n));