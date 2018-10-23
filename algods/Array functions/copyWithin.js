Array.prototype.myCopyWithin = function (target, start, end) {
	var copyTo = target;
	if (copyTo < 0) {
		copyTo = this.length + target;
	}
	if (target > this.length) {
		return this;
	}
	var startFrom = start;
	if (start === undefined) {
		startFrom = 0;
	} else if (startFrom < 0) {
		startFrom = this.length + start;
	}
	var endAt = end;
	if (end === undefined) {
		endAt = this.length;
	} else if (endAt < 0) {
		endAt = this.length + end;
	}
	var array = [];
	for (var i = startFrom; i < endAt; i++) {
		array.push(this[i]);
	}
	for (i = 0; i < array.length && copyTo+i < this.length; i++) {
		this[copyTo+i] = array[i];
	}
	return this;
};
console.log([1, 2, 3, 4, 5].myCopyWithin(0, 3));