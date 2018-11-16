// another way to solve cryptarithm1
console.time('x');
function solve() {
	var occurrences = {
		2:0,
		3:0,
		4:0,
		5:0,
		6:0,
		7:0,
		8:0,
		9:0
	};
	for (var a = 2; a < 10; a++) {
		occurrences[a]++;
		for (var b = 2; b < 10; b++) {
			occurrences[b]++;
			for (var c = 2; c < 10; c++) {
				occurrences[c]++;
				for (var d = 2; d < 10; d++) {
					occurrences[d]++;
					for (var e = 2; e < 10; e++) {
						occurrences[e]++;
						for (var f = 2; f < 10; f++) {
							occurrences[f]++;
							for (var g = 2; g < 10; g++) {
								occurrences[g]++;
								for (var h = 2;  h < 10; h++) {
									occurrences[f]++;
									if ((10*a+b)-(10*c+d) === (10*e+f) && (10*e+f) + (10*g+h) === 111) {
										if (unique(occurrences)) {
											console.log(a, b, c, d, e, f, g, h);
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}
function unique(obj) {
	for (var i = 0; i < Object.values(obj).length; i++) {
		if (Object.values(obj)[i] !== 1) {
			return false;
		}
	}
	return true;
}
solve();
console.timeEnd('x');