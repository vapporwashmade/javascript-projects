var a = [1, 34, 53, 7, 100];
// this function takes in a number array
// it returns the maximum and the minimum of the array
function max_min(a, check) {
	var n = a.length;
	if (n === 0) {
		return undefined;
	}
	var m = a[0];
	for (var i = 1; i < n; i++) {
		var e = a[i];
		if (check(e, m)) {
			m = e;
		}
	}
	return m;
}
var max = max_min(a, function (f1, f2) {
	return f1 > f2;
});
var min = max_min(a, function (f1, f2) {
	return f1 < f2;
});
console.log(max);
console.log(min);