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
	for (var i = 0; i < number.toString().length; i++) {
		if (number.toString().charAt(number.toString().length - (i+1)) === "A") {
			inDecimal += 10 * (16 ** power);
		}else if (number.toString().charAt(number.toString().length - (i+1)) === "B") {
			inDecimal += 11 * (16 ** power);
		}else if (number.toString().charAt(number.toString().length - (i+1)) === "C") {
			inDecimal += 12 * (16 ** power);
		}else if (number.toString().charAt(number.toString().length - (i+1)) === "D") {
			inDecimal += 13 * (16 ** power);
		}else if (number.toString().charAt(number.toString().length - (i+1)) === "E") {
			inDecimal += 14 * (16 ** power);
		}else if (number.toString().charAt(number.toString().length - (i+1)) === "F") {
			inDecimal += 15 * (16 ** power);
		}else {
			inDecimal += Number(number.toString().charAt(number.toString().length - (i+1))) * (16 ** power);
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
function toB32(number) {
	var inB32 = "";
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
	}else if (number === 16) {
		return "G";
	}else if (number === 17) {
		return "H";
	}else if (number === 18) {
		return "J";
	}else if (number === 19) {
		return "K";
	}else if (number === 20) {
		return "L";
	}else if (number === 21) {
		return "M";
	}else if (number === 22) {
		return "N";
	}else if (number === 23) {
		return "P";
	}else if (number === 24) {
		return "R";
	}else if (number === 25) {
		return "T";
	}else if (number === 26) {
		return "U";
	}else if (number === 27) {
		return "V";
	}else if (number === 28) {
		return "W";
	}else if (number === 29) {
		return "X";
	}else if (number === 30) {
		return "Y";
	}else if (number === 31) {
		return "Z";
	}
	while (Math.floor(num/32) !== 0) {
		remainder = num%32;
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
		}else if (remainder === 16) {
			remainder = "G";
		}else if (remainder === 17) {
			remainder = "H";
		}else if (remainder === 18) {
			remainder = "J";
		}else if (remainder === 19) {
			remainder = "K";
		}else if (remainder === 20) {
			remainder = "L";
		}else if (remainder === 21) {
			remainder = "M";
		}else if (remainder === 22) {
			remainder = "N";
		}else if (remainder === 23) {
			remainder = "P";
		}else if (remainder === 24) {
			remainder = "R";
		}else if (remainder === 25) {
			remainder = "T";
		}else if (remainder === 26) {
			remainder = "U";
		}else if (remainder === 27) {
			remainder = "V";
		}else if (remainder === 28) {
			remainder = "W";
		}else if (remainder === 29) {
			remainder = "X";
		}else if (remainder === 30) {
			remainder = "Y";
		}else if (remainder === 31) {
			remainder = "Z";
		}else {
			remainder.toString();
		}
		inB32 = remainder + inB32;
		num = Math.floor(num/32);
	}
	remainder = num%32;
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
	}else if (remainder === 16) {
		remainder = "G";
	}else if (remainder === 17) {
		remainder = "H";
	}else if (remainder === 18) {
		remainder = "J";
	}else if (remainder === 19) {
		remainder = "K";
	}else if (remainder === 20) {
		remainder = "L";
	}else if (remainder === 21) {
		remainder = "M";
	}else if (remainder === 22) {
		remainder = "N";
	}else if (remainder === 23) {
		remainder = "P";
	}else if (remainder === 24) {
		remainder = "R";
	}else if (remainder === 25) {
		remainder = "T";
	}else if (remainder === 26) {
		remainder = "U";
	}else if (remainder === 27) {
		remainder = "V";
	}else if (remainder === 28) {
		remainder = "W";
	}else if (remainder === 29) {
		remainder = "X";
	}else if (remainder === 30) {
		remainder = "Y";
	}else if (remainder === 31) {
		remainder = "Z";
	}else {
		remainder.toString();
	}
	inB32 = remainder + inB32;
	return inB32.toLowerCase();
}
function f() {
	rl.question('What number do you want to convert?', (reply) => {
		reply = reply.trim().toLowerCase();
		for (var i = 0; i < reply.length; i++)  {
			if (isNaN(Number(reply.charAt(i))) && reply.charAt(i) !== "a" && reply.charAt(i) !== "b" && reply.charAt(i) !== "c" && reply.charAt(i) !== "d" && reply.charAt(i) !== "e" && reply.charAt(i) !== "f") {
				console.log("not a hexadecimal number");
				f();
				return;
			}
		}
		convertFromNum = reply;
		rl.question('What base do you want to convert to? 2, 8, 10, or 32?', (reply) => {
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
			}else if (reply === '32') {
				console.log(toB32(convertFromNum));
				process.exit(0);
			}
			console.log("cannot convert to that base");
			f();
		});
	});
}
f();