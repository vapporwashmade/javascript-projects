var a = [1,2,3];
function f(a) {
	var toEval = [];
	var hundredList = [];
	for (var i = 0; i < a.length; i++) {
		for (var j = 0; j < returnList.length; j++) {
			temp.push(returnList[returnList.length-j]+a[i]);
			temp.push(returnList[returnList.length-j]-a[i]);
			temp.push(returnList[returnList.length-j]*10+a[i]);
			returnList.push(temp);
		}
	}
	return toEval;
}
console.log(f(a));