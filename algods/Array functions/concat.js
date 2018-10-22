Array.prototype.myConcat = function (array) {
	for (var i = 0; i < array.length; i++) {
		this.push(array[i]);
	}
	return this;
};
var a1 = [1 ,4, 5];
var a2 = [8, 9, 12];
console.log(a1.myConcat(a2));