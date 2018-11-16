// this is a program to solve a cryptarithm my dad gave me
// it is AB-CD=EF+GH=PPP
// i realized PPP was 111 and wrote this program to solve the rest
// i could have done it by hand, but i wrote a program for it
console.time('x');
function solve() {
	for (var a = 2; a < 10; a++) {
		for (var b = 2; b < 10; b++) {
			for (var c = 2; c < 10; c++) {
				for (var d = 2; d < 10; d++) {
					for (var e = 2; e < 10; e++) {
						for (var f = 2; f < 10; f++) {
							for (var g = 2; g < 10; g++) {
								for (var h = 2;  h < 10; h++) {
									var arr = [a, b, c, d, e, f, g, h];
									var sameletter = true;
									if ((10*a+b)-(10*c+d) === (10*e+f) && (10*e+f) + (10*g+h) === 111) {
										for (var i = 0; i < 8; i++) {
											for (var j = 0; j < 8; j++) {
												if (arr[i] === arr[j] && i !== j) {
													sameletter = false;
												}
											}
										}
										if (sameletter) {
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
solve();
console.timeEnd('x');