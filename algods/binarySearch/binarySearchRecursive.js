// recursive binary search function
// takes in a target number and a sorted array of numbers
// it returns the first index of the element that equals target
// the array must be sorted otherwise results are unpredictable
// low is inclusive and high is exclusive
function binarySearchRecursive(target, a) {
	var low = 0;
	var high = a.length;
	var mid = Math.floor(low+(high-low)/2);
	if (low === high - 1 || target === a[mid]) {
		if (target === a[mid]) {
			return mid;
		}
		return -1;
	}
	if (a[mid] < target) {
		return binarySearchRecursive(target, a.slice(mid+1, high));
	} else if (a[mid] > target) {
		return binarySearchRecursive(target, a.slice(low, mid));
	}
}
var a = [];
for (var i = 0; i < 100; i++) {
	a.push(i+1);
}
console.log(binarySearchRecursive(37, a));