var map = {
	'2' : 'a,b,c',
	'3' : 'd,e,f',
	'4' : 'g,h,i',
	'5' : 'j,k,l',
	'6' : 'm,n,o',
	'7' : 'p,q,r,s',
	'8' : 't,u,v',
	'9' : 'w,x,y,z'
};

var nummap = {};

function construct_nummap() {
	for (var s in map) {
		var g = map[s].split(',');
		for (let i = 0; i < g.length; i ++) {
			nummap[g[i]] = s;
		}
	}
}

// this function takes in a string and returns the phone number corresponding to the string.
function generate(str) {
	var num = '';
	for (let i = 0; i < str.length; i ++) {
		num += nummap[str.charAt(i)];
	}
	console.log(num);
}

// this function takes a string of digits and an object which is a map of the digits in the string to letters
// and returns an array of strings of the mapped possibilities.
// the object must be formatted as such: the keys will be digits in string form and the values will be the possible characters
// that the digit in the key can take separated by commas without spaces.
function telephoneMap(str, obj) {
	let combos = [""];
	for (let i = 0; i < str.length; i ++) {
		let ch = str.charAt(i);
		let x = obj[ch];
		if (x === undefined) {
			combos = [];
			break;
		}
		let current = [];
		x = x.split(',');
		for (let j = 0; j < combos.length; j ++) {
			for (let k = 0; k < x.length; k ++) {
				current.push(combos[j] + x[k]);
			}
		}
		combos = current;
	}
	return combos;
}

// this function finds all the possible mnemonics from a given digit of strings, i.e., it takes a given digit of strings
// and returns all the permutations of that string mapped to the telephone keypad that correspond with an English word.
function findnumber(str) {
	document.getElementById('aftertext').textContent = '';
	var p = telephoneMap(str, map);
	var possibility = false;
	for (var i = 0; i < p.length; i ++) {
		if (words.includes(p[i])) {
			document.getElementById('aftertext').textContent += "The number " + str + " with mnemonic '" + p[i] + "'!";
			possibility = true;
		}
	}
	if (!possibility) {
		document.getElementById('aftertext').textContent = 'The number ' + str + ' has no possible mnemonics';
	}
}

