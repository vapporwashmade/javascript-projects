class Stack {
	constructor() {
		this.length = 0;
		this.top = null;
		this.elements = [];
		return this;
	}

	push(element) {
		this.elements.push(element);
		this.length++;
		this.top = element;
	}

	pop() {
		var x = this.elements.pop();
		this.length--;
		this.top = this.elements[this.length-1];
		if (this.length === 0) {
			this.top = null;
		}
		return x;
	}

	size() {
		return this.length;
	}

	empty() {
		return this.length === 0;
	}
}