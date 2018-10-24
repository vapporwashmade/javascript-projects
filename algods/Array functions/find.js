Array.prototype.myFind = function (callback) {
	for (var i = 0; i < this.length; i++) {
		if (callback(i,this)) {
			return this[i];
		}
	}
	return undefined;
};
console.log([4, 6, 1, 5].myFind(function (element, array) {
	return array[element]%2 === 0;
}));