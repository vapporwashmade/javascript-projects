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
	convertFrom = null;
	convertFromNumber = null;
	convertTo = null;
	b = null;
	rl.question(q, (answer) => {
		b = answer;
		if (b.trim() === 'quit') {
			process.exit(1);
		}
		rl.pause();
		switch (b.trim()) {
			case "length":
				var kilometer = {name : "kilometer", value : 1};
				var hectometer = {name : "hectometer", value : 10};
				var decameter = {name : "decameter", value : 100};
				var meter = {name : "meter", value : 1000};
				var decimeter = {name : "decimeter", value : 10000};
				var centimeter = {name : "centimeter", value : 100000};
				var millimeter = {name : "millimeter", value : 1000000};
				var micrometer = {name : "micrometer", value : 1000000000};
				var nanometer = {name : "nanometer", value : 1000000000000};
				var mile = {name : "mile", value : 0.621371};
				var yard = {name : "yard", value : 1093.61};
				var foot = {name : "foot", value : 3280.84};
				var inch = {name : "inch", value : 39370.1};
				var nautical_mile = {name : "nautical mile", value : 0.539957};
				rl.resume();
				rl.question('What do you want to convert from? kilometer, hectometer, decameter, meter, decimeter, centimeter, millimeter, micrometer, nanometer,\nmile, yard, foot, inch, or nautical mile?', (reply) => {
					switch (reply.trim()) {
						case "kilometer":
							convertFrom = kilometer;
							break;
						case "hectometer":
							convertFrom = hectometer;
							break;
						case "decameter":
							convertFrom = decameter;
							break;
						case "meter":
							convertFrom = meter;
							break;
						case "decimeter":
							convertFrom = decimeter;
							break;
						case "centimeter":
							convertFrom = centimeter;
							break;
						case "millimeter":
							convertFrom = millimeter;
							break;
						case "micrometer":
							convertFrom = micrometer;
							break;
						case "nanometer":
							convertFrom = nanometer;
							break;
						case "mile":
							convertFrom = mile;
							break;
						case "yard":
							convertFrom = yard;
							break;
						case "foot":
							convertFrom = foot;
							break;
						case "inch":
							convertFrom = inch;
							break;
						case "nautical mile":
							convertFrom = nautical_mile;
							break;
						case 'quit':
							process.exit(1);
							break;
						default:
							console.log("not a unit");
							f();
							return;
					}
					rl.question('How many?', (answer) => {
						convertFromNumber = answer;
						if (answer === null || answer.length === 0) {
							convertFromNumber = 1;
						}else if (isNaN(convertFromNumber)) {
							console.log("not a number");
							f();
							return;
						}else if (Number(convertFromNumber) !== 1 && convertFrom === foot) {
							foot.name = "feet";
						}else if (Number(convertFromNumber) !== 1 && convertFrom === inch) {
							inch.name = "inches";
						}else if (Number(convertFromNumber) !== 1) {
							convertFrom.name += "s";
						}
						if (convertFromNumber === 'quit') {
							process.exit(1);
						}
						rl.question('What do you want to convert to? kilometer, hectometer, decameter, meter, decimeter, centimeter, millimeter, micrometer, nanometer,\nmile, yard, foot, inch, or nautical mile?', (answer) => {
							switch (answer.trim()) {
								case "kilometer":
									convertTo = kilometer;
									break;
								case "hectometer":
									convertTo = hectometer;
									break;
								case "decameter":
									convertTo = decameter;
									break;
								case "meter":
									convertTo = meter;
									break;
								case "decimeter":
									convertTo = decimeter;
									break;
								case "centimeter":
									convertTo = centimeter;
									break;
								case "millimeter":
									convertTo = millimeter;
									break;
								case "micrometer":
									convertTo = micrometer;
									break;
								case "nanometer":
									convertTo = nanometer;
									break;
								case "mile":
									convertTo = mile;
									break;
								case "yard":
									convertTo = yard;
									break;
								case "foot":
									convertTo = foot;
									break;
								case "inch":
									convertTo = inch;
									break;
								case "nautical mile":
									convertTo = nautical_mile;
									break;
								case 'quit':
									process.exit(1);
									break;
								default:
									console.log("not a unit");
									f();
									return;
							}
							var convertToNumber = (convertTo.value / convertFrom.value) * convertFromNumber;
							convertToNumber = Number.parseFloat(convertToNumber).toFixed(5);
							if (Number(convertToNumber) !== 1 && convertTo === foot) {
								foot.name = "feet";
							}else if (Number(convertToNumber) !== 1 && convertTo === inch) {
								inch.name = "inches";
							}else if (Number(convertToNumber) !== 1) {
								convertTo.name += "s";
							}
							console.log(convertFromNumber + " " + convertFrom.name + " is equal to " + convertToNumber + " " + convertTo.name);
							f();
						});
					});
				});
				rl.resume();
				break;
			case "mass":
				var metric_ton = {name : "metric ton", value : 1};
				var kilogram = {name : "kilogram", value : 1000};
				var hectogram = {name : "hectogram", value : 10000};
				var decagram = {name : "decagram", value : 100000};
				var gram = {name : "gram", value : 1000000};
				var decigram = {name : "decigram", value : 10000000};
				var centigram = {name : "centigram", value : 100000000};
				var milligram = {name : "milligram", value : 1000000000};
				var microgram = {name : "microgram", value : 1000000000000};
				var imperial_ton = {name : "imperial ton", value : 0.984207};
				var us_ton = {name : "US ton", value : 1.10231};
				var stone = {name : "stone", value : 157.473};
				var pound = {name : "pound", value : 2204.62};
				var ounce = {name : "ounce", value : 35274};
				rl.resume();
				rl.question('What do you want to convert from? metric ton, kilogram, hectogram, decagram, gram, decigram, centigram, milligram, microgram, imperial ton, US ton,\nstone, pound, or ounce?', (reply) => {
					switch (reply.trim()) {
						case "metric ton":
							convertFrom = metric_ton;
							break;
						case "kilogram":
							convertFrom = kilogram;
							break;
						case "hectogram":
							convertFrom = hectogram;
							break;
						case "decagram":
							convertFrom = decagram;
							break;
						case "gram":
							convertFrom = gram;
							break;
						case "decigram":
							convertFrom = decigram;
							break;
						case "centigram":
							convertFrom = centigram;
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
							return;
					}
					rl.question('How many?', (answer) => {
						convertFromNumber = answer;
						if (answer === null || answer.length === 0) {
							convertFromNumber = 1;
						}else if (isNaN(convertFromNumber)) {
							console.log("not a number");
							f();
							return;
						}else if (Number(convertFromNumber) !== 1) {
							convertFrom.name += "s";
						}
						if (convertFromNumber === 'quit') {
							process.exit(1);
						}
						rl.question('What do you want to convert to? metric ton, kilogram, hectogram, decagram, gram, decigram, centigram, milligram, microgram, imperial ton, US ton,\nstone, pound, or ounce?', (answer) => {
							switch (answer.trim()) {
								case "metric ton":
									convertTo = metric_ton;
									break;
								case "kilogram":
									convertTo = kilogram;
									break;
								case "hectogram":
									convertTo = hectogram;
									break;
								case "decagram":
									convertTo = decagram;
									break;
								case "gram":
									convertTo = gram;
									break;
								case "decigram":
									convertTo = decigram;
									break;
								case "centigram":
									convertTo = centigram;
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
									return;
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
				var US_liquid_gallon = {name : "US liquid gallon", value : 1};
				var US_liquid_quart = {name : "US liquid quart", value : 4};
				var US_liquid_pint = {name : "US liquid pint", value : 8};
				var US_legal_cup = {name : "US legal cup", value : 15.7725};
				var US_fluid_ounce = {name : "US fluid ounce", value : 128};
				var US_tablespoon = {name : "US tablespoon", value : 256};
				var US_teaspoon = {name : "US teaspoon", value : 768};
				var cubic_meter = {name : "cubic meter", value : 0.00378541};
				var kiloliter = {name : "kiloliter", value : 0.00378541};
				var hectoliter = {name : "hectoliter", value : 0.0378541};
				var decaliter = {name : "decaliter", value : 0.378541};
				var liter = {name : "liter", value : 3.78541};
				var deciliter = {name : "deciliter", value : 37.8541};
				var centiliter = {name : "centiliter", value : 378.541};
				var milliliter = {name : "milliliter", value : 3785.41};
				var imperial_quart = {name : "imperial quart", value : 3.3307};
				var imperial_pint = {name : "imperial pint", value : 7.57082};
				var imperial_cup = {name : "imperial cup", value : 13.3228};
				var imperial_fluid_ounce = {name : "imperial fluid ounce", value : 133.228};
				var imperial_tablespoon = {name : "imperial tablespoon", value : 213.165};
				var imperial_teaspoon = {name : "imperial teaspoon", value : 639.494};
				var cubic_foot = {name : "cubic foot", value : 0.133681};
				var cubic_inch = {name : "cubic inch", value : 231};
				rl.resume();
				rl.question('What do you want to convert from? US liquid gallon, US liquid quart, US liquid pint, US legal cup, US fluid ounce, US tablespoon, US teaspoon,\ncubic meter, kiloliter, hectoliter, decaliter, liter, deciliter, centiliter, milliliter,\nimperial quart, imperial pint, imperial cup, imperial fluid ounce, imperial tablespoon, imperial teaspoon, cubic foot, or cubic inch?', (reply) => {
					switch (reply.trim()) {
						case "US liquid gallon":
							convertFrom = US_liquid_gallon;
							break;
						case "US liquid quart":
							convertFrom = US_liquid_quart;
							break;
						case "US liquid pint":
							convertFrom = US_liquid_pint;
							break;
						case "US legal cup":
							convertFrom = US_legal_cup;
							break;
						case "US fluid ounce":
							convertFrom = US_fluid_ounce;
							break;
						case "US tablespoon":
							convertFrom = US_tablespoon;
							break;
						case "US teaspoon":
							convertFrom = US_teaspoon;
							break;
						case "cubic meter":
							convertFrom = cubic_meter;
							break;
						case "kiloliter":
							convertFrom = kiloliter;
							break;
						case "hectoliter":
							convertFrom = hectoliter;
							break;
						case "decaliter":
							convertFrom = decaliter;
							break;
						case "liter":
							convertFrom = liter;
							break;
						case "deciliter":
							convertFrom = deciliter;
							break;
						case "centiliter":
							convertFrom = centiliter;
							break;
						case "milliliter":
							convertFrom = milliliter;
							break;
						case "imperial quart":
							convertFrom = imperial_quart;
							break;
						case "imperial pint":
							convertFrom = imperial_pint;
							break;
						case "imperial cup":
							convertFrom = imperial_cup;
							break;
						case "imperial fluid ounce":
							convertFrom = imperial_fluid_ounce;
							break;
						case "imperial tablespoon":
							convertFrom = imperial_tablespoon;
							break;
						case "imperial teaspoon":
							convertFrom = imperial_teaspoon;
							break;
						case "cubic foot":
							convertFrom = cubic_foot;
							break;
						case "cubic inch":
							convertFrom = cubic_inch;
							break;
						case 'quit':
							process.exit(1);
							break;
						default:
							console.log("not a unit");
							f();
							return;
					}
					rl.question('How many?', (answer) => {
						convertFromNumber = answer;
						if (answer === null || answer.length === 0) {
							convertFromNumber = 1;
						}else if (isNaN(convertFromNumber)) {
							console.log("not a number");
							f();
							return;
						}else if (Number(convertFromNumber) !== 1 && convertFrom === cubic_foot) {
							cubic_foot.name = "cubic feet";
						}else if (Number(convertFromNumber) !== 1 && convertFrom === cubic_inch) {
							cubic_inch.name = "cubic inches";
						}else if (Number(convertFromNumber) !== 1) {
							convertFrom.name += "s";
						}
						if (convertFromNumber === 'quit') {
							process.exit(1);
						}
						rl.question('What do you want to convert to? US liquid gallon, US liquid quart, US liquid pint, US legal cup, US fluid ounce, US tablespoon, US teaspoon,\ncubic meter, kiloliter, hectoliter, decaliter, liter, deciliter, centiliter, milliliter,\nimperial quart, imperial pint, imperial cup, imperial fluid ounce, imperial tablespoon, imperial teaspoon, cubic foot, or cubic inch?', (answer) => {
							switch (answer.trim()) {
								case "US liquid gallon":
									convertTo = US_liquid_gallon;
									break;
								case "US liquid quart":
									convertTo = US_liquid_quart;
									break;
								case "US liquid pint":
									convertTo = US_liquid_pint;
									break;
								case "US legal cup":
									convertTo = US_legal_cup;
									break;
								case "US fluid ounce":
									convertTo = US_fluid_ounce;
									break;
								case "US tablespoon":
									convertTo = US_tablespoon;
									break;
								case "US teaspoon":
									convertTo = US_teaspoon;
									break;
								case "cubic meter":
									convertTo = cubic_meter;
									break;
								case "kiloliter":
									convertTo = kiloliter;
									break;
								case "hectoliter":
									convertTo = hectoliter;
									break;
								case "decaliter":
									convertTo = decaliter;
									break;
								case "liter":
									convertTo = liter;
									break;
								case "deciliter":
									convertTo = deciliter;
									break;
								case "centiliter":
									convertTo = centiliter;
									break;
								case "milliliter":
									convertTo = milliliter;
									break;
								case "imperial quart":
									convertTo = imperial_quart;
									break;
								case "imperial pint":
									convertTo = imperial_pint;
									break;
								case "imperial cup":
									convertTo = imperial_cup;
									break;
								case "imperial fluid ounce":
									convertTo = imperial_fluid_ounce;
									break;
								case "imperial tablespoon":
									convertTo = imperial_tablespoon;
									break;
								case "imperial teaspoon":
									convertTo = imperial_teaspoon;
									break;
								case "cubic foot":
									convertTo = cubic_foot;
									break;
								case "cubic inch":
									convertTo = cubic_inch;
									break;
								case 'quit':
									process.exit(1);
									break;
								default:
									console.log("not a unit");
									f();
									return;
							}
							var convertToNumber = (convertTo.value / convertFrom.value) * convertFromNumber;
							convertToNumber = Number.parseFloat(convertToNumber).toFixed(5);
							if (Number(convertToNumber) !== 1 && convertTo === cubic_foot) {
								cubic_foot.name = "cubic feet";
							}else if (Number(convertToNumber) !== 1 && convertTo === cubic_inch) {
								cubic_inch.name = "cubic inches";
							}else if (Number(convertToNumber) !== 1) {
								convertTo.name += "s";
							}
							console.log(convertFromNumber + " " + convertFrom.name + " is equal to " + convertToNumber + " " + convertTo.name);
							f();
						});
					});
				});
				rl.resume();
				break;
			case "area":
				var sq_km = {name : "square kilometer", value : 1};
				var sq_hm = {name : "square hectometer", value : 100};
				var sq_Dm = {name : "square decameter", value : 10000};
				var sq_m = {name : "square meter", value : 1000000};
				var sq_dm = {name : "square decimeter", value : 100000000};
				var sq_cm = {name : "square centimeter", value : 10000000000};
				var sq_mm = {name : "square millimeter", value : 1000000000000};
				var sq_mi = {name : "square mile", value : 0.386102};
				var sq_yd = {name : "square yard", value : 1195990.05};
				var sq_ft = {name : "square foot", value : 10763910.4};
				var sq_in = {name : "square inch", value : 15500031000000000};
				var hectare = {name : "hectare", value : 100};
				var acre = {name : "acre", value : 247.105};
				rl.resume();
				rl.question('What do you want to convert from? square kilometer, square hectometer, square decameter, square meter, square decimeter, square centimeter, square millimeter,\nsquare mile, square yard, square foot, square inch, hectare, or acre?', (reply) => {
					switch (reply.trim()) {
						case "square kilometer":
							convertFrom = sq_km;
							break;
						case "square hectometer":
							convertFrom = sq_hm;
							break;
						case "square decameter":
							convertFrom = sq_Dm;
							break;
						case "square meter":
							convertFrom = sq_m;
							break;
						case "square decimeter":
							convertFrom = sq_dm;
							break;
						case "square centimeter":
							convertFrom = sq_cm;
							break;
						case "square millimeter":
							convertFrom = sq_mm;
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
							return;
					}
					rl.question('How many?', (answer) => {
						convertFromNumber = answer;
						if (answer === null || answer.length === 0) {
							convertFromNumber = 1;
						}else if (isNaN(convertFromNumber)) {
							console.log("not a number");
							f();
							return;
						}else if (Number(convertFromNumber) !== 1 && convertFrom === sq_ft) {
							sq_ft.name = "square feet";
						}else if (Number(convertFromNumber) !== 1 && convertFrom === sq_in) {
							sq_in.name = "square inches";
						}else if (Number(convertFromNumber) !== 1) {
							convertFrom.name += "s";
						}
						if (convertFromNumber === 'quit') {
							process.exit(1);
						}
						rl.question('What do you want to convert to? square kilometer, square hectometer, square decameter, square meter, square decimeter, square centimeter, square millimeter,\nsquare mile, square yard, square foot, square inch, hectare, or acre?', (answer) => {
							switch (answer.trim()) {
								case "square kilometer":
									convertTo = sq_km;
									break;
								case "square hectometer":
									convertTo = sq_hm;
									break;
								case "square decameter":
									convertTo = sq_Dm;
									break;
								case "square meter":
									convertTo = sq_m;
									break;
								case "square decimeter":
									convertTo = sq_dm;
									break;
								case "square centimeter":
									convertTo = sq_cm;
									break;
								case "square millimeter":
									convertTo = sq_mm;
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
									return;
							}
							var convertToNumber = (convertTo.value / convertFrom.value) * convertFromNumber;
							convertToNumber = Number.parseFloat(convertToNumber).toFixed(5);
							if (Number(convertToNumber) !== 1 && convertFrom === sq_ft) {
								sq_ft.name = "square feet";
							}else if (Number(convertToNumber) !== 1 && convertFrom === sq_in) {
								sq_in.name = "square inches";
							}else if (Number(convertToNumber) !== 1) {
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
				var bit = {name : "bit", value : 1};
				var kilobit = {name : "kilobit", value : 1000};
				var kibibit = {name : "kibibit", value : 1024};
				var megabit = {name : "megabit", value : 1000000};
				var mebibit = {name : "mebibit", value : 1048576};
				var gigabit = {name : "gigabit", value : 1000000000};
				var gibibit = {name : "gibibit", value : 1073741824};
				var terabit = {name : "terabit", value : 1000000000000};
				var tebibit = {name : "tebibit", value : 1099511627776};
				var petabit = {name : "petabit", value : 1000000000000000};
				var pebibit = {name : "pebibit", value : 1125899906842624};
				var byte = {name : "byte", value : 8};
				var kilobyte = {name : "kilobyte", value : 8000};
				var kibibyte = {name : "kibibyte", value : 8192};
				var megabyte = {name : "megabyte", value : 8000000};
				var mebibyte = {name : "mebibyte", value : 8388608};
				var gigabyte = {name : "gigabyte", value : 8000000000};
				var gibibyte = {name : "gibibyte", value : 8589934592};
				var terabyte = {name : "terabyte", value : 8000000000000};
				var tebibyte = {name : "tebibyte", value : 8796093022208};
				var petabyte = {name : "petabyte", value : 8000000000000000};
				var pebibyte = {name : "pebibyte", value : 9007199254740992};
				rl.resume();
				rl.question('What do you want to convert from? bit, kilobit, kibibit, megabit, mebibit, gigabit, gibibit, terabit, tebibit, petabit, pebibit, byte, kilobyte, kibibyte, megabyte, mebibyte, gigabyte, gibibyte, terabyte, tebibyte, petabyte, or pebibyte?', (reply) => {
					switch (reply.trim()) {
						case "bit":
							convertFrom = bit;
							break;
						case "kilobit":
							convertFrom = kilobit;
							break;
						case "kibibit":
							convertFrom = kibibit;
							break;
						case "megabit":
							convertFrom = megabit;
							break;
						case "mebibit":
							convertFrom = mebibit;
							break;
						case "gigabit":
							convertFrom = gigabit;
							break;
						case "gibibit":
							convertFrom = gibibit;
							break;
						case "terabit":
							convertFrom = terabit;
							break;
						case "tebibit":
							convertFrom = tebibit;
							break;
						case "petabit":
							convertFrom = petabit;
							break;
						case "pebibit":
							convertFrom = pebibit;
							break;
						case "byte":
							convertFrom = byte;
							break;
						case "kilobyte":
							convertFrom = kilobyte;
							break;
						case "kibibyte":
							convertFrom = kibibyte;
							break;
						case "megabyte":
							convertFrom = megabyte;
							break;
						case "mebibyte":
							convertFrom = mebibyte;
							break;
						case "gigabyte":
							convertFrom = gigabyte;
							break;
						case "gibibyte":
							convertFrom = gibibyte;
							break;
						case "terabyte":
							convertFrom = terabyte;
							break;
						case "tebibyte":
							convertFrom = tebibyte;
							break;
						case "petabyte":
							convertFrom = petabyte;
							break;
						case "pebibyte":
							convertFrom = pebibyte;
							break;
						case 'quit':
							process.exit(1);
							break;
						default:
							console.log("not a unit");
							f();
							return;
					}
					rl.question('How many?', (answer) => {
						convertFromNumber = answer;
						if (convertFromNumber === 'quit') {
							process.exit(1);
						}
						if (answer === null || answer.length === 0) {
							convertFromNumber = 1;
						}else if (isNaN(convertFromNumber)) {
							console.log("not a number");
							f();
							return;
						}else if (Number(convertFromNumber) !== 1) {
							convertFrom.name += "s";
						}
						rl.question('What do you want to convert to? bit, kilobit, kibibit, megabit, mebibit, gigabit, gibibit, terabit, tebibit, petabit, pebibit, byte, kilobyte, kibibyte, megabyte, mebibyte, gigabyte, gibibyte, terabyte, tebibyte, petabyte, or pebibyte?', (answer) => {
							switch (answer.trim()) {
								case "bit":
									convertTo = bit;
									break;
								case "kilobit":
									convertTo = kilobit;
									break;
								case "kibibit":
									convertTo = kibibit;
									break;
								case "megabit":
									convertTo = megabit;
									break;
								case "mebibit":
									convertTo = mebibit;
									break;
								case "gigabit":
									convertTo = gigabit;
									break;
								case "gibibit":
									convertTo = gibibit;
									break;
								case "terabit":
									convertTo = terabit;
									break;
								case "tebibit":
									convertTo = tebibit;
									break;
								case "petabit":
									convertTo = petabit;
									break;
								case "pebibit":
									convertTo = pebibit;
									break;
								case "byte":
									convertTo = byte;
									break;
								case "kilobyte":
									convertTo = kilobyte;
									break;
								case "kibibyte":
									convertTo = kibibyte;
									break;
								case "megabyte":
									convertTo = megabyte;
									break;
								case "mebibyte":
									convertTo = mebibyte;
									break;
								case "gigabyte":
									convertTo = gigabyte;
									break;
								case "gibibyte":
									convertTo = gibibyte;
									break;
								case "terabyte":
									convertTo = terabyte;
									break;
								case "tebibyte":
									convertTo = tebibyte;
									break;
								case "petabyte":
									convertTo = petabyte;
									break;
								case "pebibyte":
									convertTo = pebibyte;
									break;
								case 'quit':
									process.exit(1);
									break;
								default:
									console.log("not a unit");
									f();
									return;
							}
							var convertToNumber = (convertFrom.value / convertTo.value) * convertFromNumber;
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
			default:
				console.log("cannot convert from that");
				f();
		}
	});
}
f();