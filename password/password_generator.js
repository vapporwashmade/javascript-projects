console.time('x');
var n = 2;
//checks whether a string passes the restriction
//returns true or false
function checker(str) {
	var hasNumber = false;
	var hasLowerCase = false;
	for (var i = 0; i < str.length; i++) {
		if (!isNaN(Number(str.charAt(i))) && hasNumber === false) {
			hasNumber = true;
		}else if (str.charAt(i).toLowerCase() === str.charAt(i) && hasLowerCase === false) {
			hasLowerCase = true;
		}
		if (hasLowerCase === true && hasNumber === true) {
			return true;
		}
	}
	return false;
}
// generates all passwords for n digits
// returns an array containing all of them
function generator(n) {
	if (n < 2) {
		return 'Error: too short';
	}
	var a = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o',
		'p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0'];
	// BASE CASE
	if (n === 2) {
		var toReturn = [];
		for (var i = 0; i < a.length; i++) {
			for (var j = 0; j < a.length; j++) {
				toReturn.push(a[i] + a[j]);
			}
		}
		return toReturn;
	}
	// RECURSIVE CASE
	var prev = generator(n-1);
	var newArray = [];
	prev.forEach(function (element) {
		for (var i = 0; i < a.length; i++) {
			newArray.push(element + a[i]);
		}
	});
	return newArray;
}
var toCheck = generator(n);
for (var i = 0; i < toCheck.length; i++) {
	if (checker(toCheck[i]) === false) {
		toCheck.splice(i, 1);
		i--;
	}
}
console.log(toCheck);
console.timeEnd('x');

