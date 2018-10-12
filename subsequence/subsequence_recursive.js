var str1 = "halloween";
var str2 = "all hallow's evening";
function f(str1, str2) {
	// BASE CASE
	if (str1.length === 0) {
		return true;
	}else if (str2.length === 0) {
		return false;
	}
	// RECURSIVE CASE
	if (str1.charAt(0) === str2.charAt(0)) {
		str1 = str1.substr(1);
	}
	str2 = str2.substr(1);
	return f(str1, str2);
}
console.log("Is '"+str1+"' a subsequence of '"+str2+"'?");
console.log(f(str1, str2));