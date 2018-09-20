let num = 10;
const a = 1;
const b = 1;
function f(a, upto) {
	return function x(b) {
		console.log(a);
		console.log(b);
		for (var i = 0; i < upto; i++) {
			console.log(a+b);
			var temp = b;
			b = a+b;
			a = temp;
		}
	}
}
console.log(f(a, num)(b));
