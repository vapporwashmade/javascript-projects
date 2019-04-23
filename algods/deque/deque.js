class Deque {
    constructor(capacity) {
        this.capacity = capacity || 5;
        this.tail = - 1;
        this.isFull = false;
        this.isEmpty = true;
        this.elements = [];
    }

    full() {
        this.capacity *= 2;
        this.isFull = false;
    }

    empty() {
        throw new ReferenceError("The deque is empty!");
    }

    append(elem) {
        if (this.isFull) {
            this.full();
        }
        this.elements.push(elem);
        this.tail ++;
        this.isEmpty = false;
        if (this.tail === this.capacity - 1) {
            this.isFull = true;
        }
    }

    prepend(elem) {
        if (this.isFull) {
            this.full();
        }
        this.elements.unshift(elem);
        this.tail ++;
        this.isEmpty = false;
        if (this.tail === this.capacity - 1) {
            this.isFull = true;
        }
    }

    removeFirst() {
        if (this.isEmpty) {
            this.empty();
            return;
        }
        this.elements.shift();
        this.tail --;
        this.isFull = false;
        if (this.tail === - 1) {
            this.isEmpty = true;
        }
    }

    removeLast() {
        if (this.isEmpty) {
            this.empty();
            return;
        }
        this.elements.pop();
        this.tail--;
        this.isFull = false;
        if (this.tail === - 1) {
            this.isEmpty = true;
        }
    }
}

var deque = new Deque();
deque.prepend(1);
console.log(deque.elements, deque.tail, deque.isEmpty);
deque.removeFirst();
console.log(deque.elements, deque.tail, deque.isEmpty);
deque.prepend(0);
console.log(deque.elements, deque.tail);
deque.append(3);
console.log(deque.elements, deque.tail);
deque.append(4);
console.log(deque.isFull, deque.tail, deque.capacity);
deque.append(5);
console.log(deque.isFull, deque.elements.length, deque.capacity);