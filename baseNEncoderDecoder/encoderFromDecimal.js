const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
var convertFromNum;
var remainder = null;
function toOctal(number) {
	var inOctal = "";
	var num = number;
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
function toBinary(number) {
	var inBinary = "";
	var num = number;
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
function toHex(number) {
	var inHex = "";
	var num = number;
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
	return inHex;
}
function toB32(number) {
	var inB32 = "";
	var num = number;
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
		return "S";
	}else if (number === 26) {
		return "T";
	}else if (number === 27) {
		return "U";
	}else if (number === 28) {
		return "V";
	}else if (number === 29) {
		return "W";
	}else if (number === 30) {
		return "X";
	}else if (number === 31) {
		return "Y";
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
			remainder = "S";
		}else if (remainder === 26) {
			remainder = "T";
		}else if (remainder === 27) {
			remainder = "U";
		}else if (remainder === 28) {
			remainder = "V";
		}else if (remainder === 29) {
			remainder = "W";
		}else if (remainder === 30) {
			remainder = "X";
		}else if (remainder === 31) {
			remainder = "Y";
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
		remainder = "S";
	}else if (remainder === 26) {
		remainder = "T";
	}else if (remainder === 27) {
		remainder = "U";
	}else if (remainder === 28) {
		remainder = "V";
	}else if (remainder === 29) {
		remainder = "W";
	}else if (remainder === 30) {
		remainder = "X";
	}else if (remainder === 31) {
		remainder = "Y";
	}else {
		remainder.toString();
	}
	inB32 = remainder + inB32;
	return inB32;
}
function f() {
	rl.question('What number do you want to convert?', (reply) => {
		reply = reply.trim();
		convertFromNum = Number(reply);
		if (isNaN(convertFromNum)) {
			console.log("not a number");
			f();
			return;
		}
		rl.question('What base do you want to convert to? 2, 8, 16, or 32?', (reply) => {
			reply = reply.trim();
			if (reply === 'binary' || reply === '2') {
				console.log(toBinary(convertFromNum));
				process.exit(0);
			}else if (reply === 'octal' || reply === '8') {
				console.log(toOctal(convertFromNum));
				process.exit(0);
			}else if (reply.startsWith('h') || reply === '16') {
				console.log(toHex(convertFromNum));
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