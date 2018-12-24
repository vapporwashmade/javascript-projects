var arr = ['a', 'b', 'c'];
function findPermutations(array) {
	// BASE CASE
	var permutations = [];
	if (array.length === 0) {
		return [[]];
	}
	// RECURSIVE CASE
	// var last = array.pop();
	// permutations = findPermutations(array);
	// for (var i = 0; i < permutations.length; i++) {
	// 	permutations[i].push(last);
	// }
	for (var i = 0; i < array.length; i++) {
		var deleted = array.splice(i, 1);
		permutations.push(findPermutations(array).push(deleted[0]));
	}
	return permutations;
}
console.log(findPermutations(arr));