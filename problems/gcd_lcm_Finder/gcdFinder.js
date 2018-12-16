// this function finds the gcd(greatest common divisor) of two numbers
// it takes in two numbers and returns a number
function gcd(num1, num2) {
	var factors1 = [];
	var factors2 = [];
	var primeArray = [1];
	if (num1 > num2) {
		var g = num1;
	} else {
		var g = num2;
	}
	// find necessary primes
	for (var i = 2; i <= g; i++) {
		var x = true;
		for (var j = 2; j < Math.sqrt(i); j++) {
			if (i % j === 0) {
				x = false;
			}
		}
		if (x) {
			primeArray.push(i);
		}
	}
	console.log('not stuck here');
	// prime factorization
	for (i = 0; i < primeArray.length && num1 > 1;) {
		if (num1 % primeArray[i] === 0) {
			factors1.push(primeArray[i]);
			num1/=primeArray[i];
		} else {
			i++;
		}
	}
	console.log(factors1);
	console.log('not stuck here');
	for (i = 0; i < primeArray.length && num2 > 1;) {
		if (num2 % primeArray[i] === 0) {
			factors2.push(primeArray[i]);
			num2/=primeArray[i];
		} else {
			i++;
		}
	}
	console.log('not stuck here');
	console.log(factors2);
	// find common factors
	var commonfactors = [];
	if (factors1.length > factors2.length) {
		var a = factors2;
		var b = factors1;
	} else {
		var a = factors1;
		var b = factors2;
	}
	for (i = 0; i < a.length; i++) {
		if (b.indexOf(a[i]) !== -1) {
			commonfactors.push(a[i]);
			b.splice(b.indexOf(a[i]), 1);
			a.splice(i, 1);
			i--;
		}
	}
	console.log(commonfactors);
	// find gcd
	var gcd = 1;
	for (i = 0; i < commonfactors.length; i++) {
		gcd *= commonfactors[i];
	}
	return gcd;
}
console.time('x');
console.log(gcd(100,100));
console.timeEnd('x');