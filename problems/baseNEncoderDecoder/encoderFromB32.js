const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
var convertFromNum;
var remainder = null;
function toDecimal(number) {
	var inDecimal = 0;
	var power = 0;
	number = number.toString().toLowerCase();
	for (var i = 0; i < number.length; i++) {
		if (number.charAt(number.length - (i+1)) === "a") {
			inDecimal += 10 * (32 ** power);
		}else if (number.charAt(number.length - (i+1)) === "b") {
			inDecimal += 11 * (32 ** power);
		}else if (number.charAt(number.length - (i+1)) === "c") {
			inDecimal += 12 * (32 ** power);
		}else if (number.charAt(number.length - (i+1)) === "d") {
			inDecimal += 13 * (32 ** power);
		}else if (number.charAt(number.length - (i+1)) === "e") {
			inDecimal += 14 * (32 ** power);
		}else if (number.charAt(number.length - (i+1)) === "f") {
			inDecimal += 15 * (32 ** power);
		}else if (number.charAt(number.length - (i+1)) === "g") {
			inDecimal += 16 * (32 ** power);
		}else if (number.charAt(number.length - (i+1)) === "h") {
			inDecimal += 17 * (32 ** power);
		}else if (number.charAt(number.length - (i+1)) === "j") {
			inDecimal += 18 * (32 ** power);
		}else if (number.charAt(number.length - (i+1)) === "k") {
			inDecimal += 19 * (32 ** power);
		}else if (number.charAt(number.length - (i+1)) === "l") {
			inDecimal += 20 * (32 ** power);
		}else if (number.charAt(number.length - (i+1)) === "m") {
			inDecimal += 21 * (32 ** power);
		}else if (number.charAt(number.length - (i+1)) === "n") {
			inDecimal += 22 * (32 ** power);
		}else if (number.charAt(number.length - (i+1)) === "p") {
			inDecimal += 23 * (32 ** power);
		}else if (number.charAt(number.length - (i+1)) === "r") {
			inDecimal += 24 * (32 ** power);
		}else if (number.charAt(number.length - (i+1)) === "t") {
			inDecimal += 25 * (32 ** power);
		}else if (number.charAt(number.length - (i+1)) === "u") {
			inDecimal += 26 * (32 ** power);
		}else if (number.charAt(number.length - (i+1)) === "v") {
			inDecimal += 27 * (32 ** power);
		}else if (number.charAt(number.length - (i+1)) === "w") {
			inDecimal += 28 * (32 ** power);
		}else if (number.charAt(number.length - (i+1)) === "x") {
			inDecimal += 29 * (32 ** power);
		}else if (number.charAt(number.length - (i+1)) === "y") {
			inDecimal += 30 * (32 ** power);
		}else if (number.charAt(number.length - (i+1)) === "z") {
			inDecimal += 31 * (32 ** power);
		}else {
			inDecimal += Number(number.charAt(number.length - (i+1))) * (32 ** power);
		}
		power++;
	}
	return inDecimal;
}
function toBinary(number) {
	var inBinary = "";
	var num = toDecimal(number);
	if (number < 2) {
		return number;
	}
	while (Math.floor(num/2) !== 0) {
		remainder = num%2;
		remainder.toString();
		inBinary = remainder + inBinary;
		num = Math.floor(num/2);
	}
	remainder = num%2;
	remainder.toString();
	inBinary = remainder + inBinary;
	return inBinary;
}
function toOctal(number) {
	var inOctal = "";
	var num = toDecimal(number);
	if (number < 8) {
		return number;
	}
	while (Math.floor(num/8) !== 0) {
		remainder = num%8;
		remainder.toString();
		inOctal = remainder + inOctal;
		num = Math.floor(num/8);
	}
	remainder = num%8;
	remainder.toString();
	inOctal = remainder + inOctal;
	return inOctal;
}
function toHex(number) {
	var inHex = "";
	var num = toDecimal(number);
	if (number < 10) {
		return number;
	}else if (number === 10) {
		return "A";
	}else if (number === 11) {
		return "B";
	}else if (number === 12) {
		return "C";
	}else if (number === 13) {
		return "D";
	}else if (number === 14) {
		return "E";
	}else if (number === 15) {
		return "F";
	}
	while (Math.floor(num/16) !== 0) {
		remainder = num%16;
		if (remainder === 10) {
			remainder = "A";
		}else if (remainder === 11) {
			remainder = "B";
		}else if (remainder === 12) {
			remainder = "C";
		}else if (remainder === 13) {
			remainder = "D";
		}else if (remainder === 14) {
			remainder = "E";
		}else if (remainder === 15) {
			remainder = "F";
		}else {
			remainder.toString();
		}
		inHex = remainder + inHex;
		num = Math.floor(num/16);
	}
	remainder = num%16;
	if (remainder === 10) {
		remainder = "A";
	}else if (remainder === 11) {
		remainder = "B";
	}else if (remainder === 12) {
		remainder = "C";
	}else if (remainder === 13) {
		remainder = "D";
	}else if (remainder === 14) {
		remainder = "E";
	}else if (remainder === 15) {
		remainder = "F";
	}else {
		remainder.toString();
	}
	inHex = remainder + inHex;
	return inHex.toLowerCase();
}
function f() {
	rl.question('What number do you want to convert?', (reply) => {
		reply = reply.trim().toLowerCase();
		for (var i = 0; i < reply.length; i++)  {
			if (reply.charAt(i) === "i" || reply.charAt(i) === 'o' || reply.charAt(i) === 'q' || reply.charAt(i) === 's') {
				console.log("not a base 32 number");
				f();
				return;
			}
		}
		convertFromNum = reply;
		rl.question('What base do you want to convert to? 2, 8, 10, or 16?', (reply) => {
			reply = reply.trim();
			if (reply === 'binary' || reply === '2') {
				console.log(toBinary(convertFromNum));
				process.exit(0);
			}else if (reply === 'octal' || reply === '8') {
				console.log(toOctal(convertFromNum));
				process.exit(0);
			}else if (reply === 'decimal' || reply === '10') {
				console.log(toDecimal(convertFromNum));
				process.exit(0);
			}else if (reply.startsWith('h') || reply === '16') {
				console.log(toHex(convertFromNum));
				process.exit(0);
			}
			console.log("cannot convert to that base");
			f();
		});
	});
}
f();