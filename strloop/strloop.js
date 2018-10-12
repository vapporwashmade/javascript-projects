var a = ['1','2','3','4','5','6','7','8','9','0'];
function f(a) {
	if (a.length === 2) {
		return [a[0]+"+"+a[1], a[0]+"-"+a[1], a[0]+a[1]];
	}
	var ldigit = a.pop();
	var prev = f(a);
	var next = [];
	for (var i = 0; i < prev.length; i++) {
		next.push(prev[i]+"+"+ldigit, prev[i]+"-"+ldigit, prev[i]+ldigit);
	}
	return next;
}
var toEval = f(a);
var hundredList = [];
for (var i = 0; i < toEval.length; i++) {
	if (eval(toEval[i]) === 100) {
		hundredList.push(toEval[i]);
	}
}
console.log("There are "+hundredList.length+" possible combinations that add up to 100. \nThey are: ");
console.log(hundredList);