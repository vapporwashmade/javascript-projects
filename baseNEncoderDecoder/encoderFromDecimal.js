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
	return "will do later "+number;
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