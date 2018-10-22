var str1 = "halloween";
var str2 = "all hallow's eve";
// takes in two strings and checks if the first is a subsequence of the second
// returns a boolean: true or false
// iterative function
function subsequence(str1, str2) {
	var subsequence = false;
	var i = 0;
	for (var j = 0; j < str2.length && i < str1.length; j++) {
		if (str1.charAt(i) === str2.charAt(j)) {
			i++;
		}
	}
	if (i === str1.length) {
		subsequence = true;
	}
	return subsequence;
}
console.log("Is '" + str1 +  "' a subsequence of '" + str2 + "'?");
console.log(subsequence(str1, str2));