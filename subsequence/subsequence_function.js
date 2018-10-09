var str1 = 'bat';
var str2 = 'table';
function subsequence(str1, str2) {
	var subsequence = false;
	var iterated = 0;
	for (var i = 0; i < str1.length; i++) {
		for (var j = 0; j < str2.length; j++) {
			if (str1.charAt(i) === str2.charAt(j)) {
				iterated++;
				i++;
			}
		}
	}
	if (iterated === str1.length && str2.includes(str1) === false) {
		subsequence = true;
	}
	return subsequence;
}
console.log(subsequence(str1, str2));