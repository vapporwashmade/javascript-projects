// operations: inserting element, deleting element, searching
// TODO: reverse method, sort method
class LinkedList {
    constructor(array) {
        var a = array.reverse();
        this.list = undefined;
        for (var i = 0; i < a.length; i++) {
            this.list = {
                val: a[i],
                ref: this.list,
                next: function () {
                    return this.ref;
                },
                value: function () {
                    return this.val;
                }
            };
        }
    }

    predecessor(pos) {
        var pred = this.list;
        for (var i = 1; i < pos; i++) {
            pred = pred.next();
        }
        return pred;
    }

    length() {
        var len = 0;
        var check = this.list;
        while (check !== undefined) {
            check = check.next();
            len++;
        }
        return len;
    }

    next() {
        return this.list.next();
    }

    value() {
        return this.list.value();
    }

    insert(pos, elem) {
        var pred = this.predecessor(pos);
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
        this.list = {
            val: elem,
            ref: this.list,
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
        var node = this.list;
        for (var i = 0; i < this.length(); i++) {
            toPrint.push(node.val);
            node = node.ref;
        }
        return toPrint;
    }

    search(val) {
        var node = this.list;
        while (node !== undefined) {
            if (node.val === val) {
                return node;
            }
            node = node.ref;
        }
        return undefined;
    }

    reverse(node) {
         // BASE CASE
        if (node.ref === undefined) {
            return node;
        }
            // RECURSIVE CASE4
        var prevNode = this.reverse(node.ref);
        prevNode.ref = node;
        prevNode.ref.ref = undefined;
        return prevNode.ref;
    }
}
var linkedList = new LinkedList([1, 2, 3, 4, 5]);
console.log(linkedList.print());
console.log(linkedList.reverse(linkedList.list));
console.log(linkedList.print());