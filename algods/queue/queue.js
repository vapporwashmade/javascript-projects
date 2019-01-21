class Queue {
	constructor() {
		this.length = 0;
		this.head = null;
		this.elements = [];
		this.lengthArray = [0];
		return this;
	}

	add(element) {
		this.elements.push(element);
		this.head = this.elements[0];
		this.length ++;
		this.lengthArray.push(this.length);
	}

	remove() {
		var x = this.elements.shift();
		this.head = this.elements[0];
		if (this.head === undefined) {
			this.head = null;
		}
		this.length --;
		this.lengthArray.push(this.length);
		return x;
	}

	size() {
		return this.length;
	}

	empty() {
		return this.length === 0;
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