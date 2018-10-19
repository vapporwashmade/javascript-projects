let num = 10;
function f(upto) {
	var a = [1,1];
	return function x() {
		for (var i = 0; i < upto-2; i++) {
			var toPush = a[i]+a[i+1];
			a.push[toPush];
		}
	}
}
var x = f(num);
console.log(x());
