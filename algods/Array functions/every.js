Array.prototype.myEvery = function (callback) {
	for (var i = 0; i < this.length; i++) {
		if (!callback(i,this)) {
			return false;
		}
	}
	return true;
};
console.log([4, 6, 1, 5].myEvery(function (element, array) {
	return array[element] > 0;
}));