Array.prototype.myEvery = function (fill, start, end) {
	var fillWith = fill;
	var startAt = start;
	var endAt = end;
	if (fill === undefined) {
		throw new TypeError('fill cannot be null or undefined');
	}
	if (start === undefined) {
		startAt = 0;
	}
	if (end === undefined) {
		endAt = this.length;
	}
	for (var i = startAt; i < endAt; i++) {
		this[i] = fill;
	}
	return this;
};
console.log([1, 2, 3].fill(4, 1, 2));                // [4, 4, 4])
