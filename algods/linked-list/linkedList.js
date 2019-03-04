// operations: inserting element, deleting element, searching
// TODO: reverse_Recursive bug, sort method, slice method, cutSlice method
class LinkedList {
    constructor(array) {
        if (array === undefined) {
            array = [];
        }
        var a = array.reverse();
        this.head = undefined;
        for (var i = 0; i < a.length; i++) {
            this.head = {
                val : a[i], ref : this.head,
                next: function () {
                    return this.ref;
                },
                value: function () {
                    return this.val;
                },

            };
        }
    }

    findNode(pos) {
        var it = 0;
        var node = this.head;
        while (it < pos) {
            it ++;
            node = node.ref;
        }
        return node;
    }

    predecessor(pos) {
        var pred = this.head;
        for (var i = 1; i < pos; i++) {
            pred = pred.next();
        }
        return pred;
    }

    length() {
        var len = 0;
        var check = this.head;
        while (check !== undefined) {
            check = check.next();
            len++;
        }
        return len;
    }

    next() {
        return this.head.next();
    }

    value() {
        return this.head.value();
    }

    insert(pos, elem) {
        var pred = this.predecessor(pos);
        if (pred === undefined) {
            this.head = {
                val : elem, ref : undefined, next : function () {
                    return this.ref;
                }, value : function () {
                    return this.val;
                }
            };
            return;
        }
        pred.ref = {
            val : elem,
            ref : pred.next(),
            next : function () {
                return this.ref;
            },
            value : function () {
                return this.val;
            }
        };
    }

    delete(pos) {
        var pred = this.predecessor(pos);
        pred.ref = pred.next().next();
    }

    prepend(elem) {
        this.head = {
            val : elem, ref : this.head,
            next: function () {
                return this.ref;
            },
            value: function () {
                return this.val;
            }
        };
    }

    print() {
        var toPrint = [];
        var node = this.head;
        for (var i = 0; i < this.length(); i++) {
            toPrint.push(node.val);
            node = node.ref;
        }
        return toPrint;
    }

    search(val) {
        var node = this.head;
        while (node !== undefined) {
            if (node.val === val) {
                return node;
            }
            node = node.ref;
        }
        return undefined;
    }

    reverse_Recursive(node) {
        // BASE CASE
        if (node === undefined) {
            return this.head;
        }
        // RECURSIVE CASE
        var head = this.reverse_Recursive(node.ref);
        node.ref.ref = node;
        node.ref = undefined;
        this.head = head;
        return this.head;
    }

    reverse_Iterative() {
        var node = this.head;
        var previous = undefined;
        var next;
        while (node !== undefined) {
            next = node.ref;
            node.ref = previous;
            previous = node;
            node = next;
        }
        this.head = previous;
        return this.head;
    }

    traverse(func) {
        var node = this.head;
        while (node !== undefined) {
            func(node);
            node = node.ref;
        }
    }

    slice(start, end) {

    }

    cutSlice(start, end) {
        var node = this.head;
        var it = 1;
        while (it < start) {
            it ++;
            node = node.ref;
        }
        var startPred = node;
        while (it < end) {
            it ++;
            node = node.ref;
        }
        var endNode = node.ref;
        node.ref = undefined;
        var slice = startPred.ref;
        startPred.ref = endNode;
        return slice;
    }
}
var linkedList = new LinkedList([1, 2, 3, 4, 5]);
console.log(linkedList.slice(0, 0).slice());