// var n1 = 1000000000000000000000000000;
var n1 = Number(10000000000000000000000);
var n2 = 5;
var a1 = [];
var a2 = [];
for (var i = 0; n1 > 0; i++) {
	a1.unshift(n1 % 10);
	n1 /= 10;
}
for (i = 0; n2 > 0; i++) {
	a2.unshift(n2 % 10);
	n2 = Math.floor(n2/10);
}
// takes in two arrays of digits and returns an array containing the addition result of the two joined numbers split into digits
// uses grade school addition algorithm
function add(a1, a2) {
	while (a1.length > a2.length) {
		a2.unshift(0);
	}
	while (a2.length > a1.length) {
		a1.unshift(0);
	}
	var carry = 0;
	var arr = [];
	for (var i = 1; i < a1.length + 1; i++) {
		arr.unshift((a1[a1.length - i] + a2[a2.length - i] + carry) % 10);
		if (a1[a1.length - i] + a2[a2.length - i] + carry >= 10) {
			carry = 1;
		} else {
			carry = 0;
		}
	}
	return arr;
}
// takes in two arrays of digits and returns an array containing the multiplication result of the two joined numbers split into digits
// uses grade school multiplication algorithm
function multiply(a1, a2) {
	var partialproducts = [];
	for (var i = 0; i < a2.length; i++) {
		var pp = [];
		var carry = 0;
		for (var j = 0; j < a1.length; j++) {
			pp.unshift((a1[a1.length - (j+1)] * a2[a2.length - (i+1)] + carry) % 10);
			if (a1[a1.length - (j+1)] * a2[a2.length - (i+1)] + carry >= 10) {
				carry = Math.floor((a1[a1.length - (j+1)] * a2[a2.length - (i+1)] + carry) / 10);
			} else {
				carry = 0;
			}
		}
		if (carry !== 0) {
			pp.unshift(carry);
		}
		partialproducts.push(pp);
	}
	for (i = 0; i < partialproducts.length; i++) {
		for (j = 0; j < i; j++) {
			partialproducts[i].push(0);
		}
	}
	var returning = [];
	for (i = 0; i < partialproducts.length; i++) {
		returning = add(returning, partialproducts[i]);
	}
	return returning;
}
// takes in an array of the base number and a nonnegative number exponent
// the base array must be split into digits otherwise it wont work
// uses repeated multiplication
function exponentiation(baseArray, exponent) {
	var x = baseArray;
	for (var i = 0; i < exponent - 1;i++) {
		x = multiply(x, baseArray);
		console.log(x);
	}
	return x;
}
var x = exponentiation([1,5], 25);
console.log(x.join('') + ' with ' + x.length + ' digits.');