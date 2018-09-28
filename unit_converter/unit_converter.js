function findUnit() {
	var unit = document.getElementById("findUnits").selectedIndex;
	if (unit === 0) {
		alert("cannot choose that, choose again");
	}else {
		var x = document.getElementById("show/hide");
		if (x.style.display === "none") {
			x.style.display = "block";
		} else {
			x.style.display = "none";
		}
		var element = document. getElementById("convertFrom");
		if (unit === 2) {
			element.parentNode.removeChild(element);
			var y = document.createElement("SELECT");
			var option = document.createElement("OPTION");
			option.text = "Kilogram";
			option.value = "kilogram";
			y.add(option);
			option.text = "Kilogram";
			option.value = "kilogram";
			y.add(option);
			option.text = "Kilogram";
			option.value = "kilogram";
			y.add(option);
			option.text = "Kilogram";
			option.value = "kilogram";
			y.add(option);
			option.text = "Kilogram";
			option.value = "kilogram";
			y.add(option);
			option.text = "Kilogram";
			option.value = "kilogram";
			y.add(option);
			option.text = "Kilogram";
			option.value = "kilogram";
			y.add(option);
		}else if (unit === 3) {
			alert("cannot choose that, choose again");
		}else if (unit === 4) {
			alert("cannot choose that, choose again");
		}else if (unit === 5) {
			alert("cannot choose that, choose again");
		}
	}
}
