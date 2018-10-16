function findUnit() {
	unit = document.getElementById("findUnits").selectedIndex;
	if (unit === 0) {
		alert("cannot choose that, choose again");
	}else {
		x = document.getElementById("show/hide");
		if (x.style.display === "none") {
			x.style.display = "block";
		}
		y = document.getElementById("div2");
		if (y.style.display === "none") {
			y.style.display = "block";
		}
		document.getElementById('convertFrom').options.length = 0;
		document.getElementById('convertTo').options.length = 0;
		n = ['Kilometer', 'Hectometer', 'Decameter', 'Meter', 'Decimeter', 'Centimeter', 'Millimeter', 'Micrometer', 'Nanometer', 'Mile', 'Yard', 'Foot', 'Inch', 'Nautical Mile'];
		for (i = 1; i <= n.length; i++) {
			option = document.createElement("option");
			option.text = n[i-1];
			document.getElementById('convertFrom').add(option);
			temp = document.createElement("option");
			temp.text = n[i-1];
			document.getElementById('convertTo').add(temp);
		}
		if (unit === 2) {
			document.getElementById('convertFrom').options.length = 0;
			document.getElementById('convertTo').options.length = 0;
			n = ['Kilogram', 'Hectogram', 'Decagram', 'gram', 'Decigram', 'Centigram', 'Milligram'];
			for (i = 1; i <= n.length; i++) {
				option = document.createElement("option");
				option.text = n [i-1];
				document.getElementById('convertFrom').add(option);
				temp = document.createElement("option");
				temp.text = n[i-1];
				document.getElementById('convertTo').add(temp);
			}
		}else if (unit === 3) {
			document.getElementById('convertFrom').options.length = 0;
			document.getElementById('convertTo').options.length = 0;
			n = ['Kiloliter', 'Hectoliter', 'Decaliter', 'liter', 'Deciliter', 'Centiliter', 'Milliliter'];
			for (i = 1; i <= n.length; i++) {
				option = document.createElement("option");
				option.text = n[i-1];
				document.getElementById('convertFrom').add(option);
				temp = document.createElement("option");
				temp.text = n[i-1];
				document.getElementById('convertTo').add(temp);
			}
		}else if (unit === 4) {
			document.getElementById('convertFrom').options.length = 0;
			document.getElementById('convertTo').options.length = 0;
			n = ['Square Kilometer', 'Square Hectometer', 'Square Decameter', 'Square Meter', 'Square Decimeter', 'Square Centimeter', 'Square Millimeter'];
			for (i = 1; i <= n.length; i++) {
				option = document.createElement("option");
				option.text = n[i-1];
				document.getElementById('convertFrom').add(option);
				temp = document.createElement("option");
				temp.text = n[i-1];
				document.getElementById('convertTo').add(temp);
			}
		}else if (unit === 5) {
			document.getElementById('convertFrom').options.length = 0;
			document.getElementById('convertTo').options.length = 0;
			n = ['Peta', 'Pebi', 'Tera', 'Tebi', 'Giga', 'Gibi', 'Mega', 'Mebi', 'Kilo', 'Kibi', ''];
			for (i = 1; i <= n.length; i++) {
				option = document.createElement("option");
				option.text = n[i-1] + 'byte';
				document.getElementById('convertFrom').add(option);
				temp = document.createElement("option");
				temp.text = n[i-1] + 'byte';
				document.getElementById('convertTo').add(temp);
			}
			for (i = 1; i <= n.length; i++) {
				option = document.createElement("option");
				option.text = n[i-1] + 'bit';
				document.getElementById('convertFrom').add(option);
				temp = document.createElement("option");
				temp.text = n[i-1] + 'bit';
				document.getElementById('convertTo').add(temp);
			}
		}
	}
}

function immediately() {
	if (document.getElementById('immediately?').checked === true) {
		document.getElementById('convertButton').disabled = true;
		organize();
	} else {
		document.getElementById('convertButton').disabled = false;
	}
}

