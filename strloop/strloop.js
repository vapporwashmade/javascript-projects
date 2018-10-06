var str = 1234567890;
function f(str) {
	var a = str.toString().split('');
	var b = ['', '+', '-'];
	var insert = Math.floor(Math.random() * 3);
	for (var i = 0; i < a.length; i++) {
		if (b[insert] === '' && i !== a.length-1) {
			a[i] += a[i+1];
			a.splice(i+1, 1);
			i--;
		}
		else {
			a.splice(i+1, 0, b[insert]);
			i += 1;
		}
		insert = Math.floor(Math.random() * 3);
	}
	a.pop();
	var sum = Number(a[0]);
	for (i = 1; i < a.length; i++)  {
		if (a[i] === '+') {
			sum += Number(a[i+1]);
		}else if (a[i] === '-') {
			sum -= Number(a[i+1]);
		}
	}
	var list = [];
	if (sum !== 100) {
		f(str);
	}
	else {
		if (list.includes(a.join('')) === false) {
			list.push(a.join(''));
		}
		f(str);
	}
}
f(str);