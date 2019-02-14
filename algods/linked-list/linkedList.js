// operations: inserting element in middle, deleting element, searching
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
        var pred = this.list;
        for (var i = 1; i < pos; i++) {
            pred = pred.next();
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
        return this.list;
    }

    delete(pos, elem) {

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
        return this.list;
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
}
var linkedList = new LinkedList([1, 2, 3, 4, 5]);
console.log(linkedList.next().next().value());