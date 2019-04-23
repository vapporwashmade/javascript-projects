class CircularBuffer {
    constructor(capacity) {
        this.head = 0;
        this.tail = 0;
        this.array = [];
        this.capacity = capacity;
        this.lengthArray = [];
        this.array[this.capacity - 1] = null;
    }

    isEmpty() {
        return this.head === this.tail;
    }

    isFull() {
        return this.tail - this.head >= this.capacity;
    }

    add(element) {
        if (!this.isFull()) {
            this.array[this.tail % this.capacity] = element;
            this.tail++;
            this.lengthArray.push(this.length());
            return;
        }
        throw new RangeError('The circular buffer is full!');
    }

    remove() {
        if (!this.isEmpty()) {
            var e = this.array[this.head];
            this.head++;
            this.lengthArray.push(this.length());
            return e;
        }
        throw new RangeError('The circular buffer is empty!');
    }

    length() {
        return this.tail - this.head;
    }

    averageLength() {
        var e = 0;
        for (var i = 0; i < this.lengthArray.length; i ++) {
            e += this.lengthArray[i];
        }
        return e / this.lengthArray.length;
    }

    grow(number) {
        for (var i = 0; i < number; i++) {
            this.array.splice(this.head - 1, 0, null);
        }
        this.head += number;
        this.tail += number;
        this.capacity += number;
    }

    shrink(number) {
        if (number > this.capacity - this.length()) {
            throw new RangeError('Cannot shrink more elements than the length!')
        }
        for (var i = 0; i < number; i++) {
            this.array.splice(this.head - 1, 1);
        }
        this.head -= number;
        this.tail -= number;
        this.capacity -= number;
    }
}
var circularBuffer = new CircularBuffer(10);
for (var i = 0; i < 3; i ++) {
    circularBuffer.add(i);
}
circularBuffer.grow(10);
circularBuffer.shrink(10);
console.log(circularBuffer.isEmpty(), circularBuffer.isFull(), circularBuffer.length(), circularBuffer.averageLength());
console.log(circularBuffer.array, circularBuffer.head, circularBuffer.tail, circularBuffer.capacity);