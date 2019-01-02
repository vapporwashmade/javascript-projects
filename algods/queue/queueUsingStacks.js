// TODO: import not working, make it work
var Stack = require('../stack/stack.js');

class queueUsingStacks {
	constructor() {
		this.stack1 = new Stack();
		this.stack2 = new Stack();
		this.length = 0;
	}

	add(element) {
		this.stack1.elements.push(element);
		this.length++;
	}
	remove() {
		if (!this.stack2.empty()) {
			this.length--;
			return this.stack2.pop();
		}
		if (this.stack1.empty()) {
			throw new ReferenceError('There are no elements in the stack!');
		}
		while (!this.stack1.empty()) {
			this.stack2.push(this.stack1.pop());
		}
		this.length--;
		return this.stack2.pop();
	}
	size() {
		return this.length;
	}
}
var _queue = new queueUsingStacks();
_queue.add(1);
console.log(_queue);
_queue.add(2);
console.log(_queue);
_queue.add(3);
console.log(_queue);
_queue.remove();
console.log(_queue);