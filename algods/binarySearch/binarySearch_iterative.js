// iterative binary search function
// takes in a target number and a sorted array of numbers
// it returns the first index of the element that equals target
// the array must be sorted otherwise results are unpredictable
function binarySearch_iterative(target, a) {
	var low = 0;
	var high = a.length;
	var mid = Math.floor((high+low)/2);
	while (low < mid && a[mid] !== target) {
		if (a[mid] < target) {
			low = mid;
			mid = Math.floor(low + (high-low)/2);
		} else if (a[mid] > target) {
			high = mid;
			mid = Math.floor(low + (high-low)/2);
		}
	}
	if (a[mid] === target) {
		return mid;
	}
	return -1;
}
var a = [];
for (var i = 0; i < 100; i+=2) {
	a.push(i+1);
}
console.log(binarySearch_iterative(1, a));