var available = [10, 5, 1];
var target = 67.45;
target = target.toFixed(2) * 100;
function findDenominations(denominations, target, lastDenomination) {
	// Base case
	if (target === 0) {
		return [[]];
	}
	// Recursive case
	var possibilities = [];
	for (var i = 0; i < denominations.length; i++) {
		if (denominations[i] <= target && denominations[i] <= lastDenomination) {
			var x = findDenominations(denominations, target-denominations[i], denominations[i]);
			for (var j = 0; j < x.length; j++) {
				x[j].unshift(denominations[i]);
			    possibilities.push(x[j]);
			}
		}
	}
	return possibilities;
}
function write(array) {
	var denominations = {
		1:0,
		5:0,
		10:0,
		25:0
	};
	var words = {
		'1':'penny',
		'5':'nickel',
		'10':'dime',
		'25':'quarter'
	};
	var words2 = {
		'1':'pennies',
		'5':'nickels',
		'10':'dimes',
		'25':'quarters'
	};
	for (var i = 0; i < array.length; i++) {
		denominations[array[i]]++;
	}
	var str = '';
	for (let value in denominations) {
		if (denominations[Number(value)] === 1) {
			str += '1 ' + words[value] + ' ';
		} else if (denominations[Number(value)] > 1) {
			str += denominations[Number(value)] + ' ' + words2[value] + ' ';
		}
	}
	return str;
}
var x = findDenominations(available, 100, available[0]);
console.log(x.length);
for (var i = 0; i < x.length; i++) {
	console.log(write(x[i]));
}