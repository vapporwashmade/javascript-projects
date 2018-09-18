var anagrams = true;
var str1 = "test";
var str2 = "example";
// should print false
str1 = str1.trim();
str2 = str2.trim();
if (str1.length !== str2.length) {
	console.log('Are "' + str1 + '" and "' + str2 + '" anagrams? false');
	process.exit(1);
}
var str1a = [];
var str2a = [];
for (var i = 0; i < str1.length; i++) {
	str1a.push(str1.charAt(i));
}
for (i = 0; i < str1.length; i++) {
	str2a.push(str2.charAt(i));
}
str1a = str1a.sort();
str2a = str2a.sort();
for (i = 0; i < str1a.length; i++) {
	if (str1a[i] !== str2a[i]) {
		anagrams = false;
		break;
	}
}
console.log('Are "' + str1 + '" and "' + str2 + '" anagrams?' + anagrams);