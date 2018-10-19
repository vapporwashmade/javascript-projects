let num = 10;
//takes a number to how many fibonacci numbers you want
//returns a function that returns your fibonacci
function f(upto) {
	var a = [1,1];
	return function x() {
		for (var i = 0; i < upto-2; i++) {
			var toPush = a[i]+a[i+1];
			a.push[toPush];
			return a;
		}
	}
}
var l = f(num);
console.log(l());
