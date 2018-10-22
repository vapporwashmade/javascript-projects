Array.myOf = function ([element0,...elementN]) {
	var array = [];
	array.push(element0,...elementN);
	return array;
};
console.log(Array.myOf([1, 3, 3]));