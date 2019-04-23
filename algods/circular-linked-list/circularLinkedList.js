class CircularLinkedList {
    constructor(capacity, array) {
        this.capacity = capacity || 10;
        this.array = array || [];
        var a = this.array.reverse();
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
}