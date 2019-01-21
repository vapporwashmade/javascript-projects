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
}

class queueUsingStacks {
	constructor() {
		this.stack1 = new Stack();
		this.stack2 = new Stack();
		this.length = 0;
	}

	add(element) {
		this.stack1.push(element);
		this.length++;
	}
	remove() {
		if (this.stack2.length !== 0) {
			this.length--;
			return this.stack2.pop();
		}
		if (this.stack1.length === 0) {
			throw new ReferenceError('There are no elements in the queue!');
		}
		while (this.stack1.length !== 0) {
			this.stack2.push(this.stack1.pop());
		}
		this.length--;
		return this.stack2.pop();
	}
	size() {
		return this.length;
	}
}