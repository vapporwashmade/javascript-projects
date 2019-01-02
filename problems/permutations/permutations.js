var arr = [1, 2, 3, 4, 5];
function findPermutations(array) {
	// BASE CASE
	if (array.length === 1) {
		return [array];
	}
	// RECURSIVE CASE
	var permutations = [];
	var lastElement = array.pop();
	var previous = findPermutations(array);
	for (var i = 0; i < previous.length; i++) {
		for (var j = 0; j <= previous[i].length; j++) {
			previous[i].splice(j, 0, lastElement);
			permutations.push(previous[i].slice());
			previous[i].splice(j, 1);
		}
	}
	return permutations;
}
var x = findPermutations(arr);
console.log(x.length);
console.log(x);