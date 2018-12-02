// this function takes in a number and 'reads it'; returns a string
// e.g. if you input 100 it would return 'one hundred'
function readNum(num) {
	var soundsM = {
		'one' : '1a',
		'two' : '2 a',
		'three' : '3 a',
		'four' : '4 a',
		'five' : '5 a',
		'six' : '6 a',
		'seven' : '7 a',
		'eight' : '8 a',
		'nine' : '9 a',
		'ten' : '10 a',
		'eleven' : '11 a',
		'twelve' : '12 a',
		'thirteen' : '13 a',
		'fourteen' : '14 a',
		'fifteen' : '15 a',
		'sixteen' : '16 a',
		'seventeen' : '17 a',
		'eighteen' : '18 a',
		'nineteen' : '19 a',
		'twenty' : '20 a',
		'thirty' : '30 a',
		'forty' : '40 a',
		'fifty' : '50 a',
		'sixty' : '60 a',
		'seventy' : '70 a',
		'eighty' : '80 a',
		'ninety' : '90 a',
		'hundred' : 'hundred a',
		'thousand' : 'thousand a',
		'million' : 'million a',
		'billion' : 'billion a',
		'trillion' : 'trillion a',
		'quadrillion' : 'quadrillion a',
	};
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
	if (Object.keys(numbers1).includes(num)) {
		reading = numbers1[num];
	} else if (numbers2.includes(num)) {
		reading = 'one ' + numbers2[num];
	} else {
		var numArray = [];
		numbers2.unshift('');
		numbers1['0'] = '';
		for (var i = 0; num.length > 0; i ++) {
			numArray.push(num.slice(- 3));
			num = num.slice(0, - 3);
		}
		for (i = 0; i < numArray.length; i ++) {
			var str = numArray[i];
			var res = '';
			while (str.length < 3) {
				str = '0' + str;
			}
			console.log(str, numArray);
			if (str.charAt(0) !== '0') {
				res += numbers1[str.charAt(0)] + ' hundred ';
			}
			if (str.charAt(1) === '1') {
				res += numbers1[str.slice(1)];
			} else if (str.charAt(1) === '0') {
				res += numbers1[str.charAt(2)];
			} else {
				res += numbers1[str.charAt(1) + '0'] + ' ';
				res += numbers1[str.charAt(2)] + ' ';
			}
			if (Number(res) === 0) {
				numbers2[i] = '';
			}
			reading = res + ' ' + numbers2[i] + ' ' + reading;
		}
		if (Object.values(numbers2).includes(reading.split(' ')[0])) {
			reading = 'one ' + reading;
		}
	}
	document.getElementById('read').textContent = reading;
	t = reading.split(' ');
	for (i = 0; i < t.length; i++) {
		if (t[i].length === 0) {
			continue;
		}
		console.log(t[i] + ", " + i);
		play1(soundsM[t[i]], i);
	}
	function play1(str, i) {
		setTimeout(function () {
			var audio = new Audio('/javascript-projects/apps/decimalNumberReader/program-recordings/' + str + '.mp3');
			audio.play();
		}, 700 * i);
	}
	return reading;
}