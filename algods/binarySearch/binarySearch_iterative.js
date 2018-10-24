// iterative binary search function
// takes in a target number and a sorted array of numbers
// it returns the first index of the element that equals target
// the array must be sorted otherwise results are unpredictable
function binarySearch_iterative(target, a) {
	var low = 0;
	var high = a.length;
	var check = Math.floor((high+low)/2);
	var found = false;
	while (!found) {
		if (a[check] === target) {
			found = true;
			break;
		}
		if (check === low && high === check + 1) {
			return -1;
		}
		if (a[check] < target) {
			low = check;
			check = Math.floor((high+low)/2);
		} else if (a[check] > target) {
			high = check;
			check = Math.floor((high + low) / 2);
		}
	}
	return check;
}
var a = [];
for (var i = 0; i < 100; i+=2) {
	a.push(i+1);
}
console.log(binarySearch_iterative(1, a));