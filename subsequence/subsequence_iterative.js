var str1 = 'table';
var str2 = 'bat';
function subsequence(str1, str2) {
	var subsequence = false;
	var i = 0;
	for (var j = 0; j < str2.length; j++) {
		if (str1.charAt(i) === str2.charAt(j)) {
			i++;
		}
	}
	if (i === str1.length) {
		subsequence = true;
	}
	return subsequence;
}
console.log(subsequence(str1, str2));