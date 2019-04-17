// checks if key pressed is enter
// if it is, reads the decimal number
// if not, it returns
function f(e) {
	if (e.key === 'Enter') {  //checks whether the pressed key is "Enter"
		readNum(document.getElementById('num').value);
	}
}
// trims all the insignificant zeros from a string which is a number
// insignificant zeros are leading zeros and trailing zeros after the decimal point
// returns a string with the trimmed value
function trimZeros(str) {
	var strarray = [];
	for (var i = 0; i < str.length && str.charAt(i) === '0'; ) {
		str = str.slice(1);
	}
	var decimal = false;
	for (i = 0; i < str.length && !decimal; i++) {
		if (str[i] === '.') {
			decimal = true;
		}
	}
	if (decimal) {
		for (i = 1; i < str.length && str.charAt(str.length-i) === '0' || str.charAt(str.length-i) === '.'; ) {
			str = str.slice(0, -1);
		}
	}
	for (i = 0; i < str.length; i++) {
		strarray.push(str.charAt(i));
	}
	return strarray.join('');
}
// reads a string of three letters
// main part of my program
// takes in two objects, the string you want to convert, and a number of where it is in the loop
// returns a string of the string after it is read
function readHundred(str, obj1, obj2, i) {
	var res = '';
	while (str.length < 3) {
		str = '0' + str;
	}
	if (str.charAt(0) !== '0') {
		res += obj1[str.charAt(0)] + ' hundred ';
	}
	if (str.charAt(1) === '1') {
		res += obj1[str.slice(1)];
	} else if (str.charAt(1) === '0') {
		res += obj1[str.charAt(2)];
	} else {
		res += obj1[str.charAt(1) + '0'] + ' ';
		res += obj1[str.charAt(2)] + ' ';
	}
	var scale = obj2[i];
	var temp = i+1;
	if (i > obj2.length) {
		scale = obj2[i%obj2.length] + ' ';
		for (var j = 0; j < Math.floor(i/obj2.length); j++) {
			scale += 'quattuordecillion ';
		}
	}
	if (Number(res) === 0) {
		scale = '';
	}
	var x = res + ' ' + scale + ' ';
	return x.trim();
}
// this function takes in a number and 'reads it'; returns a string
// e.g. if you input 100 it would return 'one hundred'
function readNum(num) {
	var reading = '';
	var numbers1 = {
		'0' : 'zero',
		'1' : 'one',
		'2' : 'two',
		'3' : 'three',
		'4' : 'four',
		'5' : 'five',
		'6' : 'six',
		'7' : 'seven',
		'8' : 'eight',
		'9' : 'nine',
		'10' : 'ten',
		'11' : 'eleven',
		'12' : 'twelve',
		'13' : 'thirteen',
		'14' : 'fourteen',
		'15' : 'fifteen',
		'16' : 'sixteen',
		'17' : 'seventeen',
		'18' : 'eighteen',
		'19' : 'nineteen',
		'20' : 'twenty',
		'30' : 'thirty',
		'40' : 'forty',
		'50' : 'fifty',
		'60' : 'sixty',
		'70' : 'seventy',
		'80' : 'eighty',
		'90' : 'ninety',
		'100' : 'one hundred'
	};
	var numbers2 = ['thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quattuordecillion'];
	if (num === '') {
		document.getElementById('read').textContent = '';
		return;
	}
	if (isNaN(Number(num))) {
		document.getElementById('read').textContent = num + ' is not a decimal number!';
		return num + ' is not a decimal number!';
	} else if (Object.keys(numbers1).includes(num)) {
		reading = numbers1[num];
	} else if (numbers2.includes(num)) {
		reading = 'one ' + numbers2[num];
	} else {
		var numArray = [];
		var decimalArray = [];
		numbers2.unshift('');
		numbers1['0'] = '';
		var negative = false;
		if (num.charAt(0) === '+') {
			num = num.slice(1);
		}
		if (num.charAt(0) === '-') {
			num = num.slice(1);
			negative = true;
		}
		num = trimZeros(num);
		var decimalPoint = num.indexOf('.');
		if (decimalPoint !== - 1) {
			for (i = decimalPoint + 1; i < num.length; i ++) {
				decimalArray.push(num.charAt(i));
			}
			num = num.slice(0, decimalPoint);
		}
		for (var i = 0; num.length > 0; i ++) {
			numArray.push(num.slice(- 3));
			num = num.slice(0, - 3);
		}
		for (i = 0; i < numArray.length; i ++) {
			reading = readHundred(numArray[i], numbers1, numbers2, i) + ' ' + reading;
			console.log(i);
		}
		if (numArray.length === 0 && decimalArray.length > 0) {
			reading += 'zero ';
		}
		if (decimalPoint !== - 1) {
			reading += 'point';
		}
		numbers1['0'] = 'zero';
		for (i = 0; i < decimalArray.length; i ++) {
			reading = reading + ' ' + numbers1[decimalArray[i]];
		}
		if (negative && reading.trim().length > 0) {
			reading = 'negative ' + reading;
		}
		// if (Object.values(numbers2).includes(reading.split(' ')[0]) && decimalArray.length > 0) {
		// 	reading = 'zero ' + reading;
		// } else if (Object.values(numbers2).includes(reading.split(' ')[0]) && reading.trim().length > 0 && reading.trim().length > 0) {
		// 	reading = 'one ' + reading;
		// }
	}
	document.getElementById('read').textContent = reading;
	return reading;
}