function organize() {
	var quantity = document.getElementById('quantity').value;
	var e = document.getElementById('convertFrom');
	let convertFrom = e.options[e.selectedIndex].text.toLowerCase();
	e = document.getElementById('convertTo');
	let convertTo = e.options[e.selectedIndex].text.toLowerCase();
	e = document.getElementById('findUnits').selectedIndex;
	var prop;
	if (e === 1) {
		prop = {
			kilometer:1.609344,
			hectometer:16.09344,
			decameter:160.9344,
			meter:1609.344,
			decimeter:16093.44,
			centimeter:160934.4,
			millimeter:1609344,
			micrometer : 1609344000,
			nanometer : 1609344000000,
			mile : 1,
			yard : 1760,
			foot : 5280,
			inch : 15840,
			'nautical mile' : 0.868809731,
		};
	}else if (e === 2) {
		prop = {
			'metric ton':1,
			kilogram:1000,
			hectogram:10000,
			decagram:100000,
			gram:1000000,
			decigram:10000000,
			centigram:100000000,
			milligram:1000000000,
			'imperial ton':0.984207,
			'US ton':1.10231,
			stone:157.473,
			pound:2204.62,
			ounce:35274
		};
	}else if (e === 3) {
		prop = {
			'US liquid gallon':1,
			'US liquid quart':4,
			'US liquid pint':8,
			'US legal cup':15.7725,
			'US fluid ounce':128,
			'US tablespoon':256,
			'US teaspoon':768,
			'cubic meter':0.00378541,
			kiloliter:0.00378541,
			hectoliter:0.0378541,
			decaliter:0.378541,
			liter:3.78541,
			deciliter:37.8541,
			centiliter:378.541,
			milliliter:3785.41,
			'imperial quart':3.3307,
			'imperial pint':7.57082,
			'imperial cup':13.3228,
			'imperial fluid ounce':133.228,
			'imperial tablespoon':213.165,
			'imperial teaspoon':639.494,
			'cubic foot':0.133681,
			'cubic inch':231
		};
	}else if (e === 4) {
		prop = {
			'square kilometer':1,
			'square hectometer':10,
			'square decameter':100,
			'square meter':1000,
			'square decimeter':10000,
			'square centimeter':100000,
			'square millimeter':1000000,
			'square mile':0.386102,
			'square yard':1195990.05,
			'square foot':10763910.4,
			'square inch':15500031000000000,
			'hectare':100,
			'acre':247.105
		};
	}else if (e === 5) {
		prop = {
			bit:1,
			kilobit:1000,
			kibibit:1024,
			megabit:1000000,
			mebibit:1048576,
			gigabit:1000000000,
			gibibit:1073741824,
			terabit:1000000000000,
			tebibit:1099511627776,
			petabit:1000000000000000,
			pebibit:1125899906842624,
			byte:8,
			kilobyte:8000,
			kibibyte:8192,
			megabyte:8000000,
			mebibyte:8388608,
			gigabyte:8000000000,
			gibibyte:8589934592,
			terabyte:8000000000000,
			tebibyte:8796093022208,
			petabyte:8000000000000000,
			pebibyte:9007199254740992
		};
	}
	convert(prop, convertFrom, convertTo, quantity);
}

function swap() {
	var fromIndex = document.getElementById('convertFrom').selectedIndex;
	var tempIndex = document.getElementById('convertTo').selectedIndex;
	document.getElementById('convertTo').selectedIndex = fromIndex;
	document.getElementById('convertFrom').selectedIndex = tempIndex;
	if (document.getElementById('swapconvert?').checked === true) {
		organize();
	} else if (document.getElementById('immediately?').checked === true) {
		organize();
	}
}

function convert(prop, from, to, quantity) {
	var a = Object.keys(prop);
	var b = Object.values(prop);
	var fromValue = b[a.indexOf(from)];
	var toValue = b[a.indexOf(to)];
	if (quantity === null || quantity.length === 0) {
		quantity = 1;
	}else if (quantity !== 1) {
		from += 's';
	}
	if (Object.keys(prop)[0] === 'bit') {
		var toDelete = toValue;
		toValue = fromValue;
		fromValue = toDelete;
	}
	var convertToNumber = toValue/fromValue*quantity;
	convertToNumber = Number.parseFloat(convertToNumber);
	if (convertToNumber !== 1) {
		to += 's';
	}
	document.getElementById('aftertext').textContent = quantity + " " + from + " is equal to " + convertToNumber + " " + to;
	document.getElementById('rounded').textContent = 'Rounded it is: ' + Number.parseFloat(convertToNumber.toFixed(3));
}