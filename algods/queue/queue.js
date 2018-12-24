// TODO: add to this
class Queue {
	constructor() {
		this.length = 0;
		this.start = null;
		this.elements = [];
		this.lengthArray = [0];
		return this;
	}

	add(element) {
		this.elements.push(element);
		this.start = this.elements[0];
		this.length ++;
		this.lengthArray.push(this.length);
	}

	remove() {
		var x = this.elements.shift();
		this.start = this.elements[0];
		if (this.start === undefined) {
			this.start = null;
		}
		this.length --;
		this.lengthArray.push(this.length);
		return x;
	}

	size() {
		return this.length;
	}

	elementAt(pos) {
		if (isNaN(Number(pos)) || pos < 0 || pos % 1 !== 0) {
			throw new TypeError('must be a valid number');
		} else if (pos > this.length) {
			return 'No element at that index';
		}
		return this.elements[pos];
	}

	averageLength() {
		var sum = 0;
		for (var i = 0; i < this.lengthArray.length; i ++) {
			sum += this.lengthArray[i];
		}
		sum /= this.lengthArray.length;
		return sum;
	}
}

var queue = new Queue();
console.log(queue);
