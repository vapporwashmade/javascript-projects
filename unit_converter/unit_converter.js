function findUnit() {
	var unit = document.getElementById("findUnits").selectedIndex;
	if (unit === 0) {
		alert("cannot choose that, choose again");
	}else {
		var x = document.getElementById("show/hide");
		if (x.style.display === "none") {
			x.style.display = "block";
		}
		var y = document.getElementById("div2");
		if (y.style.display === "none") {
			y.style.display = "block";
		}
		var n = ['Kilo', 'Hecto', 'Deca', '', 'Deci', 'Centi', 'Milli'];
		for (var i = 1; i <= 7; i++) {
			var concat = n[i-1];
			var add = i.toString();
			document.getElementById(add).text = concat+'meter';
			add += "'";
			document.getElementById(add).text = concat+'meter';
		}
		if (unit === 2) {
			for (i = 1; i <= 7; i++) {
				concat = n[i-1];
				add = i.toString();
				document.getElementById(add).text = concat+'gram';
				add += "'";
				document.getElementById(add).text = concat+'gram';
			}
		}else if (unit === 3) {
			for (i = 1; i <= 7; i++) {
				concat = n[i-1];
				add = i.toString();
				document.getElementById(add).text = concat+'liter';
				add += "'";
				document.getElementById(add).text = concat+'liter';
			}
		}else if (unit === 4) {
			for (i = 1; i <= 7; i++) {
				concat = n[i-1];
				add = i.toString();
				document.getElementById(add).text = 'Square '+concat+'meter';
				add += "'";
				document.getElementById(add).text = 'Square '+concat+'meter';
			}
		}else if (unit === 5) {
			n = ['Peta', 'Tera', 'Giga', 'Mega', 'Kilo', '', 'by'];
			for (i = 1; i <= 7; i++) {
				concat = n[i-1];
				add = i.toString();
				document.getElementById(add).text = 'Square '+concat+'byte';
				add += "'";
				document.getElementById(add).text = 'Square '+concat+'byte';
			}
		}
	}
}
function organize() {
	var quantity = document.getElementById('quantity').value;
	var e = document.getElementById('convertFrom');
	var convertFrom = e.options[e.selectedIndex].text.toLowerCase();
	e = document.getElementById('convertTo');
	var convertTo = e.options[e.selectedIndex].text.toLowerCase();
	e = document.getElementById('findUnits').selectedIndex;
	if (e === 1) {
		var prop = {
			kilometer:1,
			hectometer:10,
			decameter:100,
			meter:1000,
			decimeter:10000,
			centimeter:100000,
			millimeter:1000000
		};
	}else if (e === 2) {
		prop = {
			kilogram:1,
			hectogram:10,
			decagram:100,
			gram:1000,
			decigram:10000,
			centigram:100000,
			milligram:1000000
		};
	}else if (e === 3) {
		prop = {
			kiloliter:1,
			hectoliter:10,
			decaliter:100,
			liter:1000,
			deciliter:10000,
			centiliter:100000,
			milliliter:1000000
		};
	}else if (e === 4) {
		prop = {
			'square kilometer':1,
			'square hectometer':10,
			'square decameter':100,
			'square meter':1000,
			'square decimeter':10000,
			'square centimeter':100000,
			'square millimeter':1000000
		};
	}else if (e === 5) {
		prop = {
			petabyte:1,
			terabyte:1000,
			gigabyte:1000000,
			megabyte:1000000000,
			kilobyte:1000000000000,
			byte:1000000000000000
		};
	}
	convert(prop, convertFrom, convertTo, quantity);
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
	var convertToNumber = toValue/fromValue*quantity;
	convertToNumber = Number.parseFloat(convertToNumber);
	if (convertToNumber !== 1) {
		to += 's';
	}
	document.getElementById('aftertext').textContent = quantity + " " + from + " is equal to " + convertToNumber + " " + to;
}