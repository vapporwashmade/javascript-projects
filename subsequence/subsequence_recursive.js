var str1 = "hac";
var str2 = "cathartic";
function f(str1, str2) {
	// BASE CASE
	if (str1.length === 0) {
		return true;
	}else if (str2.length === 0) {
		return false;
	}
	// RECURSIVE CASE
	var index = str2.indexOf(str1.charAt(0));
	if (index === -1) {
		return false;
	}
	str1 = str1.substr(1);
	str2 = str2.substr(index);
	return f(str1, str2);
}
console.log("Is '"+str1+"' a subsequence of '"+str2+"'?");
console.log(f(str1, str2));