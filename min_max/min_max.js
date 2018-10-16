var a = [1, 34, 53, 7, 100];
// this function takes in a number array
// it returns the maximum and the minimum of the array
function max_min(a) {
	var n = a.length;
	if (n === 0) {
		return undefined;
	}
	var maximum = a[0];
	var minimum = a[0];
	for (var i = 1; i < n; i++) {
		if (a[i] > maximum) {
			maximum = a[i];
		} else if (a[i] < minimum) {
			minimum = a[i];
		}
	}
	return [maximum, minimum];
}
console.log(max_min(a));