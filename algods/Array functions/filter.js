Array.prototype.myFilter = function (callback) {
	var a = [];
	for (var i = 0; i < this.length; i++) {
		if (callback(i,this)) {
			a.push(this[i]);
		}
	}
	return a;
};
console.log([4, 6, 1, 5].myFilter(function (element, array) {
	return array[element]%2 === 0;
}));
