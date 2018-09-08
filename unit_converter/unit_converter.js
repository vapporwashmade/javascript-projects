var q = "Which would you like to convert(length, mass, volume, area, or digital storage?)";
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var convertFrom;
var convertFromNumber;
var convertTo;
var b = "";
function f() {
	rl.question(q, (answer) => {
		b = answer;
		if (b === 'quit') {
			process.exit(1);
		}
		rl.pause();
		switch (b) {
			case "length":
				console.log("You chose Length!");
				f();
				break;
			case "mass":
				var metric_ton = {name : "metric ton", value : 1};
				var kilogram = {name : "kilogram", value : 1000};
				var gram = {name : "gram", value : 1000000};
				var milligram = {name : "milligram", value : 1000000000};
				var microgram = {name : "microgram", value : 1000000000000};
				var imperial_ton = {name : "imperial ton", value : 0.984207};
				var us_ton = {name : "US ton", value : 1.10231};
				var stone = {name : "stone", value : 157.473};
				var pound = {name : "pound", value : 2204.62};
				var ounce = {name : "ounce", value : 35274};
				rl.resume();
				rl.question('What do you want to convert from? metric ton, kilogram, gram, milligram, microgram, imperial ton, US ton, stone, pound, or ounce?', (reply) => {
					switch (reply) {
						case "metric ton":
							convertFrom = metric_ton;
							break;
						case "kilogram":
							convertFrom = kilogram;
							break;
						case "gram":
							convertFrom = gram;
							break;
						case "milligram":
							convertFrom = milligram;
							break;
						case "microgram":
							convertFrom = microgram;
							break;
						case "imperial ton":
							convertFrom = imperial_ton;
							break;
						case "US ton":
							convertFrom = us_ton;
							break;
						case "stone":
							convertFrom = stone;
							break;
						case "pound":
							convertFrom = pound;
							break;
						case "ounce":
							convertFrom = ounce;
							break;
						case 'quit':
							process.exit(1);
							break;
						default:
							console.log("not a unit");
							f();
							break;
					}
					rl.question('How many?', (answer) => {
						convertFromNumber = answer;
						if (answer === null || answer.length === 0) {
							convertFromNumber = 1;
						}else if (isNaN(convertFromNumber)) {
							console.log("not a number");
							f();
						}
						if (Number(convertFromNumber) !== 1) {
							convertFrom.name += "s";
						}
						if (convertFromNumber === 'quit') {
							process.exit(1);
						}
						rl.question('What do you want to convert to? metric ton, kilogram, gram, milligram, microgram, imperial ton, US ton, stone, pound, or ounce?', (answer) => {
							switch (answer) {
								case "metric ton":
									convertTo = metric_ton;
									break;
								case "kilogram":
									convertTo = kilogram;
									break;
								case "gram":
									convertTo = gram;
									break;
								case "milligram":
									convertTo = milligram;
									break;
								case "microgram":
									convertTo = microgram;
									break;
								case "imperial ton":
									convertTo = imperial_ton;
									break;
								case "US ton":
									convertTo = us_ton;
									break;
								case "stone":
									convertTo = stone;
									break;
								case "pound":
									convertTo = pound;
									break;
								case "ounce":
									convertTo = ounce;
									break;
								case 'quit':
									process.exit(1);
									break;
								default:
									console.log("not a unit");
									f();
									break;
							}
							var convertToNumber = (convertTo.value / convertFrom.value) * convertFromNumber;
							convertToNumber = Number.parseFloat(convertToNumber).toFixed(5);
							if (Number(convertToNumber) !== 1) {
								convertTo.name += "s";
							}
							console.log(convertFromNumber + " " + convertFrom.name + " is equal to " + convertToNumber + " " + convertTo.name);
							f();
						});
					});
				});
				rl.resume();
				break;
			case "volume":
				console.log("You chose Volume!");
				f();
				break;
			case "area":
				var sq_km = {name : "square kilometer", value : 1};
				var sq_m = {name : "square meter", value : 1000000};
				var sq_mi = {name : "square mile", value : 0.386102};
				var sq_yd = {name : "square yard", value : 1195990.05};
				var sq_ft = {name : "square foot", value : 10763910.4};
				var sq_in = {name : "square inch", value : 15500031000000000};
				var hectare = {name : "hectare", value : 100};
				var acre = {name : "acre", value : 247.105};
				rl.resume();
				rl.question('What do you want to convert from? square kilometer, square meter, square mile, square yard, square foot, square inch, hectare, or acre?', (reply) => {
					switch (reply) {
						case "square kilometer":
							convertFrom = sq_km;
							break;
						case "square meter":
							convertFrom = sq_m;
							break;
						case "square mile":
							convertFrom = sq_mi;
							break;
						case "square yard":
							convertFrom = sq_yd;
							break;
						case "square foot":
							convertFrom = sq_ft;
							break;
						case "square inch":
							convertFrom = sq_in;
							break;
						case "hectare":
							convertFrom = hectare;
							break;
						case "acre":
							convertFrom = acre;
							break;
						case 'quit':
							process.exit(1);
							break;
						default:
							console.log("not a unit");
							f();
							break;
					}
					rl.question('How many?', (answer) => {
						convertFromNumber = answer;
						if (Number(convertFromNumber) !== 1) {
							convertFrom.name += "s";
						}
						if (convertFromNumber === 'quit') {
							process.exit(1);
						}
						if (isNaN(convertFromNumber)) {
							console.log("not a number");
							f();
						}
						rl.question('What do you want to convert to? square kilometer, square meter, square mile, square yard, square foot, square inch, hectare, or acre?', (answer) => {
							switch (answer) {
								case "square kilometer":
									convertTo = sq_km;
									break;
								case "square meter":
									convertTo = sq_m;
									break;
								case "square mile":
									convertTo = sq_mi;
									break;
								case "square yard":
									convertTo = sq_yd;
									break;
								case "square foot":
									convertTo = sq_ft;
									break;
								case "square inch":
									convertTo = sq_in;
									break;
								case "hectare":
									convertTo = hectare;
									break;
								case "acre":
									convertTo = acre;
									break;
								case 'quit':
									process.exit(1);
									break;
								default:
									console.log("not a unit");
									f();
									break;
							}
							var convertToNumber = (convertTo.value / convertFrom.value) * convertFromNumber;
							convertToNumber = Number.parseFloat(convertToNumber).toFixed(5);
							if (Number(convertToNumber) !== 1) {
								convertTo.name += "s";
							}
							console.log(convertFromNumber + " " + convertFrom.name + " is equal to " + convertToNumber + " " + convertTo.name);
							f();
						});
					});
				});
				rl.resume();
				break;
			case "digital storage":
				console.log("You chose Digital Storage!");
				f();
				break;
			default:
				console.log("cannot convert from that");
				f();
		}
	});
}
f();