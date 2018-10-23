Array.prototype.myFill = function (fill, start, end) {
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
console.log([1, 2, 3].myFill(4, 1, 2));
