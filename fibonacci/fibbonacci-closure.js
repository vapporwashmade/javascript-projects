var num = 10;
//takes a number to how many fibonacci numbers you want
//returns a function that returns your fibonacci
function f(upto) {
	var a = [1,1];
	return function x() {
		for (var i = 0; i < upto-2; i++) {
			a.push(a[i]+a[i+1]);
		}
		return a;
	}
}
var l = f(num);
console.log(l());
