class CircularBuffer {
    constructor(capacity) {
        this.head = 0;
        this.tail = 0;
        this.array = [];
        this.capacity = capacity;
        this.lengthArray = [];
    }

    isEmpty() {
        return this.head === this.tail;
    }

    isFull() {
        return this.tail - this.head >= this.capacity;
    }

    add(element) {
        if (! this.isFull()) {
            this.array[this.tail % this.capacity] = element;
            this.tail ++;
            this.lengthArray.push(this.length());
            return;
        }
        throw new ReferenceError('The circular buffer is full!');
    }

    remove() {
        if (! this.isEmpty()) {
            var e = this.array[this.head];
            this.head ++;
            this.lengthArray.push(this.length());
            return e;
        }
        throw new ReferenceError('The circular buffer is empty!');
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

    }

    shrink(number) {

    }
}
var circularBuffer = new CircularBuffer(10);
circularBuffer.add('a');
circularBuffer.add('b');
circularBuffer.remove();
console.log(circularBuffer.isEmpty(), circularBuffer.isFull(), circularBuffer.length(), circularBuffer.averageLength());